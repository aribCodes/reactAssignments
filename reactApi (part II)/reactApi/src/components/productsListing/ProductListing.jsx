import React, { memo, useCallback, useEffect } from 'react'
import ProductsCard from '../productsCard/ProductsCard';

const ProductListing = ({products, handler}) => {

  useEffect(()=>{
    console.log("agaye products",products);
    console.log("agaya handler", handler)
  },[products])
  
  return (
    <>
      <div>Card</div>
      
        <div 
          style={{
            display:"flex",
            justifyContent:"space-between",
            flexWrap:"wrap"
          }}
        >  
          {
            products.map((element, index)=>
            {
              return <div 
                key={index}
                style={{
                  border:"1px solid lightgreen",
                  width: '350px'
                }}
              >
                <ProductsCard id={element.id} thumbnail={element.thumbnail} title={element.title} description={element.description}/>
              </div>
            })

          }
        </div>
        <button onClick={() => {
          handler()
        }}>Load More</button>
    </>
  )
}

export default memo(ProductListing)