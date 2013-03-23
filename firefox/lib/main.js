var widgets = require("sdk/widget");
var tabs = require("sdk/tabs");
var data = require("sdk/self").data;
var tabs = require("sdk/tabs");
var simple_prefs = require("sdk/simple-prefs");

function open_url(the_url) {
    tabs.open({
        url: the_url
    });
}

var popup = require("sdk/panel").Panel({
  contentURL: data.url("popup.html"),
  contentScriptFile: [data.url("VideoInfo.js"),data.url("InfoViewer.js"),data.url("processURL.js"),data.url("firefox.js"),data.url("assets/jquery.min.js")]
});

popup.on("show", function() {
 popup.port.emit("show",[tabs.activeTab.url,simple_prefs.prefs.localserver]);
});

popup.port.on("open_url", open_url);

var widget = widgets.Widget({
  id: "youtube-dl",
  label: "youtube-dl",
  contentURL: data.url("icon_button.png"),
  panel: popup
});
