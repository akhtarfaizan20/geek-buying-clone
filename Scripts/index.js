// adding href to the sign in 
function tosignin(event){
    window.location.href="signin.html"
}
function tosignup(event){
    window.location.href="signup.html";
}

let footercount=0;
let categorycount=0;
// adding drop down to the footer top section 
document.querySelector(".top-foot-ad").addEventListener("click",function(){
    
    if(footercount%2==0){
        
    let div=document.querySelector(".foot-dropdown");
    div.style.display="grid";
    footercount++;
    }else{
        let div=document.querySelector(".foot-dropdown");
        div.style.display="none";
        footercount++;
    }
})
// adding drop down to the footer top section
document.querySelector(".category").addEventListener("click",function(){
    if(categorycount%2==0){
        let div=document.querySelector(".cate-dropdown");
        div.style.display="grid";
        categorycount++;
    }else{
        let div=document.querySelector(".cate-dropdown");
        div.style.display="none";
        categorycount++;
    }
})
// deals of the day
let dealsday=[
    {
        img: "/images/Deal of the day/dealoftheday1.png",
        off: "34% OFF",
        price: "₹3632.44",
        strickedoff: "₹5531.65",
    },
    {
        img: "/images/Deal of the day/dealoftheday2.png",
        off: "36% OFF",
        price: "₹17339.78",
        strickedoff: "₹27248.69",
    },
    {
        img: "/images/Deal of the day/dealoftheday3.png",
        off: "16% OFF",
        price: "₹1320.36",
        strickedoff: "₹1568.09",
    },
    {
        img: "/images/Deal of the day/dealoftheday4.png",
        off: "26% OFF",
        price: "₹1650.66",
        strickedoff: "₹2228.68",
    },
];
let featureproduct=[
    {
        img: "/images/Fetured Product/featured-product-1.png",
        name: "Sabbat E12 Ultra",
        price: "₹5449.08",
        strickedoff: "₹5531.65",
    },
    {
        img: "/images/Fetured Product/featured-product-2.png",
        name: "Razer Viper Mini RGB",
        price: "₹3137.00",
        strickedoff: "₹3302.15",
    },
    {
        img: "/images/Fetured Product/featured-product-3.png",
        name: "X98Q TV BOX",
        price: "₹2393.83",
        strickedoff: "₹3302.15",
    },
    {
        img: "/images/Fetured Product/featured-product-4.png",
        name: "JIUXUN TOOLS 60 in",
        price: "₹1650.66",
        strickedoff: "₹2476.40",
    },
];
dealsday.forEach(function(el){
    let div=document.createElement("div");
    let img=document.createElement("img");
    img.src=el.img;
    let disc=document.createElement("div");
    disc.innerText=el.off;
    let price=document.createElement("strong");
    price.innerText=el.price;
    let strickedoff=document.createElement("div");
    strickedoff.innerText=el.strickedoff;
    div.append(img,disc,price,strickedoff);
    document.querySelector(".deals-of-the-day").append(div);
})
featureproduct.forEach(function(el){
    let div=document.createElement("div");
    let img=document.createElement("img");
    img.src=el.img;
    let name=document.createElement("div");
    name.innerText=el.name;
    let price=document.createElement("strong");
    price.innerText=el.price;
    let strickedoff=document.createElement("div");
    strickedoff.innerText=el.strickedoff;
    div.append(img,name,price,strickedoff);
    document.querySelector(".featured-product").append(div);
})

// swiper script
const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnIntraction: false
    },
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  });