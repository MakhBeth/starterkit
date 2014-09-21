starterkit
==========

This is a simple starter kit for modern web fronted developer. Including Foundation and Gruntfiles for jade, compass, jshint and a little nodjs server

 It's intented for personal use, but feel free to reuse or what else. 
 In the package you'll found a modified version of Zurb Foundation 5
 * Support for ie8.
 * Jade is used for generate html
 * Compass with sass syntax
 * Jshint 
 * Livereload
 * and Grunt for watcher and connect server

how to use
==========

Simply clone the repository and run the command: ```npm install```
After you can start the magic with: ```grunt start```

There are other grunt task ready:

watcher compass: ```grunt start-compass```

only server: ```grunt start-server```

only jade watcher: ```grunt start-jade```

only live reload: ```grunt start-livereload```

You can easily modify ```Gruntfile.js``` to combine them together


Dependencies
============
You need to have [node.js](http://nodejs.org), [grunt.js](https://github.com/cowboy/grunt), [Ruby](https://www.ruby-lang.org/), [SASS](http://sass-lang.com) and [Compass](http://compass-style.org) installed for this to work.

