import React, {Component} from 'react';
import NavBar from '../components/NavBar'
import CommunityData from '../components/CommunityData'

class CommunityGroup extends Component {
  render(){
    return(
      <div className="dashboard">
        <NavBar />
        <CommunityData />
        <div className="contentwrap">
          <div className="navwrap">
            <div className="col-md-12 bus-inf-description">
      				<h3 className="subtitle">Group of Business</h3>
      				<section>
      					<ul className="thumbnail-content">
      						<li className="thumbnail transition">
      							<div className="heart transition">
      								<div className="ico-heart center-block">
      									<span className="glyphicon glyphicon-heart center-block" aria-hidden="true"></span>
      								</div>
      						    </div>
      							<div className="image">
      					      		<img src="../images/comida-3.png" alt="..."/>
      							</div>
      							<div className="caption group">
      								<div className="description">
      							        <h4>Tacos Mario's#1</h4>
      							        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae rerum dicta a debitis.</p>
      							        <p><div className="divider"></div></p>
      							        <p>
      										<div className="pull-left rating">
      											<img src="../images/ico-culver.png" alt=""/>
      											<span>4.5</span>
      											<span className="glyphicon glyphicon-star" aria-hidden="true"></span>
      											<span className="glyphicon glyphicon-star" aria-hidden="true"></span>
      											<span className="glyphicon glyphicon-star" aria-hidden="true"></span>
      											<span className="glyphicon glyphicon-star" aria-hidden="true"></span>
      											<span className="glyphicon glyphicon-star" aria-hidden="true"></span>
      										</div>
      										<div className="pull-right">
      											<button>$10 Off <span className="glyphicon glyphicon-menu-right" aria-hidden="true"></span></button>
      										</div>
      							        </p>
      							    </div>
      						    </div>
      					    </li>
      					    <li className="thumbnail transition">
      					    	<div className="heart transition">
      								<div className="ico-heart center-block">
      									<span className="glyphicon glyphicon-heart center-block" aria-hidden="true"></span>
      								</div>
      						    </div>
      							<div className="image">
      					      		<img src="../images/comida-2.png" alt="..."/>
      							</div>
      							<div className="caption group">
      								<div className="description">
      							        <h4>Tacos Mario's#1</h4>
      							        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae rerum dicta a debitis.</p>
      							        <p><div className="divider"></div></p>
      							        <p>
      										<div className="pull-left rating">
      											<img src="../images/ico-culver.png" alt=""/>
      											<span>4.5</span>
      											<span className="glyphicon glyphicon-star" aria-hidden="true"></span>
      											<span className="glyphicon glyphicon-star" aria-hidden="true"></span>
      											<span className="glyphicon glyphicon-star" aria-hidden="true"></span>
      											<span className="glyphicon glyphicon-star" aria-hidden="true"></span>
      											<span className="glyphicon glyphicon-star" aria-hidden="true"></span>
      										</div>
      										<div className="pull-right">
      											<button>$10 Off <span className="glyphicon glyphicon-menu-right" aria-hidden="true"></span></button>
      										</div>
      							        </p>
      							    </div>
      						    </div>
      					    </li>
      					    <li className="thumbnail transition">
      					    	<div className="heart transition">
      								<div className="ico-heart center-block">
      									<span className="glyphicon glyphicon-heart center-block" aria-hidden="true"></span>
      								</div>
      						    </div>
      							<div className="image">
      					      		<img src="../images/comida-1.png" alt="..."/>
      							</div>
      							<div className="caption group">
      								<div className="description">
      							        <h4>Tacos Mario's#1</h4>
      							        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae rerum dicta a debitis.</p>
      							        <p><div className="divider"></div></p>
      							        <p>
      										<div className="pull-left rating">
      											<img src="../images/ico-culver.png" alt=""/>
      											<span>4.5</span>
      											<span className="glyphicon glyphicon-star" aria-hidden="true"></span>
      											<span className="glyphicon glyphicon-star" aria-hidden="true"></span>
      											<span className="glyphicon glyphicon-star" aria-hidden="true"></span>
      											<span className="glyphicon glyphicon-star" aria-hidden="true"></span>
      											<span className="glyphicon glyphicon-star" aria-hidden="true"></span>
      										</div>
      										<div className="pull-right">
      											<button>$10 Off <span className="glyphicon glyphicon-menu-right" aria-hidden="true"></span></button>
      										</div>
      							        </p>
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

export default CommunityGroup;
