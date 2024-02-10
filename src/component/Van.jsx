import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../assets/styles/van.css"
const Van = () => {
  const [vans, setVans] = useState([]);
  const [filteredVans, setFilteredVans] = useState([]);
  const URL = 'http://localhost:4000/api/vans';

  useEffect(() => {
    axios.get(URL)
      .then(response => {
        setVans(response.data);
        console.log(response.data);
        setFilteredVans(response.data);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const filterVansByType = (type) => {
    const filtered = vans.filter(van => van.type.toLowerCase() === type.toLowerCase());
    setFilteredVans(filtered);
  };

  const clearFilter = () => {
    setFilteredVans(vans); // Reset to show all vans
  };

  return (
    <main className="all">
      <div className="font-bold text-3xl px-10 bac">
        <h1>Explore our van options</h1>
      </div>
      <div className="alli">
        <nav className="px-10 my-10  alli ">
          <div className="flex gap-10 flex-row-reverse pek">
            <button className="bg-orange-200 p-3 w-36 flex justify-center rounded ctn" onClick={() => filterVansByType('simple')}>
              Simple
            </button>
            <button className="bg-orange-200 p-3 w-36 flex justify-center rounded ctn" onClick={() => filterVansByType('luxury')}>
              Luxury
            </button>
            <button className="bg-orange-200 p-3 w-36 flex justify-center rounded ctn" onClick={() => filterVansByType('rugged')}>
              Rugged
            </button>
          </div>
          <div>
            <button className="border-b-2 border-black p-1 ctn2" onClick={clearFilter}>
              clear filter
            </button>
          </div>
        </nav>
      </div>


      <div className="grid grid-cols-3 gap-10 px-10 pex">
        { filteredVans.map((van) => (
            <Link to={`/api/vans/${van.id}`}>
              <div key={van.id} className="border rounded p-5">
                <img src={van.imageUrl} alt={van.name} className="w-full mb-2" />
                <h2 className="text-xl font-bold">{van.name}</h2>
                <p className="text-gray-600">${van.price}</p>
                <button className="bg-orange-200 p-3 rounded">
                  {van.type}
                </button>
              </div>
            </Link>
          ))
        }
      </div>
      <div className="footer">
        <p>Ⓒ 2022 #VANLIFE</p>
      </div>
    </main>
  );
};

export default Van;
