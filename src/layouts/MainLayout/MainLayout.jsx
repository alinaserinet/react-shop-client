import Footer from "./Footer";
import Main from "./Main";
import './mainLayout.css';
import Header from "./Header";

const MainLayout = ({ children }) => {
    return (
        <>
            <Header />
            <Main>
                {children}
            </Main>
            <Footer />
        </>
    );
};

export default MainLayout;