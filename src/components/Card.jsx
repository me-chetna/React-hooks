import React, { useState } from 'react'
import {useEffect} from 'react'

function Card() {
  const [data, setData] = useState([]);
  const [load, SetLoad] = useState(true);
  const[error,setError]=useState(null);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch('https://api.escuelajs.co/api/v1/products');
      const data = await res.json();
      setData(data);
    }
    fetchData()
    .then (() => {
      console.log("Data fetched successfully");
    })
    .catch((error) => {
      setError(error.message);
    })
    .finally(() => {
      SetLoad(false);
    });
  }, []);
  return (
    <>
    <div className='flex justify-center text-center p-4'>
      {error && (
        <div className="text-xl font-semibold text-gray-700 animate-pulse">Error fetching data ...</div>
      )}
    </div>
    <div className='flex justify-center text-center p-4'>
      {load && (
        <div className="text-xl font-semibold text-gray-700 animate-pulse">Loading...</div>
      )}
    </div>

    {!load && !error && <h1 className='text-center text-5xl p-5'>PHOTO</h1>}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
      {data.map((item) => (
        <div
          key={item.id}
          className="max-w-xs bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
        >
          <img
            className="w-full h-48 object-cover"
            src={item.images && item.images.length > 0 ? item.images[0] : ''}
            alt={item.title}
          />
          <div className="p-4 text-center">
            <h2 className="text-lg font-semibold text-gray-800">{item.title}</h2>
          </div>
        </div>
      ))}
    </div>
    </>
  )
}

export default Card;