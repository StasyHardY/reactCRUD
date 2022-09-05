import User from '../models/User.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'


// Register
export const register = async (req,res) => {
   try {
      const { username, password, skills, email} = req.body

      //  Проверка на имя пользователя в БД
      const isUsed = await User.findOne({username, email})
      if(isUsed) {
         return res.json({message:'Данное имя/email уже занято'})
      }

      // Хешируем пароль
      const salt = bcrypt.genSaltSync(10)
      const hashedPassword = bcrypt.hashSync(password, salt)

      // Формируем пользователя
      const newUser = new User({
         username, password: hashedPassword, skills, email
      })

      // Проверка логина в системе
      const token = jwt.sign({
         id:newUser._id
      }, process.env.JWT_SECRET,
      {expiresIn:'30d'}) 


      // Заносим пользователя в БД
      await newUser.save( )

      // Отправляем ответ на frontend
      res.json({
         newUser, token, message:'Регистрация прошла успешно'
      })

   } catch (error) {
      res.json({message:'Ошибка при создании пользователя'})
   }
}

// Login
export const login = async (req,res) => {
   try {
      const {username, password} = req.body

      // Проверяем есть ли такой пользователь в БД
      const user = await User.findOne({username})
      if(!user) {
         return res.json({message:' Пользователь с таким именем не найден'})
      }

      // Если есть, проверяем пароль
      const isPasswordCorrect = await bcrypt.compare(password, user.password)

      // Если пароль неправильный
      if(!isPasswordCorrect) {
         return res.json({message:'Неверный пароль'})
      }

      // Проверка логина в системе
      const token = jwt.sign({
         id:user._id
      }, process.env.JWT_SECRET,
      {expiresIn:'30d'})


      //  Возвращаем ответ на frontend
      res.json({token, user, message:'Вы вошли в систему'})

   } catch (error) {
      res.json({message:'Ошибка при авторизации'})
   }
}

// Get User
export const getUser = async (req,res) => {
   try {
      const user = await User.findById(req.userId)
      if(!user) {
         return res.json({message:' Пользователь с таким именем не найден'})
      }


      // Снова создаем токен
      const token = jwt.sign({
         id:user._id
      }, process.env.JWT_SECRET,
      {expiresIn:'30d'})

      // Отправляем ответ на frontend
      res.json({token, user})


   } catch (error) {
      res.json({message:'Нет Доступа'})
   }
}
//get users
export const getAll = async (req,res) => {
   try {
      const users = await User.find().sort('-createdAt')
      if(!users) {
         return res.json({message:' Пользователей нет '})
      }
      res.json({users})
   } catch (error) {
      res.json({message:'Что то пошло не так'})
   }
}
// Delete User
export const removeUser = async (req,res) => {
   try {
      const users = await User.findByIdAndDelete(req.params.id)
      if(!users) {
         res.json({message:'Юзер не найден'})
      }
      
      
      res.json({users})
   } catch (error) {
      res.json({message:'Что то пошло не так'})
   }
}


