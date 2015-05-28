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
    uglify: {
      options: {
        mangle: {
          except: ['jQuery']
        }
      },
      my_target: {
        files: [{
          expand: true,
          cwd: 'dist/js',
          src: '**/*.js',
          dest: 'dist/js'
        }]
      }
    },
    sprite: {
      all: {
        src: 'dist/img/*.png',
        dest: 'dist/img/sprites/sprites.png',
        destCss: 'src/styl/sprites.styl'
      }
    },
    watch: {
      stylus: {
        files: ['src/styl/*.styl'],
        tasks: ['stylus'],
        options: {
          spawn: false,
        },
      },
      coffee: {
        files: ['src/coffee/*.coffee'],
        tasks: ['coffee'],
        options: {
          spawn: false,
        },
      },
    }
  });

  //load tasks
  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-spritesmith');

  //register tasks
  grunt.registerTask('pre', ['sprite', 'stylus']);
  grunt.registerTask('prod', ['imagemin', 'uglify']);
  grunt.registerTask('dev', ['stylus', 'coffee']);
  grunt.registerTask('default', ['watch']);

}