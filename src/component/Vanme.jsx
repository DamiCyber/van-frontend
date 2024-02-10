
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import "../assets/styles/Vanme.css"
const Vanme = () => {
  const url = 'https://vanlifeback.onrender.com/api/vans';
  const [data, setdata] = useState([]);

  useEffect(() => {
    axios.get(url).then((response) => {
      setdata(response.data);
      console.log(response.data);
    });
  }, []);

  return (
    <main>
      <h1 className='hi'>Your listed Van</h1>
      <div>
        {data.map((item) => (
          <Link key={item.id} to={`/host/vanme/${item.id}`}>
            <div className='bg-white boxx'>
              <img src={item.imageUrl} alt={item.name} className='boxx' />
              <div className="flex">
                <h2 className="text-xl font-bold">{item.name}</h2>
                <p className="text-gray-600">${item.price}/Days</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>

  );
};

export default Vanme;
