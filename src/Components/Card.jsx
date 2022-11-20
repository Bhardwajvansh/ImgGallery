const card = (props) => {
  const tags = props.tags.split(",");
  return (
    <div className="col">
      <div className="card" style={{ width: "18rem" }}>
        <img src={props.link} className="card-img-top" />
        <div className="card-body">
        <p>Image by <b>{props.user}</b></p>
          {tags.map((res,index) => (
            <span key={index} style={{ marginRight: "0.2rem" }} className="badge bg-secondary">{res}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default card;
