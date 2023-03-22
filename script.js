let messageList = document.getElementById("messageList");
let messages = JSON.parse(localStorage.getItem("messages")) || [];

function addMessage() {
  let nameInput = document.getElementById("name");
  let messageInput = document.getElementById("message");
  let name = nameInput.value;
  let message = messageInput.value;
  let newMessage = document.createElement("li");
  let messageText = document.createTextNode(name + ": " + message);
  newMessage.appendChild(messageText);
  messageList.appendChild(newMessage);
  messages.push({ name: name, message: message });
  localStorage.setItem("messages", JSON.stringify(messages));
  nameInput.value = "";
  messageInput.value = "";
}

for (let i = 0; i < messages.length; i++) {
  let newMessage = document.createElement("li");
  let messageText = document.createTextNode(
    messages[i].name + ": " + messages[i].message
  );
  newMessage.appendChild(messageText);
  messageList.appendChild(newMessage);
}
