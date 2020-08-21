import React, { Component } from 'react';
import './App.css';
import SearchBar from './SearchBar/SearchBar';
import VideoList from './VideoList/VideoList';
import youtube from './apis/youtube'
import VideoDetail from './VideoDetail/VideoDetail'

const KEY = 'AIzaSyCFK_snnxeeA-mqjn1XEII2VpEOgVkZwdQ';


class App extends Component {
  state = {
    videos: [],
    selectedVid: null
  }

  onSubmit = (term) => {
    youtube.get('/search', {
      params: {
        q: term,
        part: 'snippet',
        key: KEY,
        maxResults: 5
      }
    })
      .then((response) => {
        let videos = response.data.items;
        this.setState({
          videos,
          selectedVid: null
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }

  onSelectedVid = (video) => {
    console.log(video)
    this.setState({
      selectedVid: video
    })
  }

  render() {

    return (
      <div className="ui container">
        <SearchBar
          onSubmit={this.onSubmit}
        />
        {
          this.state.selectedVid && <VideoDetail
            video={this.state.selectedVid}
          />
        }
        <VideoList
          onSelectedVid={this.onSelectedVid}
          videos={this.state.videos}
        />
      </div>
    );

  }

}

export default App;
