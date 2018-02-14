import React, {Component} from 'react';
import NavBar from '../components/NavBar'
import CommunityData from '../components/CommunityData'

class CommunityPlaces extends Component {
  render(){
    return(
      <div className="dashboard">
        <NavBar />
        <CommunityData />
        <div className="contentwrap">
          <div className="navwrap">
            <div className="col-md-12 bus-inf-description">
      				<h3 className="subtitle">Places To Go</h3>
      				<section>
      					<ul className="thumbnail-content">
      						<li className="thumbnail transition">
      							<div className="image">
      					      		<img src="../images/recent-visits-1.png" alt="..."/>
      							</div>
      							<div className="caption">
      								<div className="description">
      									<h4>Pasteur Beach</h4>
      									<p>4949.S. Archer Ave</p>
      									<p>Located in the West Eiston<br/>Community, Pasteur Park totals 12.51 acres and features a multi-purpose room.</p>
      								</div>
      							</div>
      					    </li>
      					    <li className="thumbnail transition">
      							<div className="image">
      					      		<img src="../images/recent-visits-1.png" alt="..."/>
      							</div>
      							<div className="caption">
      								<div className="description">
      									<h4>Pasteur Beach</h4>
      									<p>4949.S. Archer Ave</p>
      									<p>Located in the West Eiston<br/>Community, Pasteur Park totals 12.51 acres and features a multi-purpose room.</p>
      								</div>
      							</div>
      					    </li>
      					    <li className="thumbnail transition">
      							<div className="image">
      					      		<img src="../images/recent-visits-1.png" alt="..."/>
      							</div>
      							<div className="caption">
      								<div className="description">
      									<h4>Pasteur Beach</h4>
      									<p>4949.S. Archer Ave</p>
      									<p>Located in the West Eiston<br/>Community, Pasteur Park totals 12.51 acres and features a multi-purpose room.</p>
      								</div>
      							</div>
      					    </li>
      					</ul>
      				</section>
      			</div>
          </div>
        </div>
      </div>
    );
  }
}

export default CommunityPlaces;
