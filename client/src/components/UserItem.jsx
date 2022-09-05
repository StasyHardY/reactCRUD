import React from 'react'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { removeUsers } from '../redux/features/user/userSlice.js'

export const UserItem = ({user}) => {
    const dispatch = useDispatch()
    const params = useParams()
    const removeHandler = () => {
try {
    dispatch(removeUsers(params.id))
} catch (error) {
    console.log(error)
}
    }
    
  return (
   <tr >
   <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-semibold text-gray-900 sm:pl-6">2</td>
   <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{user.username}</td>
   <td class="whitespace-nowrap px-3 py-4 text-sm">
       {user.email}
   </td>
    <td> 
    <div class="flex justify-center">
               <button>
                   <svg 
                    // onClick={removeHandler}
                    class="w-8 h-8 hover:text-blue-600 rounded-full hover:bg-gray-100 p-1"
                       fill="none" stroke="currentColor" viewBox="0 0 24 24"
                       xmlns="http://www.w3.org/2000/svg">
                       <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                           d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16">
                       </path>
                   </svg>
               </button>
           </div></td>
</tr>
  )
}
