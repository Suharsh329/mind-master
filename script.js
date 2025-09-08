// Import game data
import { defaultGameData } from "./gameData1.js";
// Import editor functions
import { openGameEditor, initEditorEventListeners } from "./editor.js";

// Game state - gameState needs to be exportable for editor.js
export let gameState = {
  currentBoard: 0,
  boards: [],
  players: [],
  currentPlayer: null, // Player selected in question modal for current question
  activePlayer: null, // Player whose turn it generally is / last scored
};

// DOM elements (those NOT exclusively for editor)
const boardContainer = document.getElementById("board-container");
const modal = document.getElementById("question-modal");
const questionText = document.querySelector(".question-text");
const answerReveal = document.querySelector(".answer-reveal");
const boardIndicator = document.getElementById("board-indicator");
const playersBar = document.getElementById("players-bar");
const playerModal = document.getElementById("player-modal");
// const editorModal = document.getElementById('editor-modal'); // Moved to editor.js
const playerButtons = document.getElementById("player-buttons");
const postRevealActions = document.getElementById("post-reveal-actions");
const playerButtonsPost = document.getElementById("player-buttons-post");
const adjustScoreModal = document.getElementById("adjust-score-modal");
const adjustScorePlayerSelect = document.getElementById("adjust-score-player-select");
const adjustScorePointsInput = document.getElementById("adjust-score-points-input");
const finalScoresModal = document.getElementById("final-scores-modal");
const finalScoresList = document.getElementById("final-scores-list");

// Section navigation elements
const gameSelectionSection = document.getElementById("game-selection-section");
const mainGameSection = document.getElementById("main-game-section");
const backToSelectionBtn = document.getElementById("back-to-selection");

// Current question reference
let currentQuestion = null;
// let tempBoardsData = null; // Moved to editor.js

// Available game data files - dynamically populated
let availableGames = [];

let currentGameId = "gameData1"; // Default game

// Section Navigation Functions
function showGameSelection() {
  gameSelectionSection.style.display = "block";
  mainGameSection.style.display = "none";
}

function showMainGame() {
  gameSelectionSection.style.display = "none";
  mainGameSection.style.display = "block";
}

// Detect available game data files
async function detectAvailableGames() {
  const gameFiles = [];

  // Always include the base gameData1.js
  try {
    const gameDataModule = await import("./gameData1.js");
    gameFiles.push({
      id: "gameData1",
      name: "Game 1",
      boards: gameDataModule.defaultGameData.boards.length,
    });
  } catch (error) {
    console.error("Failed to load gameData1.js:", error);
  }

  // Manually check for known game files to avoid MIME type errors
  // This is safer than dynamic detection with non-existent files
  const knownGameFiles = ["gameData2"]; // Add more as you create them: 'gameData3', 'gameData4', etc.

  for (const gameId of knownGameFiles) {
    try {
      const gameDataModule = await import(`./${gameId}.js`);
      if (gameDataModule && gameDataModule.defaultGameData) {
        const gameNumber = gameId.replace("gameData", "") || "2";
        gameFiles.push({
          id: gameId,
          name: `Game ${gameNumber}`,
          boards: gameDataModule.defaultGameData.boards.length,
        });
      }
    } catch (error) {
      // File doesn't exist or has an error, skip silently
      console.log(`${gameId}.js not found or has errors, skipping`);
    }
  }

  availableGames = gameFiles;
  return gameFiles;
}

// Initialize game
document.addEventListener("DOMContentLoaded", async () => {
  await detectAvailableGames();
  renderGameSelection();
  await loadGame();
  renderPlayers();
  renderBoard();
  setupEventListeners();
  initEditorEventListeners(); // Initialize editor-specific listeners

  // Check if we should show game selection or main game
  const hasGameInProgress = localStorage.getItem("mindMasterGameState");
  if (hasGameInProgress && gameState.players.length > 0) {
    showMainGame(); // Resume game in progress
  } else {
    showGameSelection(); // Start with game selection
  }
});

// Load game from localStorage or use default
async function loadGame() {
  // Load saved game ID
  const savedGameId = localStorage.getItem("mindMasterCurrentGame");
  if (savedGameId) {
    currentGameId = savedGameId;
  }

  const savedGame = localStorage.getItem("mindMasterGame");
  if (savedGame) {
    gameState = JSON.parse(savedGame);
    if (!gameState.hasOwnProperty("activePlayer") && gameState.players.length > 0) {
      gameState.activePlayer = 0;
    }
    if (!gameState.hasOwnProperty("currentPlayer")) {
      // For older saves
      gameState.currentPlayer = null;
    }
  } else {
    // Load the appropriate game data based on currentGameId
    try {
      let selectedGameData;
      if (currentGameId === "gameData1") {
        selectedGameData = defaultGameData; // Use already imported gameData1.js
      } else {
        const gameDataModule = await import(`./${currentGameId}.js`);
        selectedGameData = gameDataModule.defaultGameData;
      }

      gameState = {
        currentBoard: 0,
        boards: JSON.parse(JSON.stringify(selectedGameData.boards)), // Deep copy
        players: JSON.parse(JSON.stringify(selectedGameData.defaultPlayers)), // Deep copy
        activePlayer: 0,
        currentPlayer: null,
      };
    } catch (error) {
      console.error(`Failed to load game data for ${currentGameId}:`, error);
      // Fallback to default game data
      gameState = {
        currentBoard: 0,
        boards: JSON.parse(JSON.stringify(defaultGameData.boards)),
        players: JSON.parse(JSON.stringify(defaultGameData.defaultPlayers)),
        activePlayer: 0,
        currentPlayer: null,
      };
    }
  }
  saveGame(); // Save to ensure structure is current
}

// Save game to localStorage - needs to be exportable for editor.js
export function saveGame() {
  localStorage.setItem("mindMasterGame", JSON.stringify(gameState));
  localStorage.setItem("mindMasterCurrentGame", currentGameId);
}

// Setup event listeners (gameplay related)
function setupEventListeners() {
  // New game button
  document.getElementById("new-game").addEventListener("click", async () => {
    if (confirm("Are you sure you want to start a new game? All progress will be lost.")) {
      // Load the current game data
      let selectedGameData;
      try {
        if (currentGameId === "gameData2") {
          const gameDataModule = await import("./gameData2.js");
          selectedGameData = gameDataModule.defaultGameData;
        } else {
          selectedGameData = defaultGameData;
        }

        gameState = {
          currentBoard: 0,
          boards: JSON.parse(JSON.stringify(selectedGameData.boards)),
          players: gameState.players, // Keep current players, just reset scores
          activePlayer: gameState.players.length > 0 ? 0 : null,
          currentPlayer: null,
        };
        gameState.players.forEach((player) => {
          player.score = 0;
        });
        saveGame();
        renderPlayers();
        renderBoard();
      } catch (error) {
        console.error("Failed to load game data for new game:", error);
        alert("Failed to start new game. Please refresh the page.");
      }
    }
  });

  // Next board button
  document.getElementById("next-board").addEventListener("click", () => {
    if (gameState.currentBoard < gameState.boards.length - 1) {
      gameState.currentBoard++;
      saveGame();
      renderBoard();
    }
  });

  // Previous board button
  document.getElementById("prev-board").addEventListener("click", () => {
    if (gameState.currentBoard > 0) {
      gameState.currentBoard--;
      saveGame();
      renderBoard();
    }
  });

  // Manage Players button
  document.getElementById("manage-players").addEventListener("click", openPlayerModal);
  document.getElementById("close-player-modal").addEventListener("click", () => {
    playerModal.style.display = "none";
  });
  document.getElementById("add-player").addEventListener("click", addPlayer);
  document.getElementById("new-player-name").addEventListener("keypress", (e) => {
    if (e.key === "Enter") addPlayer();
  });

  // Edit Game button - calls imported function
  document.getElementById("edit-game").addEventListener("click", openGameEditor);

  // Question Modal Listeners
  const closeQuestionModalBtn = document.getElementById("close-modal-question");
  if (closeQuestionModalBtn) {
    closeQuestionModalBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      closeModal();
    });
  }
  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      closeModal();
    }
  });
  document.getElementById("reveal-answer").addEventListener("click", (e) => {
    e.stopPropagation();
    revealAnswerAndShowActions();
  });
  document.getElementById("award-points-correct").addEventListener("click", (e) => {
    e.stopPropagation();
    handleScoreAdjustment(true);
  });
  document.getElementById("deduct-points-incorrect").addEventListener("click", (e) => {
    e.stopPropagation();
    handleScoreAdjustment(false);
  });
  document.getElementById("penalize-incorrect-pre-reveal").addEventListener("click", (e) => {
    e.stopPropagation();
    handlePreRevealPenalty();
  });

  // Adjust Score Modal Listeners
  document.getElementById("close-adjust-score-modal").addEventListener("click", () => {
    adjustScoreModal.style.display = "none";
  });
  document.getElementById("adjust-score-add-btn").addEventListener("click", () => {
    handleManualScoreChange(true);
  });
  document.getElementById("adjust-score-deduct-btn").addEventListener("click", () => {
    handleManualScoreChange(false);
  });

  // Final Scores Modal Button
  document.getElementById("final-scores-new-game-btn").addEventListener("click", async () => {
    finalScoresModal.style.display = "none";
    // Directly call the new game logic from the main button
    // but without the confirmation, as this is a direct action
    try {
      let selectedGameData;
      if (currentGameId === "gameData2") {
        const gameDataModule = await import("./gameData2.js");
        selectedGameData = gameDataModule.defaultGameData;
      } else {
        selectedGameData = defaultGameData;
      }

      gameState = {
        currentBoard: 0,
        boards: JSON.parse(JSON.stringify(selectedGameData.boards)),
        players: gameState.players, // Keep current players
        activePlayer: gameState.players.length > 0 ? 0 : null,
        currentPlayer: null,
      };
      gameState.players.forEach((player) => {
        player.score = 0;
      });
      saveGame();
      renderPlayers();
      renderBoard();
    } catch (error) {
      console.error("Failed to load game data for new game:", error);
      alert("Failed to start new game. Please refresh the page.");
    }
  });

  // Back to selection button
  backToSelectionBtn.addEventListener("click", () => {
    showGameSelection();
  });
}

// Render the players bar
function renderPlayers() {
  playersBar.innerHTML = "";

  gameState.players.forEach((player, index) => {
    const playerCard = document.createElement("div");
    playerCard.className = `player-card ${index === gameState.activePlayer ? "active-player" : ""}`;

    playerCard.innerHTML = `
            <div class="player-name">${player.name}</div>
            <div class="player-score">${player.score}</div>
        `;

    // Click to set active player ONLY
    playerCard.addEventListener("click", () => {
      gameState.activePlayer = index;
      saveGame();
      renderPlayers(); // Re-render to show active status
    });

    playersBar.appendChild(playerCard);
  });

  // Add "Adjust Scores" button to the players bar if there are players
  if (gameState.players.length > 0) {
    const adjustScoresBtn = document.createElement("button");
    adjustScoresBtn.id = "open-adjust-score-modal-btn";
    adjustScoresBtn.textContent = "Adjust Scores";
    adjustScoresBtn.className = "player-bar-adjust-btn"; // For styling
    adjustScoresBtn.addEventListener("click", () => {
      openAdjustScoreModal(gameState.activePlayer); // Open with current active player selected
    });
    playersBar.appendChild(adjustScoresBtn);
  }
}

// Render the current board - needs to be exportable for editor.js
export function renderBoard() {
  boardContainer.innerHTML = "";
  if (!gameState.boards || gameState.boards.length === 0 || !gameState.boards[gameState.currentBoard]) {
    boardContainer.innerHTML =
      '<p style="text-align:center;">No game data loaded or board is empty. Try starting a new game or editing game data.</p>';
    boardIndicator.textContent = "Board: 0/0";
    return;
  }
  const currentBoardData = gameState.boards[gameState.currentBoard];

  boardIndicator.textContent = `Board: ${gameState.currentBoard + 1}/${gameState.boards.length}`;

  currentBoardData.categories.forEach((category) => {
    const categoryElement = document.createElement("div");
    categoryElement.className = "category";
    categoryElement.textContent = category;
    boardContainer.appendChild(categoryElement);
  });

  for (let row = 0; row < 5; row++) {
    for (let col = 0; col < 5; col++) {
      // Ensure questions exist for this col/row
      if (currentBoardData.questions[col] && currentBoardData.questions[col][row]) {
        const questionData = currentBoardData.questions[col][row];
        const card = document.createElement("div");
        card.className = questionData.revealed ? "card revealed" : "card";
        card.textContent = questionData.revealed ? "" : questionData.points;

        if (!questionData.revealed) {
          card.addEventListener("click", () => openQuestion(col, row));
        }
        boardContainer.appendChild(card);
      } else {
        // Create an empty/placeholder card if data is missing (e.g. during faulty edit)
        const emptyCard = document.createElement("div");
        emptyCard.className = "card revealed"; // Treat as revealed/unclickable
        boardContainer.appendChild(emptyCard);
      }
    }
  }
}

// Open question modal
function openQuestion(categoryIndex, questionIndex) {
  const currentBoardData = gameState.boards[gameState.currentBoard];
  currentQuestion = {
    categoryIndex,
    questionIndex,
    data: currentBoardData.questions[categoryIndex][questionIndex],
  };

  questionText.textContent = currentQuestion.data.question;
  answerReveal.style.display = "none";
  answerReveal.textContent = "";
  postRevealActions.style.display = "none";

  document.getElementById("award-points-correct").disabled = false;
  document.getElementById("deduct-points-incorrect").disabled = false;
  document.getElementById("penalize-incorrect-pre-reveal").disabled = false;
  document.getElementById("reveal-answer").disabled = false;

  renderPlayerButtons(playerButtons);
  gameState.currentPlayer = null;

  modal.style.display = "block";
}

// Render player selection buttons in the specified container
function renderPlayerButtons(containerElement) {
  containerElement.innerHTML = "";

  gameState.players.forEach((player, index) => {
    const button = document.createElement("button");
    button.textContent = player.name;
    // Check if this player is the currently selected one for this question context
    button.className = index === gameState.currentPlayer ? "active-player" : "";
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      gameState.currentPlayer = index;

      // Update button styles in the *correct* container
      const allButtons = containerElement.querySelectorAll("button");
      allButtons.forEach((btn) => btn.classList.remove("active-player"));
      button.classList.add("active-player");
    });

    containerElement.appendChild(button); // CORRECTED: Use containerElement
  });
}

// Close question modal
function closeModal() {
  modal.style.display = "none";
  currentQuestion = null;
  renderBoard(); // Refresh the board to update card states

  // Re-enable scoring buttons when modal is closed
  document.getElementById("award-points-correct").disabled = false;
  document.getElementById("deduct-points-incorrect").disabled = false;
  checkAllQuestionsRevealed(); // Check if all questions are revealed after modal closes
}

// Reveal answer and show manual scoring actions
function revealAnswerAndShowActions() {
  if (!currentQuestion) return;

  answerReveal.textContent = "The answer is: " + currentQuestion.data.answer;
  answerReveal.style.display = "block";
  markQuestionRevealed();

  postRevealActions.style.display = "block";
  renderPlayerButtons(playerButtonsPost);

  document.getElementById("penalize-incorrect-pre-reveal").disabled = true;
  document.getElementById("reveal-answer").disabled = true;
}

function handlePreRevealPenalty() {
  if (!currentQuestion) return;
  if (gameState.currentPlayer === null) {
    alert("Please select a player to penalize.");
    return;
  }

  const points = currentQuestion.data.points;
  gameState.players[gameState.currentPlayer].score -= points;

  gameState.activePlayer = gameState.currentPlayer; // Player who was penalized
  renderPlayers();
  saveGame();

  answerReveal.textContent = "Penalty applied to " + gameState.players[gameState.currentPlayer].name + ".";
  answerReveal.style.display = "block";
}

function handleScoreAdjustment(isCorrect) {
  if (!currentQuestion) return;
  if (gameState.currentPlayer === null) {
    alert("Please select a player first.");
    return;
  }

  const points = currentQuestion.data.points;

  if (isCorrect) {
    gameState.players[gameState.currentPlayer].score += points;
  } else {
    gameState.players[gameState.currentPlayer].score -= points;
  }

  gameState.activePlayer = gameState.currentPlayer; // Last player who got points becomes active
  renderPlayers();
  saveGame();

  // Optionally, disable buttons after scoring to prevent multiple clicks for the same reveal
  document.getElementById("award-points-correct").disabled = true;
  document.getElementById("deduct-points-incorrect").disabled = true;
  // Re-enable these in openQuestion or when modal closes if desired.
}

// Mark the current question as revealed
function markQuestionRevealed() {
  if (!currentQuestion) return;

  gameState.boards[gameState.currentBoard].questions[currentQuestion.categoryIndex][currentQuestion.questionIndex].revealed = true;
  saveGame();
}

function checkAllQuestionsRevealed() {
  // Iterate over all boards. This works for one or multiple boards.
  for (const board of gameState.boards) {
    for (const category of board.questions) {
      for (const question of category) {
        if (!question.revealed) {
          // If any question on any board is not revealed, we can exit early.
          return;
        }
      }
    }
  }

  // If the loops complete, all questions on all boards are revealed.
  if (gameState.players.length > 0) {
    showFinalScoresModal();
  }
}

function showFinalScoresModal() {
  finalScoresList.innerHTML = ""; // Clear previous scores
  gameState.players.forEach((player) => {
    const scoreItem = document.createElement("div");
    scoreItem.className = "final-score-item"; // For potential styling
    scoreItem.textContent = `${player.name}: ${player.score}`;
    finalScoresList.appendChild(scoreItem);
  });
  finalScoresModal.style.display = "block";
}

// Open the player management modal
function openPlayerModal() {
  // Populate players list
  renderPlayerList();
  playerModal.style.display = "block";
}

// Render the player list in the player management modal
function renderPlayerList() {
  const playerList = document.getElementById("player-list");
  playerList.innerHTML = "";

  gameState.players.forEach((player, index) => {
    const playerItem = document.createElement("div");
    playerItem.className = "player-list-item";

    const playerNameElement = document.createElement("div");
    playerNameElement.className = "player-list-item-name";
    playerNameElement.textContent = `${player.name} - Score: ${player.score}`;

    playerNameElement.addEventListener("click", () => {
      // Inline edit functionality
      const currentName = gameState.players[index].name;
      const input = document.createElement("input");
      input.type = "text";
      input.value = currentName;
      input.className = "inline-edit-input"; // For styling

      const originalContent = playerItem.innerHTML;
      playerItem.innerHTML = ""; // Clear the item
      playerItem.appendChild(input);
      input.focus();
      input.select();

      const saveEdit = () => {
        const newName = input.value.trim();
        if (newName && newName !== currentName) {
          gameState.players[index].name = newName;
          saveGame();
          renderPlayerList(); // Re-render this list
          renderPlayers(); // Re-render the main players bar
        } else {
          // Restore original content if name is empty or unchanged
          playerItem.innerHTML = originalContent;
          // Re-attach original event listeners if necessary, though re-rendering list is safer
          renderPlayerList(); // Simplest way to restore everything
        }
      };

      input.addEventListener("blur", saveEdit); // Save on blur
      input.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
          saveEdit();
        }
        if (e.key === "Escape") {
          playerItem.innerHTML = originalContent;
          renderPlayerList(); // Restore
        }
      });
    });

    const removeButton = document.createElement("button");
    removeButton.className = "remove-player";
    removeButton.textContent = "Remove";
    removeButton.setAttribute("data-index", index);
    removeButton.addEventListener("click", () => {
      removePlayer(index);
    });

    playerItem.appendChild(playerNameElement);
    playerItem.appendChild(removeButton);
    playerList.appendChild(playerItem);
  });

  // No need for global .remove-player selector as listeners are added directly
}

// Add a new player
function addPlayer() {
  const nameInput = document.getElementById("new-player-name");
  const name = nameInput.value.trim();

  if (name) {
    gameState.players.push({
      name: name,
      score: 0,
    });

    // Set as active player if first player
    if (gameState.players.length === 1) {
      gameState.activePlayer = 0;
    }

    saveGame();
    renderPlayerList();
    renderPlayers();
    nameInput.value = "";
  }
}

// Remove a player
function removePlayer(index) {
  if (gameState.players.length <= 1) {
    alert("You need at least one player!");
    return;
  }

  const removedIsActive = index === gameState.activePlayer;
  gameState.players.splice(index, 1);

  // Adjust active player index if needed
  if (removedIsActive || gameState.activePlayer >= gameState.players.length) {
    gameState.activePlayer = 0;
  }

  saveGame();
  renderPlayerList();
  renderPlayers();
}

function openAdjustScoreModal(playerIndex) {
  // playerIndex can be the active player or undefined initially
  adjustScorePlayerSelect.innerHTML = ""; // Clear previous options
  let targetPlayerIndex = playerIndex;
  if (targetPlayerIndex === null || targetPlayerIndex === undefined || targetPlayerIndex >= gameState.players.length) {
    targetPlayerIndex = gameState.players.length > 0 ? 0 : -1; // Default to first player or -1 if no players
  }

  gameState.players.forEach((p, idx) => {
    const option = document.createElement("option");
    option.value = idx;
    option.textContent = p.name;
    if (idx === targetPlayerIndex) {
      option.selected = true;
    }
    adjustScorePlayerSelect.appendChild(option);
  });
  adjustScorePointsInput.value = 100; // Default points
  if (gameState.players.length > 0) {
    adjustScoreModal.style.display = "block";
  } else {
    alert("No players available to adjust scores.");
  }
}

function handleManualScoreChange(isAdding) {
  const playerIndex = parseInt(adjustScorePlayerSelect.value);
  let points = parseInt(adjustScorePointsInput.value);

  if (isNaN(playerIndex) || playerIndex < 0 || playerIndex >= gameState.players.length) {
    alert("Invalid player selected.");
    return;
  }
  if (isNaN(points) || points === 0) {
    alert("Please enter a valid number for points.");
    return;
  }

  if (isAdding) {
    gameState.players[playerIndex].score += points;
  } else {
    gameState.players[playerIndex].score -= points;
  }

  gameState.activePlayer = playerIndex; // Make the adjusted player active
  renderPlayers();
  saveGame();
}

// Render game selection buttons
function renderGameSelection() {
  const gameSelection = document.getElementById("game-selection");
  const gameButtons = gameSelection.querySelector(".game-buttons");

  // Clear existing buttons
  gameButtons.innerHTML = "";

  // Load saved game selection
  const savedGameId = localStorage.getItem("mindMasterCurrentGame");
  if (savedGameId) {
    currentGameId = savedGameId;
  }

  // Create buttons for each available game
  availableGames.forEach((game) => {
    const button = document.createElement("button");
    button.className = "game-button";
    button.textContent = game.name;

    // Add badge for multiple boards
    if (game.boards > 1) {
      const badge = document.createElement("span");
      badge.className = "badge";
      badge.textContent = game.boards;
      button.appendChild(badge);
    }

    // Set active state
    if (game.id === currentGameId) {
      button.classList.add("active");
    }

    // Add click handler
    button.addEventListener("click", () => selectGame(game.id));

    gameButtons.appendChild(button);
  });
}

// Select a different game
async function selectGame(gameId) {
  const isSameGame = gameId === currentGameId;

  // If it's the same game and we're already in main game section, do nothing
  if (isSameGame && mainGameSection.style.display !== "none") {
    return;
  }

  try {
    let selectedGameData;

    // Handle the base gameData1.js case
    if (gameId === "gameData1") {
      selectedGameData = defaultGameData;
    } else {
      // Import the selected game data dynamically
      const gameDataModule = await import(`./${gameId}.js`);
      selectedGameData = gameDataModule.defaultGameData;
    }

    // Update current game
    currentGameId = gameId;

    // Only reset game state if it's a different game
    if (!isSameGame) {
      // Reset game state with new data
      gameState = {
        currentBoard: 0,
        boards: JSON.parse(JSON.stringify(selectedGameData.boards)),
        players: gameState.players, // Keep current players
        activePlayer: gameState.players.length > 0 ? 0 : null,
        currentPlayer: null,
      };

      // Reset player scores
      gameState.players.forEach((player) => {
        player.score = 0;
      });

      saveGame();
      renderPlayers();
      renderBoard();
    }

    renderGameSelection(); // Update button states

    // Always navigate to main game section when a game is selected
    showMainGame();
  } catch (error) {
    console.error(`Failed to load game data from ${gameId}:`, error);
    alert(`Failed to load ${gameId}. Please check if the file exists.`);
  }
}
