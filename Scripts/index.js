// adding href to the sign in 
function tosignin(event){
    window.location.href="signin.html"
}
function tosignup(event){
    window.location.href="signup.html";
}


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
let bestseller=[
    {
        img: "/images/Best Seller/bestseller1.png",
        disc: "29% OFF",
        name: "XIAOMI 4pcs Mijia Bluetooth Thermometer Hygrometer 2 Wireless",
        price: "₹1980.96",
        strickedoff: "₹2806.70",
    },
    {
        img: "/images/Best Seller/bestseller2.png",
        disc: "28% OFF",
        name: "X98Q TV BOX Android 11 Amlogic S905W2 Quad Core ARM Cortex A53",
        price: "₹2393.83",
        strickedoff: "₹₹3302.15",
    },
    {
        img: "/images/Best Seller/bestseller3.png",
        disc: "13% OFF",
        name: "Sopend E11 Vertical Tower Power Strip Socket with EU Plug, 4 USB Ports, 12",
        price: "₹3302.15",
        strickedoff: "₹3797.59",
    },
    {
        img: "/images/Best Seller/bestseller4.png",
        disc: "43% OFF",
        name: "Xiaomi Mijia Bebird M9 Pro Smart Visual Ear Stick 17in1 3MP High",
        price: "₹3302.15",
        strickedoff: "₹5779.38",
    },
];
let newforyou=[
    {
        img: "/images/New for you/newforyou2.png",
        name: "OOLACTIVE Bicycle Saddle Bike Seat Black & Blue",
        price: "₹1402.94",
        
    },
    {
        img: "/images/New for you/newforyou3.png",
        name: "Y80 Bluetooth 5.1 TWS Earphone Wireless Digital Display HD Stereo",
        price: "₹577.19",
        
    },
    {
        img: "/images/New for you/newforyou4.png",
        name: "Ajazz K870T Pro 87 Keys Triple Modes Mechanical Keyboard RGB Backlit",
        price: "₹5366.50",
        
    },
    
];
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
bestseller.forEach(function(el){
    let div=document.createElement("div");
    let img=document.createElement("img");
    img.src=el.img;
    let disc=document.createElement("div");
    disc.innerText=el.disc;
    let name=document.createElement("div");
    name.innerText=el.name;
    let price=document.createElement("strong");
    price.innerText=el.price;
    let strickedoff=document.createElement("div");
    strickedoff.innerText=el.strickedoff;
    div.append(img,disc,name,price,strickedoff);
    document.querySelector(".bestseller-container").append(div);
})


newforyou.forEach(function(el){
    let div=document.createElement("div");
    let img=document.createElement("img");
    img.src=el.img;
    let name=document.createElement("div");
    name.innerText=el.name;
    let price=document.createElement("strong");
    price.innerText=el.price;
    
    div.append(img,name,price);
    document.querySelector(".newforyou-container").append(div);
})


recommended.forEach(function(el){
    let div=document.createElement("div");
    let img=document.createElement("img");
    img.src=el.img;
    let name=document.createElement("div");
    name.innerText=el.name;
    let price=document.createElement("strong");
    price.innerText=el.price;
    
    div.append(img,name,price);
    document.querySelector(".recommended-container").append(div);
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


  var countDownDate = new Date("Oct 5, 2022 15:37:25").getTime();

  // Update the count down every 1 second
  var x = setInterval(function() {
  
    // Get today's date and time
    var now = new Date().getTime();
  
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
  
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
    // Display the result in the element with id="demo"
    document.querySelector(".countdown").innerHTML ="Ends in " + days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";
  
    // If the count down is finished, write some text
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("demo").innerHTML = "EXPIRED";
    }
  }, 1000);