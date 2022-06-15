
import React from 'react';
import Card from './Card';
import { useState, useEffect } from 'react';
import axios from 'axios';
 

const CardList = () => {

    const [cardData, setCardData] = useState([]);
    

    const dataUrl = './data/cardData.json';


    /*async await 활용*/
    useEffect(()=>{
        (async ()=>{
            const res = await axios.get(dataUrl);
        setCardData(res.data);
        })();
    },[]);

    /*
    axios 활용

    useEffect(()=>{
        axios('./data/cardData.json')
        .then(response=>response.data)
        .then(data=>setCardData(data))
        .catch(error=>{console.log(error)})
    },[])
    */

    /*
    fetch 활용

    useEffect(()=>{
        fetch('./data/cardData.json')
        // fetch('http://localhost:3000/data/cardData.json')
        .then(response=>response.json())
        .then(data=>setCardData(data))
        .catch(error=>{console.log(error)})
    },[])
    */


    return (
        <div className='card_area'>
            <h3>CardList</h3>
            <ul className='card_wrap'>
                {
                    cardData.map((card)=><Card key={card.id} card={card} />)
                }
            </ul>
            
        </div>
    );
};

export default CardList;
