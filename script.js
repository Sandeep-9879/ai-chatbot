const chatBox = document.getElementById("chat-box");
const chatForm = document.getElementById("chat-form");
const userInput = document.getElementById("user-input");

// Utility: Append message
function appendMessage(message, sender) {
  const msg = document.createElement("div");
  msg.className = `message ${sender}`;
  msg.innerHTML = message;
  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
}

// Typing animation effect
function showTyping() {
  const typing = document.createElement("div");
  typing.className = "message bot typing";
  typing.innerHTML = `<span class="dot"></span><span class="dot"></span><span class="dot"></span>`;
  chatBox.appendChild(typing);
  chatBox.scrollTop = chatBox.scrollHeight;
}

// Remove typing animation
function removeTyping() {
  const typing = document.querySelector(".typing");
  if (typing) chatBox.removeChild(typing);
}

// Simulated AI reply (you can replace this with OpenAI API later)
function generateFakeResponse(userMessage) {
  const replies = [
    "Interesting! Tell me more...",
    "That's a great idea. Have you tried it before?",
    "Hmm, I see what you mean.",
    "Let's brainstorm that together!",
    "Can you give an example?",
    "I love your curiosity!",
    "That could be a solid business idea!"
  ];
  return replies[Math.floor(Math.random() * replies.length)];
}

// Main interaction function
async function handleMessage(userMessage) {
  appendMessage(userMessage, "user");
  showTyping();

  setTimeout(() => {
    removeTyping();
    const botReply = generateFakeResponse(userMessage);
    appendMessage(botReply, "bot");
  }, 1500); // delay to simulate thinking
}

// Handle form submit
chatForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const message = userInput.value.trim();
  if (message !== "") {
    handleMessage(message);
    userInput.value = "";
  }
});
