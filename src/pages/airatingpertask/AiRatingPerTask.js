import React from "react"
import "../../font-awesome/css/font-awesome.min.css"

import AiRatingPerTaskStructure from "./AiRatingPerTaskStructure.js"

import AiRatingPerTaskData from '../../data/AiRatingPerTaskData.js'

class AiRatingPerTask extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          airatingpertaskdata: AiRatingPerTaskData,
        };
    }
    render() {
        const airatingpertaskpage = this.state.airatingpertaskdata.map((airatingpertaskpagedata) => {
            return (
            <AiRatingPerTaskStructure airatingpertaskpagedata={airatingpertaskpagedata}/>
            );
        });


        return (
            <div>
                    {airatingpertaskpage}
            </div>
        );
    }
}

export default AiRatingPerTask
