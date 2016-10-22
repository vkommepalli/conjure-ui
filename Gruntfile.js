'use strict';

process.execArgv = [];

module.exports = function (grunt) {
  require('time-grunt')(grunt);
  require('jit-grunt')(grunt, {
    useminPrepare: 'grunt-usemin',
    ngtemplates: 'grunt-angular-templates',
    cdnify: 'grunt-google-cdn'
  });

  var appConfig = {
    app: require('./bower.json').appPath || 'app',
    dist: 'dist'
  };

  grunt.initConfig({

    yeoman: appConfig,

    /*********************************/

    sass: {
      options: {
        sourceMap: true
      },
      dist: {
        files: {
          'app/styles/main.css': 'app/sass/{,*/}*.scss'
        }
      }
    },

    watch: {
      bower: {
        files: ['bower.json'],
        tasks: ['wiredep']
      },
      js: {
        files: ['<%= yeoman.app %>/scripts/{,*/}*.js'],
        tasks: ['newer:jshint:all', 'newer:jscs:all'],
        options: {
          livereload: '<%= connect.options.livereload %>'
        }
      },
      sass: {
        files: ['<%= yeoman.app %>/sass/{,*/}*.scss'],
        tasks: ['newer:sass']
      },
      styles: {
        files: ['<%= yeoman.app %>/styles/{,*/}*.css'],
        tasks: ['newer:copy:styles', 'postcss']
      },
      gruntfile: {
        files: ['Gruntfile.js']
      },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          '<%= yeoman.app %>/{,*/}*.html',
          '<%= yeoman.app %>/controllers/*.js',
          '.tmp/styles/{,*/}*.css',
          '<%= yeoman.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
        ]
      }
    },

    watchKarma: {
      watch: {
        karma: {
          files: ['app/controllers/*.js', 'test/spec/**/*.js'],
          tasks: ['karma:unit:run'],
          browser: ['IE']
        }
      }
    },

    open : {
      file : {
        path : './.tmp/test-results/karma_html/IE_11.0.0_(Windows_7_0.0.0)/index.html'
      }
    },

    /*********************************/

    compress : {
      main : {
        options : {
          archive : 'dist.zip'
        },
        files : [
          { expand: true, src : '**/*', cwd : 'dist/' }
        ]
      }
    },

    connect: {
      options: {
        port: 9000,
        hostname: 'localhost',
        //hostname: '0.0.0.0',
        livereload: 35729
      },
      livereload: {
        options: {
          open: true,
          middleware: function (connect) {
            return [
              connect.static('.tmp'),
              connect().use(
                '/bower_components',
                connect.static('./bower_components')
              ),
              connect().use(
                '/app/styles',
                connect.static('./app/styles')
              ),
              connect.static(appConfig.app)
            ];
          }
        }
      },
      test: {
        options: {
          open: {
            target: 'http://localhost:9400'
          },
          livereload: true
        }
      },
      dist: {
        options: {
          open: true,
          base: '<%= yeoman.dist %>'
        }
      },
    },

    /*********************************/


    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      all: {
        src: [
          'Gruntfile.js',
          '<%= yeoman.app %>/scripts/{,*/}*.js'
        ]
      },
      test: {
        options: {
          jshintrc: 'test/.jshintrc'
        },
        src: ['test/spec/{,*/}*.js']
      }
    },

    /*********************************/


    jscs: {
      options: {
        config: '.jscsrc',
        verbose: true,
        excludeFiles: ['<%= yeoman.app %>/scripts/vendors.js']
      },
      all: {
        src: [
          'Gruntfile.js',
          '<%= yeoman.app %>/scripts/{,*/}*.js'
        ]
      },
      test: {
        src: ['test/spec/{,*/}*.js']
      }
    },

    /*********************************/


    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '.tmp',
            '<%= yeoman.dist %>/{,*/}*',
            '!<%= yeoman.dist %>/.git{,*/}*'
          ]
        }]
      },
      server: '.tmp'
    },

    /*********************************/


    postcss: {
      options: {
        processors: [
          require('autoprefixer-core')({browsers: ['last 1 version']})
        ]
      },
      server: {
        options: {
          map: true
        },
        files: [{
          expand: true,
          cwd: '.tmp/styles/',
          src: '{,*/}*.css',
          dest: '.tmp/styles/'
        }]
      },
      dist: {
        files: [{
          expand: true,
          cwd: '.tmp/styles/',
          src: '{,*/}*.css',
          dest: '.tmp/styles/'
        }, {
          expand: true,
          cwd: '<%= yeoman.app %>/bower_components/font-awesome/font/',
          src: ['**'],
          dest: '<%= yeoman.dist %>/font/'
        }]
      }
    },

    /*********************************/


    wiredep: {
      app: {
        src: ['<%= yeoman.app %>/*.html'],
        ignorePath: /\.\.\//
      }
    },
    filerev: {
      dist: {
        src: [
          '<%= yeoman.dist %>/scripts/{,*/}*.js',
          '<%= yeoman.dist %>/styles/{,*/}*.css',
          '<%= yeoman.dist %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}',
          '<%= yeoman.dist %>/styles/fonts/*'
        ]
      }
    },

    /*********************************/


    useminPrepare: {
      html: '<%= yeoman.app %>/*.html',
      options: {
        dest: '<%= yeoman.dist %>'
      }
    },

    /*********************************/


    usemin: {
      html: ['<%= yeoman.dist %>/{,*/}*.html'],
      css: ['<%= yeoman.dist %>/styles/{,*/}*.css'],
      js: ['<%= yeoman.dist %>/scripts/{,*/}*.js'],
      options: {
        assetsDirs: [
          '<%= yeoman.dist %>',
          '<%= yeoman.dist %>/images',
          '<%= yeoman.dist %>/styles'
        ],
        patterns: {
          js: [[/(images\/[^''""]*\.(png|jpg|jpeg|gif|webp|svg))/g, 'Replacing references to images']]
        }
      }
    },

    /*********************************/


    cssmin: {
      dist: {
        files: {
          '<%= yeoman.dist %>/styles/public.css': ['.tmp/styles/public.css'],
          '<%= yeoman.dist %>/styles/admin.css': ['.tmp/styles/admin.css']
        }
      }
    },

    /*********************************/


    concat: {
      dist: {
        src: ['scripts/**/*.js'],
        dest: 'built.js'
      }
    },


    /*********************************/


    imagemin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.app %>',
          src: ['**/*.{png,jpg,jpeg,gif}'],
          dest: '<%= yeoman.dist %>'
        }]
      }
    },

    /*********************************/


    svgmin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.app %>/images',
          src: '{,*/}*.svg',
          dest: '<%= yeoman.dist %>/images'
        }]
      }
    },

    /*********************************/


    htmlmin: {
      dist: {
        options: {
          collapseWhitespace: true,
          conservativeCollapse: true,
          collapseBooleanAttributes: true,
          removeCommentsFromCDATA: true
        },
        files: [{
          expand: true,
          cwd: '<%= yeoman.dist %>',
          src: ['*.html'],
          dest: '<%= yeoman.dist %>'
        }]
      }
    },

    /*********************************/


    ngtemplates: {
      dist: {
        options: {
//          module: 'conjure-ui',
          module: 'conjure-ui',
          htmlmin: '<%= htmlmin.dist.options %>',
          usemin: 'scripts/scripts.js'
        },
        cwd: '<%= yeoman.app %>',
        src: 'views/{,*/}*.html',
        dest: '.tmp/templateCache.js'
      }
    },

    /*********************************/


    ngAnnotate: {
      dist: {
        files: [{
          expand: true,
          cwd: '.tmp/concat/scripts',
          src: '*.js',
          dest: '.tmp/concat/scripts'
        }]
      }
    },

    /*********************************/


    cdnify: {
      dist: {
        html: ['<%= yeoman.dist %>/*.html']
      }
    },

    /*********************************/


    copy: {
      dist: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= yeoman.app %>',
          dest: '<%= yeoman.dist %>',
          src: [
            '*.{ico,png,txt}',
            '**/*.html',
            //'<%= yeoman.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}',
            'img/{,*/}*.{png,jpg,jpeg,gif,webp,svg}',
            //'<%= yeoman.app %>/uploads/{,*/}*.{png,jpg,jpeg,gif,webp,svg}',
            'styles/fonts/{,*/}*.*'
          ]
        }, {
          expand: true,
          cwd: '.tmp/images',
          dest: '<%= yeoman.dist %>/images',
          src: ['generated/*']
        }, {
          expand: true,
          cwd: '.tmp/concat',
          src: 'scripts/*.*',
          dest: '<%= yeoman.dist %>'
        }, {
          expand: true,
          cwd: '.tmp/scripts',
          dest: '<%= yeoman.dist %>/scripts',
          src: ['*']
        }, {
          expand: true,
          cwd: '.tmp/styles',
          src: 'main.css',
          dest: '<%= yeoman.dist %>/styles'
        }]
      },
      styles: {
        expand: true,
        cwd: '<%= yeoman.app %>/styles',
        dest: '.tmp/styles/',
        src: '**/*.css'
      }
    },

    /*********************************/

    // Test settings
    karma: {
      unit: {
        configFile: 'karma.conf.js',
        background: true,
        port: 9400,
        singleRun: false,
        dev: {
          reporters: 'html'
        }
      },
      headlessUnit: {
        configFile: 'karma.conf.js',
        background: false,
        port: 9400,
        singleRun: true,
        browsers: ['PhantomJS'],
        dev: {
          reporters: 'html'
        }
      },
      jenkinsUnit: {
        configFile: 'jenkins-karma.conf.js',
        port: 9400,
        background: false,
        singleRun: true
      }
    },

    /*********************************/

    template: {
      local: {
        options: {
          data: require('./config_src/local.json')
        },
        'files': {
          '.tmp/scripts/config.js': ['config_src/config.js.tpl']
        }
      }
    },

    /*********************************/

    protractor_webdriver: {
        start: {
            options: {
                path: 'node_modules/protractor/bin/',
                command: 'webdriver-manager start'
            }
        }
    },

    protractor: {
        options: {
            keepAlive: false,
            configFile: "e2e.conf.js",
            noColor: true, // If true, protractor will not use colors in its output.

            args: {
//                seleniumServerJar: 'node_modules/protractor/selenium/selenium-server-standalone-2.39.0.jar',
                chromeDriver: 'node_modules/protractor/node_modules/webdriver-manager/selenium/chromedriver_2.22.exe',
                seleniumServerJar: 'node_modules/protractor/node_modules/webdriver-manager/selenium/selenium-server-standalone-2.53.1.jar'
            }
        },
        run: {}
    },

    /*********************************/

    concurrent: {
      server: [
        'copy:styles'
      ],
      test: [
        'copy:styles'
      ],
      dist: [
        'copy:styles',
        'imagemin',
        'svgmin'
      ]
    }
  });

  grunt.loadNpmTasks('grunt-protractor-webdriver');
  grunt.loadNpmTasks('grunt-protractor-runner');

  grunt.registerTask('e2e-test', [
      'protractor_webdriver',
      'protractor:run'
  ]);

  grunt.registerTask('serveKarma', 'Compile then start a connect web server', function () {

    grunt.task.run([
      'karma:unit:start',
      'connect:test',
      'open:file',
      'watch',
      'watchKarma'
    ]);
  });

  grunt.registerTask('serveKarmaJenkins', 'Compile then start a connect web server', function () {

    grunt.task.run([
      'karma:jenkinsUnit'
    ]);
  });

  grunt.registerTask('serve', 'Compile then start a connect web server', function (target) {
    if (target === 'dist') {
      return grunt.task.run(['build', 'connect:dist:keepalive']);
    }
    grunt.task.run([
      'clean:server',
      'template:local',
      'wiredep',
      'concurrent:server',
      'postcss:server',
      'connect:livereload',
      'watch'
    ]);
  });
  grunt.registerTask('serveDist', ['connect:dist:keepalive']);


  grunt.registerTask('build', [
    'clean:dist',
    'template:local',
    'wiredep',
    'useminPrepare',
    'concurrent:dist',
    'sass',
    'postcss',
    'ngtemplates',
    'concat:generated',
    'ngAnnotate',
    'copy:dist',
    'cdnify',
    'cssmin:generated',
    'filerev',
    'usemin',
    'htmlmin',
    'imagemin'
  ]);

  grunt.registerTask('buildProd', [
    'clean:dist',
    'template:prod',
    'wiredep',
    'useminPrepare',
    'concurrent:dist',
    'sass',
    'postcss',
    'ngtemplates',
    'concat:generated',
    'ngAnnotate',
    'copy:dist',
    'cdnify',
    'cssmin:generated',
    'filerev',
    'usemin',
    'htmlmin',
    'imagemin'
  ]);

  grunt.registerTask('buildDemo', [
    'clean:dist',
    'template:demo',
    'wiredep',
    'useminPrepare',
    'concurrent:dist',
    'sass',
    'postcss',
    'ngtemplates',
    'concat:generated',
    'ngAnnotate',
    'copy:dist',
    'cdnify',
    'cssmin:generated',
    'filerev',
    'usemin',
    'htmlmin',
    'imagemin'
  ]);

  grunt.registerTask('local', [
    'newer:jshint',
    'newer:jscs',
    'clean:dist',
    'template:local',
    'wiredep',
    'useminPrepare',
    'concurrent:dist',
    'sass',
    'postcss',
    'ngtemplates',
    'concat:generated',
    'ngAnnotate',
    'copy:dist',
    'cdnify',
    'cssmin:generated',
    'filerev',
    'usemin',
    'htmlmin',
    'imagemin'
  ]);


  grunt.registerTask('default', [
    'newer:jshint',
    'newer:jscs',
    'test',
    'build'
  ]);

  grunt.registerTask('package' , [
    'compress:main'
  ]);

  grunt.registerTask('test', [
    'karma:headlessUnit'
  ]);
};
