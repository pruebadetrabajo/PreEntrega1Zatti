import { CartWidget } from "../CartWidget/CartWidget";

export function NavBar() {
    return  (
        <>
            <div id="contenedorNavBar">
                <div id="contenedorLogo">
                <img src="./src/img/logo.png" id="logo" alt="Carrito de compras"/>
                </div>
                <div id="contenedorNav">
                    <nav id="nav">
                        <ul>   
                            <li><a href="#">Deportes</a></li>
                            <li><a href="#">Hogar</a></li>
                            <li><a href="#">Electro</a></li>
                            <li><a href="#">Viajes</a></li>
                            <li><a href="#">Ofertas</a></li>
                            <li><CartWidget></CartWidget></li>
                        </ul>
                    </nav>
                </div>
            </div>
                        
        </>
    )
}
