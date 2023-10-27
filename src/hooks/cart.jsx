import { createContext, useContext, useEffect, useState } from "react";

import { api } from "../services/api";
import { useAuth } from "./auth";

import { toast } from 'react-toastify';

export const CartContext = createContext({});

function CartProvider({children}) {
  const { user } = useAuth();
  const [products, setProducts] = useState(JSON.parse(localStorage.getItem("@foodexplorer:products_in_cart")));
  const [cartProducts, setCartProducts] = useState(products ? products : []);

  async function checkout() {
    try {
      const totalCostCart = getTotalCostFromCart();
      const responseOrder = await api.get("/orders");
      let codeOfOrder = responseOrder.data;
      codeOfOrder = codeOfOrder.length + 1

      const response = await api.post("/checkout", {products, user, totalCostCart, codeOfOrder});

      if(response.status === 200) {
        localStorage.removeItem("@foodexplorer:products_in_cart");
        return window.location = response.data.url;
      };
    } catch (error) {
      return toast.error("Não foi possível completar a transação, tente novamente!");
    };
  } 

  function checkIfProductExistsInCart(id) {
    const exists = cartProducts.find(product => product.id === id);

    return exists;
  }
  
  function addOneProductToCart(product) {
    const exists = checkIfProductExistsInCart(product.id);
    
    if(!exists) { // if product is not in cart
      setCartProducts([...cartProducts, product]);
      toast.success("Prato adicionado ao carrinho!");
    } else { // if product is in cart
      return toast.error("Este prato já consta em seu carrinho!");
    }
  }

  function calculateProductPrice(product) {
    const value = (product.price * product.quantity);

    const real = value / 100;
    let formatter = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL"
    });

    return formatter.format(real)
  }
  
  function deleteFromCart(product) {
    let newProducts = products.filter(function(item) { 
      return item.id !== product.id;  
    });
    
    setCartProducts(newProducts);
  }

  function getTotalCostFromCart() {
    let totalCost = 0;

    cartProducts.map((item) => {
      totalCost += (item.price * item.quantity);
    });
    const real = totalCost;
    
    return real;
  }

  useEffect(() => {
    function setActualProducts() {
      localStorage.setItem('@foodexplorer:products_in_cart', JSON.stringify(cartProducts));
      setProducts(JSON.parse(localStorage.getItem("@foodexplorer:products_in_cart")));
    }

    setActualProducts();
  }, [cartProducts]);

  return (
    <CartContext.Provider value={{
      addOneProductToCart,
      cartProducts,
      getTotalCostFromCart,
      deleteFromCart,
      calculateProductPrice,
      checkout
    }}>
      {children}
    </CartContext.Provider>
  )
};

function useCart() {
  const context = useContext(CartContext);

  return context;
};

export {
  CartProvider,
  useCart
}
