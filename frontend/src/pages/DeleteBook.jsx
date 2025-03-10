import React, { useState, useEffect} from 'react'
import axios from 'axios'
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'
import { useNavigate, useParams } from 'react-router-dom'
const DeleteBook =() => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate()
    const { id } = useParams()
    const handleDeleteBook = () => {
        setLoading(true);
        axios.delete(`http://localhost:3000/books/${id}`)
        .then(() => {
            setLoading(false)
            navigate('/')
        })
        .catch((err) => {
            setLoading(false)
            alert('Something went wrong deleting book')
            console.log(err)
        })
    }
    return(
        <div className='p-4'>
            <BackButton />
            <h1 className='text-3x1 my-4'>Delete Book</h1>
            {loading ? <Spinner /> : ''}
            <div className='flex flex-col items-center border-2 border-sky-400 rounded-x1 w-[600px] p-8 mx-auto '>
                <h3 className='text-2x1'>Are you sure you want to proceed?</h3>
                <button
                    className='p-4 bg-red-600 text-white m-8 w-full'
                    onClick={handleDeleteBook}
                > Proceed </button>
            </div>
        </div>
    )
}

export default DeleteBook