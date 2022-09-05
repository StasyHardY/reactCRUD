import React,{useState, useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify'
import { loginUser } from '../redux/features/auth/authSlice';
import { checkIsAuth } from './../redux/features/auth/authSlice';

export const LoginPage = () => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const {status} = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const isAuth = useSelector(checkIsAuth)

  useEffect(() => {
    if(status) {
      
     console.log(status)
     navigate('/')
      
    }
  },[status, isAuth, navigate])
  

  const handleSubmit = () => {
    try {
      dispatch(loginUser({password, username}))
      setUsername('')
      setPassword('')
       
    } catch (error) {
      console.log(error.message)
    }
  }




  return (
    <form onSubmit={e => e.preventDefault()} className='w-1/4 h-60 mx-auto mt-40'>
      <section class="flex justify-center items-center  ">
    <div class="max-w-md w-full bg-white rounded p-6 space-y-4">
        <div class="mb-4">
            <p class="text-gray-600">Login</p>
            <h2 class="text-xl font-bold">Create your own hero!</h2>
        </div>
        <div>
            <input value={username} onChange={e => setUsername(e.target.value)} class="w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600" type="text" placeholder="Email"/>
        </div>
        <div>
            <input value={password}  onChange={e => setPassword(e.target.value)} class="w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600" type="password" placeholder="Password"/>
        </div>
        <div>
            <button onClick={handleSubmit} type="submit" class="w-full py-4 bg-blue-600 hover:bg-blue-700 rounded text-sm font-bold text-gray-50 transition duration-200">Sign In</button>
        </div>
        <div class="">
            
            <div>
                <a class="text-sm flex items-center justify-end py-1 text-blue-600 hover:underline" href="#">Forgot password?</a>
            </div>
            <div className='text-sm flex items-center justify-end py-1 text-blue-600 hover:underline '>
                <Link to={'/register'} class="text-sm text-blue-600 hover:underline" href="#">Нет аккаунта? Создайте его!</Link>
            </div>
        </div>
    </div>
</section>
    </form>
  )
}
