import { gameState, saveGame, renderBoard } from './script.js';

let tempBoardsData = null;

// DOM Elements specific to Editor - get them when editor is initialized
let editorModal, boardsList, boardSelectCategory, boardSelectQuestion,
    categoriesList, questionsList, newCategoryNameInput, newQuestionPointsInput,
    newQuestionTextInput, newQuestionAnswerInput;

function getEditorDOMReferences() {
    editorModal = document.getElementById('editor-modal');
    boardsList = document.getElementById('boards-list');
    boardSelectCategory = document.getElementById('board-select-categories');
    boardSelectQuestion = document.getElementById('board-select-questions');
    categoriesList = document.getElementById('categories-list');
    questionsList = document.getElementById('questions-list');
    newCategoryNameInput = document.getElementById('new-category-name');
    newQuestionPointsInput = document.getElementById('new-question-points');
    newQuestionTextInput = document.getElementById('new-question-text');
    newQuestionAnswerInput = document.getElementById('new-question-answer');
}

export function openGameEditor() {
    if (!editorModal) getEditorDOMReferences(); // Ensure DOM refs are loaded
    tempBoardsData = JSON.parse(JSON.stringify(gameState.boards));
    renderBoardsList();
    populateBoardSelectDropdowns();
    editorModal.style.display = 'block';
    // Ensure the first tab is active by default (if not already handled by HTML)
    const firstTabBtn = editorModal.querySelector('.tab-btn[data-tab="boards"]');
    const firstTabContent = editorModal.querySelector('#boards-tab');
    if (firstTabBtn && firstTabContent) {
        editorModal.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
        editorModal.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
        firstTabBtn.classList.add('active');
        firstTabContent.classList.add('active');
    }
}

function renderBoardsList() {
    boardsList.innerHTML = '';
    tempBoardsData.forEach((board, index) => {
        const boardItem = document.createElement('div');
        boardItem.className = 'list-item';
        boardItem.innerHTML = `
            <div class="list-item-content">Board ${index + 1}</div>
            <div class="list-item-actions">
                <button class="edit-board-btn" data-index="${index}">Manage Categories/Questions</button>
                <button class="delete-item-btn delete-board-btn" data-index="${index}">Delete Board</button>
            </div>
        `;
        boardsList.appendChild(boardItem);
    });

    boardsList.querySelectorAll('.edit-board-btn').forEach(button => {
        button.addEventListener('click', (e) => editBoard(parseInt(e.target.dataset.index)));
    });
    boardsList.querySelectorAll('.delete-board-btn').forEach(button => {
        button.addEventListener('click', (e) => deleteBoard(parseInt(e.target.dataset.index)));
    });
}

function editBoard(index) {
    const tabButtons = editorModal.querySelectorAll('.tab-btn');
    tabButtons.forEach(btn => btn.classList.remove('active'));
    editorModal.querySelector('[data-tab="categories"]').classList.add('active');
    
    const tabContents = editorModal.querySelectorAll('.tab-content');
    tabContents.forEach(content => content.classList.remove('active'));
    document.getElementById('categories-tab').classList.add('active');
    
    boardSelectCategory.value = index;
    updateCategoriesList();
    // Also update the board selection in the questions tab for consistency
    boardSelectQuestion.value = index;
    updateCategorySelectDropdown();
}

function deleteBoard(index) {
    if (tempBoardsData.length <= 1) {
        alert('You need at least one board!');
        return;
    }
    if (confirm(`Are you sure you want to delete Board ${index + 1}?`)) {
        tempBoardsData.splice(index, 1);
        renderBoardsList();
        populateBoardSelectDropdowns();
    }
}

function addNewBoard() {
    const boardCount = tempBoardsData.length + 1;
    const emptyCategoriesArray = Array(5).fill().map((_, i) => `Category ${i + 1}`);
    const emptyQuestionsArray = Array(5).fill(null).map(() => 
        Array(5).fill(null).map((_, i) => ({
            points: (i + 1) * 100,
            question: 'New Question',
            answer: 'New Answer',
            revealed: false
        }))
    );
    tempBoardsData.push({
        categories: emptyCategoriesArray,
        questions: emptyQuestionsArray
    });
    renderBoardsList();
    populateBoardSelectDropdowns();
    editBoard(tempBoardsData.length - 1); // Open new board for editing categories
}

function populateBoardSelectDropdowns() {
    const selectedCategoryBoard = boardSelectCategory.value;
    const selectedQuestionBoard = boardSelectQuestion.value;

    boardSelectCategory.innerHTML = '';
    boardSelectQuestion.innerHTML = '';
    
    tempBoardsData.forEach((_, index) => {
        const optionCat = document.createElement('option');
        optionCat.value = index;
        optionCat.textContent = `Board ${index + 1}`;
        boardSelectCategory.appendChild(optionCat);
        
        const optionQues = document.createElement('option');
        optionQues.value = index;
        optionQues.textContent = `Board ${index + 1}`;
        boardSelectQuestion.appendChild(optionQues);
    });

    // Try to restore previous selection or default to 0
    boardSelectCategory.value = selectedCategoryBoard && tempBoardsData[selectedCategoryBoard] ? selectedCategoryBoard : (tempBoardsData.length > 0 ? '0' : '');
    boardSelectQuestion.value = selectedQuestionBoard && tempBoardsData[selectedQuestionBoard] ? selectedQuestionBoard : (tempBoardsData.length > 0 ? '0' : '');

    updateCategoriesList();
    updateCategorySelectDropdown();
}

function updateCategoriesList() {
    const boardIndex = parseInt(boardSelectCategory.value);
    categoriesList.innerHTML = '';
    if (isNaN(boardIndex) || boardIndex < 0 || boardIndex >= tempBoardsData.length) {
        categoriesList.innerHTML = '<li>Select a board to see categories.</li>';
        return;
    }

    const categories = tempBoardsData[boardIndex].categories;
    categories.forEach((categoryName, catIndex) => {
        const categoryItem = document.createElement('div');
        categoryItem.className = 'list-item';
        const categoryNameElement = document.createElement('div');
        categoryNameElement.className = 'list-item-content editable-item';
        categoryNameElement.textContent = categoryName;
        categoryNameElement.addEventListener('click', () => editCategoryName(boardIndex, catIndex, categoryNameElement));
        
        const actions = document.createElement('div');
        actions.className = 'list-item-actions';
        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-item-btn delete-category-btn';
        deleteBtn.textContent = 'Delete Category';
        deleteBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            deleteCategory(boardIndex, catIndex);
        });
        actions.appendChild(deleteBtn);
        categoryItem.appendChild(categoryNameElement);
        categoryItem.appendChild(actions);
        categoriesList.appendChild(categoryItem);
    });
}

function editCategoryName(boardIndex, catIndex, element) {
    const currentName = tempBoardsData[boardIndex].categories[catIndex];
    const input = document.createElement('input');
    input.type = 'text';
    input.value = currentName;
    input.className = 'inline-edit-input';
    element.parentNode.replaceChild(input, element);
    input.focus();
    input.select();

    const saveEdit = () => {
        const newName = input.value.trim();
        if (newName && newName !== currentName) {
            tempBoardsData[boardIndex].categories[catIndex] = newName;
        }
        updateCategoriesList(); // Re-render to restore original element & text
        updateCategorySelectDropdown(); // Update question tab's category dropdown
    };
    input.addEventListener('blur', saveEdit);
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') saveEdit();
        if (e.key === 'Escape') updateCategoriesList(); // Restore
    });
}

function deleteCategory(boardIndex, categoryIndex) {
    if (tempBoardsData[boardIndex].categories.length <= 1) {
        alert("A board must have at least one category.");
        return;
    }
    if (confirm(`Are you sure you want to delete category: ${tempBoardsData[boardIndex].categories[categoryIndex]}? This will also remove all its questions.`)) {
        tempBoardsData[boardIndex].categories.splice(categoryIndex, 1);
        tempBoardsData[boardIndex].questions.splice(categoryIndex, 1);
        updateCategoriesList();
        updateCategorySelectDropdown();
    }
}

function addNewCategory() {
    const boardIndex = parseInt(boardSelectCategory.value);
    const categoryName = newCategoryNameInput.value.trim();
    if (isNaN(boardIndex) || boardIndex < 0 || boardIndex >= tempBoardsData.length) return;
    if (!categoryName) {
        alert('Please enter a category name.');
        return;
    }
    if (tempBoardsData[boardIndex].categories.length >= 5) { // Assuming a fixed max of 5 for now based on game structure
        alert("Maximum of 5 categories per board reached. Delete one to add a new one or edit an existing one.");
        return;
    }
    tempBoardsData[boardIndex].categories.push(categoryName);
    // Add a corresponding empty column of questions
    tempBoardsData[boardIndex].questions.push(
        Array(5).fill(null).map((_, i) => ({
            points: (i + 1) * 100,
            question: 'New Question',
            answer: 'New Answer',
            revealed: false
        }))
    );
    newCategoryNameInput.value = '';
    updateCategoriesList();
    updateCategorySelectDropdown();
}

function updateCategorySelectDropdown() {
    const boardIndex = parseInt(boardSelectQuestion.value);
    const categorySelect = document.getElementById('category-select-questions');
    const currentCatValue = categorySelect.value;
    categorySelect.innerHTML = '';
    if (isNaN(boardIndex) || boardIndex < 0 || boardIndex >= tempBoardsData.length) {
        updateQuestionsList();
        return;
    }
    const board = tempBoardsData[boardIndex];
    board.categories.forEach((category, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.textContent = category;
        categorySelect.appendChild(option);
    });
    // Try to restore selection
    if (currentCatValue && board.categories[currentCatValue]) {
      categorySelect.value = currentCatValue;
    } else if (board.categories.length > 0) {
      categorySelect.value = '0';
    }
    updateQuestionsList();
}

function updateQuestionsList() {
    const boardIndex = parseInt(boardSelectQuestion.value);
    const categoryIndex = parseInt(document.getElementById('category-select-questions').value);
    questionsList.innerHTML = '';
    if (isNaN(boardIndex) || boardIndex < 0 || boardIndex >= tempBoardsData.length ||
        isNaN(categoryIndex) || categoryIndex < 0 || categoryIndex >= tempBoardsData[boardIndex].questions.length) {
        questionsList.innerHTML = '<li>Select a board and category to see questions.</li>';
        return;
    }

    const questions = tempBoardsData[boardIndex].questions[categoryIndex];
    questions.forEach((question, qIndex) => {
        const questionItem = document.createElement('div');
        questionItem.className = 'list-item question-list-item';
        const content = document.createElement('div');
        content.className = 'list-item-content';
        
        const pointsEl = document.createElement('strong');
        pointsEl.className = 'editable-item question-points';
        pointsEl.textContent = question.points;
        pointsEl.addEventListener('click', (e) => {
            e.stopPropagation();
            editQuestionPart(boardIndex, categoryIndex, qIndex, 'points', pointsEl);
        });

        const questionTextEl = document.createElement('span');
        questionTextEl.className = 'editable-item question-q-text';
        questionTextEl.textContent = `: ${question.question}`;
        questionTextEl.addEventListener('click', (e) => {
            e.stopPropagation();
            editQuestionPart(boardIndex, categoryIndex, qIndex, 'question', questionTextEl, true);
        });

        const answerTextEl = document.createElement('em');
        answerTextEl.className = 'editable-item question-a-text';
        answerTextEl.textContent = ` (Answer: ${question.answer})`;
        answerTextEl.addEventListener('click', (e) => {
            e.stopPropagation();
            editQuestionPart(boardIndex, categoryIndex, qIndex, 'answer', answerTextEl, true);
        });

        content.appendChild(pointsEl);
        content.appendChild(questionTextEl);
        content.appendChild(answerTextEl);
        questionItem.appendChild(content);

        const actions = document.createElement('div');
        actions.className = 'list-item-actions';
        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-item-btn delete-question-btn';
        deleteBtn.textContent = 'Delete Question';
        deleteBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            deleteQuestion(boardIndex, categoryIndex, qIndex);
        });
        actions.appendChild(deleteBtn);
        questionItem.appendChild(actions);
        questionsList.appendChild(questionItem);
    });
}

function editQuestionPart(boardIndex, categoryIndex, questionIndex, partKey, element, isTextarea = false) {
    const originalValue = tempBoardsData[boardIndex].questions[categoryIndex][questionIndex][partKey];
    let input;
    if (isTextarea) {
        input = document.createElement('textarea');
        input.className = 'inline-edit-textarea';
    } else {
        input = document.createElement('input');
        input.type = partKey === 'points' ? 'number' : 'text';
        input.className = 'inline-edit-input';
        if (partKey === 'points') { input.min = "0"; input.step = "50"; } // Allow 0 points, smaller steps
    }
    input.value = originalValue;
    const parent = element.parentNode;
    parent.replaceChild(input, element);
    input.focus();
    if (input.select) input.select();

    const saveEdit = () => {
        const newValue = (partKey === 'points') ? parseInt(input.value, 10) : input.value.trim();
        if (partKey === 'points' && (isNaN(newValue) || newValue < 0)) { // Allow 0 points
            alert("Points must be a non-negative number.");
            updateQuestionsList(); return;
        }
        if (newValue !== originalValue || (partKey === 'points' && newValue !== originalValue) ) { // Fix for points not saving if changed to 0
             if (partKey === 'points' && isNaN(newValue)) { // If points cleared, treat as 0 or handle error
                tempBoardsData[boardIndex].questions[categoryIndex][questionIndex][partKey] = 0;
            } else {
                tempBoardsData[boardIndex].questions[categoryIndex][questionIndex][partKey] = newValue;
            }
        }
        updateQuestionsList();
    };
    input.addEventListener('blur', saveEdit);
    input.addEventListener('keypress', (e) => {
        if (isTextarea && e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); saveEdit(); }
        else if (!isTextarea && e.key === 'Enter') { saveEdit(); }
        if (e.key === 'Escape') { updateQuestionsList(); }
    });
}

function deleteQuestion(boardIndex, categoryIndex, questionIndex) {
     if (tempBoardsData[boardIndex].questions[categoryIndex].length <= 1) {
        alert("A category must have at least one question.");
        return;
    }
    if (confirm("Are you sure you want to delete this question?")) {
        tempBoardsData[boardIndex].questions[categoryIndex].splice(questionIndex, 1);
        updateQuestionsList();
    }
}

function addNewQuestion() {
    const boardIndex = parseInt(boardSelectQuestion.value);
    const categoryIndex = parseInt(document.getElementById('category-select-questions').value);
    if (isNaN(boardIndex) || isNaN(categoryIndex) || 
        !tempBoardsData[boardIndex] || !tempBoardsData[boardIndex].questions[categoryIndex]) return;

    const points = parseInt(newQuestionPointsInput.value);
    const questionText = newQuestionTextInput.value.trim();
    const answerText = newQuestionAnswerInput.value.trim();

    if (!questionText || !answerText) { alert('Please enter question and answer.'); return; }
    if (isNaN(points) || points < 0) { alert('Points must be a non-negative number.'); return; }
    
    // Add to end of question list for that category (instead of replacing row)
    tempBoardsData[boardIndex].questions[categoryIndex].push({
        points: points,
        question: questionText,
        answer: answerText,
        revealed: false
    });
    newQuestionTextInput.value = '';
    newQuestionAnswerInput.value = '';
    newQuestionPointsInput.value = Math.max(100, (tempBoardsData[boardIndex].questions[categoryIndex].length) * 100); // Suggest next point value

    updateQuestionsList();
}

function saveGameEdits() {
    if (confirm('Save changes to the game? This will overwrite current game data.')) {
        // Basic validation: ensure 5 categories and 5 questions per category for each board.
        // This is a simplified validation. More robust validation might be needed.
        for (const board of tempBoardsData) {
            if (board.categories.length !== 5) {
                alert(`Error: Board "${board.categories[0]}..." does not have 5 categories. Please adjust before saving.`);
                return;
            }
            for (let i=0; i < board.questions.length; i++) {
                 if (board.questions[i].length !== 5) {
                    alert(`Error: Category "${board.categories[i]}" on board "${board.categories[0]}..." does not have 5 questions. Please adjust before saving.`);
                    return;
                 }
            }
        }

        gameState.boards = JSON.parse(JSON.stringify(tempBoardsData));
        saveGame(); // This is imported from script.js
        renderBoard(); // This is imported from script.js
        editorModal.style.display = 'none';
        alert('Game changes saved successfully!');
    }
}

export function initEditorEventListeners() {
    if (!editorModal) getEditorDOMReferences(); // Ensure DOM refs are loaded

    // Tab buttons
    editorModal.querySelectorAll('.tab-btn').forEach(button => {
        button.addEventListener('click', () => {
            const tabName = button.dataset.tab;
            editorModal.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            editorModal.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
            document.getElementById(`${tabName}-tab`).classList.add('active');
        });
    });

    // Close editor modal
    document.getElementById('close-editor-modal').addEventListener('click', () => {
        // Check for unsaved changes before closing
        if (JSON.stringify(gameState.boards) !== JSON.stringify(tempBoardsData)) {
            if (confirm('You have unsaved changes. Are you sure you want to close the editor? Changes will be lost.')) {
                editorModal.style.display = 'none';
            }
        } else {
            editorModal.style.display = 'none';
        }
    });

    // Save game edits
    document.getElementById('save-game-edits').addEventListener('click', saveGameEdits);

    // Add board
    document.getElementById('add-board').addEventListener('click', addNewBoard);

    // Add category
    document.getElementById('add-category').addEventListener('click', addNewCategory);
    newCategoryNameInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') addNewCategory();
    });
    
    // Add question
    document.getElementById('add-question').addEventListener('click', addNewQuestion);
    [newQuestionPointsInput, newQuestionTextInput, newQuestionAnswerInput].forEach(input => {
        input.addEventListener('keypress', (e) => {
             if (e.key === 'Enter' && (input.tagName !== 'TEXTAREA' || e.shiftKey === false) ) {
                if(input === newQuestionAnswerInput || (input === newQuestionTextInput && newQuestionAnswerInput.value) || (input === newQuestionPointsInput && newQuestionTextInput.value && newQuestionAnswerInput.value) ){
                     e.preventDefault(); // Prevent form submission if inside a form
                     addNewQuestion();
                } else if (input.tagName !== 'TEXTAREA' ) { // For points and text input, advance focus on enter
                    if (input === newQuestionPointsInput) newQuestionTextInput.focus();
                    else if (input === newQuestionTextInput) newQuestionAnswerInput.focus();
                }
            }
        });
    });

    // Board select dropdowns
    boardSelectCategory.addEventListener('change', updateCategoriesList);
    boardSelectQuestion.addEventListener('change', updateCategorySelectDropdown);
    document.getElementById('category-select-questions').addEventListener('change', updateQuestionsList);
}
