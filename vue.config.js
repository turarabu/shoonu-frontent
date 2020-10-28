const path = require('path')
const root = __dirname

module.exports = {
    publicPath: '/',
    filenameHashing: false,
    productionSourceMap: false,
    outputDir: path.join(root, 'dist'),

    pages: getPages(),
    configureWebpack: getConfigureWebpack()
}

function getPages () {
    return {
        index: {
            entry: path.join(root, 'source', 'main.js'),
            template: path.join(root, 'public', 'index.pug'),
            filename: 'index.html'
        }
    }
}

function getConfigureWebpack () {
    return {
        resolve: {
            alias: {
                'root': root,
                ':root': root,

                'src': path.join(root, 'source'),
                ':src': path.join(root, 'source'),

                'component': path.join(root, 'source/component'),
                ':component': path.join(root, 'source/component'),

                'ui-kit': path.join(root, 'source/ui-kit'),
                ':ui-kit': path.join(root, 'source/ui-kit'),

                'view': path.join(root, 'source/view'),
                ':view': path.join(root, 'source/view'),

                'style': path.join(root, 'source/style'),
                ':style': path.join(root, 'source/style')
            }
        }
    }
}