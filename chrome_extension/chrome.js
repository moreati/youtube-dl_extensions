function download_video(url) {
	chrome.tabs.create({url:url});
}

function download_link(url) {
	var link =  'download_video("'+url+'")';
	return link;
}

function set_download_link(a, url) {
	a.addEventListener("click",function() {download_video(url);}, false)
}

function get_url_form_tab(tab) {
	var url= tab.url;
	processVideosURL(url);
}
function get_url() {
	set_loading_view();
	chrome.tabs.getSelected(null,get_url_form_tab);
}

function use_localserver() {
	var localserver = localStorage.localserver;
	if (localserver == "true") return true;
	else return false;
}

document.addEventListener('DOMContentLoaded', get_url);
