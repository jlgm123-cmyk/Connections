// --- DATOS DEL PUZZLE (Ahora incrustados en JS, sin necesidad de fetch) ---
// Define todos los puzzles aquí. El juego seleccionará uno aleatoriamente.
const ALL_PUZZLES = [
    
    // --- Dificultad 0 (Amarillo) ---
    { "category": "Instrumentos de Cuerda", "words": ["Guitarra", "Violín", "Arpa", "Ukelele"], "difficulty": 0, "color": "yellow" },
    { "category": "Sinónimos de 'Fácil'", "words": ["Simple", "Sencillo", "Elemental", "Básico"], "difficulty": 0, "color": "yellow" },
    { "category": "Verbos de Movimiento", "words": ["Correr", "Saltar", "Caminar", "Volar"], "difficulty": 0, "color": "yellow" },
    { "category": "Partes de la Cara", "words": ["Nariz", "Boca", "Ojo", "Oreja"], "difficulty": 0, "color": "yellow" },
    { "category": "Unidades de Tiempo", "words": ["Segundo", "Minuto", "Hora", "Día"], "difficulty": 0, "color": "yellow" },
    { "category": "Tipos de Café", "words": ["Expreso", "Latte", "Capuchino", "Americano"], "difficulty": 0, "color": "yellow" },
    { "category": "Colores Primarios", "words": ["Rojo", "Azul", "Amarillo", "Verde"], "difficulty": 0, "color": "yellow" },
    { "category": "Animales Domésticos", "words": ["Perro", "Gato", "Hámster", "Conejo"], "difficulty": 0, "color": "yellow" },
    { "category": "Términos de Cocina", "words": ["Hervir", "Asar", "Rehogar", "Freír"], "difficulty": 0, "color": "yellow" },
    { "category": "Herramientas Básicas", "words": ["Martillo", "Clavo", "Tornillo", "Destornillador"], "difficulty": 0, "color": "yellow" },
    
    // --- Dificultad 1 (Verde) ---
    { "category": "Mamíferos Grandes", "words": ["Elefante", "Ballena", "Rinoceronte", "Hipopótamo"], "difficulty": 1, "color": "green" },
    { "category": "Homófonas Comunes", "words": ["Vaca", "Baca", "Ola", "Hola"], "difficulty": 1, "color": "green" },
    { "category": "Términos Musicales", "words": ["Corchea", "Semicorchea", "Fusa", "Semifusa"], "difficulty": 1, "color": "green" },
    { "category": "Monstruos Griegos", "words": ["Medusa", "Cíclope", "Minotauro", "Hidra"], "difficulty": 1, "color": "green" },
    { "category": "Conceptos Financieros", "words": ["Bono", "Acción", "Dividendo", "Rendimiento"], "difficulty": 1, "color": "green" },
    { "category": "Tipos de Energía", "words": ["Eólica", "Solar", "Nuclear", "Hidráulica"], "difficulty": 1, "color": "green" },
    { "category": "Elementos de la Tabla Periódica (metales)", "words": ["Oro", "Plata", "Cobre", "Hierro"], "difficulty": 1, "color": "green" },
    { "category": "Profesiones del Arte", "words": ["Pintor", "Escultor", "Músico", "Dramaturgo"], "difficulty": 1, "color": "green" },
    { "category": "Animales que Hibernan", "words": ["Oso", "Marmota", "Erizo", "Murciélago"], "difficulty": 1, "color": "green" },
    { "category": "Tipos de Nubes", "words": ["Cirro", "Estrato", "Cúmulo", "Nimbo"], "difficulty": 1, "color": "green" },
    
    // --- Dificultad 2 (Azul) ---
    { "category": "Marcas de Moda de Lujo", "words": ["Chanel", "Gucci", "Prada", "Dior"], "difficulty": 2, "color": "blue" },
    { "category": "Personajes de Shakespeare", "words": ["Hamlet", "Romeo", "Julieta", "Macbeth"], "difficulty": 2, "color": "blue" },
    { "category": "Tipos de Sustancias", "words": ["Gas", "Líquido", "Sólido", "Plasma"], "difficulty": 2, "color": "blue" },
    { "category": "Términos de Ajedrez", "words": ["Peón", "Torre", "Caballo", "Alfil"], "difficulty": 2, "color": "blue" },
    { "category": "Tipos de Barcos", "words": ["Yate", "Galeón", "Fragata", "Goleta"], "difficulty": 2, "color": "blue" },
    { "category": "Palabras con Tilde Diacrítica", "words": ["Tú", "Él", "Mí", "Sí"], "difficulty": 2, "color": "blue" },
    { "category": "Dioses Romanos", "words": ["Júpiter", "Marte", "Venus", "Neptuno"], "difficulty": 2, "color": "blue" },
    { "category": "Personajes de Videojuegos (Nintendo)", "words": ["Mario", "Link", "Zelda", "Master Chief"], "difficulty": 2, "color": "blue" },
    { "category": "Instrumentos de Percusión", "words": ["Bombo", "Caja", "Platillo", "Timbal"], "difficulty": 2, "color": "blue" },
    { "category": "Peces Comunes", "words": ["Salmón", "Atún", "Merluza", "Tilapia"], "difficulty": 2, "color": "blue" },
    
    // --- Dificultad 3 (Morado) ---
    { "category": "Capitales con 5 Letras", "words": ["Lima", "Oslo", "Tokio", "París"], "difficulty": 3, "color": "purple" },
    { "category": "Palabras que son Palíndromos", "words": ["Radar", "Sometemos", "Reconocer", "Ataque"], "difficulty": 3, "color": "purple" },
    { "category": "Artistas del Renacimiento (Tortugas Ninja)", "words": ["Rafael", "Miguel Ángel", "Leonardo", "Donatello"], "difficulty": 3, "color": "purple" },
    { "category": "Unidades de Medida Antiguas", "words": ["Codo", "Pie", "Pulgada", "Braza"], "difficulty": 3, "color": "purple" },
    { "category": "Lenguajes de Programación", "words": ["Python", "Java", "C++", "Ruby"], "difficulty": 3, "color": "purple" },
    { "category": "Órganos Internos (Poco Comunes)", "words": ["Bazo", "Páncreas", "Hígado", "Riñón"], "difficulty": 3, "color": "purple" },
    { "category": "Palabras que Terminan en Vocal Tónica", "words": ["Café", "Bambú", "Maní", "Dominó"], "difficulty": 3, "color": "purple" },
    { "category": "Teóricos de la Filosofía", "words": ["Platón", "Kant", "Nietzsche", "Sócrates"], "difficulty": 3, "color": "purple" },
    { "category": "Instrumentos Musicales Raros", "words": ["Didgeridoo", "Theremin", "Oud", "Zampoña"], "difficulty": 3, "color": "purple" },
    { "category": "Personajes de Mitología Nórdica", "words": ["Odín", "Thor", "Loki", "Freyja"], "difficulty": 3, "color": "purple" }
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
const closeModalButton = document.getElementById('close-modal');

// --- FUNCIÓN PRINCIPAL DE INICIALIZACIÓN ---

document.addEventListener('DOMContentLoaded', initializeGame);

function initializeGame() {
    // 1. Seleccionar el puzzle de la lista incrustada
    currentPuzzle = selectRandomPuzzle();
    
    // Si no se pudo seleccionar (si faltan dificultades)
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
}

// --- LÓGICA DE SELECCIÓN ALEATORIA (Modificada para usar la variable JS) ---

function selectRandomPuzzle() {
    const selectedGroups = [];

    // Seleccionar un grupo aleatorio para cada dificultad (0 a 3)
    for (let i = 0; i < 4; i++) {
        // Filtrar los puzzles por la dificultad actual (i)
        const difficultyPuzzles = ALL_PUZZLES.filter(p => p.difficulty === i);
        
        if (difficultyPuzzles.length === 0) {
            console.error(`Faltan categorías en ALL_PUZZLES: No hay puzzles para la dificultad ${i}.`);
            return null; // Fallo si falta alguna dificultad
        }
        
        // Elegir uno aleatoriamente
        const randomIndex = Math.floor(Math.random() * difficultyPuzzles.length);
        selectedGroups.push(difficultyPuzzles[randomIndex]);
    }
    
    return { groups: selectedGroups };
}

// --- RESTO DE LA LÓGICA DEL JUEGO (sin cambios funcionales) ---

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

shuffleButton.addEventListener('click', shuffleGrid);
submitButton.addEventListener('click', handleSubmit);
closeModalButton.addEventListener('click', initializeGame);

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

    groupElement.innerHTML = `
        <h3>${group.category}</h3>
        <p>${group.words.join(', ')}</p>
    `;

    insertSorted(groupElement, group.difficulty);

    const gridItems = gridContainer.querySelectorAll('.grid-item');
    gridItems.forEach(item => {
        if (selectedWords.includes(item.textContent)) {
            item.classList.add('hidden');
        }
    });

    selectedWords = [];
    updateSubmitButton();
}

function insertSorted(element, difficulty) {
    element.dataset.difficulty = difficulty;
    let inserted = false;
    const children = solvedContainer.children;
    for (let i = 0; i < children.length; i++) {
        if (parseInt(children[i].dataset.difficulty) > difficulty) {
            solvedContainer.insertBefore(element, children[i]);
            inserted = true;
            break;
        }
    }
    if (!inserted) {
        solvedContainer.appendChild(element);
    }
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
        currentPuzzle.groups.forEach(group => {
            let isSolved = false;
            solvedContainer.querySelectorAll('h3').forEach(h3 => {
                if (h3.textContent === group.category) isSolved = true;
            });

            if (!isSolved) {
                const groupElement = document.createElement('div');
                groupElement.classList.add('solved-group');
                const colorClass = `difficulty-${group.color}`;
                groupElement.classList.add(colorClass);
                groupElement.style.opacity = '0.7'; 
                groupElement.innerHTML = `
                    <h3>${group.category}</h3>
                    <p>${group.words.join(', ')}</p>
                `;
                insertSorted(groupElement, group.difficulty);
            }
        });
    } else {
        modalTitle.textContent = '¡Felicidades!';
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