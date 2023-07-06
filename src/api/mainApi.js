import axios from "axios";


export async function getBooks() {

    try {
    const { data } =await axios.get('https://jsonplaceholder.typicode.com/posts')
    return data
    } catch (error) {
    return false;
    }
}