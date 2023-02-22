// CONSTANTES
/* Estado Inicial del Reducer */
const initialState = [ {
    id: 1,
    todo: 'Recolectar la piedra del Alma',
    done: false,
} ];

// FUNCIONES
/* Reducer */
const todoReducer = (state = initialState, action = { }) => {
    // CONDICIONAL
    /* Validación del Tipo Inserción de la Acción */
    if (action.type === '[TODO] add todo') return [ ...state, action.payload ];

    // RETORNO
    return state;
}

// VARIABLES
/* Ejecución de la Función */
let todos = todoReducer();

// CONSTANTES
/* Nueva Tarea para Insertar al Estado del Reducer */
const newTodo = {
    id: 2,
    todo: 'Recolectar la piedra del Poder',
    done: false,
}
/* Acción de Inserción del Reducer */
const addTodoAction = {
    type: '[TODO] add todo',
    payload: newTodo,
} 

/* Inserción de la Nueva Tarea en el Estado del Reducer */
todos = todoReducer(todos, addTodoAction);

/* Muestra por Consola */
console.log(todos);
