import React, { Component } from "react";
import axios from "axios";

import PortfolioItem from "./portfolio-item";

export default class PortfolioContainer extends Component {
  constructor() {
    super();

    this.state = {
      pageTitle: "Welcome to my portfolio",
      isLoading: false,
<<<<<<< HEAD
      data: []
=======
      data: [],
>>>>>>> origin/main
    };

    this.handleFilter = this.handleFilter.bind(this);
  }

  handleFilter(filter) {
<<<<<<< HEAD
    this.setState({
      data: this.state.data.filter(item => {
        return item.category === filter;
      })
    });
  }

  getPortfolioItems() {
    axios
      .get("https://michaelchildress.devcamp.space/portfolio/portfolio_items")
      .then(response => {
        this.setState({
          data: response.data.portfolio_items
        });
      })
      .catch(error => {
=======
    if (filter === "CLEAR_FILTERS") {
      this.getPortfolioItems();
    } else {
      this.getPortfolioItems(filter);
    }
  }

  getPortfolioItems(filter = null) {
    axios
      .get("https://michaelchildress.devcamp.space/portfolio/portfolio_items")
      .then((response) => {
        if (filter) {
          this.setState({
            data: response.data.portfolio_items.filter((item) => {
              return item.category === filter;
            }),
          });
        } else {
          this.setState({
            data: response.data.portfolio_items,
          });
        }
      })
      .catch((error) => {
>>>>>>> origin/main
        console.log(error);
      });
  }

  portfolioItems() {
<<<<<<< HEAD
    return this.state.data.map(item => {
      return (
        <PortfolioItem
          key={item.id}
          item={item}
        />
      );
=======
    return this.state.data.map((item) => {
      return <PortfolioItem key={item.id} item={item} />;
>>>>>>> origin/main
    });
  }

  componentDidMount() {
    this.getPortfolioItems();
  }

  render() {
    if (this.state.isLoading) {
      return <div>Loading...</div>;
    }

<<<<<<< HEAD
  return (
    <div className="portfolio-items-wrapper">
      <button className="btn" onClick={() => this.handleFilter("Technology")}>
          Technology
        </button>
        <button className="btn" onClick={() => this.handleFilter("Restaurant")}>
          Restaurants
        </button>
        <button className="btn" onClick={() => this.handleFilter("Hotel")}>
          Hotels
        </button>
        <button className="btn" onClick={() => this.handleFilter("Military")}>
          Military
        </button>
      
      {this.portfolioItems()}
    </div>
    );
  }
}
=======
    return (
      <div className="homepage-wrapper">
        <div className="filter-links">
          <button
            className="btn"
            onClick={() => this.handleFilter("Technology")}
          >
            Technology
          </button>
          <button
            className="btn"
            onClick={() => this.handleFilter("HotelsRestaurants")}
          >
            Hotels & Restaurants
          </button>
          <button className="btn" onClick={() => this.handleFilter("Military")}>
            Military
          </button>

          <button
            className="btn"
            onClick={() => this.handleFilter("CLEAR_FILTERS")}
          >
            All
          </button>
        </div>
        <div className="portfolio-items-wrapper">{this.portfolioItems()}</div>
      </div>
    );
  }
}
>>>>>>> origin/main
