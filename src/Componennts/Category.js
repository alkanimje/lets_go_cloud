import React ,{useState,useEffect,useRef}from 'react'
import categories from "../category.json"
import CategoryList from "./CategoryList";
import DisplayData from './DisplayData';


const Categories = () => {
    const [selected,setSelected] = useState([])
    const handleClick = (data)=>{
        if(selected.includes(data)){
            setSelected(oldValues => {
                return oldValues.filter(selected => selected !== data)
              })
        }
        else{
        setSelected(selected=>[...selected, data])
        }
    }

    return (
        <>
        <div className=''>
            <div className='row'>
                <div className='col-3'>
                <div className="content">
                       <div className="sideBar">
            {categories.map((item,index) => {
                return <CategoryList key={index} item={item} handleClick={handleClick}/>
                })}
                </div>
                </div>
                </div>
                <div className='col-9'><DisplayData
                data={selected}
             /></div>
                </div>
            
             </div>
            
        </>
    )
}
export default Categories


