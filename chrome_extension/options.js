function save_options() {
  var checkbox = document.getElementById("localserver");
  var localserver = checkbox.checked;
  localStorage.localserver = localserver;

  var status = document.getElementById("status");
  status.innerHTML = "Options Saved.";
  setTimeout(function() {
    status.innerHTML = "";
  }, 750);
}

function restore_options() {
  var localserver = localStorage.localserver;
  var checkbox = document.getElementById("localserver");
  if (localserver == "true") checkbox.checked = true;
}
document.addEventListener('DOMContentLoaded', restore_options);
document.querySelector('#save').addEventListener('click', save_options);
