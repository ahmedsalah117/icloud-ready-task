"use client";
import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

interface AppContextType {
  totalCartCount: number;
  kitchenItems: any[];
  cartItems: any[];
  kitchenItemsCount: number;
  addItemToCart: ({
    id,
    title,
    description,
    price,
  }: {
    id: number;
    title: string;
    description: string;
    price: number;
  }) => void;
  totalCartAmount: number;
  removeCartItemHandler: (itemId: number) => void;
  updateItemsCountInCart: (itemId: number, value: number) => void;
  checkOutHandler: () => void;
}

const appContextInitialValues: AppContextType = {
  totalCartCount: 0,
  cartItems: [],
  kitchenItems: [],
  kitchenItemsCount: 0,
  addItemToCart: () => {},
  totalCartAmount: 0,
  removeCartItemHandler: () => {},
  updateItemsCountInCart: () => {},
  checkOutHandler: () => {},
};

export const AppContext = createContext<AppContextType>(
  appContextInitialValues
);

export function AppContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [totalCartCount, setTotalCartCount] = useState(
    appContextInitialValues.totalCartCount
  );
  const [cartItems, setCartItems] = useState(appContextInitialValues.cartItems);
  const [totalCartAmount, setTotalCartAmount] = useState(
    cartItems.reduce((acc, curr) => acc + curr.price * curr.count, 0)
  );
  const [kitchenItemsCount, setKitchenItemsCount] = useState(
    appContextInitialValues.kitchenItemsCount
  );

  const [kitchenItems, setKitchenItems] = useState(
    appContextInitialValues.kitchenItems
  );
  // add item to cart
  function addItemToCart(item: {
    id: number;
    title: string;
    description: string;
    price: number;
  }) {
    const isItemInCart = cartItems.some((cartItem) => cartItem.id === item.id);
    if (isItemInCart) {
      // getting all cart items excluding the item to be added
      const filteredCartItems = cartItems.filter(
        (cartItem) => cartItem.id !== item.id
      );
      // getting the current count of the item in the cart
      const itemCountInCart = cartItems.find(
        (cartItem) => cartItem.id === item.id
      )?.count;
      // updating the cart items state with the updated count and the new item
      setCartItems([
        ...filteredCartItems,
        { ...item, count: itemCountInCart + 1 },
      ]);
    } else {
      setCartItems((prevItems) => {
        return [...prevItems, { ...item, count: 1 }];
      });
    }
    // update the total cart count...
    setTotalCartCount((prevCount) => prevCount + 1);
  }

  // update item's count in the cart
  function updateItemsCountInCart(itemId: number, value: number) {
    const targetedCartItem = cartItems.find((item) => item.id === itemId);
    const targetedItemIndex = cartItems.indexOf(targetedCartItem);
    const cartItemsCopy = JSON.parse(JSON.stringify(cartItems));
    cartItemsCopy[targetedItemIndex].count = value;
    setCartItems(cartItemsCopy);
    setTotalCartCount((prevCount) => {
      return prevCount + (value - targetedCartItem.count);
    });

  }

  // Remove an item from the cart...
  function removeCartItemHandler(itemId: number) {
    const toBeDeletedItem = cartItems.find((item) => item.id === itemId);
    // updating the cart items
    setCartItems((prevItems) => {
      return prevItems.filter((item) => item.id !== itemId);
    });

    // updating the total cart count...
    setTotalCartCount((prevCount) => prevCount - toBeDeletedItem.count);
  }

  // Updating the kitchen items ...

  function checkOutHandler() {
    const newItems = JSON.parse(JSON.stringify(cartItems));
    setKitchenItems((prevItems) => {
      return [...prevItems, ...newItems];
    });
    toast.success("Orders moved to your kitchen menu!");
    setCartItems([]);
    setTotalCartCount(0);
  }
  useEffect(() => {
    setTotalCartAmount(
      cartItems.reduce((acc, curr) => acc + curr.price * curr.count, 0)
    );
  }, [cartItems]);

  useEffect(() => {
    const calculatedCount = kitchenItems.reduce(
      (acc, curr) => acc + curr.count,
      0
    );
    setKitchenItemsCount(calculatedCount);
  }, [kitchenItems]);
  const contextValue = {
    checkOutHandler,
    kitchenItems,
    removeCartItemHandler,
    updateItemsCountInCart,
    addItemToCart,
    totalCartCount,
    cartItems,
    kitchenItemsCount,
    totalCartAmount,
  };
  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
}
