/* eslint-disable jsx-a11y/alt-text */
function Workers(props) {
  return (
    <tr>
      <td>{props.Fname}</td>
      <td>{props.Lname}</td>
      <td>{props.Title}</td>
      <td>{props.Country}</td>
      <td>{props.City}</td>
      <td>{props.BirthDate}</td>
      <td>
        <img src={props.Image} />
      </td>
    </tr>
  );
}
export default Workers;
