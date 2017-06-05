# jqPlot
Pure JavaScript plotting plugin for jQuery.

**jqPlot home page**: http://www.jqplot.com

**Users forum**: https://groups.google.com/group/jqplot-users

**Developers forum**: https://groups.google.com/group/jqplot-dev

**Examples and unit tests**: http://www.jqplot.com/examples

**Documentation**: http://www.jqplot.com/docs/

**Project page and source code**: https://www.github.com/jqPlot/jqPlot

**Bugs, issues, feature requests**: https://www.github.com/jqPlot/jqPlot/issues

## Changes from upstream

Note: the version number will always match the upstream version number.
Any changes in this package will increment the "pm" version.

This package contains jqplot modified to commonjs modules.

It can be imported:

```javascript
import jqplot from 'jqplot-exported/jqplot';
import { CanvasAxisLabelRenderer } from 'jqplot-exported/plugins/CanvasAxisLabelRenderer';
import { CanvasAxisTickRenderer } from 'jqplot-exported/plugins/CanvasAxisTickRenderer';
import { EnhancedLegendRenderer } from 'jqplot-exported/plugins/EnhancedLegendRenderer';
import { LogAxisRenderer } from 'jqplot-exported/plugins/LogAxisRenderer';
```

For more information, see the [documentation](http://www.jqplot.com/docs) and
[examples](http://www.jqplot.com/examples).

This package was forked in order to allow usage of es6 imports. No
functionality changes were made.

### Maintenance
No maintenance should be needed, unless upstream releases a new version of
jqPlot, in which case, that version should be integrated. Any typescript
typings should not be made in this repository, instead they should be made in
DefinitelyTyped.

Any bugfixes needed should be made here and submitted upstream to
https://github.com/jqPlot/jqPlot.

### Added Functionality
No new functionality should be added to this package.  Instead, new
functionality should be created as plugins.

### Hosting

There is no reason to make the fork private, so it will be hosted publicly on
[github][] and [npm][].

[github]: https://github.com/Micromeritics/jqplot-exported
[npm]: https://www.npmjs.com/package/jqplot-exported


## Building from source

If you've cloned the repository, you can build a distribution from source.

### Requirements and build tools

- Install [NodeJS](https://nodejs.org/en/download/)

### Getting started

1. Fork the repo
2. Clone the repository into the folder of your choice.
3. Install Node.JS
4. Run `npm install` to install the necessary dependencies.
5. Run `npm build` to build the program.

## Legal Notices

Copyright (c) 2009-2015 Chris Leonello

jqPlot is currently available for use in all personal or commercial projects
under both the MIT and GPL version 2.0 licenses. This means that you can
choose the license that best suits your project and use it accordingly.

jqPlot includes date instance methods and printf/sprintf functions by other authors:

### Date instance methods

Author: Ken Snyder (ken d snyder at gmail dot com)
Date: 2008-09-10
Version: 2.0.2 (http://kendsnyder.com/sandbox/date/)
License: Creative Commons Attribution License 3.0 (http://creativecommons.org/licenses/by/3.0/)

### JavaScript printf/sprintf functions

Author: Ash Searle
Version: 2007.04.27
http://hexmen.com/blog/2007/03/printf-sprintf/
http://hexmen.com/js/sprintf.js
The author (Ash Searle) has placed this code in the public domain:
"This code is unrestricted: you are free to use it however you like."
