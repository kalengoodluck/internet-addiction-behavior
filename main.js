$("#card1").flip();

$("#card2").flip();

$("#card3").flip();

$("#card4").flip();

$("#card5").flip();

$("#card6").flip();

$("#card7").flip();

$("#card8").flip();

$("#card9").flip();


var card = document.querySelector(".card");
var playing = false;

card.addEventListener('click',function() {
  if(playing)
    return;

  playing = true;
  anime({
    targets: card,
    scale: [{value: 1}, {value: 1.4}, {value: 1, delay: 250}],
    rotateY: {value: '+=180', delay: 200},
    easing: 'easeInOutSine',
    duration: 400,
    complete: function(anim){
       playing = false;
    }
  });
});
