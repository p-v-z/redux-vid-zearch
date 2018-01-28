import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyDcRha-dto5J2dGT0It2Mz8auXjZrXvkn4';


// Create a new component. This component should produce some HTML

// (This is a Functional Component)
// const App = () => {
//   return <div>
//     <p>Hi there</p>
//     <SearchBar/>
//   </div>;
// }

// (This is a Class Component)
class App extends Component {
  constructor(props) {
      super(props);

      this.state = {
          videos: [],
          selectedVideo: null // will always be passed into video_detail
       };

      YTSearch({
        key: API_KEY, // pass configuration options
        term: 'surfboards'
        }, (videos) => { // callback function
        this.setState({
            videos: videos,
            selectedVideo: videos[0]
        });
        // ES6 : this.setState({videos});

      });
  }

  render() {
    return <div>
      <p>Vid Zearch</p>

      <SearchBar/>

      {/* Doesnt render video instantly */}
      <VideoDetail video={this.state.selectedVideo}/>

      {/* Pass videos data to VideoList as 'props'*/}
      <VideoList
          videos={this.state.videos}
          onVideoSelect={(selectedVideo) => {this.setState({selectedVideo})}}
       />

    </div>;
  }
}
// You can also use:
// onVideoSelect={SelectedVideo =>this.setState({selectedVideo})}


// Take this component's generated HTML and put it on the page (in DOM)
ReactDOM.render(<App/>, document.querySelector('.container'));
