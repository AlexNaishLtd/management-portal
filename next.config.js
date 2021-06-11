module.exports = {
    target: 'serverless',
    webpack: (config, { webpack }) => {
        config.plugins.push(new webpack.IgnorePlugin(/^(mongodb-client-encryption)$/));

        return config;
    }
};
