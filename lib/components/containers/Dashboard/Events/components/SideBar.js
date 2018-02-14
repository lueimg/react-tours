import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class SideBar extends Component {
  componentDidMount(){
    //distance range With JQuery
    $("#distance").slider();
    $("#distance").on("slide", function(slideEvt) {
      $("#distanceSliderVal").text(slideEvt.value);
    });

    //datatimepicker
    $('#datetimepicker1').datetimepicker({
      format: 'dd, MMM D, YYYY',
      daysOfWeekDisabled: [7, 7]
    });
  }
  render(){
    return(
      <div id="sidebar-wrapper" className="boxscroll">
      	<div className="col-md-6 content-rangeslider">
    			<div className="rangeslider center-block">
    				<div className="pull-left">Search distance:</div> <div className="pull-right"><span id="distanceSliderVal">3</span><span>min</span></div><br/>
        		<input id="distance" type="text" data-slider-id='ex1Slider' data-slider-min="0" data-slider-max="20" data-slider-step="1" data-slider-value="3"/>
    			</div>
      	</div>
      	<div className="col-md-6 content-rangeslider">
      		<div className="ico-calendar-2"></div>
      		<div className='input-group date' id='datetimepicker1'>
            <span className="input-group-addon">
            	<input type='text' className="pull-left" />
              <span className="glyphicon glyphicon-menu-down pull-left"></span>
            </span>
          </div>
      	</div>
      	<div className="clearfix"></div>
        <section className="content-thumbnail">
        	<ul>
            <li className="thumbnail pull-left transition thumbnail-community">
				      <img src="../images/recent-visits-1.png" alt="..." className="img-responsive pull-left"/>
				      <div className="caption caption-community pull-left">
                <Link to="/dashboard/events/information">
                    <h3>Mother's Day</h3>
				            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae rerum dicta a debitis.</p>
                </Link>
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
    				    <div className="historial">
    							<div><div className="ico-date"></div> July 22, 2017</div>
    							<div><div className="ico-group"></div> 214 Attented</div>
    						</div>
				      </div>
				    </li>
        	</ul>
        </section>
    </div>
    );
  }
}

export default SideBar;
