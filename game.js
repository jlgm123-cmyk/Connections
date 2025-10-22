// --- DATOS DEL PUZZLE (Incrustados en JS) ---
const ALL_PUZZLES = [
    
    // --- Dificultad 0 (Amarillo) ---
    { "category": "Cosas que es Laura", "words": ["Niña Linda", "Princesa", "Bonita", "Hermosa"], "difficulty": 0, "color": "yellow" },
    { "category": "Cosas que es Laura", "words": ["Preciosa", "Princesa", "Bella", "Inteligente"], "difficulty": 0, "color": "yellow" },
    { "category": "Cosas que es Laura", "words": ["Increible", "Maravillosa", "Princesa", "Linda"], "difficulty": 0, "color": "yellow" },
    { "category": "Lo más bonito de Laura", "words": ["Pelo", "Boca", "Manos", "Sonrisa"], "difficulty": 0, "color": "yellow" },
    { "category": "Cosas que es Laura", "words": ["Pasada", "Extrovertida", "Divertida", "Consentida"], "difficulty": 0, "color": "yellow" },
    { "category": "Cosas que Jorge quiere hacer con Laura", "words": ["Besar", "Abrazar", "Conversar", "Mirar"], "difficulty": 0, "color": "yellow" },
    { "category": "Cosas que le gustan a Laura", "words": ["Cerveza", "Margarita", "Jorge", "Piña Colada"], "difficulty": 0, "color": "yellow" },
    { "category": "Cosas que le gustan a Laura", "words": ["Pilates", "Beber", "Sushi", "Flores"], "difficulty": 0, "color": "yellow" },
    { "category": "Cosas que NO le gustan a Laura", "words": ["Coco", "Guanábana", "Correr", "Vallenato"], "difficulty": 0, "color": "yellow" },
    { "category": "Cosas que NO es Laura", "words": ["Horrible", "Plebeya", "Vulgar", "Común"], "difficulty": 0, "color": "yellow" },

    
    // --- Dificultad 1 (Verde) ---
    { "category": "Soundtrack de tu y yo", "words": ["Fuego", "Tan Bien", "Estar Contigo", "Tanto"], "difficulty": 1, "color": "green" },
    { "category": "Soundtrack de tu y yo", "words": ["Tal Como Eres", "Millones", "Miel", "Musica"], "difficulty": 1, "color": "green" },
    { "category": "Soundtrack de tu y yo", "words": ["Pelinegra", "El Ingeniero", "Carita Linda", "Magic"], "difficulty": 1, "color": "green" },
    { "category": "Soundtrack de tu y yo", "words": ["Bésame", "Las Estrellas", "Espacio Sideral", "Tears"], "difficulty": 1, "color": "green" },
    { "category": "La persona favorita de Jorge", "words": ["Laura", "Laura", "Laura", "Laura"], "difficulty": 1, "color": "green" },
    { "category": "Comidas favoritas de Jorge", "words": ["Sopa", "Piña", "Hamburguesa", "Laura"], "difficulty": 1, "color": "green" },
    { "category": "Mascota de Racha", "words": ["Filadelfio", "Margarito", "Tik Tok", "Cabillo"], "difficulty": 1, "color": "green" },
    { "category": "IOI", "words": ["Odoo", "Proyectos", "Partidas", "Presupuestos"], "difficulty": 1, "color": "green" },
    { "category": "Maya", "words": ["Mayonesa", "Gorda Bachicha", "Mayúscula", "Maya"], "difficulty": 1, "color": "green" },
    { "category": "Apodos de Laura en Anagrama", "words": ["Roma", "Haremos", "Escarpio", "Nidal"], "difficulty": 1, "color": "green" },
    { "category": "Te Amo Laura Emilia", "words": ["Te", "Amo", "Laura", "Emilia"], "difficulty": 1, "color": "green" },
    { "category": "Disfraces de Laura", "words": ["Duo", "Bruja", "Espantapájaros", "Bad Bunny"], "difficulty": 1, "color": "green" },

    
    // --- Dificultad 2 (Azul) ---
    { "category": "Canciones por categoría", "words": ["Love Someone", "Todo Cambió", "Mala Conducta", "La travesía"], "difficulty": 2, "color": "blue" },

    { "category": "Citas en palabras clave", "words": ["Sushi", "Novia", "Karaoke", "Papas Fritas"], "difficulty": 2, "color": "blue" },

    { "category": "Vision Board de Laura 2025", "words": ["Teléfono", "Trabajo", "Pareja", "Perro"], "difficulty": 2, "color": "blue" },

    { "category": "Quieres ser mi novia?", "words": ["Quieres", "Ser", "Mi", "Novia"], "difficulty": 2, "color": "blue" },

    { "category": "2 palabra en canciones de Alleh y Yorghaki", "words": ["Ciudad", "Noche", "Radio", "Late"], "difficulty": 2, "color": "blue" },

    { "category": "Primera palabra en juegos que hemos jugado juntos", "words": ["Exploding", "Them", "Venn", "Villainous"], "difficulty": 2, "color": "blue" },

    { "category": "Empieza por Lau", "words": ["Laurel", "Laúd", "Laugh", "Launch"], "difficulty": 2, "color": "blue" },

    

    { "category": "Profesores de Laura en palabras clave", "words": ["Gordo", "Novio", "Bipolar", "Padrino"], "difficulty": 2, "color": "blue" },

    { "category": "Emojis que ha tenido Laura en el contacto de Jorge", "words": ["Uñas", "Impresora", "Corazones", "Casco"], "difficulty": 2, "color": "blue" },



    
    // --- Dificultad 3 (Morado) ---
    { "category": "Laura le sabe y Jorge no", "words": ["Bailar", "Puchero", "Inglés", "Caída"], "difficulty": 3, "color": "purple" },
    { "category": "Laura sin una letra", "words": ["Aura", "Nova", "Parea", "Amo"], "difficulty": 3, "color": "purple" },
    { "category": "Anagramas de cosas que no le gustan a Laura", "words": ["Paso", "Tufar", "Solo Obedecen", "Suba el pico sur"], "difficulty": 3, "color": "purple" },
    { "category": "Rimas de cosas que es Laura", "words": ["Mariposa", "Ilesa", "Botella", "Colita"], "difficulty": 3, "color": "purple" },
    { "category": "Rimas de cosas que es Laura", "words": ["Peligrosa", "Represa", "Aquella", "Dinamita"], "difficulty": 3, "color": "purple" },
    { "category": "Rimas de cosas que es Laura", "words": ["Dichosa", "Sorpresa", "Huella", "Medita"], "difficulty": 3, "color": "purple" },
    { "category": "Empieza por las primeras letras de nuestra fecha especial", "words": ["Octavo", "Diesel", "Diente", "Octágono"], "difficulty": 3, "color": "purple" },
    { "category": "Cosas que son lo mismo", "words": ["Cocuy", "Tequila", "Mezcal", "Comiteco"], "difficulty": 3, "color": "purple" },    
    { "category": "Empieza por las primeras letras de nuestra fecha especial", "words": ["Octavo", "Diesel", "Diente", "Octágono"], "difficulty": 3, "color": "purple" },   
];

// --- ESTADO DEL JUEGO y REFERENCIAS AL DOM ---
let selectedWords = [];
let mistakesLeft = 4;
let solvedGroups = 0;
let currentPuzzle = null; 
const difficultyColors = ['#f9df6d', '#a0c35a', '#b0c4ef', '#ba81c5']; 

const gridContainer = document.getElementById('grid-container');
const solvedContainer = document.getElementById('solved-container');
const feedbackArea = document.getElementById('feedback-area');
const mistakesDots = document.querySelectorAll('.mistake-dot');
const shuffleButton = document.getElementById('shuffle-button');
const submitButton = document.getElementById('submit-button');
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modal-title');
const modalResults = document.getElementById('modal-results');
// 🔑 CAMBIO: Nuevas referencias a los botones del modal
const viewBoardButton = document.getElementById('view-board-button');
const resetGameButton = document.getElementById('reset-game-button');

// --- LÓGICA DE INICIALIZACIÓN ---

document.addEventListener('DOMContentLoaded', initializeGame);

function initializeGame() {
    // 1. Seleccionar el puzzle
    currentPuzzle = selectRandomPuzzle();
    
    if (!currentPuzzle || currentPuzzle.groups.length !== 4) {
        gridContainer.innerHTML = '<div style="color: red; padding: 20px; text-align: center;">\
            <h3>ERROR DE CONFIGURACIÓN</h3>\
            <p>Asegúrate de que la variable ALL_PUZZLES contiene al menos una categoría por cada dificultad (0, 1, 2 y 3).</p>\
        </div>';
        return;
    }
    
    // 2. Preparar el estado del juego
    selectedWords = [];
    mistakesLeft = 4;
    solvedGroups = 0;
    gridContainer.innerHTML = '';
    solvedContainer.innerHTML = '';
    feedbackArea.textContent = '';
    modal.classList.add('hidden');
    updateMistakeDots();
    updateSubmitButton();

    // 3. Obtener todas las palabras y mezclarlas
    const allWords = currentPuzzle.groups.flatMap(group => group.words);
    const shuffledWords = shuffleArray(allWords);

    // 4. Crear la cuadrícula
    shuffledWords.forEach(word => {
        const item = document.createElement('div');
        item.classList.add('grid-item');
        item.textContent = word;
        item.addEventListener('click', () => onItemClick(item));
        gridContainer.appendChild(item);
    });

    // Aplicar la reducción de fuente después de crear los elementos
    applyTextScaling(); 
}

// --- LÓGICA DE EVENTOS ---

shuffleButton.addEventListener('click', shuffleGrid);
submitButton.addEventListener('click', handleSubmit);

// 🔑 CLAVE: Eventos de los nuevos botones del modal
viewBoardButton.addEventListener('click', () => {
    // Solo cierra el modal para ver la solución
    modal.classList.add('hidden');
});

resetGameButton.addEventListener('click', initializeGame);


// --- RESTO DE LA LÓGICA DEL JUEGO (sin cambios funcionales en revealGroup y endGame) ---

function applyTextScaling() {
    const gridItems = gridContainer.querySelectorAll('.grid-item');

    gridItems.forEach(item => {
        const word = item.textContent.toUpperCase();
        
        const isLongWord = word.length >= 11;
        const hasManyWords = word.split(' ').length >= 3;
        
        if (isLongWord || hasManyWords) {
            item.classList.add('shrink-text');
        }
    });
}


function selectRandomPuzzle() {
    const selectedGroups = [];

    for (let i = 0; i < 4; i++) {
        const difficultyPuzzles = ALL_PUZZLES.filter(p => p.difficulty === i);
        
        if (difficultyPuzzles.length === 0) {
            return null;
        }
        
        const randomIndex = Math.floor(Math.random() * difficultyPuzzles.length);
        selectedGroups.push(difficultyPuzzles[randomIndex]);
    }
    
    return { groups: selectedGroups };
}

function onItemClick(item) {
    const word = item.textContent;

    if (item.classList.contains('selected')) {
        item.classList.remove('selected');
        selectedWords = selectedWords.filter(w => w !== word);
    } else {
        if (selectedWords.length < 4) {
            item.classList.add('selected');
            selectedWords.push(word);
        }
    }
    updateSubmitButton();
    feedbackArea.textContent = '';
}


function updateSubmitButton() {
    submitButton.disabled = selectedWords.length !== 4;
}

function handleSubmit() {
    if (selectedWords.length !== 4) return;
    if (!currentPuzzle) return; 

    const foundGroup = findMatchingGroup(selectedWords);

    if (foundGroup) {
        revealGroup(foundGroup);
        solvedGroups++;
        if (solvedGroups === 4) {
            endGame(true);
        }
    } else {
        handleMistake();
        if (checkOneAway(selectedWords)) {
            feedbackArea.textContent = '¡A una!';
        } else {
            feedbackArea.textContent = 'Intenta de nuevo';
        }
    }
    deselectAll();
}

function findMatchingGroup(words) {
    const sortedSelected = [...words].sort().join(',');

    return currentPuzzle.groups.find(group => {
        const sortedGroupWords = [...group.words].sort().join(',');
        return sortedSelected === sortedGroupWords;
    });
}

function revealGroup(group) {
    const groupElement = document.createElement('div');
    groupElement.classList.add('solved-group');
    
    const colorClass = `difficulty-${group.color}`;
    groupElement.classList.add(colorClass);
    groupElement.dataset.difficulty = group.difficulty; 

    groupElement.innerHTML = `
        <h3>${group.category}</h3>
        <p>${group.words.join(', ')}</p>
    `;

    solvedContainer.appendChild(groupElement); 

    const gridItems = gridContainer.querySelectorAll('.grid-item');
    gridItems.forEach(item => {
        if (selectedWords.includes(item.textContent)) {
            item.classList.add('hidden');
        }
    });

    selectedWords = [];
    updateSubmitButton();
}


function handleMistake() {
    if (mistakesLeft > 0) {
        mistakesLeft--;
        updateMistakeDots();
        
        if (mistakesLeft === 0) {
            endGame(false);
        }
    }
}

function updateMistakeDots() {
    mistakesDots.forEach((dot, index) => {
        if (index >= mistakesLeft) {
            dot.classList.add('used');
        } else {
            dot.classList.remove('used');
        }
    });
}

function checkOneAway(words) {
    for (const group of currentPuzzle.groups) {
        const intersection = group.words.filter(word => words.includes(word));
        if (intersection.length === 3) {
            return true;
        }
    }
    return false;
}

function deselectAll() {
    const gridItems = gridContainer.querySelectorAll('.grid-item');
    gridItems.forEach(item => item.classList.remove('selected'));
    selectedWords = [];
    updateSubmitButton();
}

function shuffleGrid() {
    const activeItems = Array.from(gridContainer.children).filter(item => !item.classList.contains('hidden'));
    const shuffledActiveItems = shuffleArray(activeItems);

    gridContainer.innerHTML = '';
    shuffledActiveItems.forEach(item => gridContainer.appendChild(item));
}

function endGame(won) {
    modal.classList.remove('hidden');
    modalResults.innerHTML = '';

    if (!won) {
        modalTitle.textContent = 'Casi...';
        
        // Revelar grupos no resueltos
        const solvedCategories = Array.from(solvedContainer.querySelectorAll('h3')).map(h3 => h3.textContent);

        currentPuzzle.groups.forEach(group => {
            if (!solvedCategories.includes(group.category)) {
                const groupElement = document.createElement('div');
                groupElement.classList.add('solved-group');
                const colorClass = `difficulty-${group.color}`;
                groupElement.classList.add(colorClass);
                groupElement.style.opacity = '0.7'; 
                groupElement.innerHTML = `
                    <h3>${group.category}</h3>
                    <p>${group.words.join(', ')}</p>
                `;
                // Añadir al final para completar la solución
                solvedContainer.appendChild(groupElement);
            }
        });
        
        // Cambiar el texto del botón principal en caso de pérdida
        viewBoardButton.textContent = "Ver Solución"; 
    } else {
        modalTitle.textContent = '¡Felicidades!';
        viewBoardButton.textContent = "Ver Tablero";
    }

    // Muestra el historial de colores en el modal
    solvedContainer.querySelectorAll('.solved-group').forEach(group => {
        const square = document.createElement('div');
        square.classList.add('result-square');
        square.style.backgroundColor = difficultyColors[group.dataset.difficulty]; 
        modalResults.appendChild(square);
    });
}


// --- UTILIDADES ---

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}








