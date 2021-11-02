const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const autoprefixer = require('autoprefixer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

let outputPath = path.resolve('./public');
let publicPath = '/';

const mode = process.env.NODE_ENV || 'production';

console.log({
	outputPath,
	publicPath,
	mode: mode
});

module.exports = {
	stats: {
		children: false
  },
	mode,
	devServer: {
		contentBase: path.join(__dirname, 'public'),
		port: 9002,
		disableHostCheck: true,
		historyApiFallback: true,
		publicPath,
		clientLogLevel: 'silent',
		noInfo: true,
		headers: {
	    "Access-Control-Allow-Origin": "*",
	    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
			"Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization",
			"Access-Control-Allow-Origin": "*"
	  }
  },
  node: {
    fs: 'empty',
    module: 'empty',
  },
	entry:{
		'app-js':'./src/ts/index.tsx'
	},
	output: {
		path: outputPath,
		filename: 'js/[name].js',
		chunkFilename: 'js/[name].bundle.js',
		publicPath,
	},
	resolve:{
		extensions: ['.js', '.ts', '.tsx', '.mjs'],
		alias: {}
	},
	devtool: mode === 'development' ? "eval" : 'source-map',
	module:{
		rules: [
			/* to update these */
		]
	},
	optimization:{
		splitChunks: {
			cacheGroups:{
				'dashboard-vendor':{
					name:'dashboard-vendor',
					chunks:'initial',
					enforce: true,
					test(module, [chunks]){
						return (/\/node_modules/).test(module.resource)
					}
				}
			}
		}
	},
	plugins:[
		// to fix css here
		new webpack.ProvidePlugin({}),
		autoprefixer,
		new webpack.DefinePlugin({
			'process.env.ApiURL': JSON.stringify(process.env.ApiURL),
			'process.env.BUGSNAG_KEY': JSON.stringify(process.env.BugsnagKey)
		}),
		new HtmlWebpackPlugin({
			title:'Lightfunnels',
			template: 'index.ejs',
			templateParameters:{
				production: mode === 'production'
			}
		})
	]
}