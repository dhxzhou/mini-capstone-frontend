/* eslint-disable react/prop-types */
export function ProductsShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdateProduct(props.product.id, params, () => event.target.reset());
  };
  const handleClick = () => {
    props.onDestroyProduct(props.product.id);
  };

  return (
    <div>
      <h1>Photo information</h1>
      <p>Name: {props.product.name}</p>
      <p>Url: {props.product.url}</p>
      <p>Width: {props.product.width}</p>
      <p>Height: {props.product.height}</p>
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input defaultValue={props.product.name} name="name" type="text" />
        </div>
        <div>
          Image: <input defaultValue={props.product.image} name="image_url" type="text" />
        </div>
        <div>
          Price: <input defaultValue={props.product.price} name="price" type="text" />
        </div>
        <div>
          Description: <input defaultValue={props.product.description} name="description" type="text" />
        </div>
        <button type="submit">Update Product</button>
        <button onClick={handleClick}>Destroy Product</button>
      </form>
    </div>
  );
}
