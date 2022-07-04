import { useNavigate } from "react-router-dom";
import classes from "../style/ShoesForm.module.scss";
import { WorkersArr } from "./WorkersPage";

function AddWorker() {
  const navigate = useNavigate();
  function addToLocal() {
    let fname = document.getElementById("fname");
    let lname = document.getElementById("lname");
    let title = document.getElementById("title");
    let cunt = document.getElementById("country");
    let city = document.getElementById("city");
    let bd = document.getElementById("birthday");
    let img = document.getElementById("image");

    fname.style.borderColor = "black";
    lname.style.borderColor = "black";
    title.style.borderColor = "black";
    cunt.style.borderColor = "black";
    city.style.borderColor = "black";
    bd.style.borderColor = "black";
    img.style.borderColor = "black";

    if (
      fname.value === "" ||
      fname.value.length < 2 ||
      fname.value.length > 30
    ) {
      fname.style.borderColor = "red";
    } else if (
      lname.value === "" ||
      lname.value.length < 2 ||
      lname.value.length > 30
    ) {
      lname.style.borderColor = "red";
    } else if (
      title.value === "" ||
      title.value.length < 5 ||
      title.value.length > 20
    ) {
      title.style.borderColor = "red";
    } else if (
      cunt.value === "" ||
      cunt.value.length < 3 ||
      cunt.value.length > 30
    ) {
      cunt.style.borderColor = "red";
    } else if (
      city.value === "" ||
      city.value.length < 2 ||
      city.value.length > 30
    ) {
      city.style.borderColor = "red";
    } else if (bd.value === "") {
      bd.style.borderColor = "red";
    } else if (img.value === "") {
      img.style.borderColor = "red";
    } else {
      let obj = {
        Fname: fname.value,
        Lname: lname.value,
        Title: title.value,
        Country: cunt.value,
        City: city.value,
        BirthDate: bd.value,
        Image: img.value,
      };
      WorkersArr.push(obj);
      localStorage.setItem("WorkersArr", JSON.stringify(WorkersArr));
      navigate("/WorkersPage");
    }
  }
  return (
    <div className={classes.ShoeFormContainer}>
      <div>
        <h1>Add New Worker</h1>
      </div>
      <div className={classes.form}>
        <tr><td>First Name:</td><td><input id="fname" type="text" placeholder="First Name" /></td></tr>
        <tr><td>Last Name:</td><td><input id="lname" type="text" placeholder="Last Name" /></td></tr>
        <tr><td>Title:</td><td><input id="title" type="text" placeholder="Title" /></td></tr>
        <tr><td>Country:</td><td><input id="country" type="text" placeholder="Country" /></td></tr>
        <tr><td>City:</td><td><input id="city" type="text" placeholder="City" /></td></tr>
        <tr><td>BirthDate:</td><td><input id="birthday" type="date" placeholder="BirthDate" /></td></tr>
        <tr><td>Image:</td><td><input id="image" type="text" placeholder="Image" /></td></tr>
        <div className={classes.Btn} >
          <button
            onClick={() => {
              navigate("/WorkersPage");
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
export default AddWorker;
