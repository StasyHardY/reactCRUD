import React,{useState} from 'react'
import {Link, NavLink} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { checkIsAuth, logout, loginUser } from './../redux/features/auth/authSlice';
import { toast } from 'react-toastify';


export const Navbar = () => {
  const {user} = useSelector((state)=> state.auth)
  
  const isAuth = useSelector(checkIsAuth)
  const dispatch = useDispatch()
  
 


  const activeStyles = {
    color:'white',
    borderRadius:'8px'
  }
  
  const logoutHandler = () => {
    dispatch(logout())
    window.localStorage.removeItem('token')
    toast('Вы вышли из системы')
  }

  


  return (
    <div className='flex py-2 justify-between items-center bg-blue-600 rounded-lg'>
      <span className='flex justify-center items-center px-2 text-xl text-white rounded-md'>CRUD REACT</span>
         <ul className='flex gap-8'>
         <li><NavLink style={({isActive}) => isActive? activeStyles : undefined} to='/' className='text-lg py-2  px-2 text-black hover:text-white'>Главная</NavLink></li>
         
         {isAuth && (<>
          <li><NavLink style={({isActive}) => isActive? activeStyles : undefined} to='/:id' className='text-lg  py-2  px-2 text-black hover:text-white'>Мой профиль</NavLink></li>
          </>
         )}
         </ul>
         
         <div className='flex justify-center items-center text-sm rounded-sm px-4 py-2'>
            {isAuth ? (
              <button onClick={logoutHandler} >Выйти</button>
            ) : <Link to={'/login'}>Войти</Link>}
            {isAuth && (<>
            <p className='flex justify-center  items-center w-13 h-14 ml-4 text-sm text-white  '><h1>Hi,{user ? user.username : 'Guest'} </h1></p>
            </>
            )}
         </div>
         
         
    </div>
  )
}
