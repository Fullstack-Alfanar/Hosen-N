import { useNavigate } from "react-router-dom";
import Workers from "../components/Workers";
import classes from "../style/WorkersPage.module.scss";
export let WorkersArr = updateWorkersArr();

function updateWorkersArr() {
  if (localStorage.getItem("WorkersArr")) {
    return JSON.parse(localStorage.getItem("WorkersArr"));
  } else return [];
}
function WorkersPage() {
  const navigate = useNavigate();
  return (
    <div className={classes.workerMainBody}>
      <div>
        <h1>Workers List</h1>
      </div>
      <div className={classes.container}>
        <tr>
          <td>First Name</td>
          <td>Last Name</td>
          <td>Title</td>
          <td>Country</td>
          <td>City</td>
          <td>BirthDate</td>
          <td>Image</td>
        </tr>
        {WorkersArr.length === 0
          ? null
          : WorkersArr.map((e) => {
              return (
                <Workers
                  Fname={e.Fname}
                  Lname={e.Lname}
                  Country={e.Country}
                  City={e.City}
                  Title={e.Title}
                  BirthDate={e.BirthDate}
                  Image={e.Image}
                />
              );
            })}
      </div>
      <button
        className={classes.AddBtn}
        onClick={() => {
          navigate("/WorkersForm");
        }}
      >
        Add
      </button>
    </div>
  );
}
export default WorkersPage;
