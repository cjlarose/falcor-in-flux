module.exports = {
  entry: "./app/entry.js",
  output: {
    path: __dirname + "/build",
    filename: "./bundle.js",
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: "babel-loader",
      query: {
        presets: ["react","es2015"]
      }
    }]
  },
};
