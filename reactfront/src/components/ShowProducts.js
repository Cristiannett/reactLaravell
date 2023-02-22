import React, { useEffect, useState } from 'react'
import axios from "axios"

import { Link } from "react-router-dom"

const endpoint = "http://localhost:8000/api"

export const ShowProducts = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        getAllProducts()
    }, [])


    const getAllProducts = async () => {
        const response = await axios.get(`${endpoint}/products`)
        setProducts(response.data)
    }

    const deleteProduct = async (id) => {
        await axios.delete(`${endpoint}/product/${id}`)
        getAllProducts()

    }

    const deleteAllProduct = async () => {
        await axios.delete(`${endpoint}/products`)
        getAllProducts()
        

    }

    return (
        <div>
            <div className='d-grid gap-2'>
                <Link to="/create" className='btn btn-success btn-lg mt-2 mb-2 text-white'>Crear</Link>
            </div>

            <div className='d-grid gap-2'>
                <button onClick={() => deleteAllProduct()} className="btn btn-danger btn-lg mt-2 mb-2 text-white">Borrar Lista</button>
            </div>

            <table className='table table-striped'>
                <thead className='bg-primary text-white'>

                    <tr>
                        <th>Descripción</th>
                        <th>Precio</th>
                        <th>Stock</th>
                        <th>IMG</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) =>

                        <tr key={product.id}>
                            <td>{product.description}</td>
                            <td>{product.price}</td>
                            <td>{product.stock}</td>
                            <td>{product.img}</td>
                            <td>
                                <Link to={`/edit/${product.id}`} className="btn btn-warning">EDITAR</Link>
                                <button onClick={() => deleteProduct(product.id)} className="btn btn-danger">ELIMINAR</button>
                            </td>

                        </tr>

                    )}

                </tbody>
            </table>
        </div>
    )
}
