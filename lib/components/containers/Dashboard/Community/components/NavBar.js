import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class NavBar extends Component {
  componentDidMount(){
    //Menu Toggle Script
    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });
    $("#menu-toggle-expand").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled-expand");
    });
  }
  render(){
    return(
      <div>
        <a href="#menu-toggle" className="btn-slide" id="menu-toggle"><span className="glyphicon glyphicon-menu-right" aria-hidden="true"></span></a>
        <div className="optionwrap">
      		<div className="navwrap">
      			<nav className="navbar navbar-default">
      			  <div className="container-fluid">
      			    {/*<!-- Brand and toggle get grouped for better mobile display -->*/}
      			    <div className="navbar-header">
      			      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
      			        <span className="sr-only">Toggle navigation</span>
      			        <span className="icon-bar"></span>
      			        <span className="icon-bar"></span>
      			        <span className="icon-bar"></span>
      			      </button>
      			      <a className="navbar-brand" href="#">Brand</a>
      			    </div>
      			    {/*<!-- Collect the nav links, forms, and other content for toggling -->*/}
      			    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      			      <ul className="nav navbar-nav">
      			        <li>
      			        	<Link to="/community/information" className="ico-mydeals-2">
      			        		<div className="ico-mydeals"></div>
      			        		<div className="text-link">Community <br/> Information</div>
      			        	</Link>
      			        </li>
      			        <li>
      			        	<Link to="/community/neighborhood" className="ico-myvisits-2">
      			        		<div className="ico-myvisits"></div>
      			        		<div className="text-link">Neighborhd<br/> Around Me</div>
      			        	</Link>
      			        </li>
      			        <li>
      			        	<Link to="/community/places" className="ico-myfavorites-2">
      			        		<div className="ico-myfavorites"></div>
      			        		<div className="text-link">Places <br/> To Go</div>
      			        	</Link>
      			        </li>
      			        <li>
      			        	<Link to="/community/events" className="ico-mybookings-2">
      			        		<div className="ico-mybookings"></div>
      			        		<div className="text-link">Recent <br/> Events</div>
      			        	</Link>
      			        </li>
      			        <li>
      			        	<Link to="/community/group" className="ico-myfeedback-2">
      			        		<div className="ico-myfeedback"></div>
      			        		<div className="text-link">Group of <br/> Businesses</div>
      			        	</Link>
      			        </li>
      			      </ul>
      			    </div>{/*<!-- /.navbar-collapse -->*/}
      			  </div>{/*<!-- /.container-fluid -->*/}
      			</nav>
      		</div>
      	</div>
      </div>
    );
  }
}

export default NavBar;
