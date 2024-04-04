/* eslint-disable react/prop-types */
export function ProductsNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateProduct(params, () => event.target.reset());
  };

  return (
    <div>
      <h1>New Products</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Supplier ID: <input name="supplier_id" type="text" />
        </div>
        <div>
          Name: <input name="name" type="text" />
        </div>
        <div>
          Image: <input name="image_url" type="text" />
        </div>
        <div>
          Price: <input name="price" type="text" />
        </div>
        <div>
          Description: <input name="description" type="text" />
        </div>
        <button type="submit">New Product</button>
      </form>
    </div>
  );
}
