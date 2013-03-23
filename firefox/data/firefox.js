var localserver;

function get_url(args) {
	var url = args[0];
	localserver = args[1];
	processVideosURL(url);
}

function open_url_func(url) {
	return function() {self.port.emit("open_url",url);};
}

function use_localserver() {
	return localserver;
}

InfoViewer.prototype.html_href = function() {};
InfoViewer.prototype.html_link_on_click = open_url_func;
InfoViewer.prototype.html_video_link_on_click = open_url_func;

self.port.on("show",get_url);
