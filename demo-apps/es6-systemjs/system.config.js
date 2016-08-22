(function (/*globals*/) {

    var maps = {
        'angular': 'node_modules/angular',
        'ng-table': 'node_modules/ng-table',
        'plugin-babel': 'node_modules/systemjs-plugin-babel/plugin-babel.js',
        'systemjs-babel-build': 'node_modules/systemjs-plugin-babel/systemjs-babel-browser.js'
    };

    var packages = {
        'ng-table': { main: '/dist/ng-table.js', defaultExtension: 'js' },
        'src': { defaultExtension: 'js' },
        'angular': { main: 'index.js', defaultExtension: 'js' }
    };

    System.config({
        map: maps,
        packages: packages,
        transpiler: 'plugin-babel',
        meta: {
            '*.js': {
                babelOptions: {
                    // chrome supports es2015 so do NOT need to transpile code to ecmascript5
                    es2015: false
                }
            }
        }
    });
})(this);