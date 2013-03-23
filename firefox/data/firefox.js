function get_url(url) {
	processVideosURL(url);
}

function open_url_func(url) {
	return function() {self.port.emit("open_url",url);};
}

InfoViewer.prototype.html_href = function() {};
InfoViewer.prototype.html_link_on_click = open_url_func;
InfoViewer.prototype.html_video_link_on_click = open_url_func;

self.port.on("show",get_url);
