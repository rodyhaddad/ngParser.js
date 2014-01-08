'use strict';

module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

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
        }

    });

    //Load karma plugin
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('test', ['karma:unit']);
    grunt.registerTask('autotest', ['karma:autounit']);

    grunt.registerTask('default', ['test']);
};