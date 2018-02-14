import React, {Component} from 'react';
import BusinessDeals from './BusinessDeals'

class BusinessDealsTenVisits extends Component {
  componentDidMount(){
    $('[data-toggle="popover"]').popover('show');
  }
  render(){
    return(
      <div>
        <BusinessDeals />
        <div className="contentwrap">
          <div className="navwrap">
            <div className="col-md-12 bus-inf-description">
              <div className="content">
      					<div className="col-md-2">
      						<ul className="list-coupons">
      							<li>
                      <a href="#"><img src="../../images/taco.png" alt=""/>Free Taco</a>
                    </li>
      							<li>
                      <a href="#"><img src="../../images/taco.png" alt=""/>Free Bear</a>
                    </li>
      						</ul>
      					</div>
      					<div className="col-md-8">
      						<img src="../../images/10-visits-coupon.png" alt="" className="img-responsive center-block"/>
      						<a href="#" className="request"><div className="ico-request"></div>Request</a>
      					</div>
      					<div className="col-md-2">
      						<div className="ico-info-orange" data-toggle="popover" data-placement="top" title="More Information" data-content="Want to know about Deals?."></div>
      					</div>
      				</div>
      				<div className="content">
      					<div className="panel panel-default">
      					  <div className="panel-heading">
      					    <h3 className="panel-title">Register your visits</h3>
      					  </div>
      					  <div className="panel-body">
      					  	<form action="">
      						    <div className="col-md-6">
      						    	<label for="recepit">Recepit*</label>
      						    	<input type="text" className="form-control" id="recepit" placeholder="Example: CDFH7421"/>
      						    	<label for="amount">Amount*</label>
      						    	<input type="number" className="form-control" id="amount" placeholder="Example: 34"/>
      						    	<label for="date">Date*</label>
      						    	<input type="date" className="form-control" id="date" placeholder="Example: yyyy/mm/dd"/>
      						    	<label for="employee">Employee*</label>
      						    	<input type="text" className="form-control" id="employee" placeholder="Julia Mar"/>
      						    </div>
      						    <div className="col-md-6">
      						    	<label for="employee">Select your deals</label>
      						    	<select className="form-control">
      								  <option>Ice Cream</option>
      								  <option>Chocolate</option>
      								  <option>Hot Dog</option>
      								  <option>Pizza</option>
      								  <option>Burguer</option>
      								  <option>Taco</option>
      								</select>
      								<p className="text-center">Your star will change color once your purchase is validated by the business owner. We advise you to keep your receipts as a record.</p>
      								<p className="text-center">You're awesome, Thank you!</p>
      								<button type="button" className="btn">
      								  <span className="glyphicon glyphicon-floppy-disk" aria-hidden="true"></span> Register and Save
      								</button>
      						    </div>
      					    </form>
      					  </div>
      					</div>
      				</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BusinessDealsTenVisits;
