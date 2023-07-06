import { useLocation, useNavigate } from "react-router-dom"


function OneBookPage() {
    const { state } = useLocation();
    const navigate = useNavigate()
  return (


    <div className="mt-4">
        <div className="ml-4">
            <h2 className="inline font-semibold">Title:</h2> <span className="">{state.title.substring(0,30)}</span> 
        </div>
        <div className="ml-4">
            <h2 className="inline font-semibold">Author:</h2> <span className="">{state.title.substring(4,34)}</span> 
        </div>

        <div className="ml-4">
            <h2 className="inline font-semibold">Description:</h2> <span className="">{state.body}</span> 
        </div>


        <div className="flex justify-center mt-4">
            <button onClick={()=>navigate('/')} type="" className="bg-blue-500 px-4 rounded text-white ">back</button>
        </div>
    </div>
  )
}

export default OneBookPage