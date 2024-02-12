import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import "../assets/styles/vandetails.css"
import axios from "axios";
const Vandetails = () => {
  let {id} = useParams()
  const [data, setData] = useState([]);
  const url = 'https://vanlifeback.onrender.com/api/vans';

  useEffect(() => {
    axios.get(url).then((response) => {
      // console.log(response.data[id]);
      setData(response.data[id]);
    });
  }, [id]);
  


  return (
    <section>
        <div className="details">
            <img src={data.imageUrl} alt="" />
            <h1 className="type">{data.type}</h1>
            <h1>{data.name}</h1>
            <h1 className="class">{data.description}</h1>
            <h1 className="price">${data.price}</h1>
        </div>
    </section>
  )
}

export default Vandetails