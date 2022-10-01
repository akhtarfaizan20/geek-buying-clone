function tosignup(event){
    window.location.href="signup.html";
}

let form=document.querySelector("#signin-form");

form.addEventListener("submit",adduser);
function adduser(event){
    event.preventDefault();
    let obj={
        email: form.email.value,
        password: form.password.value,
    }
    let arr=JSON.parse(localStorage.getItem("user-details")) || [];
    if(arr.some((el)=>(el.email==obj.email && el.password==obj.password))){
        alert("Login Successful");
        let username="";
        arr.forEach(function(el){
            if(el.email==obj.email){
                username=el.name;
            }
        })
        form.email.value="";
        form.password.value="";

        localStorage.setItem("loggined",username);
        window.location.href="index.html";
        
    }else{
        alert("Enter the correct email address or password!!");
    }

}
