import useScrollAnimation from "./useScrollAnimation"

const NewsItem = (props) => {

  let { title, desc, imgUrl, link, author, publishDate, source, containerType } = props;

  let publishDateObj = new Date(publishDate);

  const ref = useScrollAnimation();
  const shouldAnimate = true; //index > 0;

  let showDate = publishDateObj.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric"
  });

  // <div
  //     ref={shouldAnimate ? ref : null}
  //     className={`col-md-4 mb-4 ${shouldAnimate ? "scroll-hidden" : ""}`}
  //   ></div>

  console.log(containerType)

  if (containerType === 'artical') {
    return (
      <div ref={shouldAnimate ? ref : null} class={`card mb-3 ${shouldAnimate ? "scroll-hidden" : ""}`} >
        <div class="row g-0">
          <div class="col-md-4">
            <img src={imgUrl} class="img-fluid" style={{
              width: "100%",
              height: "206px",
              objectFit: "cover"
            }} alt="..." />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">{title}</h5>
              <p class="card-text">{desc}</p>
              <p class="card-text"><small className="text-body-secondary">By {author} on {showDate}</small></p>
              <a target='_blank' rel="noreferrer" href={link} className="btn btn-primary">Read More</a>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div ref={shouldAnimate ? ref : null} className={`card my-3 ifns-news-card ${shouldAnimate ? "scroll-hidden" : ""}`}>
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