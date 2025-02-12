import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { singleProduct } from '../services/productService'
import { Product } from '../models/IProduct'
import { getSingleLikes, isLikesControl } from '../utils/store'

const ProductDetail = () => {

  const[isLike, setIsLike] = useState(false)
  const [bigImage, setBigImage] = useState('')  
  const [item, setItem] = useState<Product>()  
  const params = useParams()

  const LikesControl=()=>{
    const LikesStatus=!isLike
    setIsLike(LikesStatus)
    const pid=params.pid
    if(item&&pid){
      isLikesControl(pid)}}

  useEffect(() => {
    const pid = params.pid
    if (pid) {
        // `pid` değerinin "likes" listesinde olup olmadığını kontrol eder ve `isLike` durumunu günceller.
        setIsLike(getSingleLikes(pid))
        
        // `pid` değerine karşılık gelen ürünün detaylarını alır.
        singleProduct(pid).then(res => {
            // Ürün detaylarını `item` durumuna atar.
            setItem(res.data.data)
            
            // Ürünün ilk resmini `bigImage` durumuna atar.
            setBigImage(res.data.data.images[0])
        })
    }
}, [])
  
return (
  <>
      { item && 
          <div className='container mt-5'>
              <div className='row'>
                  <div className='col-md-6'>
                      <h3 className='text-primary'>{item.title}</h3>
                      <p className='text-muted'>{item.description}</p>
                      <p>
                          <i onClick={ LikesControl } role='button' className={ isLike === false ? 'bi bi-suit-heart fs-2' : 'bi bi-suit-heart-fill fs-2 text-danger' }></i>
                      </p>
                      <p><strong>Category:</strong> {item.category}</p>
                      <p><strong>Price:</strong> <span className='text-success'>${item.price}</span></p>
                      <p><strong>Discount:</strong> <span className='text-danger'>{item.discountPercentage}%</span></p>
                      <p><strong>Rating:</strong> {item.rating}</p>
                      <p><strong>Stock:</strong> {item.stock}</p>
                      <p><strong>Brand:</strong> {item.brand}</p>
                      <p><strong>SKU:</strong> {item.sku}</p>
                      <p><strong>Minimum Order Quantity:</strong> {item.minimumOrderQuantity}</p>
                      <p><strong>Tags:</strong> {item.tags.join(', ')}</p>
                  </div>
                  <div className='col-md-6'>
                      <img src={bigImage} className="img-fluid rounded shadow-sm mb-3" />
                      <div className='d-flex flex-wrap'>
                          { item.images.map( (image, index) => 
                              <img onClick={() => setBigImage(image) } role='button' key={index} src={image} className='img-thumbnail me-2 mb-2' width={120} />
                          )}
                      </div>
                  </div>
              </div>
          </div>
      }
  </>
)
}
export default ProductDetail