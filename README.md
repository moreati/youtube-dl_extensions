#youtube-dl browser extensions
Browser extensions using [youtube-dl](http://youtube-dl.org).

Currently there are extensions for Chrome, Firefox and Safari.

They all use the API provided by [youtube-dl web](https://github.com/jaimeMF/youtube-dl-web).
   
##Installing

###Download
Download the extension from the [Google Code downloads page](http://code.google.com/p/youtube-dl-extensions/downloads/list).

See the [homepage](http://jaimemf.github.com/youtube-dl_extensions/) for the full instructions.

###Manually 
(for advanced users)

1.	Download the source.
2.	Download [jQuery](http://jquery.com/) and move it to `assets/jquery.min.js`.
3.	Run `link_files.sh`
4.	Install on your browser:
	* __Safari__:[^1]
		1. Clink on `Show Extension Builder` from the `Develop`menu.
		2. Click on the + icon and select `Add Extension`.
		3. Browse to the source and select `youtube-dl.safariextension`.
		4. Clik on the install button.
	* __Chrome__:
		1. Open the extensions page (`chrome://extensions/`).
		2. Turn on the developer mode.
		3. Click `Load unpacked extension…`.
		4. Browse to the source and select `chrome_extension`.
	* __Firefox__:
		1. Download de [Add-on SDK](https://addons.mozilla.org/en-US/developers/builder).
		2. Run `cfx xpi` inside the `firefox` directory.
		3. Open the `youtube-dl.xpi` file with Firefox.

###Localserver setup

Some sites video links dont' work by default (like YouTube), for getting the right ones you need to follow these steps:

1. Install the [youtube-dl-api-server](https://github.com/jaimeMF/youtube-dl-api-server).
2. Run `python youtube_dl_sever.py`.
3. Turn on the `localserver` option in the extension's preferences.

__Jaime Marquínez Ferrándiz__

[^1]: You need a developer cetificate for using custom extensions in Safari.
