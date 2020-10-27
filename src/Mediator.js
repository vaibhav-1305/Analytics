import React from 'react';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Header from './shared/Header.js';
import Sidebar from './shared/Sidebar.js';
import Footer from './shared/Footer.js';

import Analytics from './pages/analytics/Analytics.js';
import Dashboard from './pages/dashboard/Dashboard.js';
//import Portfolio from './portfolio.js';

import AnalyticsData from './data/AnalyticsData.js'
import DashboardData from './data/DashboardData.js'
import QuickOverviewData from './data/QuickOverviewData.js'

import "./Css/Mediator.css"


  /*     <Analytics analyticsdata={this.state.analyticsdata}/>*/
  //<Portfolio />
  //        <Dashboard dashboarddata={this.state.dashboarddata} quickoverviewdata = {this.state.quickoverviewdata}/>
class Mediator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      analyticsdata: AnalyticsData,
      dashboarddata: DashboardData,
      quickoverviewdata : QuickOverviewData
    };
  }
  render() {
    const DashboardPage = () => {
      return(
          <Dashboard dashboarddata={this.state.dashboarddata} quickoverviewdata = {this.state.quickoverviewdata}/>
      );
    }
    const AnalyticsPage = () => {
      return(
          <Analytics analyticsdata={this.state.analyticsdata}/>
      );
    }
    return (
      <Router>
      <div className="Mediator">
        <Header />
        <Sidebar />
        <Switch>
          <Route exact path="/" component={DashboardPage} />
          <Route path="/Analytics" component={AnalyticsPage} />
        </Switch>
        <Footer />
      </div>
      </Router>
    );
  }
}
export default Mediator;
