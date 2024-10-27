let btn= document.getElementById("btn");

btn.addEventListener("click", function(){
    let qrText= document.getElementById("qrText").value;  
    let qrImg= document.getElementById("qrImg");

    if(!qrText) {
      alert("Please enter the data");
      return;
    }

qrImg.src= `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(qrText)}`;

});
