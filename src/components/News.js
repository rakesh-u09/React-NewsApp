import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";

import PropTypes from 'prop-types'


export default class News extends Component {
    static defaultProps = {
        country : 'in',
        pageSize :8,
        category: 'general'

    }
    static ProTypes = {
        country : PropTypes.string,
        pageSize : PropTypes.number,
        category :PropTypes.string
    }
    constructor(){
        super();
        this.state = {
            articles:[],
            loading:false,
            page :1
        }
    }
    async componentDidMount(){
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=16f8faa6cfee4a3cb1f182b841c9d050&page=1&pageSize=${this.props.pageSize}` ;
        this.setState({loading:true});
        let data = await fetch(url);
        let parsedData =await data.json();
        console.log(parsedData);
        this.setState({articles : parsedData.articles,
             totalResult :parsedData.totalResult,
             loading:false
           });

    
    }
    handleNextClik =async ()=>{
        console.log("next");
        if(!(this.state.page + 1 > Math.ceil(this.state.totalResult/this.props.pageSize)))
        {

        
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=16f8faa6cfee4a3cb1f182b841c9d050&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
            this.setState({loading:true});
            let data = await fetch(url);
            let parsedData = await data.json()
            this.setState({
                loading:false, 
                page:this.state.page+1,
                articles:parsedData.articles
            })

        }
    

    }
    handlePrevClik =async ()=>{
        console.log("prev");
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=16f8faa6cfee4a3cb1f182b841c9d050&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        this.setState({loading:true});
        console.log(this.state.page)
        let data = await fetch(url);
        let parsedData =await data.json();
        console.log(parsedData);
        this.setState({articles : parsedData.articles});
        this.setState({page:this.state.page-1,loading:false})

    }
  render() {
    return (
      <>
        <div className="container my-2 ">
            <h2 className="text-center" style={{margin:"35px"}}>Daily Hunt News</h2>
           {this.state.loading &&  <Spinner/>}
            
            
          <div className="row">
          {!this.state.loading && this.state.articles.map((element)=>{
            return <div className="col md-4" >
              <NewsItem key={element.url} title={element.title} description={element.description} url={element.url} urlToImage={element.urlToImage} author = {element.author} date = {element.publishedAt}/>
              
            </div>
          })}
              
          </div>
          <div className="container d-flex justify-content-between">
          <button type="button" disabled={this.state.page<=1} onClick={this.handlePrevClik} className="btn btn-dark  btn-lg">&larr; Previous</button>
          <button type ="button" disabled={this.state.page + 1 > Math.ceil(this.state.totalResult/this.props.pageSize)} onClick={this.handleNextClik} className="btn btn-dark  btn-lg">Next &rarr;</button>
          </div>
        </div>
        

       
      </>
    );
  }
}
