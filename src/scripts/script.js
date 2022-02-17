// On window load function
window.onload = function() {
  

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
    pulseText.style.animationPlayState = 'paused';
    // On button start function
    buttonPulse.onclick = function(){
      if (pulseText.style.animationPlayState == 'paused'){
        pulseText.style.animationPlayState = 'running';
      }else{
        pulseText.style.fontSize = '9vh';
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

    /////////////////////////////////////////////////////////////////
    //Creating the Cursor
    /////////////////////////////////////////////////////////////////
    const cursor = document.querySelector('.cursor');

    document.addEventListener('mousemove', e => {
        cursor.setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px;")
    })

    document.addEventListener('click', () => {
        cursor.classList.add("expand");

        setTimeout(() => {
            cursor.classList.remove("expand");
            }, 500)
        })
}


