import React, {Component} from 'react'

class EventsData extends Component {
  render(){
    return(
      <div className="contentwrap">
        <div className="navwrap">
          <div className="col-md-12 bus-inf-titles">
    				<div className="col-md-7 col-xs-12">
    					<div className="pull-left">
    						<img src="../images/event.png" alt=""/>
    					</div>
    					<div className="pull-left titles">
    						<h2>Mother's Day</h2>
    						<div className="pull-left rating">Create by Manuel P. </div>
    						<div className="dropdown pull-left">
    							<a data-target="#" href="#" className="pull-left events-attend" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
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
    							<a data-target="#" href="#" className="pull-right events-attend" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
    								<span className="ico-print"></span> Invite Friend
    								<span className="glyphicon glyphicon-menu-down pull-right"></span>
    							</a>
    							<ul className="dropdown-menu">
    							    <li><a href="#"><div className="ico-print"></div></a></li>
    						    	<li><a href="#"><div className="ico-print"></div></a></li>
    						  	</ul>
    						</div>
    					</div>
    				</div>
    				<div className="col-md-5 col-xs-12 schedules">
    					<div className="pull-right">
    						<a href="#menu-toggle-expand" id="menu-toggle-expand" className="pull-left resize transition" data-toggle="tooltip" data-placement="bottom" data-trigger="hover" title="Expand">
    							<span className="glyphicon glyphicon-resize-full"></span>
    						</a>
    					</div>
    				</div>
    			</div>
    			<div className="clearfix"></div>
    			<div className="bus-inf-data">
    				<div className="col-md-4">
    					<div className="ico-distance"></div>
    					<p className="pull-left">Via Giuseppe Garibaldi, 1797,<br/>30122 Venezia</p>
    				</div>
    				<div className="col-md-4">
    					<div className="ico-fono"></div>
    					<p className="pull-left">773-436-1000</p>
    				</div>
    				<div className="col-md-4">
    					<div className="ico-world"></div>
    					<p className="pull-left">May 14, 2017 from 5-7 pm</p>
    				</div>
    			</div>
        </div>
      </div>
    );
  }
}

export default EventsData;
