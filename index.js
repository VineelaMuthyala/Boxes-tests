const Box = (props) => {
  const { className, text } = props;
  return (
    <div className={className}>
      <p>{text}</p>
    </div>
  );
};

const element = (
  <div>
    <div className="bg-container">
      <h1 className="heading">Boxes</h1>
      <div className="boxes-container">
        <Box className="box small-box" text="Small" />
        <Box className="box medium-box" text="Medium" />
        <Box className="box large-box" text="Large" />
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
