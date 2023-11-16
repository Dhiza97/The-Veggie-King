const imageContainer = document.getElementById("image-container");
const myImage = document.getElementById("myImage");

const imageArray = ["./assets/images/hero-section-slide-food-1.png", 
                    "./assets/images/hero-section-slide-food-2.png", 
                    "./assets/images/hero-section-slide-food-3.png",
                    "./assets/images/hero-section-slide-food-4.png"]; // Add more image URLs as needed
let currentIndex = 0;

setInterval(() => {
   currentIndex = (currentIndex + 1) % imageArray.length;
   myImage.src = imageArray[currentIndex];
}, 3000); // Change image every 3 seconds (adjust as needed)

