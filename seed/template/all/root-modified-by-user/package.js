module.exports = ($) => {
    const speedseed = require('speedseed')
    const file = new speedseed.Files()

    const optionsGeneral = {
        description: `${$.general.project} with ${$.tpl.framework}`,
        name: $.general.project,
        private: true,
        version: '0.0.0',
        dependencies: {},
        devDependencies: {
            'babel-loader': '6.2.5',
            'babel-plugin-transform-decorators-legacy': '1.3.4',
            'babel-preset-es2015': '6.6.0',
            'babel-preset-react': '6.16.0',
            'babel-preset-stage-0': '^6.16.0',
            'browser-sync': '2.12.8',
            'del': '2.2.0',
            'express': '4.14.0',
            'extend': '3.0.0',
            'gulp': '3.9.0',
            'gulp-babel': '6.1.2',
            'gulp-changed': '1.2.1',
            'gulp-data': '1.2.0',
            'gulp-filter': '4.0.0',
            'gulp-htmlmin': '2.0.0',
            'gulp-if': '2.0.1',
            'gulp-jade': '1.0.1',
            'gulp-minify-inline': '0.2.1',
            'gulp-modify-file': '0.1.0',
            'gulp-plumber': '1.1.0',
            'gulp-rename': '1.2.2',
            'gulp-sass': '2.3.1',
            'gulp-size': '2.1.0',
            'gulp-transform-indent': '0.3.0',
            'gulp-uglify': '1.2.0',
            'gulp-useref': '3.1.0',
            'gulp-util': '3.0.7',
            'gulp-watch': '4.3.5',
            'http-proxy-middleware': '0.17.0',
            'lodash': '4.13.1',
            'plato': '1.5.0',
            'run-sequence': '1.1.1',
            'webpack': '1.13.2',
            'webpack-stream': '3.2.0'
        },

        engines : {
            node : '>=6.0.0'
        }
    }

    file.extendFromUser(optionsGeneral, './package.json')

    file.extendFromOptions($, optionsGeneral.devDependencies, {
        framework: {
            vue: {
                'director': '^1.2.0',
                'todomvc-app-css': '^2.0.0',
                'todomvc-common': '^1.0.1',
                'vue': '^1.0.1'
            }
        }
    })

    file.writeFile('package.json', optionsGeneral, 2)
}