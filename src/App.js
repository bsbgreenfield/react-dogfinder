
import React, {useEffect, useState} from 'react';
import { BrowserRouter} from 'react-router-dom';
import axios from 'axios';
import Navbar from './Navbar';
import RouteList from './RouteList'

function App() {

  const [dogs, setDogs] = useState({data: null, loading: true})

  useEffect(() => {
    async function getDogs() {
      let resp = await axios.get("http://localhost:5001/dogs")
      setDogs({data: resp.data, loading: false})
    }
    getDogs()
  }, [])
  if(dogs.loading) return <h1>Loading...</h1>
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar dogs= {dogs.data}/>
        <RouteList dogs = {dogs.data}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
