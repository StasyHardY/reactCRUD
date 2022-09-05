import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { UserItem } from '../components/UserItem.jsx'
import { getAllUsers } from '../redux/features/user/userSlice.js'



export const MainPage = () => {

    const dispatch = useDispatch()
    const {users} = useSelector((state)=> state.users)

    useEffect(() => {
        dispatch(getAllUsers())
    },[dispatch])

    if(!users) {
        return (
            <div>нет ничего</div>
        )
    }

   




  return (
    <div>
      <div class="max-w-7xl mx-auto ">
    <div class="inline-block min-w-full py-2 align-middle">
        <div class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
            <table class="min-w-full divide-y divide-gray-300 ">
                <thead class="bg-gray-50 ">
                    <tr>
                        <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">#</th>
                        <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900">User</th>
                        <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Email</th>
                        <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-6">
                            <span class="sr-only">Actions</span>
                        </th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-gray-200 bg-white">
                    {
                        users?.map((user, idx) => (<UserItem key={idx} user={user} />))
                    }
                </tbody>
            </table>
        </div>
    </div>
</div>
    </div>
  )
}
