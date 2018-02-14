import React, {Component} from 'react';
import NavBar from '../components/NavBar'
import EventsData from '../components/EventsData'

class EventsPlaces extends Component {
  render(){
    return(
      <div className="dashboard">
        <NavBar />
        <EventsData />
        <div className="contentwrap">
          <div className="navwrap">
            <div className="col-md-12 bus-inf-description">
      				<div className="bus-inf-image">
      					<img src="../images/events-2.png" alt="" className="img-responsive"/>
      				</div>
      				<div className="event-details center-block">
      					<div className="col-md-12">
      						<h3>Event Details</h3>
      						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut iste, doloremque illo voluptatem incidunt et ducimus, cum sed dolores dicta quas autem tenetur quam nam pariatur dignissimos illum suscipit quibusdam?</p>
      					</div>
      				</div>
      			</div>
          </div>
        </div>
      </div>
    );
  }
}

export default EventsPlaces;
