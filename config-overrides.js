module.exports = function override(config, env) {
    let loaders = config.module.rules[1].oneOf;
    loaders.splice(loaders.length - 1, 0, {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
    })
    loaders.splice(loaders.length - 1, 0, {
        test: /\.mp4$/,
        use: ['file-loader?name=videos/[name].[ext]']
    })
    return config
}