import React from 'react';
import Header from './components/Header'
import './App.css';
import {useState, useEffect} from 'react'
import axios from 'axios';
import PunkList from './components/PunkList';
import Main from './components/Main'

function App() {

  const [ punkListData, setPunkListData ] = useState([]);
  const [ selectedPunk, setSelectedPunk ] = useState(0);

  useEffect(() => {
    const getMyNfts = async () => {
      const openseaData = await axios.get('https://testnets-api.opensea.io/assets?owner=0xDbB366bD9F34C2CAAb836faDA387D3284Af62048&order_direction=asc&offset=0&limit=10')
      console.log(openseaData.data.assets)
      setPunkListData(openseaData.data.assets)
    }
    
    return getMyNfts();
  }, [])
  return (
   <div className='app'>
     <Header />
     {punkListData.length > 0 &&(
      <>
        <Main punkListData={punkListData} selectedPunk={selectedPunk}/>
        <PunkList punkListData={punkListData} setSelectedPunk={setSelectedPunk} />
      </>
     )}
   </div>
  );
}

export default App;
