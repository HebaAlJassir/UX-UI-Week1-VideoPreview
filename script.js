console.log("page loaded...");

function bigImg(x) {
    x.style.height = "100px";
    x.style.width = "100px";
  }
  
  function normalImg(x) {
    x.style.height = "64px";
    x.style.width = "64px";

  }

  var x = document.getElementById("myVideo");

  function enableMute() { 
    x.muted = true;
  }
   
  function disableMute() { 
    x.muted = false;
  }