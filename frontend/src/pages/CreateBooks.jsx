import React, { useState} from 'react'
import axios from 'axios'
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'
import { useNavigate } from 'react-router-dom'

const CreateBook =() => {
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [publishYear, setPublishYear] = useState('')
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate();
    const handleSaveBook = () => {
        const newBook = {
            title: title,
            author: author,
            publishYear: publishYear
        }
        setLoading(true)
        axios.post('http://localhost:3000/books', newBook)
        .then(() => {
            setLoading(false)
            navigate('/')
        })
        .catch((err) => {
            setLoading(false)
            alert('Something went wrong with the book creation')
            console.log(err)
        })

    }

    return(
        <div className='p-4'>
            <BackButton />
            <h1 className='text-3x1 my-4'>Create Book</h1>
            {loading ? <Spinner /> : ''}
            <div className='flex flex-col border-2 border-sky-400 rounded-x1 w-[600px] p-4 mx-auto'>
                <div className='my-4'>
                    <label className='text-x1 mr-4 text-gray-500'>Title</label>
                    <input
                        type='text'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className='border-2 border-gray-500 px-4 py-2 w-full'
                    />
                </div>
                <div className='my-4'>
                    <label className='text-x1 mr-4 text-gray-500'>Author</label>
                    <input
                        type='text'
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                        className='border-2 border-gray-500 px-4 py-2 w-full'
                    />
                </div>
                <div className='my-4'>
                    <label className='text-x1 mr-4 text-gray-500'>Publish Year</label>
                    <input
                        type='number'
                        value={publishYear}
                        onChange={(e) => setPublishYear(e.target.value)}
                        className='border-2 border-gray-500 px-4 py-2 w-full'
                    />
                </div>
                <button className='p-2 bg-sky-300 m-8' onClick={handleSaveBook}>
                    Create
                </button>
            </div>
        </div>
    )
}

export default CreateBook