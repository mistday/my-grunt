module.exports = function(grunt) {
  grunt.initConfig({
    stylus: {
      compile: {
        files: {
          'dist/css/style.css': 'src/styl/main.styl'
        },
        options: {
          compress: false
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
    },
    jade: {
      compile: {
        options: {
          data: {
            debug: false
          },
          pretty: true 
        },
        files: {
          "dist/index.html": ["src/index.jade"]
        }
      }
    },
    watch: {
      scripts: {
        files: ['src/styl/*.styl'],
        tasks: ['stylus'],
        options: {
          spawn: false,
        },
      },
    }
  });


  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-watch');
}