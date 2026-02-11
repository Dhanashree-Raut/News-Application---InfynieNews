import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import sampleNews from './sampleNews';

export default class News extends Component {

  constructor(props) {
    super(props);

    // Set Default Values for states.
    this.state = {
      artical: sampleNews.slice(0, props.pageSize),
      loading: true,
      page: 1,
      totalResult: sampleNews.length,
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

    if (!(action === "next" && page + 1 > Math.ceil(this.state.totalResult / this.props.pageSize))) {

      let apiKey = 'b13c9a484b654f3ba25e963f1789f853'
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
          loading: false
        });

      } catch (err) {
        // If any error occer then use sample news data.
        console.log("Using sample news");
        this.setState({ loading: false, sampleInfo: true });
      }

    }


  }


  // When Componend is build the use page 1 to update the news.
  async componentDidMount() {
    this.updateNews(1);
  }


  render() {
    return (
      <div className='container my-3'>
        {this.state.sampleInfo ? <div class="alert alert-danger" role="alert">
          These are sample news (live API unavailable)
        </div> : ''}
        <h1 className='text-center m-3'>Infynie News - Top Headlines</h1>
        {this.state.loading ?
          <div className='text-center'><Spinner></Spinner></div> :
          <div className="row justify-content-center">

            {/* Show the News items */}
            {this.state.artical.map((news) => {
              return <div className="col-md-4" key={news.url}>
                <NewsItem title={news.title ? news.title.slice(0, 40) : ''} desc={news.description ? news.description.slice(0, 60) : ""} source={news.source.name} author={news.author ? news.author : "Unknown"} publishDate={news.publishedAt} imgUrl={news.urlToImage} link={news.url} />
              </div>
            })}
            
          </div>
        }

        {/* Next and Preview Button */}
        <div className='d-flex justify-content-between' >
          <button id="prev-btn" disabled={this.state.page <= 1} onClick={this.loadPrevNews} className="btn btn-primary">Previous</button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResult / this.props.pageSize)} id="nx-btn" onClick={this.loadNextNews} className="btn btn-primary">Next</button>
        </div>

      </div>
    )
  }
}
