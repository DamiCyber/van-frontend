import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import "../assets/styles/vandetails.css"
import axios from 'axios'
const VanmeDetails = () => {
  const { id } = useParams()
  const [data, setdata] = useState([])
  const api = 'https://vanlifeback.onrender.com/api/vans';
  useEffect(() => {
    axios.get(api).then((response) => {
      setdata(response.data[id])
      // console.log(response.data[id]);
    })
  }, [])

  return (
    <div>
      <section>
        <div className="details">
          <img src={data.imageUrl} alt="" />
          <h1>{data.name}</h1>
          <h1>{data.type}</h1>
          <h1>${data.price}</h1>
          <h1 className='class'>{data.description}</h1>
          <button>Rent this van</button>
        </div>
      </section>

    </div>
  )
}

export default VanmeDetails