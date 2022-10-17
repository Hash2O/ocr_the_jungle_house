import { useState } from 'react'
import Banner from './Banner' //ici, c'est Webpack qui gère l'import/export aussi facilement
import logo from '../assets/logo.png'
import Description from './Description'
import Cart from './Cart'
import ShoppingList from './ShoppingList'
import Recommandation from './Recommandation'
import Footer from './Footer'
import '../styles/Layout.css'

function App() {
  const [cart, updateCart] = useState([])
  return (
    <div>
      <Banner>
        <img src={logo} alt='La maison jungle' className='lmj-logo' />
        <h1 className='lmj-title'>La maison jungle</h1>
      </Banner>
      <Description />
      <Recommandation />
      <div className='lmj-layout-inner'>
        <Cart cart={ cart } updateCart={ updateCart } />
        <ShoppingList cart={ cart } updateCart={ updateCart } />
      </div>
      <Footer />
    </div>
  )
}

export default App;
