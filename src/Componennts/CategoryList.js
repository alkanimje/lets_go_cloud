import React ,{useState,useEffect,useRef}from 'react'

const CategoryList = ({item,handleClick}) => {
    const [open, setOpen] = useState(false)


    // useEffect(() => {
    //     console.log(select)
    //   }, [select]);
    
    
    return (
        <>
        {item.childrens ? (
            
                <div className={open ? "sideBar-item open" : "sideBar-item"}>
                    <div className="sideBar-title">
                        <i className="bi-chevron-right toggle-btn " onClick={() => setOpen(!open)} />
                        <span  onClick={()=>handleClick(item.title)}>  
                        {item.icon && <i className={item.icon} />}{item.title}               
                        </span>
                    </div>
                    <div className="sideBar-content">
                        {item.childrens.map((child, index) =>{
                             return <CategoryList key={index} item={child} handleClick={handleClick} />})}
                    </div>
    
                </div>
            ):
            <a  className="sideBar-item plain">
                 <span  onClick={()=>handleClick(item.title)}> 
                         {item.icon && <i className={item.icon} />}{item.title}</span>
                    </a>
        }     
        </>
    )
    }
export default React.memo(CategoryList)
