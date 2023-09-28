function content1(value) {
    document.getElementById("show1").classList.remove("hide");
    document.getElementById("show2").classList.add("hide");
    document.getElementById("show3").classList.add("hide");
  document.getElementById("totalValue").innerHTML = value;

  document.getElementById("box1").style.backgroundColor = "rgba(0, 127, 97,0.1)";
  }
  
  function content2(value) {
    document.getElementById("show1").classList.add("hide");
    document.getElementById("show2").classList.remove("hide");
    document.getElementById("show1").classList.add("hide");
    document.getElementById("totalValue").innerHTML = value;

  }

  function content3() {
    document.getElementById("show1").classList.add("hide");
    document.getElementById("show2").classList.add("hide");
    document.getElementById("show3").classList.remove("hide");

  }
/*
  function color1(){
    document.getElementById("pair1").style.backgroundColor = "rgba(0, 127, 97,0.1)";
  }*/

  