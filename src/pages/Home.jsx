import React, { useEffect, useState } from 'react';
import { ref, get } from 'firebase/database';
import { database } from '../firebase/firebase';

function Home() {
  const [data, setData] = useState([]);
  const [record, setRecords] = useState([]);
  const [expandedCards, setExpandedCards] = useState({});

  useEffect(() => {
    const dbRef = ref(database, 'users');
    get(dbRef).then((snapshot) => {
      if (snapshot.exists()) {
        const userArray = Object.entries(snapshot.val()).map(([id, data]) => ({
          ...data,
          id,
        }));
        setData(userArray);
        setRecords(userArray);
      } else {
        console.log('No data available');
      }
    }).catch((error) => {
      console.error('Error fetching data:', error);
    });
  }, []);

  const filter = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    setRecords(data.filter(i => 
      i.category.toLowerCase().includes(searchTerm) || 
      i.title.toLowerCase().includes(searchTerm)
    ));
  }

  const toggleExpand = (id) => {
    setExpandedCards(prevState => ({ 
      ...prevState, 
      [id]: !prevState[id] 
    }));
  }

  return (
    <div className="flex flex-col items-center">
      <input 
        type='text' 
        className='form-control p-2 m-4 border rounded w-96' 
        placeholder='Search by title or category...' 
        onChange={filter} 
      />
      <div className="flex flex-wrap justify-center">
        {record.map((item, index) => (
          <div key={index} className="m-4 relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
            <div className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
              <img src={item.fileId} alt={`card-image-${index}`} className="object-cover w-full h-full" />
            </div>
            <div className="p-6">
              <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                Name: {item.title}
              </h5>
              <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                <span className="font-semibold">Category:</span> {item.category}
              </p>
              {expandedCards[item.id] && (
                <>
                  <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                    <span className="font-semibold">Ingredients:</span> {item.ingredients}
                  </p>
                  <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                    <span className="font-semibold">Instructions:</span> {item.instructions}
                  </p>
                </>
              )}
              <button 
                className="mt-4 text-blue-500 hover:text-blue-700"
                onClick={() => toggleExpand(item.id)}
              >
                {expandedCards[item.id] ? 'Show Less' : 'Read More'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
