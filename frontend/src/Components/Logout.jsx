import React from 'react'
import { useNavigate } from 'react-router-dom';

function Logout() {
const navigate=useNavigate();



function handleLogout(){
    localStorage.removeItem('authToken');
navigate('/login')
}

function handleCancel(){
navigate('/home');

}



return(

    <>
    <div className="fixed inset-0 z-40 min-h-full overflow-y-auto overflow-x-hidden transition flex items-center">
    {/* <!-- overlay --> */}
    <div aria-hidden="true" className="fixed inset-0 w-full h-full bg-black/50 cursor-pointer">
    </div>

    {/* <!-- Modal --> */}
    <div className="relative w-full cursor-pointer pointer-events-none transition my-auto p-4">
        <div
            className="w-full py-2 bg-white cursor-default pointer-events-auto dark:bg-gray-800 relative rounded-xl mx-auto max-w-sm">


            <div className="space-y-2 p-2">
                <div className="p-4 space-y-2 text-center dark:text-white">
                    <p className="text-gray-500">
                        Are you sure you want to logout?
                    </p>
                </div>
            </div>

            <div className="space-y-2">

                <div className="px-6 py-2">
                    <div className="grid gap-2 grid-cols-[repeat(auto-fit,minmax(0,1fr))]">
                        <button className=' rounded-md bg-gray-300 text-gray-950'  onClick={handleCancel}>
                                        Cancel
                            </button>

                        <button className='bg-red-700 hover:bg-red-500 text-white rounded-md py-3' onClick={handleLogout}>
                                        Confirm

                            </button>
                    </div>
                </div>
            </div>


        </div>
    </div>
</div>
    
    </>

)

}


export default Logout

