const ProductDetails = ({products, loading}) => {

  const ProductDetail = ({prod}) => (
    <div className="col-md-4">
      <div className="card">
        <img src={prod.image} className="card-img-top" alt={prod.name} />
        <div className="card-body">
          <h5 className="card-title">{prod.name}</h5>
          <p className="card-text">{prod.price}</p>
          <p className="cart-text">{prod.category}</p>
        </div>
      </div>
    </div>
  )
  return (
    <div className="container">
      <div className="row">
        {products.map((product) => (
          <ProductDetail prod = {product} />
        ))}
      </div>
    </div>
    );
}
 
export default ProductDetails;