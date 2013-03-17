var API_URL="http://youtube-dl.appspot.com/api/"
//Uncomment for using a local server
API_URL="http://localhost:9191/api/"

function video_section() {
	return document.getElementById('videos-section');
}

function html_video_link(url) {
	var video_link=document.createElement('a');
	video_link.href="#";
	set_download_link(video_link, url)
	video_link.innerHTML="Download video";
	return video_link;
}

function htmlForVideo(video) {
	var el=document.createElement('tr');
	var imageHTML;
	if (video.thumbnail) {
		imageHTML='<img class="video-thumbnail" src="'+video.thumbnail+'"/>';
	}
	else {imageHTML='None';}
	el.innerHTML="<td>"+imageHTML+"</td><td>"+video.title+"</td><td>"+video.ext+"</td> ";
	var video_link_cell=document.createElement('td');
	var video_link = html_video_link(video.url)
	video_link_cell.appendChild(video_link);
	el.appendChild(video_link_cell);
	return el;
}
function processVideosData(data) {
	var el = video_section();
	el.innerHTML ='Videos for: <a href="'+data.url+'">'+data.url+'</a>' ;
	var table = document.createElement('table');
	table.setAttribute('class','table');
	table.innerHTML='<thead><tr><th>Thumbnail</th><th>Video title</th><th>Format</th><th>Download link</th></tr></thead>'
	var table_body= document.createElement('tbody');
	for (var i=0; i<data.videos.length; i++) {
		var video=data.videos[i];
		table_body.appendChild(htmlForVideo(video));
	}
	table.appendChild(table_body);
	el.appendChild(table);
}

function apiCallFailed(jqXHR, textStatus, errorThrown) {
	var el = video_section();
	el.innerHTML='<div>\
              <strong>Oops!</strong> Something went wrong. Make sure the website is supported by youtube-dl.\
            </div>';
}
	
function processVideosURL(video_url) {
	console.log('Loading '+ video_url);
	$.getJSON(
			 API_URL,
			 {'url':video_url},
			 processVideosData
			 ).error(apiCallFailed);
}

function set_loading_view() {
	var text = document.createElement('p');
	text.innerHTML = "That's it";
	var vid = video_section();
	vid.innerHTML="<p>Loading</p>";
}
