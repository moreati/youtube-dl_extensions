function get_url_form_tab(tab) {
	var url= tab.url;
	processVideosURL(url);
}
function get_url() {
	chrome.tabs.getSelected(null,get_url_form_tab);
}

InfoViewer.prototype.html_video_link_on_click = function(url) {
	return function() {chrome.tabs.create({url:url});};
}

document.addEventListener('DOMContentLoaded', get_url);
