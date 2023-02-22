import React, { useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'

const endpoint = "http://localhost:8000/api/product"

export const CreateProduct = () => {

    const [description, setDescription] = useState("")
    const [price, setPrice] = useState("0")
    const [stock, setStock] = useState("0")
    const [img, setImg] = useState("")
    const navigate = useNavigate()

    const store = async (e) => {
        e.preventDefault()
        await axios.post(endpoint, { description: description, price: price, stock: stock, img:img })
        navigate("/")

    }

    return (
        <div>
            <h3>CreateProduct</h3>
            <form onSubmit={store}>
                <div className='mb-3'>
                    <label className='form-label'>Descripción</label>
                    <input
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        type="text"
                        className='form-control'
                    />
                </div>

                <div className='mb-3'>
                    <label className='form-label'>Precio</label>
                    <input
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        type="number"
                        className='form-control'
                    />
                </div>

                <div className='mb-3'>
                    <label className='form-label'>Stock</label>
                    <input
                        value={stock}
                        onChange={(e) => setStock(e.target.value)}
                        type="number"
                        className='form-control'
                    />
                </div>

                <div className='mb-3'>
                    <label className='form-label'>IMG</label>
                    <input
                        value={img}
                        onChange={(e) => setImg(e.target.value)}
                        type="file"
                        className='form-control'
                    />
                </div>

                <button type='submit' className='btn btn-primary'> Guardar</button>

            </form >
        </div >

    )
}

export default CreateProduct