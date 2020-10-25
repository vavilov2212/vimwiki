var sectionHeight = function() {
  var total    = $(window).height(),
      $section = $('section').css('height','auto');

  if ($section.outerHeight(true) < total) {
    var margin = $section.outerHeight(true) - $section.height();
    $section.height(total - margin - 20);
  } else {
    $section.css('height','auto');
  }
}

$(window).resize(sectionHeight);

var selectedSection = 0;

$(window).ready(function() {
  selectedSection =
    window.localStorage !== undefined
    ? window.localStorage.getItem('selectedGuide')
    : 0;
});

selectedSection = parseInt(selectedSection);

$(function() {
  $("nav li").each(function( index ){
    $(this).addClass('tag-' + this.nodeName.toLowerCase());
    // $("nav ul").append("<li class='tag-" + this.nodeName.toLowerCase() + "'><a href='#" + $(this).text().toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g,'') + "'>" + $(this).text() + "</a></li>");
    $(this).attr("id", index);
    if (index === parseInt(selectedSection)) {
      $(this).addClass("active");
      const offset = $(this).children("a").offset();
      var position = offset.top - 190;
      $("html, body").animate({scrollTo: position}, 400);
    }

    $("nav ul li").on("click", "a", function(event) {
      window.localStorage.setItem('selectedGuide', $(this).parent().attr('id'));
      localstorage.setItem('selectedGuide', index.toString());
      event.preventDefault();
    });
  });


  $('img').on('load', sectionHeight);
});
