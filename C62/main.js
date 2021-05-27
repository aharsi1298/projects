// This file got deleted due to a system restore which EXPLICITLY told me that no personal files would get deleted
var gridView = document.getElementById("gridView");
var slideView = document.getElementsByClassName("carousel")[0];

document.getElementById("gridV").addEventListener("click", function(e) {
	gridView.style.display = "grid";
	gridView.style.gridTemplateRows = "auto auto";
	slideView.style.display = "none";
});
document.getElementById("slideV").addEventListener("click", function(e) {
	slideView.style.display = "block"
	gridView.style.display = "none";
})
