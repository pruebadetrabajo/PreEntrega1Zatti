import { CartWidget } from "../CartWidget/CartWidget";

export function NavBar() {
    return  (
        <>
            <nav id="nav">
                <ul>   
                    <li><img src="./src/img/logo.png" id="carrito" alt="Carrito de compras"/></li>
                    <li><a href="#">Deportes</a></li>
                    <li><a href="#">Hogar</a></li>
                    <li><a href="#">Electro</a></li>
                    <li><a href="#">Viajes</a></li>
                    <li><a href="#">Ofertas</a></li>
                    <li><CartWidget></CartWidget></li>
                </ul>
            </nav>
            
        </>
    )
}
