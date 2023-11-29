import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {

  const[cats, setCats] = useState([]);

  useEffect(()=>{
    const fetchData = async () =>{
      try{
        const response = await axios.get('https://api.thecatapi.com/v1/images/search?limit=10', {
          params:{
            breed_id: 'abob',
          },
          headers:{
            'x-api-key': 'live_c2uOZbq1WtOxVcnXrIs7PE8YSd3UqI0Ea4CXsWmPsxkvTqcv6k6AY3OeSbTxCJwv',
          },
        });
        setCats(response.data)
      }catch (e){
        console.error(e);
      }
    };

    fetchData();
  },[]);

  return (
    <div style={{height:'100vh', display: 'flex', alignItems: 'center', justifyContent:'center'}} className="App">
      {cats.map((cats) => (
        <img style={{height: cats.height, width: cats}} key={cats.id} src={cats.url} />
      ))}
    </div>
  );
}

export default App;
