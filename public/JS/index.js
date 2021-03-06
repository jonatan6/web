$(function() {
  var press = false;
  var perfiles = [];
  var index = 0;
  var size = 0;
  var imageCarousel = null;

$.getJSON("./data.json", function (data) {
    data.perfiles.forEach(function(perfil) {
      perfiles.push({
        "img": perfil.img,
        "page": perfil.page,
        "name": perfil.name
      });
    });

    view();
    size = perfiles.length;
    imageCarousel = setInterval(moveRight, 2000);
    $('#left').click(moveLeft);
    $('#right').click(moveRight);
    $('#perfiles').click(viewProfile);
  });

  $('.link').click(function() {
    var id = $(this).attr('id');
    var name = "/" + id;
    if (id != 'perfiles') window.location = name;
  });

  $('.link').hover(function() {
    window.clearInterval(imageCarousel);
  }, function() {
    imageCarousel = setInterval(moveRight, 2800);
  });
  
  function moveLeft() {
    index--;
    index = (index < 0)? size - 1 : index;
    view();
  }

  function moveRight() {
    index++;
    index = (index === size)? 0 : index;
    view();
  }

  function view() {
    $('.Perfiles').css('background-image', `url(${perfiles[index].img})`);
  }

  function viewProfile(ev) {
    if (ev.target.id === "perfiles") {
      window.location = perfiles[index].page;
    }
  }
});
