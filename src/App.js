import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Routes from "./Routes";
import { createCart, setCartId } from "./store/reducer/cartSlice";

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const cartId = localStorage.getItem('cart-id');
        if(cartId) {
            dispatch(setCartId(cartId));
            return;
        }
        dispatch(createCart());
    }, [dispatch]);

    return (
        <Routes />
    );
};

export default App;