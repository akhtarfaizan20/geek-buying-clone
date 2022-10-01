// adding href to the sign in 
function tosignin(event){
    window.location.href="signin.html"
}
let form=document.querySelector("#signup-form");

form.addEventListener("submit",adduser);
function adduser(event){
    event.preventDefault();
    let obj={
        name: form.name.value,
        email: form.email.value,
        password: form.password.value,
    }
    let arr=JSON.parse(localStorage.getItem("user-details")) || [];
    let upper=/[A-Z]/g;
    let lower=/[a-z]/g;
    let num=/[0-9]/g;
    let password=obj.password;
    let error=document.querySelector(".errors");
    error.innerHTML="";
    if(arr.some((el)=>(el.email==obj.email))){
        alert("Email is already register!!\nLogin or use another email address.");
        form.email.value="";
    }else{
        if(password.length<8){
            error.innerHTML+="<li>Password must contain at least 8 characters!</li>";
        }
        if(!password.match(upper)){
            error.innerHTML+="<li>Enter atleast 1 Uppercase character!</li>";
        }
        if(!password.match(lower)){
            error.innerHTML+="<li>Enter atleast 1 lowercase character!</li>";
        }
        if(!password.match(num)){
            error.innerHTML+="<li>Enter atleast 1 numerical digit</li>";
        }
        if(error.innerHTML==""){
            arr.push(obj);
            localStorage.setItem("user-details",JSON.stringify(arr));
            tosignin();
        }
    }

}

