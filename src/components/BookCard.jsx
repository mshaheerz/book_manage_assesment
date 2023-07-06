/* eslint-disable react/prop-types */
import { useState } from "react";
import AddBookModal from "./AddBookModal";
import EditBookModal from "./EditBookModal";
import {books} from '../redux/books'
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux"
import {  useNavigate } from "react-router-dom";
function BookCard({ book,index }) {
    const  navigate = useNavigate()
    const [showModal, setShowModal] = useState(false)
    const [editModal, setEditModal] = useState(false)
    const booksDetails = useSelector((state) => state.books.value)
    const dispatch = useDispatch(books);


    function deleteBook(index){
        let newarr= [...booksDetails]
        newarr.splice(index, 1);
        dispatch(books(newarr))
    }

    function editBook(){
        setEditModal(true)


    }

    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full" src="https://picsum.photos/100/100" alt="Sunset in the mountains" />
            <div className="px-6 py-4">
                <div className="font-semibold text-xl mb-2">Name:{book.title.substring(0, 25)}</div>
                <div>
                    <p className="text-gray-700 text-lg font-semibold">
                        Author:<span className="text-base font-normal"> {book.title}</span>

                    </p>
                </div>
                <div>
                    <p className="text-gray-700 text-lg font-semibold">
                        descripton:<span className="text-base font-normal"> {book.body}</span>

                    </p>
                </div>

            </div>
            <div className="px-6 pt-4 pb-2">
                <span onClick={()=>deleteBook(index)} className="inline-block bg-red-600 cursor-pointer rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">Delete</span>
                <span onClick={()=>editBook()} className="inline-block bg-blue-500 cursor-pointer rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">Edit</span>
                <span onClick={()=>{navigate('/books',{state:{
                    title:book.title,
                    body:book.body,
                }})}} className="inline-block bg-gray-500 cursor-pointer rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">View</span>
            </div>
            <div className='group border fixed bottom-10 right-10 z-10 flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 uppercase leading-normal text-white'>


                <button className=' cursor-pointer rounded-full p-5' onClick={()=>setShowModal(true)}>+</button>
            </div>
            {
                showModal && <AddBookModal showModal={showModal} setShowModal={setShowModal} />

            }


            {
                editModal && <EditBookModal editModal={editModal} setEditModal={setEditModal} book={book} index={index} />
            }
        </div>
    )
}

export default BookCard