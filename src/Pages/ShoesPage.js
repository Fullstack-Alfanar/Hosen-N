import { useNavigate } from "react-router-dom";
import Shoes from "../components/Shoes";
import classes from "../style/ShoesPage.module.scss";
export let ShoesArr = updateShoesArr();

function updateShoesArr() {
  if (localStorage.getItem("ShoesArr")) {
    let arr = JSON.parse(localStorage.getItem("ShoesArr"));
    return arr;
  } else return [];
}
function ShoesPage() {
  const navigate = useNavigate();
  return (
    <div className={classes.ShoeMainBody}>
      <div className={classes.container}>
        {ShoesArr.length === 0 ? (
          <label>Please Add Some Shoes</label>
        ) : (
          ShoesArr.map((e) => {
            return (
              <Shoes
                name={e.Name}
                size={e.Size}
                price={e.Price}
                img={e.Image}
              />
            );
          })
        )}
      </div>
      <button
        className={classes.AddBtn}
        onClick={() => {
          navigate("/ShoesForm");
        }}
      >
        Add
      </button>
    </div>
  );
}

export default ShoesPage;
