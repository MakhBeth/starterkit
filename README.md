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
You need to have (http://nodejs.org)[node.js], (https://github.com/cowboy/grunt)[grunt.js], (https://www.ruby-lang.org/)[Ruby], (http://sass-lang.com)[SASS] and (http://compass-style.org)[Compass] installed for this to work.

