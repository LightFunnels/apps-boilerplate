const autoprefixer = require('autoprefixer');
const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {

	recursiveIssuer(m){
	  if (m.resource) {
	    return m.resource;
	  } else if (m.issuer) {
	    return this.recursiveIssuer(m.issuer);
	  } else {
	    return false;
	  }
	},


	useSassToCss({
		prependData = "$IS_BUILDER:false;",
		includePaths
	} = {}){
		return [
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
					prependData,
					sassOptions:{
						includePaths
					}
				}
			}
		]
	},

	filesRule(){
		return {
			test: /\.(png|jpg|gif|svg|eot|ttf|otf|woff|woff2|ico)$/,
			use:{
				loader: 'file-loader',
				options:{
					outputPath: 'assets',
				}
			}
		};
	},

	babelRule:{
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

	replaceBuilderFiles(){
		return new webpack.NormalModuleReplacementPlugin(
			/element\.builder/,
			function(resource) {
				resource.request = resource.request.replace(/element\.builder/, `element`);
			}
		);
	},

	provide(target, vars){
		let opts = {
			...vars,
			"process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV)
		};
		if(target){
			opts.TARGET = JSON.stringify(target);
		}
		return new webpack.DefinePlugin(opts);
	},

	extractCss() {
		return new MiniCssExtractPlugin({
			filename: 'css/[name].css',
		})
	},

	cssRule() {
		return {
			test: /(\.scss|\.css)$/,
			use: [MiniCssExtractPlugin.loader, ...module.exports.useSassToCss()]
		}
	}

}