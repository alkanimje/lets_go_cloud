import React from 'react'

const DisplayData = (data) => {
    const handleClick=(item)=>{
        alert(item)
    } 
  return (
    <div>
    <div className="content">
        {data && data.data.map(item =>{
              return ( 
               <div className=''>
                <span>you are selected to display</span>
                <i className='text' onClick={()=>handleClick(item)}>{item} </i></div>
              )
        })}
        </div>
        
      
    </div>
  )
}

export default DisplayData
