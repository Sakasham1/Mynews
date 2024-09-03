import React, { useEffect, useState } from 'react'
import Card from './Card'
import { GiCoffeeCup } from "react-icons/gi";


const Newsapp = () => {
  //f495473206e94ac68c8bdcc18fad1155
  const [search,setSearch]= useState("India");
  const [newData,setNewData] = useState(null);

  const API_KEY = "f495473206e94ac68c8bdcc18fad1155";
  const getData = async() =>{
    const response = await fetch(`https://newsapi.org/v2/everything?q=${search}&apikey=${API_KEY}`); 
    if (!response.ok) {
      <div>Sorry not able to fetch the data</div>
      return;
    }
    const jsonData = await response.json();
    console.log(jsonData.articles);
    setNewData(jsonData.articles);
  }

  useEffect(()=>{
    getData()
  },[])

  const handleInput=(news)=>{
    console.log(news.target.value);
    setSearch(news.target.value);
  }
  const userInput = (event) => {
    setSearch(event.target.value);
  }
  return (
    <div>
      <nav>
        <div>
          <h1>Trending News</h1>
        </div>
        <ul>
          <a>Let's catch up on trending news with a cup of coffee <GiCoffeeCup /></a>
        </ul>
        <div className='searchBar'>
          <input type="text" placeholder='Search news' value={search} onChange={handleInput}/>
          <button onClick={getData}>Search</button>
        </div>
      </nav>
      <div className='categoryBtn'>
          <button onClick={userInput} value="sports">Sports</button>
          <button onClick={userInput} value="politics">Politics</button>
          <button onClick={userInput} value="entertainment">Entertainment</button>
          <button onClick={userInput} value="health">Health</button>
          <button onClick={userInput} value="fitness">Fitness</button>
      </div>

      <div>
        {
          newData ? (<Card data={newData}/>) : null
        }
        
      </div>
    </div>
  )
}

export default Newsapp
