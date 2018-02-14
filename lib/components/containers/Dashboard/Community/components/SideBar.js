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
  			      <img src="images/community-1.png" alt="..." className="img-responsive pull-left" width="168px" height="167px"/>
  			      <div className="caption caption-community pull-left">
  			      	<Link to="/dashboard/community/information">
    			        <h3>Community 1</h3>
    			        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae rerum dicta a debitis.</p>
                </Link>
  			        <div className="population">
  			        	<div className="col-md-4 text-center">
  			        		<div className="row">
  			        			Population
  			        			<div className="center-block rank">110</div>
  			        		</div>
  			        	</div>
  			        	<div className="col-md-4 text-center">
  			        		<div className="row">
  			        			Events
  			        			<div className="ico events-2 center-block"></div>
  			        		</div>
  			        	</div>
  			        	<div className="col-md-4 text-center">
  			        		<div className="row">
  			        			Business
  			        			<div className="ico-business-2 center-block"></div>
  			        		</div>
  			        	</div>
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
