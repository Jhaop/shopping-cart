import { useState } from 'react'
import style from './App.module.css'
import Home from './components/home/home'
import Shopping from './components/shopping/shopping'
import Cart from './components/cart/cart'
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'
import cartImage from './assets/shopping-cart.png'

function App() {
  const [page, setPage] = useState('home')

  const changePage = () => {
    page === 'home' ? setPage('shopping') : setPage('home')
  }

  return (
    <>
      <nav className={style.navList}>
        <ul>
          <li>
            <Link to="home" className={style.listItem}>Home</Link>
          </li>
          <li >
            <Link to="shopping" className={style.listItem}>Shopping</Link>
          </li>
        </ul>
      </nav >
      <Outlet />
    </>
  )
}

export default App
