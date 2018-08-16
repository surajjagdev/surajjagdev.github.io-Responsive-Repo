$(document).ready(function() {
  $("#slides").superslides({
    // documentation customizations
    // //fading animation the animation based on the
    animation: "fade",
    //change automatically every 6 secs
    play: "6000",
    //get rid of default pagination
    pagination: false
  });
  var typed = new Typed(".typed", {
    strings: [
      "Full-Stack Developer....In progress.",
      "Student.",
      "Adventurer."
    ],
    typeSpeed: 67,
    loop: true,
    startDelay: 1000,
    showCursor: false
  });
  $(".grid").isotope({
    // options...
    itemSelector: ".grid-item",
    masonry: {
      columnWidth: 200
    }
  });
  /*var buttons = $("#filters");
  for (var j = 0; j < buttons.length; j++) {
    buttons[j].click(function() {
      this.addClass("active");
    });
  }*/
  $("[data-fancybox]").fancybox();
});
