/* eslint-disable react/prop-types */

import { useSelector } from "react-redux"
import BookCard from "./BookCard"


function MainContents() {
    const booksDetails = useSelector((state) => state.books.value)
    return (
        <div className="flex items-center justify-center flex-grow md:justify-center lg:justify-center">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-5 ">
                {
                    booksDetails?.length > 0 && booksDetails.map((data, index) => (
                        <BookCard key={index} index={index} book={data} />
                    ))
                }






            </div>
        </div>
    )
}

export default MainContents