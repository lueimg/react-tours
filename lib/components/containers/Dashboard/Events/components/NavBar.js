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
      			        	<Link to="/events/information" className="ico-mydeals-2 text-center">
                        <div className="text-link">Information</div>
                      </Link>
      			        </li>
      			        <li>
      			        	<Link to="/events/places" className="ico-myvisits-2 text-center">
                        <div className="text-link">Places</div>
                      </Link>
      			        </li>
      			        <li>
      			        	<div className="dropdown">
          							<a data-target="#" href="#" className="ico-myfavorites-2 text-center" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><div className="text-link">Share</div></a>
          							<ul className="dropdown-menu">
          							    <li>
                              <a href="#"><div className="ico-face"></div>Facebook</a>
                            </li>
          						    	<li>
                              <a href="#"><div className="ico-twitter"></div>Twitter</a>
                            </li>
          						    	<li>
                              <a href="#"><div className="ico-youtube"></div>Youtube</a>
                            </li>
          						    	<li>
                              <a href="#"><div className="ico-linkedin"></div>LinkeIn</a>
                            </li>
          						    	<li>
                              <a href="#"><div className="ico-pinterest"></div>Pinterest</a>
                            </li>
          						  	</ul>
          						</div>
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
