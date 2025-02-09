// Estado inicial del carrito, cargado desde localStorage
export const cartInicialState =
  JSON.parse(window.localStorage.getItem("cart")) || [];

// Tipos de acciones para el carrito
export const CART_ACTION_TYPES = {
  ADD_TO_CART: "ADD_TO_CART", // Acción para agregar un producto al carrito
  REMOVE_FROM_CART: "REMOVE_FROM_CART", // Acción para remover un producto del carrito
  CLEAR_CART: "CLEAR_CART", // Acción para limpiar el carrito
  INCREMENT_QUANTITY: "INCREMENT_QUANTITY", // Acción para incrementar la cantidad de un producto
  DECREMENT_QUANTITY: "DECREMENT_QUANTITY", // Acción para decrementar la cantidad de un producto
};

// Función para actualizar el localStorage con el estado actual del carrito
export const updateLocalStorage = (state) => {
  window.localStorage.setItem("cart", JSON.stringify(state));
};

// Reducer del carrito
export const cartReducer = (state, action) => {
  const { type: actionType, payload: actionPayload } = action;

  switch (actionType) {
    case CART_ACTION_TYPES.ADD_TO_CART: {
      const { id } = actionPayload;
      const productInCartIndex = state.findIndex((item) => item.id === id);

      // Si el producto ya está en el carrito, aumenta la cantidad
      if (productInCartIndex >= 0) {
        const newState = structuredClone(state);
        newState[productInCartIndex].quantity += 1;
        updateLocalStorage(newState);
        return newState;
      }

      // Si el producto NO está en el carrito, agrégalo con cantidad 1
      const newState = [
        ...state,
        {
          ...actionPayload,
          quantity: 1,
        },
      ];
      updateLocalStorage(newState);
      return newState;
    }

    case CART_ACTION_TYPES.REMOVE_FROM_CART: {
      const { id } = actionPayload;
      // Filtra el producto a remover del carrito
      const newState = state.filter((item) => item.id !== id);
      updateLocalStorage(newState);
      return newState;
    }

    case CART_ACTION_TYPES.CLEAR_CART: {
      // Limpia el carrito
      updateLocalStorage([]);
      return [];
    }

    case CART_ACTION_TYPES.INCREMENT_QUANTITY: {
      const { id } = actionPayload;
      // Incrementa la cantidad del producto en el carrito
      const newState = state.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      );
      updateLocalStorage(newState);
      return newState;
    }

    case CART_ACTION_TYPES.DECREMENT_QUANTITY: {
      const { id } = actionPayload;
      // Decrementa la cantidad del producto en el carrito, si la cantidad es mayor a 1
      const newState = state.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
      updateLocalStorage(newState);
      return newState;
    }

    default:
      return state; // Retorna el estado actual si la acción no es reconocida
  }
};
