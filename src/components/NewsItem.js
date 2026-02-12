const NewsItem = ( props ) => {

  let { title, desc, imgUrl, link, author, publishDate, source } = props;

  let publishDateObj = new Date(publishDate);

  let showDate = publishDateObj.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric"
  });


  return (
    <div className="card my-3 ifns-news-card">
      <span className="position-absolute top-0 z-1 start-50 p-3 translate-middle badge rounded-pill bg-success">
        {source}
      </span>
      <img style={{ height: "18rem" }} src={imgUrl} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title}...</h5>
        <p className="card-text">{desc}...</p>
        <p className="card-text"><small className="text-body-secondary">By {author} on {showDate}</small></p>
        <a target='_blank' rel="noreferrer" href={link} className="btn btn-primary">Read More</a>
      </div>
    </div>
  )
}




export default NewsItem 