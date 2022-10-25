function Navbar(props) {
  console.log(props);
  return (
    <div className="Navbar">
      <p>{props.title} {props.subtitle}</p>
    </div>
  );
}

export default Navbar;
