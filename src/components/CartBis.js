import { useState } from 'react'
import '../styles/Cart.css'

function Cart() {
    const monsteraPrice = 8
    const ivyPrice = 10
    const flowerPrice = 15

    //Création d'un state cart, et déclaration de fonction pour mettre à
    //jour le state (updateState) et attribution d'une valeur initiale,
    //ici zéro.
    const [cart, updateCart] = useState(0)          //Monstera
    const [cart2, updateCart2] = useState(0)        //Lierre
    const [cart3, updateCart3] = useState(0)        //Bouquet

    //On fait de même pour gérer l'ouverture et la fermeture du panier
    //On définit la valeur (boolean) à false au départ
    const [isOpen, setIsOpen] = useState(false)

    return isOpen ? 
        (<div className="lmj-cart">
            <button onClick={()=> setIsOpen(false)}>Fermer le panier</button>
        <h2>Panier</h2>
        <ul>
            <li><div>Monstera : {monsteraPrice}€</div>
            <div><button onClick={()=> updateCart(cart + 1)}>Ajouter</button>
            <button onClick={()=> updateCart(cart - 1)}>Retirer</button></div>
            </li>
            <li><div>Lierre : {ivyPrice}€</div>
            <div><button onClick={()=> updateCart2(cart2 + 1)}>Ajouter</button>
            <button onClick={()=> updateCart2(cart2 - 1)}>Retirer</button></div>
            </li>
            <li><div>Fleurs : {flowerPrice}€</div>
            <div><button onClick={()=> updateCart3(cart3 + 1)}>Ajouter</button>
            <button onClick={()=> updateCart3(cart3 - 1)}>Retirer</button></div>
            </li>
        </ul>
        <h3>Total : {(monsteraPrice * cart) + (ivyPrice * cart2) + (flowerPrice * cart3)}€</h3>
        <div><button onClick={()=> (updateCart(0), updateCart2(0), updateCart3(0))}>Vider le panier</button></div>
    </div>) : (
        <button onClick={()=> setIsOpen(true)}>Ouvrir le panier</button>
    )
    
}

export default Cart