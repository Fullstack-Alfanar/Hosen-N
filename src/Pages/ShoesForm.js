import { useNavigate } from "react-router-dom";
import classes from "../style/ShoesForm.module.scss";
import { ShoesArr } from "./ShoesPage";

function AddShoe() {
  const navigate = useNavigate();
  function addToLocal() {
    let name = document.getElementById("name");
    let size = document.getElementById("size");
    let price = document.getElementById("price");
    let image = document.getElementById("image");

    name.style.borderColor = "black";
    size.style.borderColor = "black";
    price.style.borderColor = "black";
    image.style.borderColor = "black";
    if (name.value === "" || name.value.length < 3) {
      name.style.borderColor = "red";
    } else if (size.value === "" || size.value < 0) {
      size.style.borderColor = "red";
    } else if (price.value === "" || price.value < 0) {
      price.style.borderColor = "red";
    } else if (image.value === "" || image.value === null) {
      image.style.borderColor = "red";
    } else {
      let obj = {
        Name: name.value,
        Size: size.value,
        Price: price.value,
        Image: image.value,
      };
      ShoesArr.push(obj);
      localStorage.setItem("ShoesArr", JSON.stringify(ShoesArr));
      navigate("/");
    }
  }
  return (
    <div className={classes.ShoeFormContainer}>
      <div>
        <h1>Add New Shoe</h1>
      </div>
      <div className={classes.form}>
        <tr><td>Name:</td><td><input id="name" type="text" placeholder="Name" /></td></tr>
        <tr><td>Size:</td><td><input id="size" type="text" placeholder="Size" /></td></tr>
        <tr><td>Price:</td><td><input id="price" type="text" placeholder="Price" /></td></tr>
        <tr><td>Image:</td><td><input id="image" type="text" placeholder="Image" /></td></tr>
        <div className={classes.Btn}>
          <button
            onClick={() => {
              navigate("/");
            }}
          >
            Back
          </button>
          <button onClick={addToLocal}>Add</button>
        </div>
      </div>
    </div>
  );
}
export default AddShoe;
