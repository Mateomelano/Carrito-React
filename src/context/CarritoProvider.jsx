import { CarritoContext } from "../context/CarritoContext";
import { useReducer } from "react";

const initialState = [];

// Mueve el reducer fuera del componente
const comprasReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case "[Carrito] Agregar compra":
            return [...state, action.payload];

        case "[Carrito] Aumentar Cantidad compra":
            return state.map((compra) => {
                if (compra.id === action.payload) {
                    return {
                        ...compra,
                        cantidad: compra.cantidad + 1
                    };
                }
                return compra;
            });

        case "[Carrito] Disminuir Cantidad compra":
            return state.map((compra) => {
                if (compra.id === action.payload && compra.cantidad > 1) {
                    return {
                        ...compra,
                        cantidad: compra.cantidad - 1
                    };
                }
                return compra;
            });

        case "[Carrito] Eliminar compra":
            return state.filter((compra) => compra.id !== action.payload);

        default:
            return state;
    }
};

export const CarritoProvider = ({ children }) => {
    const [listaCompras, dispatch] = useReducer(comprasReducer, initialState);

    const agregarCompra = (compra) => {
        dispatch({
            type: "[Carrito] Agregar compra",
            payload: compra
        });
    };

    const aumentarCantidad = (id) => {
        dispatch({
            type: "[Carrito] Aumentar Cantidad compra",
            payload: id
        });
    };

    const disminuirCantidad = (id) => {
        dispatch({
            type: "[Carrito] Disminuir Cantidad compra",
            payload: id
        });
    };

    const eliminarCompra = (id) => {
        dispatch({
            type: "[Carrito] Eliminar compra",
            payload: id
        });
    };

    return (
        <CarritoContext.Provider
            value={{ listaCompras, agregarCompra, aumentarCantidad, disminuirCantidad, eliminarCompra }}
        >
            {children}
        </CarritoContext.Provider>
    );
};
