import { createContext, useState, ReactNode,Dispatch, SetStateAction,useEffect } from "react"; 

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;

}

interface SwiftShopContextType {
    isSidebarOpen: boolean;
    toggleSidebar: () => void;
    setSidebarOpen: Dispatch<SetStateAction<boolean>>;
    addProduct: (product: Product) => void;
    cartItem: Product[];
    isCartModalOpen: boolean;
    setCartModalOpen: Dispatch<SetStateAction<boolean>>;
    toggleCartModal: () => void;
    currentProduct: Product | null;
    cartTotal: number;
    closeCartModal: () => void;
    removeItem: (productToDelete: Product) => void;
    doCalc: () => void;
  }

export const SwiftShopContext = createContext<SwiftShopContextType | undefined>(undefined);

export function SwiftShopProvider({ children }: { children: ReactNode }) {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const [cartItem, setCartItem] = useState<Product[]>([]);
    const [isCartModalOpen, setCartModalOpen] = useState(false);
    const [currentProduct,setCurrentProduct] = useState<Product | null>(null);
    const [cartTotal, setCartTotal] = useState(0);

    const toggleSidebar = () => {
      setSidebarOpen((prev) => !prev);
    };

    const addProduct = (product: Product) => {
      setCartItem((prevItems) => [...prevItems, product]);
      setCurrentProduct(product);
      setCartTotal((prevTotal) => prevTotal + product.price);
    };

    const toggleCartModal = () => {
      setCartModalOpen(true);
      setTimeout(() => {
        setCartModalOpen(false);
      }, 3000  ); 
    };

    const closeCartModal = () => {
      setCartModalOpen(false);
    }

    useEffect(() =>{
      console.log(cartItem)
    },[cartItem]);

    const removeItem = (productToDelete: Product) => {
      const updatedCart = cartItem.filter(cart => cart !== productToDelete);
      setCartItem(updatedCart);
      const newTotal = updatedCart.reduce((sum, product) => sum + product.price, 0);
      setCartTotal(newTotal);
    
    };

    const doCalc = () => {
      const stateTax = 1.0875;
      const totalTax = (stateTax * cartTotal) - cartTotal;
      const totalPrice = stateTax * cartTotal;
      
      return {
          totalTax: totalTax.toFixed(2),
          totalPrice: totalPrice.toFixed(2)
      };
    }

    useEffect(() => {
      doCalc();
    },cartItem)  

    




    return (
      <SwiftShopContext.Provider value=
      {
        {isSidebarOpen,
         toggleSidebar,
         setSidebarOpen,
         addProduct,
         cartItem,
         isCartModalOpen,
         setCartModalOpen,
         toggleCartModal,
         currentProduct,
         cartTotal,
         closeCartModal,
         removeItem,
         doCalc,
         }
      }>
        {children}
      </SwiftShopContext.Provider>
    );
}

          


