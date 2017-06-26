module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        stylus:{
            build: {
                options: {
                    linenos: true,
                    compress: false
                },
                files: [{
                    'css/index.css': ['src/index.styl']
                }]
            }
        },
        watch: {
            another: {
                files: ['css/*','src/*.styl'],
                tasks: ['stylus'],
                options: {
                    livereload: 1337
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-stylus');
    grunt.registerTask('default', ['watch']);
};