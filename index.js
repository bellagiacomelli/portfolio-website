// get width & height of random pane
var pane_width = $(".random-pane").width() - $(".grid-item").width();
var pane_height = $(".random-pane").height() - $(".grid-item").height();

// loop through all the items in the random-pane
$(".random-pane").children().each( function(){

  // get a random x position
  var x = Math.round(Math.random() * pane_width);
  // get a random y position
  var y =  Math.round(Math.random() * pane_height);

  // change the position of the item
  $(this).css("top",y);
  $(this).css("left",x);
  $(this).attr('data-x', x);
  $(this).attr('data-y', y);

  // add hover functionality, to move item to the top on hover
  $(this).on("mouseover",function(){
    // this is a small hack, removing it and adding it again moves it to the top
  //$(this).parent().append(this);
  });

});

// make draggable
  $( function() {
    $( ".grid-item" ).draggable({ scroll: true });

  } );

  // filter items on category click
$('.filter-button-group').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  //$grid.isotope({ filter: filterValue });

  $(".button-group button").removeClass("hover-button");
  $(this).addClass("hover-button");

  $(".random-pane").children().each( function(){

    if (!$(this).hasClass( filterValue) ){
      $(this).hide();
    }
    else {
      $(this).show();
    }

  });

});

// click bigger
$(".grid-item").on("click", function(){
    
    if ($(this).hasClass("big-item")) {
      
      // $(this).animate({
      //     height: '100px',
      //     width: '100px'
      // },100,function(){
      //   //alert('klaar')
      // });
      $(this).removeClass("big-item");

      $('.grid-item').each(function(){
        $(this).animate({
          opacity: '1'
        }, 1000);

        // $(this).css('display', 'block');
      });
    
       // $(".grid-item").css("opacity",1)

    }
    else {
      
      // $(this).animate({
      //   height: '20%',
      //   width: '20%'
      // },100,function(){
      //   //alert('klaar')
      // });
      $(this).addClass("big-item");
      
      $('.grid-item').each(function(){
        $(this).animate({
          opacity: '0'
        }, 1000);
        
        // $(this).css('display', 'none');
      });

      // $(".grid-item").css("opacity","0.2")
      // $(this).css("opacity",1)
      // $(this).css("z-index",2)
    
    }    
});
