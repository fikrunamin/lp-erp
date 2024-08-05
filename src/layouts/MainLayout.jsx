import Navbar from "../components/shared/Navbar.jsx";
import Footer from "../components/shared/Footer.jsx";

function MainLayout({children}) {
    return (
        <>
            <header className="sticky z-10 top-0 bg-white shadow">
                <Navbar/>
            </header>
            <main>{children}</main>
            <footer>
                <Footer/>
            </footer>
        </>
    )
}

export default MainLayout;