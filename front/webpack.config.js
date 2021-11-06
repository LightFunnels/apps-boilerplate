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
		'app-js':'./src/ts/index.tsx',
		'parent-css-app': '../lightfunnels-front/assets/sass/app.scss'
	},
	output: {
		path: outputPath,
		filename: 'js/[name].js',
		chunkFilename: 'js/[name].bundle.js',
		publicPath,
	},
	resolve:{
		extensions: ['.js', '.ts', '.tsx', '.mjs'],
		alias: {
			Assets: path.resolve(__dirname, '../lightfunnels-front/assets/assets'),
			Data: path.resolve(__dirname, '../lightfunnels-front/assets/js/data'),
		}
	},
	devtool: mode === 'development' ? "eval" : 'source-map',
	module:{
		rules: [
			{
				test: /\.(ts|tsx|jsx|js)$/,
				exclude: /node_modules/,
				loader: "babel-loader",
				options:{
					"presets": [
						"@babel/preset-react",
						"@babel/preset-env",
						"@babel/preset-typescript"
					],
					"plugins": [
						"relay",
						"@babel/plugin-proposal-optional-chaining",
						"@babel/plugin-syntax-dynamic-import",
						"@babel/plugin-proposal-class-properties",
						"@babel/plugin-transform-runtime",
						"@babel/plugin-proposal-export-default-from",
					]
				}
			},
			{
				test: /\.(scss|css)$/,
				use: [MiniCssExtractPlugin.loader]
					.concat(
						[
							{
								loader: "css-loader",
								options: {
									minimize: process.env.NODE_ENV !== 'development',
						 			importLoaders: 5,
						 			localIdentName: process.env.NODE_ENV !== 'development' ? '[hash:base64:5]' : '[name]__[local]--[hash:base64:5]',
						 			alias:{}
						 		}
							},
							{
								loader: "postcss-loader",
								options: {
									parser: 'postcss-scss',
									plugins: () => {
										return [
											autoprefixer({ browsers: 'last 2 versions' }),
										]
									}
								}
							},
							{
								loader: "sass-loader",
								options:{
									sassOptions:{
										includePaths:[path.resolve('../lightfunnels-front/assets/sass')]
									}
								}
							}
						]
					)
			},
			{
        test: /\.mjs$/,
        include: /node_modules/,
        type: 'javascript/auto'
      },
      {
        test: /(\.txt|\.html)$/,
        use: 'raw-loader',
      },
			{
				test: /\.(png|jpg|gif|svg|eot|ttf|otf|woff|woff2|ico)$/,
				use:{
					loader: 'file-loader',
					options:{
						outputPath: 'assets',
					}
				}
			}
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
				},
				'builder-vendor':{
					name:'builder-vendor',
					chunks:'async',
					enforce: true,
					test(module, [chunks]){
						return (/\/node_modules/).test(module.resource)
					}
				}
			}
		}
	},
	plugins:[
		new MiniCssExtractPlugin({
			filename: 'css/[name].css',
		}), 
		new webpack.ProvidePlugin({
			ACTIONS: ['Data/actions', 'default'],
			Content: ['Data/content/index.ts', 'Content'],
			Links: ['Data/content/links.ts', 'Links'],
			SafeDate: [path.resolve(__dirname, '../lightfunnels-front/assets/js/utils/index.ts'), 'SafeDate'],
		}),
		autoprefixer,
		new webpack.DefinePlugin({
			'process.env.ApiURL': JSON.stringify(process.env.ApiURL),
			'process.env.BUGSNAG_KEY': JSON.stringify(process.env.BugsnagKey)
		}),
		new HtmlWebpackPlugin({
			title:'Lightfunnels',
			template: 'index.ejs',
			chunks:['app-js', 'app-css', 'dashboard-vendor', 'parent-css-app'],
			templateParameters:{
				production: mode === 'production'
			}
		})
	]
}