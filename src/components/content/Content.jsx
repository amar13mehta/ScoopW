import "./content.scss";

import InfiniteScroll from "react-infinite-scroll-component";
import React from "react";

export default class Content extends React.Component {
  state = {
    person: [],
    totalResults: 0,
  };

  async componentDidMount() {
    const url = "https://www.scoopwhoop.com/api/v4/read/all/?offset=0&limit=8";
    const response = await fetch(url);
    const data1 = await response.json();
    this.setState({ person: data1.data, totalResults: data1.totalResults });
  }

  fetchMoreData = async () => {
    const url = "https://www.scoopwhoop.com/api/v4/read/all/?offset=0&limit=8";
    const response = await fetch(url);
    const data1 = await response.json();
    this.setState({
      person: this.state.person.concat(data1.data),
    });
  };

  render() {
    return (
      <div className="content">
        <div className="content1">
          <InfiniteScroll
            dataLength={this.state.person.length}
            next={this.fetchMoreData}
            hasMore={this.state.person.length !== this.state.totalResults}
            scrollThreshold={1}
          >
            {this.state.person.map((element) => {
              return (
                <div className="flex-conatiner">
                  <div className="image">
                    <a className="article_image">
                      <img loading="lazy" src={element.feature_img} />
                    </a>
                  </div>

                  <div className="second">
                    <div className="article_category">
                      <a>{element.cat_display[0].category_display}</a>
                    </div>

                    <a className="article_title" href={element.slug}>
                      {element.title}
                    </a>

                    <a
                      className="article_author"
                      href={`/author/${element.auth_display.author_url}/?ref=read_fresh`}
                    >
                      {element.auth_display.display_name}
                    </a>
                  </div>

                  <div className="third">
                    <span className="analytics">{element.readtime} </span>
                  </div>
                </div>
              );
            })}
          </InfiniteScroll>
        </div>
      </div>
    );
  }
}
