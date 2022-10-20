function Banner(props) {
  console.log(props);
  return (
    <div className="Banner">
      <h3>{props.title} {props.subtitle}</h3>
    </div>
  );
}

export default Banner;
