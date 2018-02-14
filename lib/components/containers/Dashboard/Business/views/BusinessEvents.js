import React, {Component} from 'react';
import NavBar from '../components/NavBar'
import BusinessData from '../components/BusinessData'

class BusinessEvents extends Component {
  componentDidMount(){      
    //datatimepicker
  	$('#datetimepicker1').datetimepicker({
		  format: 'DD-MM-YYYY',
		  daysOfWeekDisabled: [7, 7]
		});
  }
  render(){
    return(
      <div className="dashboard">
        <NavBar />
        <BusinessData />
        <div className="contentwrap">
          <div className="navwrap">
            <div className="col-md-12 bus-inf-description">
      				<h3 className="subtitle"><div className="ico-calendar"></div>Recent Events</h3>
      				<h3 className="subtitle">
      					<div className="ico-agenda"></div>Calendar
      					<div className='input-group date pull-right' id='datetimepicker1'>
                    <span className="input-group-addon pull-left">
                    	<input type='hidden' className="pull-left" />
                        <span className="glyphicon glyphicon-menu-down pull-right"></span>
                    </span>
                </div>
      				</h3>
      				<section>
      					<ul className="thumbnail-content">
      						<li className="thumbnail transition">
      							<div className="image">
      					      <img src="../images/recent-visits-1.png" alt="..."/>
      							</div>
      							<div className="caption">
      								<div className="description">
      									<h4>DetourMaps Event</h4>
      									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae rerum dicta a debitis.</p>
      									<div className="dropdown pull-left">
      										<a data-target="#" href="#" className="pull-left" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
      											<span className="ico-check"></span> Attend
      											<span className="glyphicon glyphicon-menu-down pull-right"></span>
      										</a>
      										<ul className="dropdown-menu">
      										    <li><a href="#"><div className="ico-print"></div></a></li>
      									    	<li><a href="#"><div className="ico-print"></div></a></li>
      									    	<li><a href="#"><div className="ico-print"></div></a></li>
      									  	</ul>
      									</div>
      									<div className="dropdown pull-right">
      										<a data-target="#" href="#" className="pull-right" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
      											<span className="ico-print"></span> Invite Friend
      											<span className="glyphicon glyphicon-menu-down pull-right"></span>
      										</a>
      										<ul className="dropdown-menu">
      										    <li><a href="#"><div className="ico-print"></div></a></li>
      									    	<li><a href="#"><div className="ico-print"></div></a></li>
      									  	</ul>
      									</div>
      								</div>
      								<div className="historial">
      									<div><div className="ico-date"></div> July 22, 2017</div>
      									<div><div className="ico-group"></div> 214 Attented</div>
      								</div>
      							</div>
      					    </li>

      					    <li className="thumbnail transition">
      							<div className="image">
                      <img src="../images/recent-visits-1.png" alt="..."/>
      							</div>
      							<div className="caption">
      								<div className="description">
      									<h4>DetourMaps Event</h4>
      									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae rerum dicta a debitis.</p>
      									<div className="dropdown pull-left">
      										<a data-target="#" href="#" className="pull-left" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
      											<span className="ico-check"></span> Attend
      											<span className="glyphicon glyphicon-menu-down pull-right"></span>
      										</a>
      										<ul className="dropdown-menu">
      										    <li><a href="#"><div className="ico-print"></div></a></li>
      									    	<li><a href="#"><div className="ico-print"></div></a></li>
      									    	<li><a href="#"><div className="ico-print"></div></a></li>
      									  	</ul>
      									</div>
      									<div className="dropdown pull-right">
      										<a data-target="#" href="#" className="pull-right" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
      											<span className="ico-print"></span> Invite Friend
      											<span className="glyphicon glyphicon-menu-down pull-right"></span>
      										</a>
      										<ul className="dropdown-menu">
      										    <li><a href="#"><div className="ico-print"></div></a></li>
      									    	<li><a href="#"><div className="ico-print"></div></a></li>
      									  	</ul>
      									</div>
      								</div>
      								<div className="historial">
      									<div><div className="ico-date"></div> July 22, 2017</div>
      									<div><div className="ico-group"></div> 214 Attented</div>
      								</div>
      							</div>
      					    </li>

      					    <li className="thumbnail transition">
      							<div className="image">
                      <img src="../images/recent-visits-1.png" alt="..."/>
      							</div>
      							<div className="caption">
      								<div className="description">
      									<h4>DetourMaps Event</h4>
      									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae rerum dicta a debitis.</p>
      									<div className="dropdown pull-left">
      										<a data-target="#" href="#" className="pull-left" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
      											<span className="ico-check"></span> Attend
      											<span className="glyphicon glyphicon-menu-down pull-right"></span>
      										</a>
      										<ul className="dropdown-menu">
      										    <li><a href="#"><div className="ico-print"></div></a></li>
      									    	<li><a href="#"><div className="ico-print"></div></a></li>
      									    	<li><a href="#"><div className="ico-print"></div></a></li>
      									  	</ul>
      									</div>
      									<div className="dropdown pull-right">
      										<a data-target="#" href="#" className="pull-right" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
      											<span className="ico-print"></span> Invite Friend
      											<span className="glyphicon glyphicon-menu-down pull-right"></span>
      										</a>
      										<ul className="dropdown-menu">
      										    <li><a href="#"><div className="ico-print"></div></a></li>
      									    	<li><a href="#"><div className="ico-print"></div></a></li>
      									  	</ul>
      									</div>
      								</div>
      								<div className="historial">
      									<div><div className="ico-date"></div> July 22, 2017</div>
      									<div><div className="ico-group"></div> 214 Attented</div>
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

export default BusinessEvents;
