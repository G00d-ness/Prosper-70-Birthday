import { db } from "./firebase";
import { collection, addDoc, query, where, orderBy, onSnapshot, serverTimestamp }
 from "https://www.gstatic.com/firebasejs/12.19.0/firebase-firestore.js";

 document.addEventListener("DOMContentLoaded",() =>{
    const form = document.getElementById("guestbookForm");
    const nameInput = document.getElementById("guestbookName");
    const messageInput = document.getElementById("guestbookMessage");
    const submitButton = document.getElementById("guestbookSubmit");
    const buttonText = document.getElementById("guestbookButtonText");
    const buttonLoader = document.getElementById("guestbookButtonLoader");
    const status = document.getElementById("guestbookStatus");
    const messagesContainer = document.getElementById("guestbookMessages");
    const loading = document.getElementById("guestbookLoading");
    const empty = document.getElementById("guestbookEmpty");

    if(!form) {console.error("Guestbook form was not found.")} return;

    form.addEventListener("submit", async (event) => {
        event.preventDefault();
        const name = nameInput.value.trim();
        const message = messageInput.value.trim();

        if(!name || !message) {
            status.textContent = "Please enter your name and message.";
            status.className = "guestbook-status error";
            return;
        }

        if(name.length > 50) {
            status.textContent = "Name should not exceed 50 characters.";
            status.className = "guestbook-status error";
            return;
        }
        
        if (message.length > 500) {
            status.textContent = "Message should not exceed 500 characters.";
            status.className = "guestbook-status error";
            return;
        }

        submitButton.disabled = true;
        buttonText.hidden = true;
        buttonLoader.hidden = false;
        showStatus("Sending your message...", "sending");

        try {
            await addDoc(collection(db, "guestbook"), {
                name: name,
                message: message,
                approved: false,
                createdAt: serverTimestamp()
            });


            form.reset();
            status.textContent = "Thank you! Your message has been received and is waiting for approval.",
            "success";
            status.className = "guestbook-status success";
        }

        catch (error) {
            console.error("Error adding guestbook message: ", error);
            status.textContent = "Sorry, your message could not be sent. Please try again.";
            status.className = "guestbook-status error";
        }

        submitButton.disabled = false;
       buttonText.hidden = false;
        buttonLoader.hidden = true; 
    });

    const guestbookQuery = query(collection(db, "guestbook"), 
    where("approved", "==", true), orderBy("createdAt", "desc"));

    onSnapshot(guestbookQuery, (snapshot) => {loading.hidden = true;
        messagesContainer.innerHTML = ""; 

    if(snapshot.empty){ empty.hidden =false; return;}
    empty.hidden = true;
    snapshot.forEach((docSnapshot) =>{
        const data = docSnapshot.data();
        createMessageCard(data); });
}, (error) =>{
    console.error("Error loading guestbook:", error);
    loading.textContent = "Unable to load messages right now.";
});
 function createMessageCard(data) {
    const card = document.createElement("article");
    card.className = "message-card";
    const name = document.createElement("h4");
    name.textContent = data.name || "Guest";
    const message = document.createElement("p");
    message.textContent = data.message || "";
    card.appendChild(name);
    card.appendChild(message);
    messagesContainer.appendChild(card);
 }
});
 