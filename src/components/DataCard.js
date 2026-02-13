import { Link } from "react-router-dom";

const DataCard = (props) => {
  const { title, desc, path, icon, image } = props;

  return (
    <div className="col-md-4 mb-4">
      <div className="card shadow-sm h-100 border-0">

        {/* Image */}
        <img
          src={image}
          className="card-img-top"
          alt={title}
          style={{ height: "160px", objectFit: "cover" }}
        />

        <div className="card-body">
          <h5 className="card-title">{icon} {title}</h5>
          <p className="card-text text-muted">{desc}</p>

          <Link to={path} className="btn btn-primary btn-sm">
            Read {title} News
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DataCard
