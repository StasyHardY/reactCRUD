import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers } from './../redux/features/user/userSlice';
import { UserItem } from './../components/UserItem';

export const UsersPage = () => {


    const dispatch = useDispatch()
    const {users} = useSelector((state)=> state.users)

    useEffect(() => {
        dispatch(getAllUsers())
    },[dispatch])


  return (
      <div class="max-w-7xl mx-auto ">
    <div class="inline-block min-w-full py-2 align-middle">
        <div class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
            <table class="min-w-full divide-y divide-gray-300 ">
                <thead class="bg-gray-50 ">
                    <tr>
                        <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">#</th>
                        <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900">User</th>
                        <th scope="col" class="px-3 py-3.5 text-center text-sm font-semibold text-gray-900">Status</th>
                        <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-6">
                            <span class="sr-only">Actions</span>
                        </th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-gray-200 bg-white">
                { users?.map((user, idx) => ( 
                    <tr key={idx} user={user} >
                        <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-semibold text-gray-900 sm:pl-6">1</td>
                        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{user.username}</td>
                        <td class="whitespace-nowrap px-3 py-4 text-sm">
                            <span class="flex justify-center">
                                <p className='text-red-500'>Удален</p>
                            </span>
                        </td> 
                         <td> 
                         <div class="flex justify-center">
                                    <button>
                                        <svg class="w-8 h-8 hover:text-blue-600 rounded-full hover:bg-gray-100 p-1"
                                            fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16">
                                            </path>
                                        </svg>
                                    </button>
                                </div></td>
                    </tr>
                ))}
                    
                    
                </tbody>
            </table>
        </div>
        </div>
        </div>
  )
}
