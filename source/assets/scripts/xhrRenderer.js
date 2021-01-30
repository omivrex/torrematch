const {Component} = React
// import ReactDOM from ./react-dom.js

const resultWrapper = $('#resultWrapper')[0]

function renderData(data) {

  class ResultComp extends Component {
    render() {
      return (
        <div>
          <span id="resultWrapperCloseButn" onClick = {cancel}>x</span>
          <div className="devDet">
            <img src={data.developerImgTumb.thumb2} alt="" className="thumb"/>
            <span className="name"> <a href=""> {data.names[1]} </a></span>
            <li className = "details"><span>Strengths: </span><span> {data.stats[1].strengths }</span></li>
            <li className = "details"><span>Interests: </span><span> {data.stats[1].interests} </span></li>
            <li className = "details"><span>Education: </span><span> {data.stats[1].education} </span></li>
            <li className = "details"><span>Projects: </span><span> {data.stats[1].projects} </span></li>
          </div>
          <div className="devDet">
            <img src={data.developerImgTumb.thumb1} alt="" className="thumb"/>
            <span className="name"><a href=""> {data.names[0]}</a></span>
            <li className = "details"><span>Strengths: </span><span> {data.stats[0].strengths} </span></li>
            <li className = "details"><span>Interests: </span><span> {data.stats[0].interests} </span></li>
            <li className = "details"><span>Education: </span><span> {data.stats[0].education} </span></li>
            <li className = "details"><span>Projects: </span><span> {data.stats[0].projects} </span></li>
          </div>
          <div className="statBox">
            <div className="dataBox">
              <span className="dataHeader">Matches:</span>
              <span className="matchTags"> Interest:  {data.matchResult.interestRes}%</span>
              <span className="matchTags"> Language:  {data.matchResult.languageRes}%</span>
              <span className="matchTags"> Location:  {data.matchResult.locationRes.toString().toUpperCase()}</span>
            </div>
            <div className="dataBox">
              <span className="dataHeader">Comparisim:</span>
                <div className="barChart">
                  <span className="chartLabel label">Strengths</span>
                  <span className="dev1Bar" style={{width: ((data.comparisonResult.strengthRes[0]/100) * 8)+'rem'}} ></span>
                  <span className="dev2Bar" style={{width: ((data.comparisonResult.strengthRes[1]/100) * 8)+'rem'}} ></span>
                </div>
                <div className="barChart">
                  <span className="chartLabel label">Education</span>
                  <span className="dev1Bar" style={{width: ((data.comparisonResult.educationRes[0]/100) * 8)+'rem'}} ></span>
                  <span className="dev2Bar" style={{width: ((data.comparisonResult.educationRes[1]/100) * 8)+'rem'}} ></span>
                </div>
                <div className="barChart">
                  <span className="chartLabel label">Experiences</span>
                  <span className="dev1Bar" style={{width: ((data.comparisonResult.experienceRes[0]/100) * 8)+'rem'}} ></span>
                  <span className="dev2Bar" style={{width: ((data.comparisonResult.experienceRes[1]/100) * 8)+'rem'}} ></span>
                </div>
                  <div className="barChart">
                  <span className="chartLabel label">Jobs</span>
                  <span className="dev1Bar" style={{width: ((data.comparisonResult.jobRes[0]/100) * 8)+'rem'}} ></span>
                  <span className="dev2Bar" style={{width: ((data.comparisonResult.jobRes[1]/100) * 8)+'rem'}} ></span>
                </div>
                <div className="barChart">
                  <span className="chartLabel label">Projects</span>
                  <span className="dev1Bar" style={{width: ((data.comparisonResult.projectRes[0]/100) * 8)+'rem'}} ></span>
                  <span className="dev2Bar" style={{width: ((data.comparisonResult.projectRes[1]/100) * 8)+'rem'}} ></span>
                </div>
                <div className="barChart">
                  <span className="chartLabel label">Publications</span>
                  <span className="dev1Bar" style={{width: ((data.comparisonResult.publicationRes[0]/100) * 8)+'rem'}} ></span>
                  <span className="dev2Bar" style={{width: ((data.comparisonResult.publicationRes[1]/100) * 8)+'rem'}} ></span>
                </div>
                <div className="barChart">
                  <span className="chartLabel label">Awards</span>
                  <span className="dev1Bar" style={{width: ((data.comparisonResult.awardRes[0]/100) * 8)+'rem'}} ></span>
                  <span className="dev2Bar" style={{width: ((data.comparisonResult.awardRes[1]/100) * 8)+'rem'}} ></span>
                </div>
            </div>
          </div>
        </div>
      );
    }
  }
  ReactDOM.render(<ResultComp/>, resultWrapper)
  resultWrapper.style.display = 'block'
}
