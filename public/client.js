const socket = io();
const editor = document.getElementById("editor");

socket.on("connect", () => {
  console.log("Connected to the server");
});

socket.on("disconnect", () => {
  console.log("Disconnected from the server");
});

socket.on("text-update", (text) => {
  editor.value = text;
});

editor.addEventListener("input", () => {
  const text = editor.value;
  socket.emit("text-update", text);
});
