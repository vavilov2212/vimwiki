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

var selectedSection = window.localstorage !== undefined && window.localstorage.getItem('selectedGuide');
selectedSection = !selectedSection ? 0 : parseInt(selectedSection);

$(function() {
  $("nav li").each(function( index ){
    $(this).addClass('tag-' + this.nodeName.toLowerCase());
    // $("nav ul").append("<li class='tag-" + this.nodeName.toLowerCase() + "'><a href='#" + $(this).text().toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g,'') + "'>" + $(this).text() + "</a></li>");
    $(this).attr("id",$(this).text().toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g,''));
    console.log($(this));
    console.log(index);
    console.log(selectedSection);
    console.log('index === selectedSection', index === parseInt(selectedSection));
    if (index === selectedSection) {
      console.log('@@@@@')
      $(this).addClass("active");
    }
  });

  $("nav ul li").on("click", "a", function(event) {
    var position = $($(this).attr("href")).offset().top - 190;
    $("html, body").animate({scrollTo: position}, 400);
    $("nav ul li a").parent().removeClass("active");
    $(this).parent().addClass("active");
    event.preventDefault();
  });

  $('img').on('load', sectionHeight);
});
