module.exports = {
    plugins: [
        require('postcss-import'),
        require('autoprefixer'),
        // require('postcss-mixins'),
        // require("stylelint"),
        // require('postcss-preset-env')({stage: 1}),
        require('cssnano'),
    ],
}