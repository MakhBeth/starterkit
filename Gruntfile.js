'use strict';

module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-autowatch');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
    app: 'app/',

    compass: { 
      dist: {
        options: {
          config: 'config.rb',
          cssDir: '<%= app %>css',
          sassDir: 'sass',
          watch: true
        },
      },
    },

    connect: {
      dist: {
        options: {
          base: '<%= app %>',
          port: 9001,
          open: true,
          keepalive: true,
          livereload: true,
          hostname: '127.0.0.1'
        },
      },
    },

    jshint: {
      all: ['<%= app %>/js/app.js'],
      options: {
        "globals": {
          "jQuery": true
        }
      }
    },

    jade: {
      compile: {
          options: {
              client: false,
              pretty: true
          },
          files: [ {
            cwd: "view",
            src: "*.jade",
            dest: "<%= app %>",
            expand: true,
            ext: ".html"
          } ]
      }
    },

    watch: {
      jade: {tasks: ['jade'], files: 'view/*.jade'},
      livereload: {
        files: ['<%= app %>/**/*.html', '!<%= app %>/bower_components/**', '<%= app %>/js/**/*.js', '<%= app %>/css/**/*.css', '<%= app %>/images/**/*.{jpg,gif,svg,jpeg,png}'],
        options: {
          livereload: true
        }
      },
      jshint:{
        files: ['<%= app %>/js/app.js'],
        tasks: ['jshint']
      }
    },
    concurrent: {
      target: {
          tasks: ['compass', 'connect', 'watch:jade', 'watch:livereload', 'watch:jshint', 'watch:jshint'],
          options: {
              logConcurrentOutput: true
          }
      }
    },

  });
  grunt.registerTask('start', ['concurrent:target']);
  grunt.registerTask('start-compass', ['compass']);
  grunt.registerTask('start-server', ['connect']);
  grunt.registerTask('start-jade', ['watch:jade']);
  grunt.registerTask('start-livereload', ['watch:livereload']);
  grunt.registerTask('start-jshint', ['watch:jshint']);
	
};
