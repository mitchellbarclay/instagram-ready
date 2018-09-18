function pic2() {
    var x = document.getElementById("pic2");
    var x2 = document.getElementById("pic3");
    var x3 = document.getElementById("pic4");
    var x4 = document.getElementById("pic5");
    var x5 = document.getElementById("slideboy")

     if (x5.value >= 20) {
        x.style.display = "block";
   }
   else{
   	x.style.display = "none";
   }

   if (x5.value >= 40) {
     x2.style.display = "block";
   }
   else {
   	x2.style.display = "none";
   }
     if (x5.value >= 60) {
     x3.style.display = "block";
   }
   else {
   	x3.style.display = "none";
   }
      if (x5.value >= 80) {
     x4.style.display = "block";
   }
   else {
   	x4.style.display = "none";
   }


}
