window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    if (loader){
        setTimeout(() =>{
            loader.style.opacity ="0";
            loader.style.visibility = "hidden";
        },3500);
    }
});



const particleContainer = document.getElementById("particles");
function createParticle () {

    if (!particleContainer) return;
    
    const particle = document.createElement("span");
    particle.classList.add("particle");

    const size = Math.random() * 6 + 2;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;

    particle.style.left = `${Math.random() * 100}%`;

    particle.style.animationDuration = `${Math.random() * 5 + 5}s`;

    particle.style.animationDelay = `${Math.random() * 5}s`;

    const shapes = ["circle", "star", "sparkle"];
        const shape = shapes[Math.floor(Math.random() * shapes.length)];
    particle.classList.add(shape);
    particleContainer.appendChild(particle);
    
}
for (let i = 0; i <60; i++) {
    createParticle();
    
}



const enterSite = document.getElementById("enter-site");
const welcomeScreen = document.getElementById("welcome-screen");

document.body.classList.add("welcome-active");

if (enterSite && welcomeScreen) {

    enterSite.addEventListener("click", () => {
        
        welcomeScreen.classList.add("hide");
       
        document.body.classList.remove("welcome-active");

        startConfetti();
        setTimeout(() => {
            document.getElementById("home").scrollIntoView({
                behaviour: "smooth"
            });
        },700);
    });
    
}







const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");
 if (menuBtn) { menuBtn.addEventListener ("click", () => {
    navLinks.classList.toggle("active");
    menuBtn.classList.toggle("open");
 });    
 }

 document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});






const birthdayDate = new Date("September 20, 2026 00:00:00").getTime();

const countdown = setInterval(() =>{

    const now = new Date().getTime();

    const distance = birthdayDate - now;

    const days = Math.floor(

        distance /
            (1000 * 60 * 60 * 24)
            
    );

     const hours = Math.floor(
        (distance %
            (1000 * 60 * 60 * 24))
            /(1000 * 60 * 60)
    );

     const minutes = Math.floor(
        (distance %
            (1000 * 60 * 60))
            /(1000 * 60)
    );

    const seconds = Math.floor(
        (distance %
            (1000 * 60))
            /1000
    );


    const countdownBox = document.getElementById("countdown");

    if (countdownBox) {

        countdownBox.innerHTML = `
        <div class = "time-box">
        <h3>${days}</h3>
        <p>Days</p>
        </div>
        
        <div class = "time-box">
        <h3>${hours}</h3>
        <p>Hours</p>
        </div>
        
        <div class = "time-box">
        <h3>${minutes}</h3>
        <p>Minutes</p>
        </div>
        
         <div class = "time-box">
        <h3>${seconds}</h3>
        <p> Seconds</p>
        </div>
        `;
        
    }

    if (distance < 0) {

        clearInterval(countdown);
        countdownBox.innerHTML = 
        `
        <h2>
        Happy 70th Birthday Dad
        </h2>
        `;
    }

},1000);








const balloonContainer = document.getElementById("balloon-container");

const balloonColors = [

    "gold", "navy", "blue", "white"
];

function createBalloon() {

    if (!balloonContainer) return;


    const balloon = document.createElement("div");
    balloon.classList.add('balloon');


    const color = balloonColors[Math.floor(Math.random() * balloonColors.length) ];
    balloon.classList.add(color);

    balloon.style.left = `${Math.random()*100}%`;

    const size = Math.random() * 25 + 45;
    
    balloon.style.width = `${size}px`;
    balloon.style.height = `${size * 1.25}px`;

    balloon.style.animationDuration = `${Math.random() * 8 + 10}s`;
      balloon.style.animationDuration = `${Math.random() * 8}s`;
      balloonContainer.appendChild(balloon);



    //balloon.addEventListener ("click", () => {
      //  balloon.classList.add("pop");
        setTimeout(() => {
            balloon.remove();
        }, 20000);
   
}
for (let i = 0; i < 18; i++) {
   setTimeout(() =>{
    createBalloon();}, i*500);}

setInterval(() => {
    createBalloon();
}, 1800);

