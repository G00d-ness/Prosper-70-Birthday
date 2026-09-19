






document.addEventListener("DOMContentLoaded", () => {

    const loader = document.getElementById("loader");
    const progress = document.getElementById("loading-progress");
    const percentage = document.getElementById("loading-percentage");

    if (!loader)return;
    let value = 0;
    
    const loading = setInterval (() => {
        value += Math.floor(Math.random() * 8) + 3;

        if (value >= 100) { value = 100;
            clearInterval(loading);
        }
        if (progress) {
            progress.style.width = `${value}%`;  
        }
        if (percentage) {
            percentage.textContent = `${value}%`;  
        }
         if (value === 100){
        setTimeout(() =>{
            loader.classList.add("hide");
       
        },500);
    }
    },500);
   
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


document.addEventListener("DOMContentLoaded", () => {

const enterSite = document.getElementById("enter-site");
const welcome = document.getElementById("welcome");
const mainSite = document.getElementById("mainSite")
if (!enterSite || !welcome || !mainSite) {return;}

    enterSite.addEventListener("click", () => {
        
        mainSite.classList.add("show-site");
        welcome.classList.add("hide-welcome")
        
        welcomeScreen.classList.add("leaving");

        
        setTimeout(() => {

            welcome.style.display = "none"
            document.getElementById("home").scrollIntoView({
                behaviour: "smooth"
            });
        },7000);
    });
    
});



const playMusicBtn = document.getElementById("music-toggle");
const birthdayMusic = document.getElementById("birthdayMusic");

const songs = [
   
    "audio/Don-Moen-Thank-You-Lord-Live.mp3",
    "audio/Don-Moen-God-Will-Make-a-Way.mp3",
    "audio/Don-Moen-I-Will-Sing.mp3",
    "audio/Don-Moen-Mi-Corazon-Live.mp3",
    "audio/Don-Moen-Our-Father-Live.mp3",
    "audio/Don-Moen-Psalm-23.mp3",
    "audio/Don-Moen-Shout-to-the-Lord.mp3",
    "audio/Don-Moen-Still-Be-Still-And-Know-Medley.mp3",
     "audio/Don-Moen-Arise-Live.mp3",
    
];
let currentSong = 0;
function playCurrentSong() {
    birthdayMusic.src = songs[currentSong];
    birthdayMusic.play();
}
playMusicBtn.addEventListener("click", () =>{
    if (birthdayMusic.paused) { playCurrentSong();
        playMusicBtn.textContent = "Pause Music";
    } else {
        birthdayMusic.pause();
        playMusicBtn.textContent = "Play Music";
    }
});
birthdayMusic.addEventListener("ended", () =>{
    currentSong++;
    if (currentSong >= songs.length) {
        currentSong = 0;
    }
    playCurrentSong();
});







document.addEventListener("DOMContentLoaded", () =>{
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
 if (!menuBtn || !navLinks) {
     console.error ("Navigation elements not found." );
     return;    
 }

 menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    const isOpen = navLinks.classList.contains("active");

    menuBtn.textContent = isOpen ? "x" : "=";

    menuBtn.setAttribute("aria-expanded", isOpen);
    menuBtn.setAttribute("aria-label", isOpen ? "Close Navigation menu" : "Open Navigation menu ");

 });
 const links = navLinks.querySelectorAll("a");
 links.forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuBtn.textContent = "=";
        menuBtn.setAttribute("aria-expanded", "false");
        menuBtn.setAttribute("aria-label", "Open navigation menu");
    });
    
 });
 window.addEventListener("resize", () => {
    if (window.innerWidth >900) {
        navLinks.classList.remove("active");
        menuBtn.textContent = "=";
        menuBtn.setAttribute("aria-expanded", "false");
        
    }
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

    if (distance <= 0) {

        clearInterval(countdown);

        countdownBox.innerHTML = 
        `
        <h2>
        Happy 70th Birthday Dad
        </h2>
        `;
        return;
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



    balloon.addEventListener ("click", () => {
        balloon.classList.add("pop");
        setTimeout(() => {
            balloon.remove();
        }, 350);
    });
   
}
for (let i = 0; i < 18; i++) {
   setTimeout( 

    createBalloon, i*500);}

setInterval(() => {
    createBalloon();
}, 1800);





document.addEventListener("DOMContentLoaded", () => {
const cakeWrapper = document.getElementById("cakeWrapper");
const candles = document.querySelectorAll(".candle, .numble-candle");
const cakeInstruction = document.getElementById("cakeInstruction");
const celebrationMessage = document.getElementById("celebrationMessage");
const relightButton = document.getElementById("relightButton");
const confettiContainer = document.getElementById("confettiContainer");
let cakeActivated = false;

function blowOutCandles() { if (cakeActivated) return;
     cakeActivated =true; 
cakeWrapper.classList.add("shaking");
setTimeout(() => {
    cakeWrapper.classList.remove("shaking");
},650);

candles.forEach((candle, index) =>{
    setTimeout(() => {
        candle.classList.add("blown");
    },index * 100);
});

setTimeout(() =>{
    cakeInstruction.classList.add("hidden");
},500);

setTimeout(() =>{
    celebrationMessage.classList.add("show");
    createConfetti();
},1400);

setTimeout(() =>{
    cakeWrapper.style.filter = "drop-shadow(0 0 25px rgba(212,175,55,0.45))";
},1200);}

function createConfetti() { confettiContainer.innerHTML ="";
    const pieces = 100;
    for (let i = 0; i < pieces; i++) {

        const piece = document.createElement("span");
        piece.classList.add("confetti");
        piece.style.left = Math.random() * 100 + "%";
        piece.style.animationDelay = Math.random() * 1.5 + "s";
        piece.style.animationDuration = 2.5 + Math.random() * 2 + "s";

        const size = 5 + Math.random() * 8;
        piece.style.width = size + "px";
        piece.style.height = size * 1.5 + "px";
        if (Math.random() > 0.5) {
            piece.style.borderRadius = "50%";
        } else {
            piece.style.borderRadius = "2px";
        }
        piece.style.transform = `rotate(${Math.random() * 360}deg)`;

        const colors = [
            "#d4af37", "#f5c542", "#e8c56a", "#ffffff", "#b8860b", "#f4e3b1"];
            piece.style.background = colors[Math.floor(Math.random() * colors.length)];
            confettiContainer.appendChild(piece);
    }
    setTimeout(() =>{
        confettiContainer.innerHTML = "";
    }, 6000);
    
}

function relightCandles() {

    cakeActivated = false;
    candles.forEach((candle) => {
        candle.classList.remove("blown");
    });

    celebrationMessage.classList.remove("show");
    cakeInstruction.classList.remove("hidden");
    cakeWrapper.style.filter = "none";
    confettiContainer.innerHTML = "";
    cakeWrapper.classList.add("shaking");

    setTimeout(() => {
        cakeWrapper.classList.remove("shaking")
    }, 500);
}

cakeWrapper.addEventListener("click", blowOutCandles);
cakeWrapper.addEventListener("touchstart", (event) => {
    event.preventDefault();
    blowOutCandles();
},{
    passive:false
});

relightButton.addEventListener("click",relightCandles);

cakeWrapper.setAttribute("role", "button");
cakeWrapper.setAttribute("tabindex", "0");
cakeWrapper.setAttribute("aria-label","Interactive birthday cake. Activate to blow out the candles.");
cakeWrapper.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        blowOutCandles();
        
    }
});

});





document.addEventListener("DOMContentLoaded", () => {
    const quizQuestion =document.getElementById("quizQuestion");
     const quizAnswers = document.getElementById("quizAnswers");
      const quizNext = document.getElementById("quizNext");
       const quizFeedback = document.getElementById("quizFeedback");
        const questionNumber = document.getElementById("quizQuestionNumber");
         const scoreDisplay = document.getElementById("quizScore");
          const progressFill = document.getElementById("quizProgressFill");
           const quizBox = document.querySelector(".quiz-box");
            const quizResult = document.getElementById("quizResult");
             const finalScore = document.getElementById("finalScore");
              const resultMessage = document.getElementById("resultMessage");
               const restartButton = document.getElementById("quizRestart");

               if (!quizQuestion || !quizAnswers) {
                return;
               }
               const questions = [
                {
                    question:"In what year was Dad born?",
                    answers:[
                        "1954",
                        "1956",
                        "1958",
                        "1960"
                    ],
                    correct: 1
                },
                {
                    question:"What is Dad's full name?",
                    answers:[
                        "Prosper Emudianughe",
                        "Prosper Tadjomavwo",
                        "Emudianughe Prosper Tadjomavwo",
                        "Chief Prosper"
                    ],
                    correct: 2
                },
                {
                    question:"What position did Dad eventually retire as?",
                    answers:[
                        "Senior Lecturer",
                        "Chief Lecturer",
                        "Professor",
                        "Dean"
                    ],
                    correct: 1
                },
                {
                    question:"What did Dad study at FUTO?",
                    answers:[
                        "Pure Chemistry",
                        "Polymer Chemistry",
                        "Physics",
                        "Chemical Engineering"
                    ],
                    correct: 1
                },
                {
                    question:"How many children does Dad have?",
                    answers:[
                        "5",
                        "6",
                        "7",
                        "8"
                    ],
                    correct: 2
                },
                {
                    question:"Who are the twins in the family?",
                    answers:[
                        "Peace and Evelyn",
                        "Praise and Precious",
                        "Christy and Peace",
                        "Emma and Prudence"
                    ],
                    correct: 1
                },
                {
                    question:"In what year did Dad give his life to Christ?",
                    answers:[
                        "1979",
                        "1997",
                        "1797",
                        "1999"
                    ],
                    correct: 0
                },
                {
                    question:"How many grandchildren does Dad have?",
                    answers:[
                        "1",
                        "2",
                        "3",
                        "4"
                    ],
                    correct: 1
                },
                {
                    question:"What university did Dad did his Master Degree?",
                    answers:[
                        "University of Port Harcourt",
                        "University of Ibadan",
                        "University of Lagos",
                        "University of Benin"
                    ],
                    correct: 0
                },
                {
                    question:"What are we celebrating in 2026?",
                    answers:[
                        "Dad's 60th birthday",
                        "Dad's 65th birthday",
                        "Dad's 70th birthday",
                        "Dad's 75th birthday"
                    ],
                    correct: 2
                }
               ];
               let currentQuestion = 0;
               let score = 0;
               let answered = false;


               function loadQuestion() {
                const current = questions[currentQuestion];
                answered = false;
                quizQuestion.textContent = current.question;
                quizAnswers.innerHTML = "";
                quizFeedback.textContent = "";
                quizFeedback.className = "quizFeedback";
                quizNext.disabled = true;
                questionNumber.textContent = `Question ${currentQuestion + 1} of ${questions.length}`;
                scoreDisplay.textContent = `Score: ${score}`;
                progressFill.style.width = `${
                   ((currentQuestion + 1)/questions.length) * 100 
                }%`;
                current.answers.forEach ((answer, index) => {

                    const button =  document.createElement("button");
                    button.type = "button";
                    button.className = "quiz-answer";
                    button.textContent = answer;
                    button.addEventListener ("click", () => {
                        selectAnswer(button,index);
                    });
                    quizAnswers.appendChild(button);
                }
                );
                quizNext.textContent = currentQuestion === questions.length - 1 
                ? "See My Result" : "Next Question";
               }


               function selectAnswer(selectedButton, selectedIndex) {
                if (answered) {return;}
                answered = true;
                const current = questions[currentQuestion];
                const buttons = quizAnswers.querySelectorAll(".quiz-answer");
                buttons.forEach(button => {button.disabled = true;});
                if (selectedIndex === current.correct) {
                    selectedButton.classList.add("correct");
                    score++;
                    quizFeedback.textContent = "Correct! Well done";
                    quizFeedback.classList.add("correct-feedback");
                }
                else{
                     selectedButton.classList.add("wrong");
                     buttons[current.correct].classList.add("correct");
                     quizFeedback.textContent = `Opps! You Failed, The correct answer is 
                     ${current.answers[current.correct]}.`;
                     quizFeedback.classList.add("wrong-feedback");
                }
                scoreDisplay.textContent = `Score: ${score}`;
                quizNext.disabled = false;
               }


               quizNext.addEventListener("click",() => {
                if (!answered) {return;}
                currentQuestion++;
                if (currentQuestion >= questions.length) {
                    finishQuiz(); return;
                }
                loadQuestion();
               });


               function finishQuiz() {
                quizBox.style.display = "none";
                quizResult.classList.add("show");
                finalScore.textContent = `${score}/${questions.length}`;
                const percentage = (score / questions.length) * 100;
                if (percentage === 100) {
                    resultMessage.textContent = 
                    "Perfect Score! You know Dad's story beautifully. What a wonderful way to celebrate 70 years!";
                } else if (percentage >= 80) {
                    resultMessage.textContent =
                    "Amazing! You know Dad's story very well. Happy 70th birthday, Dad!";
                } else if (percentage >= 50) {
                    resultMessage.textContent = 
                    "Great job! You know quite a lot about Dad. Keep exploring his beautiful story.";
                } else {
                    resultMessage.textContent = 
                    "Thank you for playing! Explore the memories on this website and try the quiz again.";
                }
                    createQuizConfetti();
                }

                restartButton.addEventListener("click", () => {
                    currentQuestion = 0;
                    score = 0;
                    answered = false;
                    quizResult.classList.remove("show");
                    quizBox.style.display = "block";
                    loadQuestion();
                    document.getElementById("quiz")?.scrollIntoView({behaviour: "smooth"});
                
                });
                

                function createQuizConfetti() {
                    const container = document.createElement("div");
                    container.className = "quiz-confetti";
                    document.body.appendChild(container);
                    for (let i = 0; i < 80; i++) {
                        const piece = document.createElement("span");
                        piece.className = "quiz-confetti-piece";
                        piece.style.left = Math.random() * 100 + "vw";
                        piece.style.animationDelay = Math.random() * 1.5 + "s";
                        piece.style.transform = `rotate(${Math.random() * 360}deg)`;
                        container.appendChild(piece);
                    }
                    setTimeout(() => {
                        container.remove();
                    }, 5000);
                }
                loadQuestion();
               
            });





const backTop = document.getElementById("backToTop");
window.addEventListener("scroll", ()=> {
    if (window.scrollY > 500) {
        backTop.classList.add("show");
    }
    else{ backTop.classList.remove("show");}
} );
if (backTop) { backTop.addEventListener("click", () => {
    window.scrollTo({
        top:0, behaviour:"smooth"
    });
});
    
}

