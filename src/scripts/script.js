// On window load function
window.onload = function () {
    
    // Setting the variables
    var seconds = 00; 
    var tens = 00; 
    var appendTens = document.getElementById("tens")
    var appendSeconds = document.getElementById("seconds")
    var buttonStart = document.getElementById('button-start');
    var buttonStop = document.getElementById('button-stop');
    var buttonPulse = document.getElementById('button-pulse');
    var buttonReset = document.getElementById('button-reset');
    var funcText = document.getElementById('funcText');
    var pulseText = document.getElementById('pulse-text');
    var Interval;
    
    // On button start function
    buttonPulse.onclick = function(){
      if (pulseText.style.animationPlayState == 'paused'){
        console.log("hi")
        pulseText.style.animationPlayState = 'running';
      }else{
        console.log("hi")
        pulseText.style.animationPlayState = 'paused';
      }
      
    }

    buttonStart.onclick = function() {
      if(buttonStart.innerHTML == "Resume"){
        buttonStart.innerHTML = "Start";
      }
      funcText.innerHTML = "Started the timer!";
      clearInterval(Interval);
      Interval = setInterval(startTimer, 10);
    }
    
      buttonStop.onclick = function() {
        if(tens>0){
          buttonStart.innerHTML = "Resume";
          buttonStop.innerHTML = "Pause".strike();
        }
        funcText.innerHTML = "Paused the timer!";
        clearInterval(Interval);
    }
    
    // On button reset click
    buttonReset.onclick = function() {
        funcText.innerHTML = "Reset the timer!";
        buttonStart.innerHTML = "Start";
        buttonStop.innerHTML = "Pause";
        clearInterval(Interval);
        tens = "00";
        seconds = "00";
        appendTens.innerHTML = tens;
        appendSeconds.innerHTML = seconds;
    }
    
     
    // Counting timer function
    function startTimer () {
      tens++; 

      if(tens <= 9){
        appendTens.innerHTML = "0" + tens;
      }
      
      if (tens > 9){
        appendTens.innerHTML = tens;
        
      } 
      
      if (tens > 99) {
        seconds++;
        appendSeconds.innerHTML = "0" + seconds;
        tens = 0;
        appendTens.innerHTML = "0" + 0;
      }
      
      if (seconds > 9){
        appendSeconds.innerHTML = seconds;
      }
    
    }
}


