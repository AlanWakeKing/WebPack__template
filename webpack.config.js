const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: { main: './src/index.js' },
    output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
        publicPath: ''
  },
	mode: 'development',
	devServer: {
		static: path.resolve(__dirname, './dist'),
		compress: true,
		port: 8080,
		open: true
	},
    module: {
    rules: [ // rules — это массив правил
      // добавим в него объект правил для бабеля
      {
        // регулярное выражение, которое ищет все js файлы
        test: /\.js$/,
        // при обработке этих файлов нужно использовать babel-loader
        use: 'babel-loader',
        // исключает папку node_modules, файлы в ней обрабатывать не нужно
        exclude: '/node_modules/'
      },
			{test: /\.(png|jpg|gif|woff(2)?|eot|ttf|otf)$/,
				type: 'asset/resource'
			},
			{
				test: /\.svg$/,
				type: 'asset/resource/svg'
			},
			{
				test: /\.(png|jpg|gif)$/,
				type: 'asset/resource/image'
			},
			{
				test:/\.(woff(2)?|eot|ttf|otf)$/,
				type: 'asset/resource/font'
			}
      ]
  },
	plugins:[
		new HtmlWebpackPlugin({
			template: './src/index.html'
		}),
		new CleanWebpackPlugin(),
	]
};