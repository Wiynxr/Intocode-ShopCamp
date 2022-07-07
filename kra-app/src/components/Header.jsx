import CartLogo from "./CartLogo";
import Categorie from "./Categorie";
import Title from "./Title";


const Header = () => {
    return (
        <div className="header">
            <Title />
            <CartLogo />
        </div>
    )
}

export default Header;