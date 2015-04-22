/**
 * Starfield
 * @author Valentin Perez
 * based on particlefield and starfield from @mrjnicol and @chenye respectively.
 *
 */

var particles_on;

$(document).ready(function() {

    msieversion();

    if( $(window).width() <= 768 )
    { 
    // is mobile or tablet so don't show particles.. (too big and messes up layout)
    $('#program').empty();
    $('#program').append("<div class='container-fluid'> <div class='row text-center'> <img src='assets/img/launch/overview-no-text.png' class='img-responsive img-centered' alt''><p><span class='text-primary'><b>STEP 1: IDEA DEVELOPMENT</b></span></p><p>Creative process and laying out the initial business model canvas hypotheses</p><br><p><span class='text-primary'><b>STEP 2: TEST THE VALUE HYPOTHESIS</b></span></p><p>Ensure there is a customer need that is big enough and valuable enough to address with the offering</p><br><p><span class='text-primary'><b>STEP 3: TEST THE GROWTH HYPOTHESIS</b></span></p><p>Determine how to reach customers, price optimally, and develop operations to deliver the offering</p><br><p><span class='text-primary'><b>STEP 4: PUT IT TOGETHER / LAUNCH</b></span></p><p>Develop projections and pitches and prepare for the needs ahead</p> </div> </div>");    


    
    }
    else
    {
      $('#starfield').particleground({
        dotColor: "#f26283",
        lineColor: 'rgba(255, 255, 255, .2)',
        particleRadius: 4,
        paralaxMultiplier: 6,
        proximity: 200,
        minRadiusPct: .5,
        maxRadiusPct: 2.2,
        minOpacity: .5,
        maxOpacity: .8
      });
      particles_on = true;
    }
});

$(window).resize(function() {
  //resize just happened, pixels changed
  if($(window).width() <= 768)
    { 
    particles_on = false;
    // is mobile so don't show particles..
    $('#starfield').particleground('destroy');
    $('#program').empty();
    $('#program').append("<div class='container-fluid'> <div class='row text-center'> <img src='assets/img/launch/overview-no-text.png' class='img-responsive img-centered' alt''><p><span class='text-primary'><b>STEP 1: IDEA DEVELOPMENT</b></span></p><p>Creative process and laying out the initial business model canvas hypotheses</p><br><p><span class='text-primary'><b>STEP 2: TEST THE VALUE HYPOTHESIS</b></span></p><p>Ensure there is a customer need that is big enough and valuable enough to address with the offering</p><br><p><span class='text-primary'><b>STEP 3: TEST THE GROWTH HYPOTHESIS</b></span></p><p>Determine how to reach customers, price optimally, and develop operations to deliver the offering</p><br><p><span class='text-primary'><b>STEP 4: PUT IT TOGETHER / LAUNCH</b></span></p><p>Develop projections and pitches and prepare for the needs ahead</p> </div> </div>");    
    }
    else
    {
        $('#program').empty();
        $('#program').append("<div class='container-fluid'> <div class='row text-center'> <img src='assets/img/launch/overview.png' class='img-responsive img-centered' alt''> </div> </div>");

        if(!particles_on)
        {
            $('#starfield').particleground({
                dotColor: '#DDDDDD',
                lineColor: 'rgba(255, 255, 255, .2)',
                particleRadius: 4,
                paralaxMultiplier: 6,
                proximity: 75,
                minRadiusPct: .5,
                maxRadiusPct: 2.2,
                minOpacity: .5,
                maxOpacity: .8
              });
                          particles_on = true;

        }
    }
});

 function msieversion() {

        var ua = window.navigator.userAgent;
        var msie = ua.indexOf("MSIE ");

        if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./))      // If Internet Explorer, return version number
        {
            if (parseInt(ua.substring(msie + 5, ua.indexOf(".", msie))) < 11)
                alert('Internet Explorer '+ parseInt(ua.substring(msie + 5, ua.indexOf(".", msie))) + ' is not supported. Please upgrade your browser.');
        }
   return false;
}