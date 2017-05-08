# Statblock Shop
Statblock Shop is a simple, free, and open-source application for creating, viewing, and managing monster statblocks for [Dungeons and Dragons 5th Edition](http://dnd.wizards.com). DMs can quickly throw together a new monster, or edit an existing one to fit their needs. It also supports the creation of encounter sheets, for a print-out or webpage with all the monsters in a particular encounter. So what are you waiting for, start making your own monsters!

**WARNING:** Due to lack of browser support for the way this app renders statblocks, only Chrome is currently supported. If time permits, I would like to support other browsers.


## Building & Contributing
Statblock Shop runs entirely on the front-end, so you can easily run an instance on your own server and edit the code to your heart's desire. There are no setup commands for this project, this start a local webserver and get going! I use:

```python
python -m SimpleHTTPServer
```

Want to help? File a pull request!

Have a problem? File an issue!

### Built with
- [Bootstrap 4.0 Alpha](https://v4-alpha.getbootstrap.com)
- [JQuery](http://jquery.com)
- [statblock5e](https://github.com/Valloric/statblock5e) - Used to render statblocks

## Versioning
I use [SemVer](http://semver.org) for versioning. The public API is considered to be the monster JSON format.
To see a version history, look at the [Releases](https://github.com/samvbeckmann/statblock-shop/releases) page.

## Authors
Statblock Shop is built with :heart: and :dragon: by [Sam Beckmann](https://github.com/samvbeckmann), who's definitely not a Beholder in disguise.

## License
This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments
- The statblock renderings are done with a modified version of [@valloric](https://github.com/valloric)'s [statblock5e](https://github.com/Valloric/statblock5e)
