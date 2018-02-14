import React, {Component} from 'react';
import NavBar from '../components/NavBar'
import CommunityData from '../components/CommunityData'

class CommunityInformation extends Component {
  render(){
    return(
      <div className="dashboard">
        <NavBar />
        <CommunityData />
        <div className="contentwrap">
          <div className="navwrap">
            <div className="col-md-12 bus-inf-description">
      				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id officia labore sed cumque rem, praesentium iusto aliquam quia, accusantium dignissimos cupiditate accusamus cum ad dolorum corporis maxime nihil qui sunt. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis voluptatem dolores reiciendis minus accusamus, non maiores doloribus? Ullam nemo soluta, voluptatum veritatis fuga consequuntur obcaecati doloremque ab nobis ad aliquid.</p>
      				<div className="bus-inf-image">
      					<img src="../images/community-desc.png" alt="" className="img-responsive"/>
      				</div>
      			</div>
          </div>
        </div>
      </div>
    );
  }
}

export default CommunityInformation;
