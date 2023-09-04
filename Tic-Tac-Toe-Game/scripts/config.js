function openPlayerConfig(event) {
  const selectedPlayerId = +event.target.dataset.playerid; // + "1" => 1(number 1)
  editedPlayer = selectedPlayerId;
  playerConfigOverlayElement.style.display = "block";
  backdropElement.style.display = "block";
}

function closePlayerConfig() {
  playerConfigOverlayElement.style.display = "none";
  backdropElement.style.display = "none";
  formElement.firstElementChild.classList.remove("error");
  errorOutputElement.textContent = "";
  formElement.firstElementChild.lastElementChild.value = "";

  // Rövidebb változat az id szerint választom ki az elemet
  //   formElement.playername.value = "";
}

function savePlayerConfig(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const enteredPlayerName = formData.get("playername").trim(); // trim - "    Max    " => "Max"

  // enteredPlayerName === ""
  if (!enteredPlayerName) {
    event.target.firstElementChild.classList.add("error");
    errorOutputElement.textContent = "Please enter a valid name!";
    return; // stops the code execution
  }

  const updatedPlayerDataElement = document.getElementById(
    "player-" + editedPlayer + "-data"
  );
  updatedPlayerDataElement.children[1].textContent = enteredPlayerName;

  // Another way:
  //   if (editedPlayer === 1) {
  //     players[0].name = enteredPlayerName;
  //   } else {
  //     players[1].name = enteredPlayerName;
  //   }

  // Másik megoldás:
  players[editedPlayer - 1].name = enteredPlayerName;

  closePlayerConfig();
}
