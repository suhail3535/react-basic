import React, { use, useEffect, useState } from 'react'
import axios from 'axios'


// npm i axios
const Product = () => {
    const [data, setData] = useState([])

    const fetchData = async () => {
        try {
            let res = await axios.get("https://fakestoreapi.com/products")
          console.log('res', res.data)
            setData(res.data)
        } catch (error) {
            console.log('error', error)
        }

    }



    useEffect(() => {
        fetchData()
    }, []) ///when we pass [] it means it will run only once when component is mounted

    return (
        <div>
            <h1>Product Component</h1>
            <hr />
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '20px' }}>


                {data.map((item) => {
                    return <div key={item.id}>
                        <img src={item.image} alt={item.title} height="200px" />
                        <h3>{item.title}</h3>
                        <h3>{item.price}</h3>

                    </div>
                })

                }
            </div>
        </div>
    )
}

export default Product
