import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams  } from 'react-router-dom'
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'

const ShowBook =() => {
    const [book,setBook] = useState({});
    const [loading, setLoading] = useState(false);
    const { id } = useParams();

    useEffect(() => {
        setLoading(true);
        axios.get(`http://localhost:3000/books/${id}`)
        .then((res) => {
            setBook(res.data);
            setLoading(false);
        })
        .catch((err) => {
            console.log(err);
            setLoading(false);
        })
    }, [])
    return(
        <div  className='p-4'>
            <BackButton />
            <h1 className='text-3x1 my-4'>Show Book:</h1>
            {loading ? <Spinner /> : 
            <div className='flex flex-col border-2 border-sky-400 rounded-x1 w-fit p-4'>
                <div className='my-4'>
                    <span className='text-x1 mr-4 text-gray-500'>Id</span>
                    <span>{book._id}</span>
                </div>
                <div className='my-4'>
                    <span className='text-x1 mr-4 text-gray-500'>Title</span>
                    <span>{book.title}</span>
                </div>
                <div className='my-4'>
                    <span className='text-x1 mr-4 text-gray-500'>Author</span>
                    <span>{book.author}</span>
                </div>
                <div className='my-4'>
                    <span className='text-x1 mr-4 text-gray-500'>Publish Year</span>
                    <span>{book.publishYear}</span>
                </div>
            </div>
            }
        </div>
    )
}

export default ShowBook