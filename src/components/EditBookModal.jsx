/* eslint-disable react/prop-types */

import { useState } from "react"
import { useDispatch } from "react-redux";
import { books } from '../redux/books'
import { useSelector } from "react-redux"
function EditBookModal({ setEditModal, book, index }) {
    const booksDetails = useSelector((state) => state.books.value)
    const [title, setTitle] = useState(book.title)
    const [author, setAuthor] = useState(book.title);
    const [description, setDescription] = useState(book.body)

    const dispatch = useDispatch(books);

    function submitForm() {
        setEditModal(false)
        let newarr = [...booksDetails]
        newarr[index] = { title: title, author: author, body: description }
        dispatch(books(newarr))

    }

    return (
        <>
            <div
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            >
                <div className="relative w-auto my-6 mx-auto  max-w-3xl">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        {/*header*/}
                        <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                            <h3 className="text-3xl font-semibold">
                                Add Books
                            </h3>
                            <button
                                className="p-1 ml-auto border-0 bg-white text-black  float-right text-3xl leading-none font-semibold"
                                onClick={() => setEditModal(false)}
                            >
                                <span className="  h-6 w-6 text-2xl block ">
                                    ×
                                </span>
                            </button>
                        </div>
                        {/*body*/}
                        <div className="relative p-6 flex-auto">

                            <form>
                                <div className="mb-6">
                                    <label className="block mb-2 text-sm font-medium text-gray-900 ">Book Name</label>
                                    <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="name" required />
                                </div>
                                <div className="mb-6">
                                    <label className="block mb-2 text-sm font-medium text-gray-900">Author name</label>
                                    <input type="text" value={author} onChange={(e) => setAuthor(e.target.author)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
                                </div>
                                <div className="mb-6">
                                    <label className="block mb-2 text-sm font-medium text-gray-900">Description</label>
                                    <textarea value={description} onChange={(e) => setDescription(e.target.value)} className="w-full border rounded min-h-[84px]"></textarea>
                                </div>
                            </form>

                        </div>
                        {/*footer*/}
                        <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                            <button
                                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => setEditModal(false)}
                            >
                                Close
                            </button>
                            <button
                                className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={submitForm}
                            >
                                Edit books
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
    )
}

export default EditBookModal