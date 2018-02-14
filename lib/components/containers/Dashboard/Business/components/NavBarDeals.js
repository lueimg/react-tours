import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class NavBarDeals extends Component {
  render(){
    return(

			<div className="offers-content">
				<div className="col-md-3 col-sm-3">
					<Link to="/business/deals/smartbuy" className="offers">
						<figure>
							<img src="../../images/smart-buys.png" alt="smart-buys" className="img-responsive"/>
						</figure>
						<h3>smart <br/> buys</h3>
					</Link>
				</div>
				<div className="col-md-3 col-sm-3">
					<Link to="/business/deals/tenoff" className="offers">
						<figure>
							<img src="../../images/save-off.png" alt="save-off" className="img-responsive"/>
						</figure>
						<h3>$10 <br/> Off</h3>
					</Link>
				</div>
				<div className="col-md-3 col-sm-3">
					<Link to="/business/deals/freebies" className="offers">
						<figure>
							<img src="../../images/freebies.png" alt="freebies" className="img-responsive"/>
						</figure>
						<h3>freebies</h3>
					</Link>
				</div>
				<div className="col-md-3 col-sm-3">
					<Link to="/business/deals/tenvisits" className="offers">
						<figure>
							<img src="../../images/visits.png" alt="visits" className="img-responsive"/>
						</figure>
						<h3>10 <br/> visits</h3>
					</Link>
				</div>
			</div>

    );
  }
}

export default NavBarDeals;
