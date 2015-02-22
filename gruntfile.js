module.exports = function(grunt) {
  grunt.initConfig({
    stylus: {
      compile: {
        files: {
          'css/style.css': 'styl/main.styl'
        }
      }
    }
  });


  grunt.loadNpmTasks('grunt-contrib-stylus');
}