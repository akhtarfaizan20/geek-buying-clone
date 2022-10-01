function tosignin(event){
    window.location.href="signin.html"
}
function tosignup(event){
    window.location.href="signup.html";
}

let logginedUser=localStorage.getItem("loggined") || "Sign In";
document.querySelector(".sign").innerText=logginedUser;
// adding drop down to the footer top section 
document.querySelector(".top-foot-ad").addEventListener("click",function(e){
    
    
    document.querySelector(".foot-dropdown").style.display="grid";
    e.stopPropagation();
})
// adding drop down to the footer top section
document.querySelector(".category").addEventListener("click",function(e){
    
        document.querySelector(".cate-dropdown").style.display="grid";
        e.stopPropagation();
})
document.addEventListener("click",function(e){
    if(document.querySelector(".cate-dropdown").style.display=="grid"){
        document.querySelector(".cate-dropdown").style.display="none";
    }
    if(document.querySelector(".foot-dropdown").style.display=="grid"){
        document.querySelector(".foot-dropdown").style.display="none";
    }
    e.stopPropagation();
})
// log out user
document.querySelector(".sign").addEventListener("click",function(){
    if(document.querySelector(".sign").innerText!="Sign In"){
        alert("Logout successful!");
        document.querySelector(".sign").innerText="Sign In";
        localStorage.setItem("loggined","Sign In");
        window.location.relode();
    }
})

// funtion for increasing  decreacsing qunatity QTY
function qtyminus(){
    if((document.querySelector(".product-qty").innerText)>1){
        (document.querySelector(".product-qty").innerText)--;
    }
}
function qtyplus(){
    if((document.querySelector(".product-qty").innerText)<8){
        (document.querySelector(".product-qty").innerText)++;
    }
    else{
        alert("You cannot buy more then 8 quantity at a time!!");
    }
}


let el=JSON.parse(localStorage.getItem("product"));

let img=document.createElement("img");
img.src=el.img;
document.querySelector(".product-img").append(img);
document.querySelector(".product-name>h3").append(el.name);
document.querySelector(".product-price>h2").append(el.price);


let recommended=[
    {
        img: "/images/recommended/recommendedforyou1.png",
        name: "Sopend E01 Powercube Cordless",
        price: "₹1155.21",
        
    },
    {
        img: "/images/recommended/recommendedforyou2.png",
        name: "Sopend E03 Multifunctional",
        price: "₹1815.81",
        
    },
    {
        img: "/images/recommended/recommendedforyou3.png",
        name: "Sopend E08 Powercube Tower",
        price: "₹2724.13",
        
    },
    {
        img: "/images/recommended/recommendedforyou4.png",
        name: "Ugreen HDMI Switch 3 in 1 Out HDMI",
        price: "₹2146.11",
        
    },
    {
        img: "/images/recommended/recommendedforyou6.png",
        name: "Sopend E04A Multifunctional",
        price: "₹2146.11",
        
    },
    {
        img: "/images/recommended/recommendedforyou7.png",
        name: "SCULPFUN S9 / S6 Pro / S10 Air Assist",
        price: "₹2146.11",
        
    },
    {
        img: "/images/recommended/recommendedforyou8.png",
        name: "SCULPFUN S6 Pro 5.5W Laser",
        price: "₹16514.03",
        
    },
    {
        img: "/images/recommended/recommendedforyou9.png",
        name: "ATOMSTACK A5 PRO 5.5W Laser",
        price: "₹21468.49",
        
    },
    
];
recommended.forEach(function(el){
    let div=document.createElement("div");
    let img=document.createElement("img");
    img.src=el.img;
    let name=document.createElement("div");
    name.innerText=el.name;
    let price=document.createElement("strong");
    price.innerText=el.price;
    
    div.append(img,name,price);
    div.addEventListener("click",function(){
        toproduct(el);
    })
    document.querySelector(".recommended-container").append(div);
});
function toproduct(el){
    localStorage.setItem("product",JSON.stringify(el));
    window.location.href="product.html";
}