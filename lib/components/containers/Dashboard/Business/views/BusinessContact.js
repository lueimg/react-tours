import React, {Component} from 'react';
import NavBar from '../components/NavBar'
import BusinessData from '../components/BusinessData'

class BusinessContact extends Component {
  render(){
    return(
      <div className="dashboard">
        <NavBar />
        <BusinessData />
        <div className="contentwrap">
          <div className="navwrap">
            <div className="col-md-12 bus-inf-description">
      				<h3 className="subtitle">Contact Business</h3>
      				<div className="clearfix"></div>
      				<div className="col-md-7">
      					<form action="" method="post">
      						<input type="text" className="form-control" placeholder="First Name" required />
      						<input type="text" className="form-control" placeholder="Last Name" required />
      						<input type="number" className="form-control" placeholder="Phone" required />
      						<input type="time" className="form-control" placeholder="Hour" required />
      						<input type="email" className="form-control" placeholder="Email" required />
      						<textarea className="form-control" rows="4" placeholder="Description" required></textarea>
      						<input type="submit" className="btn" value="Send Message"/>
      					</form>
      				</div>
      				<div className="col-md-5 qr-code">
      					<p className="text-center">Did you know?</p>
      					<p className="text-center">Scan the code to check deals, call the businesses and visit their website!</p>
      					<img src="../images/qr_cooode.png" alt="" className="img-responsive center-block" />
      				</div>
      			</div>
          </div>
        </div>
      </div>
    );
  }
}

export default BusinessContact;
