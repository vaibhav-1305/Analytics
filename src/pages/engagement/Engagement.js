import React from "react"
import "../../font-awesome/css/font-awesome.min.css"

import EngagementStructure from "./EngagementStructure.js"

import EngagementData from '../../data/EngagementData.js'

class Engagement extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          engagementdata: EngagementData,
        };
    }
    render() {
        const engagementpage = this.state.engagementdata.map((engagementpagedata) => {
            return (
            <EngagementStructure engagementpagedata={engagementpagedata}/>
            );
        });


        return (
            <div>
                    {engagementpage}
            </div>
        );
    }
}

export default Engagement
