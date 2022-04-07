console.log(moment().format("MM Do YY"));

$("#currentDay").text(moment().format("MM Do YY"));
var time = moment().hours(); 
console.log("current time is ", time); 

$( ".time-block" ).each(function( index ) {
    console.log( index + ": "  +$( this ).find("label").text());
    var hour = parseInt( $( this ).find("label").text().split(":")[0]) ;
    console.log(hour);
    if( hour < time){
        //PAST CSS class 
      $(this).addClass('past')
    }
    else if ( hour === time ){
        //CURRENT HOUR 
        $(this).addClass('present');
        $(this).removeClass('past');

    }else {
        $(this).addClass('future');
        $(this).removeClass('past');
    }
  });

  $( ".saveBtn" ).click(function() {
   console.log("Button clicked", $(this))
   //grab the time and description using siblings 

  // localStorage.setItem(time, desc)
  });
   