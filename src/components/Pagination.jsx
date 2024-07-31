import React, { useEffect, useState } from 'react'

const Pagination = () => {

    const [page,setPage] = useState(1)

    const [products,setProducts] = useState([])

    const fetchAPI = async()=>{
        const res = await fetch(`https://dummyjson.com/products?limit=12&skip=${page*12-12}`)
        const data = await res.json();

        setProducts(data.products)


    }

    const handlePageClick = (ind)=>{

        if(ind<1 || ind>products.length) return
        setPage(ind)
    }
    useEffect(()=>{
        fetchAPI()
        
    },[page])
  return (
  <>  <div className='product_list'>
    {products.map((ele,ind)=>{
        return (<div className="product" key={ele.id}>

            <img src={ele.thumbnail} alt={ele.title}></img>
            <h4>{ele.title}</h4>

        </div>)
    })}
    </div>
    <div className='paginate'>

   
    <div className={`page ${page>1?"":"left"} `} onClick={()=>handlePageClick(page-1)}>⏪</div>
    {products.map((ele,ind)=>{
        return (
     
        <div key ={ele.id}className={`page ${page===ind+1?"selected":""}`}onClick={()=>handlePageClick(ind+1)}>{ind+1}</div>)


      
    })}
    <div className={`page ${page<products.length?"":"right"} `} onClick={()=>handlePageClick(page+1)}>⏩</div>
    </div>
   

    </>
    
    
  )
}

export default Pagination