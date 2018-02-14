import React, {Component} from 'react'

class CommunityData extends Component {
  render(){
    return(
      <div className="contentwrap">
        <div className="navwrap">
          <div className="col-md-12 bus-inf-titles">
    				<div className="col-md-7 col-xs-12">
    					<div className="pull-left">
    						<img src="../images/casa.png" alt=""/>
    						<p className="text-center">Go Now!</p>
    					</div>
    					<div className="pull-left titles">
    						<h2>Archer Heights</h2>
    						<div className="pull-left rating">State: Illinois</div>
    					</div>
    				</div>
    				<div className="col-md-5 col-xs-12 schedules">
    					<div className="pull-right">
    						<div className="ico-hours"></div>
    						<a href="#" className="pull-left" data-jq-dropdown="#jq-dropdown-2">
    							<div></div>
    							<div>Emergency <br/> Phone &nbsp;&nbsp;&nbsp;<span className="glyphicon glyphicon-menu-down"></span></div>
    						</a>
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
    					<p className="pull-left">POPULATION:<br/> 13,993</p>
    				</div>
    				<div className="col-md-4">
    					<div className="ico-world"></div>
    					<p className="pull-left">ZIP CODE: <br/> parts of 60632</p>
    				</div>
    			</div>
        </div>

        {/*Dropdown Horario*/}
        <div id="jq-dropdown-2" className="jq-dropdown jq-dropdown-tip2">
      		<ul className="jq-dropdown-menu2">
            <li className="text-center">Emergency Phone</li>
	          <li className="jq-dropdown-divider"></li>
	        <table>
    			  <tbody>
    			  <tr>
    			    <td>Emergency</td>
    			    <td>911</td>
    			  </tr>
    			  <tr>
    			      <td>Local</td>
    			      <td>992486547</td>
    			  </tr>
    			  </tbody>
    			</table>
          </ul>
        </div>
        {/*FIN Dropdown Horario*/}
      </div>
    );
  }
}

export default CommunityData;
