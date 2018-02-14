import React, {Component} from 'react';
import NavBar from '../components/NavBar'
import EventsData from '../components/EventsData'

class EventsInformation extends Component {
  render(){
    return(
      <div className="dashboard">
        <NavBar />
        <EventsData />
        <div className="contentwrap">
          <div className="navwrap">
            <div className="col-md-12 bus-inf-description">
      				<div className="bus-inf-image">
      					<img src="../images/event-1.png" alt="" className="img-responsive"/>
      				</div>
      				<div className="event-details center-block">
      					<div className="col-md-8">
      						<h3>Event Details</h3>
      						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut iste, doloremque illo voluptatem incidunt et ducimus, cum sed dolores dicta quas autem tenetur quam nam pariatur dignissimos illum suscipit quibusdam?</p>
      					</div>
      					<div className="col-md-4">
      						<div className="events-attend"><span>140</span>Attented</div>
      						<div className="events-attend"><span>182</span>Maybe</div>
      						<div className="events-attend">
      							<ul>
      								<li>
                        <a href="#" title="Manuel Pacheco">
                          <img src="../images/profile.jpg" alt=""/>
                        </a>
                      </li>
      								<li>
                        <a href="#" title="Diego Párraga">
                          <img src="../images/profile.jpg" alt=""/>
                        </a>
                      </li>
      								<li>
                        <a href="#" title="Vivian Modesto">
                          <img src="../images/profile.jpg" alt=""/>
                        </a>
                      </li>
      								<li>
                        <a href="#">+50</a>
                      </li>
      							</ul>
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

export default EventsInformation;
