
import './App.css'
import { Route, Routes } from 'react-router-dom'
import BooksPage from './pages/BooksPage'
import { useEffect } from 'react'
import { getBooks } from './api/mainApi'
import { useDispatch } from 'react-redux'
import { books } from './redux/books'
import { useState } from 'react'
import OneBookPage from './pages/OneBookPage'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [ready, setReady] = useState(false)
  const dispatch = useDispatch(books)
  useEffect(() => {
    (async () => {
      setReady(true)
      const data = await getBooks();
      if (data) {
        dispatch(books(data))
      }else{
        toast.error('sorry!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
      }

      setReady(false)


    })();
  }, []);

  if (ready) return <h1 className='text-center'>Loading...</h1>

  return (
    <div>
          <ToastContainer />
      <Routes>
        <Route index element={<BooksPage />} />
        <Route path='/books' element={<OneBookPage />} />
      </Routes>
    </div>
  )
}

export default App
