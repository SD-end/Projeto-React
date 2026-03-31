import {  } from "react";
import Logo from "../Imagens/Logo.png";

const Header = () => {
    return( 
        <> 
            <div className="text-center">
                <img src={Logo} alt="Logo" className="img-fluid"/>
                <p>A Song of Ice and Fire</p>
            </div>
        </>
    );
}

export default Header