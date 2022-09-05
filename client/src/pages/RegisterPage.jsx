import React,{useState, useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../redux/features/auth/authSlice';
import { toast } from 'react-toastify'

export const RegisterPage = () => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [skills, setSkills] = useState('')
  const {status} = useSelector((state) => state.auth)
  console.log(status)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    if(status) {
      toast(status, )
    }
  }, [status])

  const handleSubmit = () => {
    try {
      dispatch(registerUser({username,password, email, skills}))
      navigate('/')
      setUsername('')
      setPassword('')
      setEmail('')
      setSkills('')
    } catch (error) {
      console.log(error)
    }
  }




  return (
    <form onSubmit={e => e.preventDefault()} className='w-1/4 h-60 mx-auto mt-40'>
      <section class="flex justify-center items-center  ">
    <div class="max-w-md w-full bg-white rounded p-6 space-y-4">
        <div class="mb-4">
            <p class="text-gray-600">Register</p>
            <h2 class="text-xl font-bold">Create your own hero!</h2>
        </div>

        <div>
            <input value={username} onChange={e => setUsername(e.target.value)} class="w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600" type="text" placeholder="Login"/>
        </div>

        <div>
            <input value={password}  onChange={e => setPassword(e.target.value)} class="w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600" type="password" placeholder="Password"/>
        </div>

        <div>
            <input value={email} onChange={e => setEmail(e.target.value)} class="w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600" type="text" placeholder="Email"/>
        </div>

        <div>
            <input value={skills} onChange={e => setSkills(e.target.value)} class="w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600" type="text" placeholder="Опишите ваши скиллы"/>
        </div>

        <div>
            <button onClick={handleSubmit} type="submit" class="w-full py-4 bg-blue-600 hover:bg-blue-700 rounded text-sm font-bold text-gray-50 transition duration-200">Sign In</button>
        </div>

        <div class="flex items-center justify-end flex-col">
            <div className=''>
                <Link to={'/login'} class="text-sm text-blue-600 hover:underline" href="#">Уже зарегистрированы?</Link>
            </div>
        </div>
    </div>
</section>
    </form>
  )
}
