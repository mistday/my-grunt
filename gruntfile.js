module.exports = function(grunt) {
  grunt.initConfig({
    stylus: {
      compile: {
        files: {
          'dist/css/style.css': 'src/styl/main.styl'
        },
        options: {
          compress: true
        }
      }
    },
    imagemin: {
      dynamic: {
        options: {
          optimixationLevel: 3
        },
        files: [{
          expand: true,
          cwd: 'src/img/',
          src: ['**/*.{png,jpg,gif}'],
          dest: 'dist/img'
        }]
      }
    },
    coffee: {
      glob_to_multiple: {
        expand: true,
        flatten: true,
        cwd: 'src/coffee/',
        src: ['*.coffee'],
        dest: 'dist/js/',
        ext: '.js'
      }
    }
  });


  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-coffee');
}