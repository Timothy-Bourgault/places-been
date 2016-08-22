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
  $("form#new-contact").submit(function(event) {
    event.preventDefault();

    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();

    var newContact = new Contact(inputtedFirstName, inputtedLastName);

    $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");

    $(".contact").last().click(function() {
    $("#show-contact").show();
    $("#show-contact h2").text(newContact.firstName);
    $(".first-name").text(newContact.firstName);
    $(".last-name").text(newContact.lastName);
  });

  $("input#new-first-name").val("");
  $("input#new-last-name").val("");
  });
});
