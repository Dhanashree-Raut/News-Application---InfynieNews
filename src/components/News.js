import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import sampleNews from './sampleNews';
import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {

  constructor(props) {
    super(props);

    // Set Default Values for states.
    this.state = {
      artical: [],//sampleNews.slice(0, props.pageSize),
      loading: true,
      page: 1,
      totalResult: 0,//sampleNews.length,
      hasMoreNews: true,
    };
  }


  // To handle next button
  loadNextNews = async (event) => {

    await this.setState({
      page: this.state.page + 1,
      loading: true,
    });

    await this.updateNews(this.state.page, "next");

  }

  // To handle Previous Button
  loadPrevNews = async (event) => {

    await this.setState({
      page: this.state.page - 1,
      loading: true,
    });

    await this.updateNews(this.state.page, "prev");
  }

  // To update the news for pages and action like next and previous
  updateNews = async (page, action) => {
    this.props.setProgress(20)


    if (!(action === "next" && page + 1 > Math.ceil(this.state.totalResult / this.props.pageSize))) {

      let apiKey = this.props.apiKey//'b13c9a484b654f3ba25e963f1789f853'
      let apiUrl = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&page=${page}&pageSize=${this.props.pageSize}&apiKey=${apiKey}`

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

        // Update State.
        await this.setState({
          artical: parsedData.articles,
          totalResult: parsedData.totalResults,
          page: this.state.page + 1,
          loading: false
        });

      } catch (err) {
        // If any error occer then use sample news data.
        console.log("Using sample news");
        this.setState({ loading: false, sampleInfo: true });
        await this.setState({
          artical: this.state.artical.concat(sampleNews),
        });
      }

    }

    this.props.setProgress(100)


  }

  fetchMoreNews = async () => {


    let apiKey = this.props.apiKey;
    let apiUrl = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&page=${this.state.page}&pageSize=${this.props.pageSize}&apiKey=${apiKey}`

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

      if (this.state.page === 1) {
        // Update State.
        await this.setState({
          artical: this.state.artical.concat(parsedData.articles),

        });
      }

      // Update State.
      await this.setState({
        artical: this.state.artical.concat(parsedData.articles),
        totalResult: parsedData.totalResults,
        loading: false
      });


      await this.setState({
        page: this.state.page + 1,
        hasMoreNews: this.state.totalResult !== this.state.artical.length,
      })

    } catch (err) {
      // If any error occer then use sample news data.
      console.log("Using sample news");
      this.setState({ loading: false, sampleInfo: true });
      await this.setState({
        artical: this.state.artical.concat(sampleNews),
      });
    }
  };

  // When Componend is build the use page 1 to update the news.
  async componentDidMount() {
    this.updateNews(1);
    // this.fetchMoreNews();
  }


  render() {
    return (
      <>
        {this.state.sampleInfo ? <div className="alert alert-danger" role="alert">
          These are sample news (live API unavailable)
        </div> : ''}
        <h1 className='text-center m-3'>Infynie News - Top Headlines</h1>

        <InfiniteScroll
          dataLength={this.state.artical.length}
          next={this.fetchMoreNews}
          hasMore={this.state.hasMoreNews}
          loader={<Spinner />}
        >
          <div className="container row m-auto">

            {/* Show the News items */}
            {this.state.artical.map((news) => {
              return <div className="col-md-4" key={news.url}>
                <NewsItem title={news.title ? news.title.slice(0, 40) : ''} desc={news.description ? news.description.slice(0, 60) : ""} source={news.source.name} author={news.author ? news.author : "Unknown"} publishDate={news.publishedAt} imgUrl={news.urlToImage} link={news.url} />
              </div>
            })}

          </div>
        </InfiniteScroll>





      </>
    )
  }
}
