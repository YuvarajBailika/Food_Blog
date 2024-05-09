String.prototype.replaceAt = function(index, replacement) {
  return this.substring(0, index) + replacement + this.substring(index + replacement.length);
}


var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

window.onclick = function(event) {
  if (event.target == sidebar) {
      modal.style.display = "none";
  }
}

function login(){
  let uname=document.getElementById("uname").value;
  let psw=document.getElementById("psw").value;
  
  if(psw!="" && uname!=""){
  document.getElementById("log").innerHTML="You logged in Succesfully!!!"
  }
}
function signup(){
  document.getElementById("register").innerHTML="You succesfully Registered!!!";
}

function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}

function search(){
  let loc = window.location.href;
  let pos = loc.indexOf('x');
  let p=document.getElementById("search_item").value;
  r=p.toUpperCase();
  if(r=="INDIAN"){
 // window.location.assign(loc.replace("x.html", "x2.html"));
    window.location.replace("https://kottaniranjan.github.io/Taste-The-Best/index2.html")
  }
  else if(r=="CHINESE"){
    //window.location.assign(loc.replaceAt(pos, "x3.html"));
    window.loaction.replace("https://kottaniranjan.github.io/Taste-The-Best/index3.html")
  }
  else if(r=="ITALIAN"){
    //window.location.assign(loc.replaceAt(pos,"x4.html"));
    window.location.replace("https://kottaniranjan.github.io/Taste-The-Best/index4.html")
  }
  else if(r=="AMERICAN")
  {
   // window.location.assign(loc.replaceAt(pos,"x5.html"));
    window.location.replace("https://kottaniranjan.github.io/Taste-The-Best/index5.html")
  }
  else if(r=="VEG"){
   // window.location.assign(loc.replaceAt(pos,"x6.html"));
    window.location.replace("https://kottaniranjan.github.io/Taste-The-Best/index6.html")
  }
  else if(r=="DESSERT"){
    //window.location.assign(loc.replaceAt(pos,"x7.html"));
    window.location.replace("https://kottaniranjan.github.io/Taste-The-Best/index7.html")
  }
  else if(r=="HEALTHY"){
    //window.location.assign(loc.replaceAt(pos,"x8.html"));
    window.location.replace("https://kottaniranjan.github.io/Taste-The-Best/index8.Html")
  }
  else if(r=="VEGAN"){
   // window.location.assign(loc.replaceAt(pos,"x9.html"));
    window.location.replace("https://kottaniranjan.github.io/Taste-The-Best/index9.html")
  }
  else{
    document.getElementById("res").innerHTML=`0 results for ${p}. Please try another search`
  }

}
