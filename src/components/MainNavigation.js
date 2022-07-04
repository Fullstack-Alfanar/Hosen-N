import Clock from "./Time";
import { Link } from "react-router-dom";
import classes from "../style/MainNavigation.module.scss"
function MainNavigation() {
  return (
    <div className={classes.NavBar}>
      <div><span>MyShop</span></div>
      <Clock />
      <div className={classes.nav}>
        <button><Link to="/">Shop</Link></button>
        <button><Link to="/WorkersPage">Workers</Link></button>
      </div>
    </div>
  );
}
export default MainNavigation;
