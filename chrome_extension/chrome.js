function get_url_form_tab(tab) {
	var url= tab.url;
	processVideosURL(url);
}
function get_url() {
	chrome.tabs.getSelected(null,get_url_form_tab);
}

function open_url_f(url) {
	return function() {
		chrome.tabs.create({url:url});
	};
}

InfoViewer.prototype.html_href = function(url) {return null;}

InfoViewer.prototype.html_video_link_on_click = function(url) {
	return open_url_f(url);
}

InfoViewer.prototype.html_link_on_click = function(url) {
	return open_url_f(url);
}

document.addEventListener('DOMContentLoaded', get_url);
