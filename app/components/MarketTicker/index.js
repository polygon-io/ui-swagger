import React, { Component } from "react";
import { connect } from "react-redux";
import Map from "lodash/map";

/*
	Individual ticker item in the list:
 */
class Ticker extends Component {
  getPrice() {
    if (this.props.type == "currencies") {
      return `$${this.props.data.lastQuote.b}`;
    }
    return `$${this.props.data.lastTrade.p}`;
  }
  getTitle() {
    if (this.props.data.ticker == "C:XAUUSD") return "Gold";
    if (this.props.data.ticker == "C:BCOUSD") return "Crude Oil";
    return this.props.data.ticker;
  }
  render() {
    let txtclass = "has-text-success";
    let caret = "fas fa-caret-up";
    if (this.props.data.todaysChangePerc < 0) {
      txtclass = "has-text-danger";
      caret = "fas fa-caret-down";
    }
    return (
      <div className="column tick">
        <div className="subtitle is-6">
          {this.getTitle()}
          <span className="price is-pulled-right">
            <strong>{this.getPrice()}</strong>
          </span>
          <div className={txtclass}>
            <span class="icon is-left">
              <i class={caret}></i>
            </span>
            {this.props.data.todaysChangePerc.toFixed(2)}% ( $
            {this.props.data.todaysChange} )
          </div>
        </div>
      </div>
    );
  }
}

/*
	List of market ticker items across top nav bar:
 */
@connect(store => ({
  location: store.location,
  marketticker: store.marketticker
}))
class Tickers extends Component {
  renderItem(item, i) {
    return <Ticker key={i} type={item.type} data={item.data} />;
  }

  // Render
  render() {
    return (
      <section id="ticker" className="hero is-small is-black">
        <div className="hero-body">
          <div className="container-fluid">
            <div className="columns is-mobile">
              {Map(this.props.marketticker.items, this.renderItem.bind(this))}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Tickers;
