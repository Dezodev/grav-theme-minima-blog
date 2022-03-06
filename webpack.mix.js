const mix = require('laravel-mix')

mix.js('src/js/main.js', 'js').sass('src/scss/main.scss', 'css').setPublicPath('dist')
