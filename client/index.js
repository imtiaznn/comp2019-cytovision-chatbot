  const messagesDiv = document.getElementById("messages");

  const sessionId = "session_" + Math.random().toString(36).substr(2, 9);

  // Connect to Rasa SocketIO endpoint
  const socket = io("http://localhost:5005", {
    transports: ["websocket"],
  });

  function addMessage(text, sender) {
    const div = document.createElement("div");
    div.className = `message ${sender}`;
    div.innerText = text;
    messagesDiv.appendChild(div);
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
  }

  function sendMessage() {
    const msg = document.getElementById("user-input").value;
    if (!msg) return;

    addMessage(msg, "user");

    socket.emit("user_uttered", {
      message: msg,
      session_id: sessionId
    });

    document.getElementById("user-input").value = "";
  }

  function addMenuMessage() {

  }

  // Request socket session
  socket.emit("session_request", {session_id: sessionId });

  // Listen for session confirmation (optional)
  socket.on("session_confirm", function(data) {
    console.log("Session started:", data);
  });

  // Listen for bot responses
  socket.on("bot_uttered", function (data) {
    console.log("Bot event received:", data); // debug

    const msg =
      data.text ||                // Standard Rasa responses
      data.message ||             // LiteLLM / rephrased responses
      (data.custom && data.custom.text) ||  // custom payloads
      JSON.stringify(data);        // fallback for debugging

    if (msg) addMessage(msg, "bot");
  });

document.addEventListener('DOMContentLoaded', () => {
    const chatToggle = document.getElementById('chatbot-toggle');
    const chatBox = document.getElementById('chatbox');
    const closeBtn = document.getElementById('chatbox-close');
    const userInput = document.getElementById("user-input");

    // Toggle chatbox when clicking the container (icon or text)
    chatToggle.addEventListener('click', () => {
        chatBox.classList.toggle('active');
    });

    // Close the chatbox when clicking the X button
    closeBtn.addEventListener('click', (e) => {
        e.stopPropagation(); // prevents triggering parent click
        chatBox.classList.remove('active');
    });

    userInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            sendMessage();
    }
});
});
