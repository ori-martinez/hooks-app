/* Components */
import { 
    /* useState() */
    CounterApp, CounterCostumHook, 
    /* useEffect() */
    SimpleForm, CostumHookForm, 
    /* Múltiples Costum Hook */
    MultipleCostumHooks, 
    /* useRef() */
    FocusScreen, 
    /* useLayoutEffect() */
    Layout,
    /* Memorización */
    Memorize, MemorizeHook, CallbackHook, 
    /* Task */
    Father,
    /* useReducer() */
    TodoApp
} from './components';
/* Utils */
import './components/08-useReducer/utils/intro-reducer';

// ESTILOS
/* Contenedor */
const mainStyle = "m-12";
/* Texto */
const titleStyle = "p-2 text-center text-4xl font-bold";

/* __________________________________________________________________________________________________________

TAREAS:
    1. Hacer que el primer contador aumente, sin afectar cada propiedad definida en el objeto del useState()
(CounterApp.jsx)
    2. Utilizar la función increment() del Costum Hook en para aumentar el contador (CounterCostumHook.jsx)
    3. Hacer las funciones de decrement() y reset() del Costum Hook (useCounter.js). Luego, usarlos en el
contador (CounterCostumHook.jsx)
    4. Incluir una función handleReset() para vaciar los inputs y reestablecer los valores iniciales del
formState (useForm.js / CostumHookForm.jsx)
    5. Usar el useCounter() para cambiar el id de la url que se pasa en useFetch() (useCounter.js / 
MultipleCostumHooks.jsx)
    6. Hacer que la carta de información sea un componente (MultipleCostumHooks.jsx)
    7. Usar los componentes suministrados del curso (07-task-memo) y utilizar los hooks de memorización para
evitar el rerenderizado de los componentes Children (Father.jsx)
    8. Optimizar el código convertiendo ciertas partes en componentes funcionales, tomando en cuenta las
propiedas y funciones que estos necesiten (TodoApp.jsx)
    9. Crear un hook para la lógica del manejo de las tareas (useTodo.js)
    10. Crear la prueba para probar el handleChange (useForm.test.js)
__________________________________________________________________________________________________________ */

// PAGINA
/* Vista Principal */
export const HooksApp = () => (
    <div className={ mainStyle }>
        {/* Título de la Página */}
        <h1 className={ titleStyle }> HooksApp </h1>

        {// HOOK useReducer()
        /* Lista de Tareas */}
        <TodoApp />

        {// TASK
        /* Uso de los Hooks de Memorización */}
        <Father />

        {// MEMORIZACIÓN
        /* Contador Memorizado con el Hook useCallback() */}
        <CallbackHook />
        {/* Contador Memorizado con el Hook useMemo() */}
        <MemorizeHook />
        {/* Contador Memorizado con la Función memo()*/}
        <Memorize />

        {// HOOK useLayoutEffect()
        /* Carta de Información Dinámica */}
        <Layout />

        {// HOOK useRef()
        /* Foco de la Pantalla en un Input */}
        <FocusScreen />

        {// MÚLTIPLES COSTUM HOOKS
        /* Carta de Información Dinámica */}
        <MultipleCostumHooks />

        {// HOOK useEffect()
        /* Formulario con Costum Hook */}
        <CostumHookForm />
        {/* Formulario Simple */}
        <SimpleForm />

        {// HOOK useState()
        /* Contador con Costum Hook */}
        <CounterCostumHook />
        {/* Contadores con useState() */}
        <CounterApp />
    </div>
);
