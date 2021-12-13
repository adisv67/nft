import React from 'react';
import Header from './components/Header'
import CollectionCard from './components/CollectionCard';
import './App.css';
import {useState, useEffect} from 'react'
import axios from 'axios';

function App() {

  const [ punkListData, setPunkListData ] = useState([]);

  useEffect(() => {
    const getMyNfts = async () => {
      const openseaData = await axios.get('https://testnets-api.opensea.io/assets?owner=0xDbB366bD9F34C2CAAb836faDA387D3284Af62048&order_direction=asc&offset=0&limit=10')
      console.log(openseaData.data.assets)
    }
    
    return getMyNfts();
  }, [])
  return (
   <div className='app'>
     <Header />
      <CollectionCard 
        id={0} 
        name={'Bandana Punk'} 
        traits={[{'value': 7}]} 
        image={'https://nftlabs.mypinata.cloud/ipfs/bafybeigqkficum3anns36jid3dxvc4yfauyuvqjulbg43n23qxn3ce3tyu'}  
     />
   </div>
  );
}

export default App;
