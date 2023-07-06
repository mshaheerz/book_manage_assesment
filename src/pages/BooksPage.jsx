
import {useSelector} from 'react-redux';
import { useDispatch } from 'react-redux'
import {books} from '../redux/books'
import Header from '../components/Header';
import MainContents from '../components/MainContents';
function BooksPage() {
    const dispatch = useDispatch(books);

  return (
    <div>
        <Header />
        <MainContents/>

    </div>
  )
}

export default BooksPage