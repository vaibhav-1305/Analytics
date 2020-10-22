import React from 'react';
import Header from './shared/Header.js';
import Sidebar from './shared/Sidebar.js';
import Footer from './shared/Footer.js';
import Analytics from './pages/analytics/Analytics.js';

import AnalyticsData from './data/AnalyticsData.js'

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
class Mediator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      analyticsdata: AnalyticsData
    };
  }
  render() {
    return (
      <div className="Mediator">
        <Header />
        <Sidebar />
        <Analytics analyticsdata={this.state.analyticsdata}/>
        <Footer />
      </div>
    );
  }
}
export default Mediator;
