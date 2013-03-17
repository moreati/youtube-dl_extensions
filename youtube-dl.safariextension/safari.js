function download_link(url) {
	return url;
}

function download_video(url) {
	safari.application.activeBrowserWindow.openTab().url = url
}

function set_download_link(a, url) {
	a.href=url
	a.addEventListener("click",function() {download_video(url);}, false)
}

function load_videos(event) {
	var target = event.target;
	target.showPopover();
	var url = safari.application.activeBrowserWindow.activeTab.url;
	set_loading_view();
	processVideosURL(url);
}

safari.application.addEventListener("command", load_videos, false);
