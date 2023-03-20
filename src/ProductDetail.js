const ProductDetails = ({products, loading}) => {

  const ProductDetail = ({prod}) => (
    <div className="col-md-4">
      <div className="card">
        <img src={prod.image} className="productimg card-img-top" alt=""/>
        <div className="card-body">
          <h5 className="prodname card-title">{prod.name}</h5>
          <p className="prod category cart-text"><strong>Category:</strong> {prod.category}</p>
          <p className="prodprice card-text">${prod.price}</p>
        </div>
      </div>
    </div>
  )
  return (
    <div>{loading ? (
      <p>Page Loading</p>
    ) : (
    <div className="container">
      <div className="row">
        {products.map((product) => (
          <ProductDetail key={product._id} prod = {product} />
        ))}
      </div>
    </div>
    )}
    </div>
    );
}
 
export default ProductDetails;