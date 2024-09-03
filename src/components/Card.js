import React from 'react'

const Card = ({data}) => {
  // if (!data || data.length === 0) {
  //   return <div>No data available</div>;
  // }
  // const readMore = (url) => {
  //   window.open(url)
  // }
  return (
    <div className='cardContainer'>
      {
        data.map((currItem)=>{
          if(!currItem.urlToImage){
            return null;
          }
          else{
            return(
              <div className='card'>
                <img src={currItem.urlToImage} onClick={()=>window.open(currItem.url)}/>
                <div className='content'>
                  <a className='title' onClick={()=>window.open(currItem.url)}>{currItem.title}</a>
                  <p>{currItem.description}</p>
                  <button onClick={()=>window.open(currItem.url)}>Read More</button>
                </div>
              </div>
            )
          }
        })
      }
    </div>
  )
}

export default Card
