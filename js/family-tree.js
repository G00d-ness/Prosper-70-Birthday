const familyMembers = {
    dad: {
        name: "Mr. Prosper Tadjomavowe Emudianughe",
        role: "Celebrant | Husband | Father | Grandfather | Educator",
        photo: "images/oldprosper.JPG",
        education: "Bachelor's Degree in Polymer and Textile Science Technology Federal University of Technology Owerri (FUTO) and Master's Degree in Polymer Technology from University of Port Harcourt.",
        story: "Born on 20 September 1956 in Delta State. He is a devoted Christian, educator, former Chief Lecturer and a man whose life has been dedicated to faith, family and service."
    },
    mum: {
        name: "Mrs. Anneth Otavero Emudianughe",
        role: "Beloved Wife | Mother | Grandmother | Educator | Real Estate Agent ",
        photo: "images/mum.JPG",
        education: "Teacher Training College, Mosogar, Delta State and National Certificate in Education in English Education at Port Harcourt",
        story: "For over three decades, she has been a faithful partner to her husband standing beside him through every season of life, together they have built a home where faith, discipline, respect and education is treasured."
    },
    christy: {
        name: "Miss. Christy Oghenero",
        role: " First Child",
        photo: "images/children/VRZJ5441.JPG",
        education: "Master's Degree in Biochemistry from University of Port Harcourt.",
        story: " She is a devoted Christian, sister, cook, and business woman, CEO of COOK'S enterprises and also nurtured and assisted in the growth of her siblings."
    },
    peace: {
        name: "Mrs. Peace Ufuoma Agbra",
        role: " Second Child | First Daughter ",
        photo: "images/children/IMG_5860.JPG",
        education: "Master's Degree in Industrial Chemistry from University of Lagos.",
        story: "She is a devoted Christian, mother, sister, wife, CEO of Peake Sparkle, also assisted in taking care of her siblings."

    },
    evelyn: {
        name: "Miss Evelyn Iroroyokpako",
        role: "Third Child | Second Daughter",
        photo: "images/eve.JPG",
        education: " Master's Degree in Geophysics from University of Port Harcourt.",
        story: "She is a devoted Christian, sister, designer, analyst, CEO OF Evaro Stitches, always in charge of planning birthday parties and making cakes."
    },
    prudence: {
        name: "Miss Prudence Okeoghene",
        role: "Fourth Child | Third Daughter",
        photo: "images/prudy.JPG",
        education: "Ph.D Candidate in Communication at University of Port Harcourt.",
        story: "She is a devoted Christian, tech enthusiast, writer, spoken word poet, linguist also assisted in taking care of her siblings ."
    },
    emma: {
        name: "Master Emmanuel Onanefe",
        role: "Fifth Child | First Son ",
        photo: "images/emma.JPG",
        education: "Bachelor's Degree in Animal Science from University of Port Harcourt.",
        story: "He is a devoted Christian, brother, tech enthusiast, and supporter of his family and loved ones."
    },
    praise: {
        name: "Miss Praise Ejiroghene",
        role: "Sixth Child | Fourth Daughter | First twin",
        photo: "images/children/IMG_2692.JPG",
        education: "Bachelor's Degree in Chemical Engineering from University of Port Harcourt.",
        story: "She is a devoted Christian, sister, educator, tech enthusiast, sustainability driver and a lover of her family."
    },
    precious: {
        name: "Miss Precious Akpevweoghene",
        role: "Seventh Child | Fifth Daughter | Second Twin",
        photo: "images/children/KWM_2173.jpg",
        education: "Bachelor's Degree in Human Anatomy from University of Port Harcourt.",
        story: "She is a devoted Christian, sister, content creator, social media manager, auxillary nurse and a lover of her family."
        },
            kelvin: {
        name: "Mr. Kelvin Agbra",
        role: "Son In-law",
        photo: "images/children/DSC_9990.JPG",
        education: "Master's Degree in Biochemistry from University of Lagos.",
        story: " He is a devoted Christian, husband, father, son, fitness enthusiast, and a lover of his family."
        },
    stefan: {
        name: "Master Stefan Ogheneyoma Agbra",
        role: "Grandson",
        photo: "images/children/DSC_5162.JPG",
        education: "Completed nursery one.",
        story: "He is a devoted Christian, and a lover of his family."
    },
    eliana: {
        name: "Miss Eliana Brume Agbra",
        role: "Granddaughter",
        photo: "images/children/DSC_5240.JPG",
        education: "Completed Prenursery.",
        story: "She is a devoted Christian, and a lover of her family."
    }

};

const familyCards = document.querySelectorAll(".tree-person");
const modal = document.getElementById("familyModal");
const modalPhoto = document.getElementById("modalPhoto");
const modalName = document.getElementById("modalName");
const modalRole = document.getElementById("modalRole");
const modalEducation = document.getElementById("modalEducation");
const modalBiography = document.getElementById("modalBiography");
const closeModal = document.querySelector(".close-modal");

function openFamilyProfile(member) {
    const person = familyMembers[member];
    if (!person) {
        return;

    }
    modalPhoto.src = person.photo;

    modalName.textContent = person.name;
  
    modalRole.textContent = person.role;
  
    modalEducation.textContent = person.education;
  
    modalBiography.textContent = person.story;
  
    modal.classList.add("active");
  
    document.body.style.overflow = "hidden";
}


familyCards.forEach(card => {
    card.addEventListener(
        "click", () => {
            const member = card.dataset.member;
            openFamilyProfile(member);
        }
    );

});

closeModal.addEventListener(
    "click", () => {
        modal.classList.remove("active");
        document.body.style.overflow = "auto";
    });


const familyOrder = [
    "dad", "mum", "christy",
    "peace", "evelyn", "prudence",
    "emma", "praise", "precious",
    "kelvin", "stefan", "eliana"
];

let currentMemberIndex = 0;

function showFamilyMember(member) {
    const index = familyOrder.indexOf(member);

    if (index !== -1) {
        currentMemberIndex = index;
    }
    openFamilyProfile(member);

}

const nextButton = document.getElementById("nextMember");

if (nextButton) {
    nextButton.addEventListener(
        "click", () => {
            currentMemberIndex++;

            if (currentMemberIndex >= familyOrder.length) {
                currentMemberIndex = 0;

            }
            const nextMember = familyOrder[currentMemberIndex];
            openFamilyProfile(nextMember);
        });
}

const modalButtons = document.querySelector(".modal-buttons");
const previousButton = document.createElement("button");
previousButton.className = "btn";
previousButton.textContent = "< Previous Member";

if (modalButtons) {
    modalButtons, insertBefore(previousButton, nextButton);
}

previousButton.addEventListener(
    "click", () => {
        currentMemberIndex--;

        if (currentMemberIndex < 0) {
            currentMemberIndex = familyOrder.length - 1;

        }
        const previousMember = familyOrder[currentMemberIndex];
        openFamilyProfile(previousMember);
    });

 document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {
        modal.classList.remove("active");
        document.body.style.overflow = "auto";

    }
});


document.addEventListener("keydown", (event) => {

    if (!modal.classList.contains("active")
    ) {
        return;
    }

    if (event.key === "ArrowRight") {
        currentMemberIndex++;

        if (currentMemberIndex >= familyOrder.length) {
            currentMemberIndex = 0;
        }
        openFamilyProfile(familyOrder[currentMemberIndex]

        );

    }


    if (event.key === "ArrowLeft") {
        currentMemberIndex--;

        if (currentMemberIndex < 0) {
            currentMemberIndex = familyOrder.length - 1;
        }
        openFamilyProfile(familyOrder[currentMemberIndex]

        );

    }

});

modal.addEventListener("click", (event) => {

    if (event.target === modal) {
        modal.classList.remove("active");
        document.body.style.overflow = "auto";

    }
});

function profileAnimation() {
    const content = document.querySelector(".family-modal-content");

    if (content) {

        content.style.animation = "none";
        setTimeout(() => {
            content.style.animation = "modalFade .4s ease";
        }, 10);

    }
}

const originalOpenProfile = openFamilyProfile;

openFamilyProfile = function (member) {
    originalOpenProfile(member);
    profileAnimation();

};

let touchStartX = 0;
let touchEndX = 0;

modal.addEventListener("touchstart", (event) => {
    touchStartX = event.changedTouches[0].screenX;
});

modal.addEventListener("touchend", (event) => {
    touchEndX = event.changedTouches[0].screenX;
});

if (touchEndX < touchStartX -50) {
    currentMemberIndex++;

    if (currentMemberIndex >= familyOrder.length) {
        currentMemberIndex = 0;
    }

    openFamilyProfile(familyOrder[currentMemberIndex]);
    
}

if (touchEndX > touchStartX + 50) {
    currentMemberIndex--;

    if (currentMemberIndex < 0) {
        currentMemberIndex = familyOrder.length - 1;
    }

    openFamilyProfile(familyOrder[currentMemberIndex]);
    
}


const treePeople = document.querySelectorAll(".tree-person");
const treeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show-tree-member");
        }
    });
}, { threshold: .2 });

treePeople.forEach((person) => {
    treeObserver.observe(person);
});