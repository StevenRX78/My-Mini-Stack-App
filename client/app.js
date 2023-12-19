// Call my API
async function getMessage() {
    // Call our API with fetch
    const response = await fetch("http://localhost:8080/message");

    // Turn our response into json
    const json = await response.json();

    // Put message on the page
    const p = document.getElementById("message");
    p.textContent = json.message;
}

getMessage();