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
      }, 4000000  ); 
    };

    const closeCartModal = () => {
      setCartModalOpen(false);
    }

    useEffect(() =>{
      console.log(cartItem)
    },[cartItem]);
    

    useEffect(() =>{
      console.log(isCartModalOpen);
    },[isCartModalOpen])


    




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
         closeCartModal
         }
      }>
        {children}
      </SwiftShopContext.Provider>
    );
}

          


