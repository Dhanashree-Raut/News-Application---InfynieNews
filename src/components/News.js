import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import sampleNews from './sampleNews';
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {

  let [artical, setArtical] = useState([]);
  let [page, setPage] = useState(1);
  let [totalResult, setTotalResult] = useState(0);
  let [hasMoreNews, setHasMoreNews] = useState(true);
  const [sampleInfo, setsampleInfo] = useState(false)

  const getFirstCapital = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  // To update the news for pages and action like next and previous
  const updateNews = async (page, action) => {
    props.setProgress(20)

    if (!(action === "next" && page + 1 > Math.ceil(totalResult / props.pageSize))) {

      let apiKey = props.apiKey
      let apiUrl = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&page=${page}&pageSize=${props.pageSize}&apiKey=${apiKey}`

      try {
        let responce = await fetch(apiUrl);
        let parsedData = await responce.json();

        // Manually validate API response
        if (
          !parsedData ||
          !parsedData.articles ||
          parsedData.articles.length === 0
        ) {
          throw new Error("Empty API response");
        }

        // Update Required States.
        setArtical(parsedData.articles);
        setTotalResult(parsedData.totalResults)
        // setPage(page + 1)

      } catch (err) {
        // If any error occer then use sample news data.
        console.log("Using sample news");
        // Update Required States.

        setArtical(artical.concat(sampleNews));
        setsampleInfo(true)

      }
    }
    setPage(page + 1)
    props.setProgress(100)
  }

  const fetchMoreNews = async () => {

    let apiKey = props.apiKey;
    let apiUrl = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&page=${page + 1}&pageSize=${props.pageSize}&apiKey=${apiKey}`
    setPage(page + 1)

    try {
      let responce = await fetch(apiUrl);
      let parsedData = await responce.json();

      // Manually validate API response
      if (
        !parsedData ||
        !parsedData.articles ||
        parsedData.articles.length === 0
      ) {
        throw new Error("Empty API response");
      }

      // Update Required States.
      setArtical(artical.concat(parsedData.articles))
      setTotalResult(parsedData.totalResults)
      setHasMoreNews(totalResult !== artical.length)


    } catch (err) {
      // If any error occer then use sample news data.
      console.log("Using sample news");

      // Update Required States.
      setsampleInfo(true)
      setArtical(artical.concat(sampleNews))
    }
  };

  useEffect(() => {
     if (props.containerType !== 'artical') {
       document.title = getFirstCapital(props.category) + " News";
     }
    updateNews(1);
  }, [])

  const containerType = props.containerType

  return (

    <>
      <div className='' style={containerType !== 'artical' ? { margin: '70px' } : {}}>

        {sampleInfo ? <div className=" alert alert-danger" role="alert">
          These are sample news (live API unavailable)
        </div> : ''}
        {containerType !== 'artical' ? <h1 className='text-center m-3'>{getFirstCapital(props.category)} - Top Headlines</h1> : ""
        }
        <InfiniteScroll
          dataLength={artical.length}
          next={fetchMoreNews}
          hasMore={hasMoreNews}
          loader={<Spinner />}
        >
          <div className="container row m-auto">

            {/* Show the News items */}
            {/* { console.log(artical)} */}
            {artical.map((news) => {
              return (
                <div
                  className={containerType !== 'artical' ? "col-md-4" : ""}
                  key={news.url}
                >
                  <NewsItem
                    containerType={containerType}
                    title={
                      containerType === 'artical'
                        ? news.title
                        : news.title?.slice(0, 40)
                    }
                    desc={
                      containerType === 'artical'
                        ? news.description
                        : news.description?.slice(0, 60)
                    }
                    source={news.source.name}
                    author={news.author || "Unknown"}
                    publishDate={news.publishedAt}
                    imgUrl={news.urlToImage}
                    link={news.url}
                  />
                </div>
              )
            })}

          </div>
        </InfiniteScroll>
      </div>

    </>
  )
}



export default News