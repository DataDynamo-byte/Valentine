document.getElementById("detailsForm").addEventListener("submit", function(e){
  e.preventDefault();

  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;

  localStorage.setItem("name", name);
  localStorage.setItem("age", age);

  // You can customize this message anytime
  localStorage.setItem(
    "message",
    'I have a very special question for you, My Love will you be my Valentine? 💖'
  );

  window.location.href = "proposal.html";
});
