var user1=document.getElementById("User1");
var user2=document.getElementById("User2");
function Acomodar(){
    let ancho=document.documentElement.clientWidth;
    if(ancho<=850){
        user1.innerHTML="Nurse:";
        user2.innerHTML="General public:"
    }else{
        user1.innerHTML="For nurses:"
        user2.innerHTML="For the General public:"
    }
}
