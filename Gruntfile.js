module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean: ['dist'],

        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'app/dist/app.combined.js',
                dest: 'app/dist/app.combined.min.js'
            }
        },

        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: {
                    'app/dist/index.html': 'app/index.html',
                    'app/dist/views/blog.html': 'app/views/blog.html',
                    'app/dist/views/about.html': 'app/views/about.html',
                    'app/dist/views/projects.html': 'app/views/projects.html'
                }
            }
        },

        concat: {
            options: {
                separator: '\n'
            },

            scripts: {
                src: [
                    'app/scripts/app.js',
                    'app/scripts/*/*/*.js',
                    'app/scripts/*/*.js'
                ],
                dest: 'app/dist/scripts.combined.js'
            },

            vendor: {
                src: [
                    'app/bower_components/jquery/dist/jquery.min.js',
                    'app/bower_components/angular/angular.min.js',
                    'app/bower_components/angular-animate/angular-animate.min.js',
                    'app/bower_components/bootstrap/dist/js/bootstrap.min.js'
                ],
                dest: 'app/dist/vendor.combined.js'
            },

            dist: {
                src: [
                    'app/dist/vendor.combined.js',
                    'app/dist/scripts.combined.js'
                ],
                dest: 'app/dist/app.combined.js'
            }
        },

        watch: {
          scripts: {
            files: ['app/scripts/**/*.js'],
            tasks: ['clean', 'concat:vendor', 'concat:scripts', 'concat:dist', 'uglify']
          }
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');

    // Default task(s).
    grunt.registerTask('default', ['clean', 'concat:vendor', 'concat:scripts', 'concat:dist', 'htmlmin:dist', 'uglify']);
};