import React from "react"
import "./font-awesome/css/font-awesome.min.css"
/*
function Analytics() {
    return (
      <div>
      <div className="total-grid">

          <div className="headings">
            <div className="article-topic">
              <h1>Dunk of the Dunkin</h1>
            </div>

                <div className="sub-nav" id="task-nav">
                    <a href="#all" className="active">OVERVIEW</a>
              <a href="#Started">REVIEW</a>
              <a href="#Completed">AI REVIEW</a>
                    <a href="#ondisplay">ENGAGEMENT</a>

            </div>
          </div>

          <div className="overview">
                <div className="overview-box">

                  <div className="individual-box">
                    <div className="stat-heading">
                    Skilllies Earned
                    </div>
                    <div className="stat-value">
                    $ 43 <span>  +24.8%</span>
                    </div>
                  </div>

                  <div className="individual-box">
                    <div className="stat-heading">
                    Review Rating
                    </div>
                    <div className="stat-value">
                    3.9 <span>  +24.8%</span>
                    </div>
                  </div>

                  <div className="individual-box">
                    <div className="stat-heading">
                    AI Rating
                    </div>
                    <div className="stat-value">
                    81 <span>  +24.8%</span>
                    </div>
                  </div>

                  <div className="individual-box">
                    <div className="stat-heading">
                    Days Spent
                    </div>
                    <div className="stat-value">
                    4 <span>  +24.8%</span>
                    </div>
                  </div>

                  </div>
          </div>

          <div className="content1">
                <div className="content-box">
                  <div>word cloud image
                  </div>
                  </div>
          </div>

          <div className="content2">
                <div className="content-box">
                  <div>
                    <table className="content-table">
                      <thead>
                      <tr>
                        <th>Parameter</th>
                        <th>You</th>
                        <th>Avg User</th>
                      </tr>
                      </thead>
                      <tbody>
                      <tr>
                        <td>Skilllies Earned</td>
                        <td>$ 43</td>
                        <td>$ 39</td>
                      </tr>
                      <tr>
                        <td>Review Rating</td>
                        <td>3.9</td>
                        <td>3.8</td>
                      </tr>
                      <tr>
                        <td>AI Rating</td>
                        <td>81</td>
                        <td>74</td>
                      </tr>

                       <tr>
                        <td>Days Spent</td>
                        <td>4</td>
                        <td>4</td>
                      </tr>
                        <tr>
                        <td>Review Rating</td>
                        <td>3.9</td>
                        <td>3.8</td>
                      </tr>
                      </tbody>
                    </table>

                  </div>
                  </div>
          </div>
      </div>
      </div>

    )
}
export default Analytics
*/

class Analytics extends React.Component {

    constructor(props) {
        super(props);
    }
    render() {
        const analyticsoverview = this.props.analyticsdata.map((article) => {
            return (
            <div className="total-grid">

                <div className="headings">
                  <div className="article-topic">
                    <h1>Dunk of the Dunkin</h1>
                  </div>

                      <div className="sub-nav" id="task-nav">
                          <a href="#all" className="active">OVERVIEW</a>
                    <a href="#Started">REVIEW</a>
                    <a href="#Completed">AI REVIEW</a>
                          <a href="#ondisplay">ENGAGEMENT</a>

                  </div>
                </div>

                <div className="overview">
                      <div className="overview-box">

                        <div className="individual-box">
                          <div className="stat-heading">
                          Skilllies Earned
                          </div>
                          <div className="stat-value">
                          $ {article.SkillliesEarned} <span>  +24.8%</span>
                          </div>
                        </div>

                        <div className="individual-box">
                          <div className="stat-heading">
                          Review Rating
                          </div>
                          <div className="stat-value">
                          {article.reviewRating} <span>  +24.8%</span>
                          </div>
                        </div>

                        <div className="individual-box">
                          <div className="stat-heading">
                          AI Rating
                          </div>
                          <div className="stat-value">
                          {article.aiRating} <span>  +24.8%</span>
                          </div>
                        </div>

                        <div className="individual-box">
                          <div className="stat-heading">
                          Days Spent
                          </div>
                          <div className="stat-value">
                          {article.DaysTaken} <span>  +24.8%</span>
                          </div>
                        </div>

                        </div>
                </div>

                <div className="content1">
                      <div className="content-box">
                        <div>word cloud image
                        </div>
                        </div>
                </div>

                <div className="content2">
                      <div className="content-box">
                        <div>
                          <table className="content-table">
                            <thead>
                            <tr>
                              <th>Parameter</th>
                              <th>You</th>
                              <th>Avg User</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                              <td>Skilllies Earned</td>
                              <td>$ {article.SkillliesEarned}</td>
                              <td>$ 39</td>
                            </tr>
                            <tr>
                              <td>Review Rating</td>
                              <td>{article.reviewRating}</td>
                              <td>3.8</td>
                            </tr>
                            <tr>
                              <td>AI Rating</td>
                              <td>{article.aiRating}</td>
                              <td>74</td>
                            </tr>

                             <tr>
                              <td>Days Spent</td>
                              <td>{article.DaysTaken}</td>
                              <td>4</td>
                            </tr>
                            </tbody>
                          </table>

                        </div>
                        </div>
                </div>
            </div>
            );
        });

        return (
            <div>
                    {analyticsoverview}
            </div>
        );
    }
}

export default Analytics
