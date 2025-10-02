// Abre e fecha o chat
document.getElementById("chatBtn").addEventListener("click", () => {
  const chatWindow = document.getElementById("chatWindow");
  chatWindow.style.display =
    chatWindow.style.display === "flex" ? "none" : "flex";
});

// Envia mensagens
document.getElementById("sendBtn").addEventListener("click", sendMessage);
document.getElementById("msgInput").addEventListener("keypress", (e) => {
  if (e.key === "Enter") sendMessage();
});

function sendMessage() {
  const input = document.getElementById("msgInput");
  const msg = input.value.trim();
  if (msg === "") return;

  const chatMessages = document.getElementById("chatMessages");

  // Mensagem do usuário
  const userMsg = document.createElement("p");
  userMsg.className = "userMsg";
  userMsg.textContent = msg;
  chatMessages.appendChild(userMsg);

  input.value = "";
  chatMessages.scrollTop = chatMessages.scrollHeight;

  // Resposta simples do bot
  setTimeout(() => {
    const botMsg = document.createElement("p");
    botMsg.className = "botMsg";
    botMsg.textContent = "🤖 Dimitri: " + getBotResponse(msg);
    chatMessages.appendChild(botMsg);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }, 600);
}

function getBotResponse(msg) {
  msg = msg.toLowerCase();
  if (msg.includes("olá") || msg.includes("oi")) return "Olá! Como vai?";
  if (msg.includes("russo")) return "Posso te ajudar a aprender russo 🇷🇺";
  if (msg.includes("obrigado")) return "De nada! 😊";
  return "Ainda estou aprendendo... pode repetir?";
}
