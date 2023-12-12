const image = document.getElementById("image");
const input = document.getElementById("input");
const bt = document.getElementById("bt");
bt.addEventListener("click",(e)=>{
  image.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+input.value;
  input.value="";
})