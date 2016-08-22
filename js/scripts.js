//business logic
function Place(name, location, landmark, time, notes) {
  this.placeName = name;
  this.placeLocation = location;
  this.placeLandmark = landmark;
  this.placeTime = time;
  this.placeNotes = notes;
}
Place.prototype.placeDetails = function() {
  return this.placeName + " " + this.placeNotes + " " + this.placeLocation + " " + this.placeLandmark + " " + this.placeTime;
}
// user interface logic
$(document).ready(function() {
  $("form#new-place").submit(function(event) {
    event.preventDefault();

    var inputtedPlaceName = $("input#new-place").val();
    var inputtedPlaceLocation = $("input#place-location").val();
    var inputtedPlaceLandmark = $("input#place-landmark").val();
    var inputtedPlaceTime = $("input#place-time").val();
    var inputtedPlaceNotes = $("input#place-notes").val();

    var newPlace = new Place(inputtedPlaceName, inputtedPlaceLocation, inputtedPlaceLandmark, inputtedPlaceTime, inputtedPlaceNotes );

    $("ul#places").append("<li><span class='place'>" + newPlace.placeDetails() + "</span></li>");

    $(".places").last().click(function() {
    $("#show-places").show();
    $("#show-places h2").text(newPlace.placeName);
    $(".place-location").text(newPlace.placeLocation);
    $(".place-landmark").text(newPlace.placeLandmark);
    $(".place-time").text(newPlace.placeTime);
    $(".place-notes").text(newPlace.placeNotes);
  });

  $("input#new-place").val("");
  $("input#place-location").val("");
  $("input#place-landmark").val("");
  $("input#place-time").val("");
  $("input#place-notes").val("");
  });
});
