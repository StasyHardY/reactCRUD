import { Layout } from "./components/Layout.jsx";
import {Routes, Route} from 'react-router-dom'
import { MainPage } from "./pages/MainPage";
import { UserPage } from './pages/UserPage';
import { AddPostPage } from './pages/AddPostPage';
import { RegisterPage } from './pages/RegisterPage';
import { LoginPage } from './pages/LoginPage';
import { EditUserPage } from './pages/EditUserPage';
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useDispatch } from 'react-redux';
import { useEffect } from "react";
import { getUser } from './redux/features/auth/authSlice.js'



function App() {
  const dispatch = useDispatch()

  useEffect(()=> {
    dispatch(getUser())
  },[])
  return (
    <div className="App">
     <Layout>
        <Routes>
          <Route path='/' element={<MainPage/>} />
          <Route path=':id' element={<UserPage/>} />
          <Route path='new' element={<AddPostPage/>} />
          <Route path='register' element={<RegisterPage/>} />
          <Route path='login' element={<LoginPage/>} />
          <Route path=':/edit' element={<EditUserPage/>} />          
        </Routes>
        <ToastContainer
position="top-right"
autoClose={1000}
newestOnTop={false}
closeOnClick
theme="dark"
hideProgressBar={true}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
/>
     </Layout>
    </div>
  );
}

export default App;
