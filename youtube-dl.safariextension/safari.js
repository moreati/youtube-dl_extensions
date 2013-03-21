var popover_document;

function load_videos(event) {
	var target = event.target;
	target.showPopover();
	popover_document = target.popover.contentWindow.document;
	var url = safari.application.activeBrowserWindow.activeTab.url;
	processVideosURL(url);
}

InfoViewer.prototype.html_video_link_on_click = function(url) {
	return function() {safari.application.activeBrowserWindow.openTab().url = url;};
}
InfoViewer.prototype.video_section = function() {
	return popover_document.getElementById('videos-section');
}

function localserverChanged(event) 
{
	if(event.key == "localserver") {
		console.log("localserver settings has changed");
		localStorage.localserver = safari.extension.settings.localserver;
	}
}

safari.extension.settings.addEventListener("change",localserverChanged,false);

safari.application.addEventListener("command", load_videos, false);
