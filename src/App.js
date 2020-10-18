import React from 'react';
import Header from './Header.js';
import Sidebar from './Sidebar.js';
import Footer from './Footer.js';
import Analytics from './Analytics.js';

import AnalyticsData from './AnalyticsData.js'

import './Css/App.css';

/*
function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <Analytics />
      <Footer />
    </div>
  );
}

export default App;
*/
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      analyticsdata: AnalyticsData
    };
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Sidebar />
        <Analytics analyticsdata={this.state.analyticsdata}/>
        <Footer />
      </div>
    );
  }
}
export default App;
