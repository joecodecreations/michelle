module.exports = function( grunt, pkg, paths, connect ) {
    grunt.config.merge( {



        // Concat
        // https://www.npmjs.org/package/grunt-contrib-concat
        concat: {
            options: {
                separator: '',
                banner: '/* Michelle Myers Website Javascript */',
                footer: '/* Hello World */'
            },
            dist: {
                // load utils first in the file
                src: [
                  './src/js/*.js'
                ],
                dest: './public_html/assets/js/production.js'
            }
        },

        // Validate JS files
        // https://www.npmjs.org/package/grunt-contrib-jshint
        jshint: {
            options: {
                jshintrc: true,
                reporterOutput: ''
            },
            src: [
              './src/js/**/*.js'
            ]
        },

        // Validate JSON files
        // https://www.npmjs.org/package/grunt-jsonlint
        jsonlint: {
            src: [
              './**/*.json'
            ]
        },

        modernizr: {
            dist: {
                "devFile": "remote",
                "outputFile": "./public_html/assets/js/modernizr-custom.js",
                "extra": {
                    "shiv": true,
                    "printshiv": false,
                    "load": true,
                    "mq": true,
                    "cssclasses": true
                },
                "extensibility": {
                    "addtest": false,
                    "prefixed": false,
                    "teststyles": false,
                    "testprops": false,
                    "testallprops": false,
                    "hasevents": false,
                    "prefixes": true,
                    "domprefixes": false,
                    "cssclassprefix": ""
                },
                "uglify": true,
                "tests": [ 'css_filters' ],
                "parseFiles": true,
                "files": {
                    "src": [
                        paths.dist + './public_html/assets/**/*.css',
                        paths.dist + './public_html/assets/js/**/*.js'
                    ]
                },
                "matchCommunityTests": true,
                "customTests": []
            }
        },

        // Watch for changes and trigger compass and livereload
        // https://github.com/gruntjs/grunt-contrib-watch
        watch: {
            concat: {
                files: [
                    './src/js/**/*.*'
                ],
                tasks: [ 'concat', 'jshint:src' ]
            }
        }

    } );
}
