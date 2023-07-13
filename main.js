//main.js

function submitQuestion() {
    var input = document.getElementById("userInput");
    var chat = document.getElementById("chat");

    if (input.value !== '') {
        chat.innerHTML += "User: " + input.value + "<br>";
        input.value = '';

        // In a real application, here you'd send the question to your server to be processed by the GPT model.
        // For now, we'll just echo the input in the response.
        chat.innerHTML += "GPT: " + "Echo: Your question goes here." + "<br>";
        chat.scrollTop = chat.scrollHeight; // scroll to bottom
    }
}

function handleFileUpload() {
    var upload = document.getElementById("docUpload");

    if (upload.files.length > 0) {
        alert("File uploaded: " + upload.files[0].name);

        // In a real application, here you'd send the file to your server to be processed and stored.
    }
}
