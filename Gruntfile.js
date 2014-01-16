'use strict';

module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        destName: "ngParser",
        LICENSE: grunt.file.read('LICENSE'),
        karma: {
            unit: {
                configFile: 'karma.conf.js',
                autoWatch: false,
                singleRun: true
            },
            autounit: {
                configFile: 'karma.conf.js',
                autoWatch: true
            }
        },
        concat: {
          options: {
            separator: '\n\n',
            banner: '/*! <%= pkg.name %> v<%= pkg.version %> <%= grunt.template.today("dd-mm-yyyy") %> \n<%= LICENSE %>\n*/\n\n'
          },
          dist: {
            src: ["src/**.js"],
            dest: 'dist/<%= destName %>.js'
          }
        },
        uglify: {
          options: {
            preserveComments: 'some' //Licences
          },
          dist: {
            files: {
              'dist/<%= destName %>.min.js': ['dist/<%= destName %>.js']
            }
          }
        },
        jshint: {
          files: ['src/**.js'],
          options: {
            loopfunc: true,
            laxbreak: true
          }
        }

    });

    //Load karma plugin
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.registerTask('test', ['karma:unit']);
    grunt.registerTask('autotest', ['karma:autounit']);

    grunt.registerTask('default', ['build']);
    grunt.registerTask('build', ['concat', 'uglify']);
    grunt.registerTask('lint', ['jshint']);
};