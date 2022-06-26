/* eslint-disable jsx-a11y/alt-text */
function Shoes(props) {
  return (
    <div className="card">
      <label>{props.name}</label>
      <label>Size: {props.size}</label>
      <label>Price: {props.price}</label>
      <img src={props.img} />
    </div>
  );
}

export default Shoes;
