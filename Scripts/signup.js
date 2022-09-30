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

    if(arr.some((el)=>(el.email==obj.email))){
        alert("Email is already register!!\nLogin or use another email address.");
        form.email.value="";
    }else{
        arr.push(obj);
        localStorage.setItem("user-details",JSON.stringify(arr));
        tosignin();
    }

}