import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../assets/styles/Dashboard.css';

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [displayedData, setDisplayedData] = useState([]);
  const [showAll, setShowAll] = useState(false);

  const api = 'http://localhost:4000/api/vans';

  useEffect(() => {
    axios.get(api).then((response) => {
      setData(response.data);
      setDisplayedData(response.data.slice(0, 3));
      console.log(response.data);
    });
  }, []);

  const handleViewAll = () => {
    setDisplayedData(data);
    setShowAll(true);
    setShowAll(false);

  };

  return (
    <div className='checkout'>
      <div className="backtoback">
        <div className="flexall">
          <div className="box">
            <h1>Welcome !</h1>
            <div className="flex">
              <p>Income last <span>30 days</span> </p>
              <h1>$2,260</h1>
            </div>
          </div>
          <div className="details">
            <h5>Details</h5>
          </div>
        </div>
        <div className="flexall2">
          <div className="div2">
            <h1>Review score</h1>&nbsp;
            <h2>⭐5.0/5</h2>
          </div>
          <div className="details">
            <h5>Details</h5>
          </div>
        </div>
        <div className="flexall3">
          <div className="div2">
            <h1>Your listed vans</h1>
          </div>
          <div className="details">
            {data.length > 3 && !showAll && (
              <div className="details">
                <h5 onClick={handleViewAll} className='h5'>Viewall</h5>
              </div>
            )}
          </div>
        </div>
        <div className="down">
          {displayedData.map((van) => (
            <div key={van.id} className=" rounded p-5 pax">
              <img src={van.imageUrl} alt={van.name} className=" w mb-2" />&nbsp;
              <div className="flebas">
                <h2 className="text-xl font-bold">{van.name}</h2>
                <p className="text-gray-600">${van.price}/day</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="footer">
        <p>Ⓒ 2022 #vansLIFE</p>
      </div>
    </div>
  );
};

export default Dashboard;
