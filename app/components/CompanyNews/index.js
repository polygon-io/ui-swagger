import React, { Component } from "react";
import { connect } from "react-redux";
import Map from "lodash/map";
import Take from "lodash/take";
import moment from "moment";

import actions from "../../actions/";

const MAX_DESC_LEN = 85; // 125 characters then truncated with ...
const DATE_FORMAT = "MMM D, YYYY";
const DEFAULT_MAX_ITEMS = 5;

/*
	Individual news item
 */
class NewsItem extends Component {
  getExcerpt() {
    let content = this.props.data.custom_excerpt || this.props.data.excerpt;
    if (content.length > MAX_DESC_LEN) {
      return content.substr(0, MAX_DESC_LEN) + "...";
    }
    return content;
  }

  getUrl() {
    return this.props.data.feature_image.replace(
      "/blog/content/images/",
      "/blog/content/images/size/w200/"
    );
  }

  render() {
    const style = {
      backgroundImage: `url(https://public.polygon.io/crop?width=192&height=192&url=${this.getUrl()})`
    };
    const date = moment(new Date(this.props.data.published_at));
    return (
      <a className="news-row" href={this.props.data.url} target="_blank">
        <div className="columns is-mobile">
          <div className="column is-narrow">
            <figure class="image is-96x96" style={style}>
              {/*<img src={this.props.data.feature_image} />*/}
            </figure>
          </div>
          <div className="column">
            <h3 className="title is-5 has-text-weight-normal">
              {this.props.data.title}
            </h3>
            <p className="subtitle">{this.getExcerpt()}</p>
            <p className="is-small date">{date.format(DATE_FORMAT)}</p>
          </div>
        </div>
      </a>
    );
  }
}

/*
	List of company news items:
 */
@connect(store => ({
  location: store.location,
  news: store.news
}))
class News extends Component {
  componentWillMount() {
    this.props.dispatch(actions.news.fetchNews());
  }

  renderItem(item, i) {
    return <NewsItem key={i} data={item} />;
  }

  // Render
  render() {
    const max = this.props.items || DEFAULT_MAX_ITEMS;
    return (
      <div className="news-items">
        {Map(Take(this.props.news.items, max), this.renderItem.bind(this))}
      </div>
    );
  }
}

export default News;
