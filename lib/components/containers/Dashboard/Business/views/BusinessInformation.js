import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import BusinessData from '../components/BusinessData';
import { LoadBusinessItem } from 'components/actions/index.js';
import { connect } from 'react-redux';

class BusinessInformation extends Component {

    state = {
        item: {},
    }

    componentDidMount = () => {
        
        if (this.props.match && this.props.match.params.id) {
            const id = this.props.match.params.id;
            this.props.actions.LoadBusinessItem(id).subscribe((item) => {
                // when we have all data we can show all data properly
                this.setState({ item });
            });
        }
    }


    render() {
        return (
            <div className="dashboard">
                <BusinessData business={this.state.item} />
                <div className="contentwrap">
                    <div className="navwrap">
                        <div className="col-md-12 bus-inf-description">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id officia labore sed cumque rem, praesentium iusto aliquam quia, accusantium dignissimos cupiditate accusamus cum ad dolorum corporis maxime nihil qui sunt. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis voluptatem dolores reiciendis minus accusamus, non maiores doloribus? Ullam nemo soluta, voluptatum veritatis fuga consequuntur obcaecati doloremque ab nobis ad aliquid.</p>
                            <div className="bus-inf-image">
                                <div className="list-products">
                                    {/*<!-- Nav tabs -->*/}
                                    <ul className="nav nav-tabs list-gallery" role="tablist">
                                        <li role="presentation" className="transition ">
                                            <a href="#offers" aria-controls="offers" role="tab" data-toggle="tab" className="ico-bus-gallery-1 active"></a>
                                        </li>
                                        <li role="presentation" className="transition">
                                            <a href="#gallery" aria-controls="gallery" role="tab" data-toggle="tab" className="ico-bus-gallery-2"></a>
                                        </li>
                                        <li role="presentation" className="transition">
                                            <a href="#video" aria-controls="video" role="tab" data-toggle="tab" className="ico-bus-gallery-3"></a>
                                        </li>
                                        <li role="presentation" className="transition active">
                                            <a href="#price-list" aria-controls="price-list" role="tab" data-toggle="tab" className="ico-bus-gallery-4"></a>
                                        </li>
                                    </ul>

                                    {/*<!-- Tab panes -->*/}
                                    <div className="tab-content">
                                        <div role="tabpanel" className="tab-pane fade in " id="offers">
                                            <img src="../images/cupon-6.png" alt="" className="img-responsive" />
                                        </div>
                                        <div role="tabpanel" className="tab-pane fade in" id="gallery">
                                            <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
                                                {/*<!-- Wrapper for slides -->*/}
                                                <div className="carousel-inner" role="listbox">
                                                    <div className="item active">
                                                        <img src="../images/coctel-1.jpg" alt="..." />
                                                    </div>
                                                    <div className="item">
                                                        <img src="../images/coctel-2.jpg" alt="..." />
                                                    </div>
                                                    <div className="item">
                                                        <img src="../images/coctel-3.jpg" alt="..." />
                                                    </div>
                                                </div>

                                                {/*<!-- Controls -->*/}
                                                <a className="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
                                                    <span className="glyphicon glyphicon-menu-left" aria-hidden="true"></span>
                                                    <span className="sr-only">Previous</span>
                                                </a>
                                                <a className="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
                                                    <span className="glyphicon glyphicon-menu-right" aria-hidden="true"></span>
                                                    <span className="sr-only">Next</span>
                                                </a>
                                            </div>
                                        </div>
                                        <div role="tabpanel" className="tab-pane fade in" id="video">
                                            <div className="embed-responsive embed-responsive-16by9">
                                                <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/g_6yBZKj-eo"></iframe>
                                            </div>
                                        </div>
                                        <div role="tabpanel" className="tab-pane fade in active" id="price-list">
                                            {/*<!-- Tab panes -->*/}
                                            <div className="tab-content">
                                                <div role="tabpanel" className="tab-pane list-day-content active" id="specials">
                                                    <div id="text-carousel-0" className="carousel slide list-day-content-menu" data-ride="carousel">
                                                        <div className="row">
                                                            <h3>Specials</h3>
                                                            <div className="carousel-inner">
                                                                <div className="item active">
                                                                    <div className="carousel-content">
                                                                        <ul>
                                                                            <li>
                                                                                <div className="principal">Soft Boiled Chicken</div>
                                                                                <div className="description">Width salad</div>
                                                                                <div className="price">$ 60.00</div>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/*<!-- Controls -->*/}
                                                        <a className="left carousel-control" href="#text-carousel-0" data-slide="prev">
                                                            <span className="glyphicon glyphicon-menu-left"></span>
                                                        </a>
                                                        <a className="right carousel-control" href="#text-carousel-0" data-slide="next">
                                                            <span className="glyphicon glyphicon-menu-right"></span>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div role="tabpanel" className="tab-pane list-day-content" id="breakfast">
                                                    <div id="text-carousel-1" className="carousel slide list-day-content-menu" data-ride="carousel">
                                                        <div className="row">
                                                            <h3>Breakfast</h3>
                                                            <div className="carousel-inner">
                                                                <div className="item active">
                                                                    <div className="carousel-content">
                                                                        <ul>
                                                                            <li>
                                                                                <div className="principal">Soft Boiled Chicken</div>
                                                                                <div className="description">Width salad</div>
                                                                                <div className="price">$ 60.00</div>
                                                                            </li>
                                                                            <li>
                                                                                <div className="principal">Soft Boiled Chicken</div>
                                                                                <div className="description">Width salad</div>
                                                                                <div className="price">$ 60.00</div>
                                                                            </li>
                                                                            <li>
                                                                                <div className="principal">Soft Boiled Chicken</div>
                                                                                <div className="description">Width salad</div>
                                                                                <div className="price">$ 60.00</div>
                                                                            </li>
                                                                            <li>
                                                                                <div className="principal">Soft Boiled Chicken</div>
                                                                                <div className="description">Width salad</div>
                                                                                <div className="price">$ 60.00</div>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <div className="item">
                                                                    <div className="carousel-content">
                                                                        <ul>
                                                                            <li>
                                                                                <div className="principal">Soft Boiled Chicken</div>
                                                                                <div className="description">Width salad</div>
                                                                                <div className="price">$ 60.00</div>
                                                                            </li>
                                                                            <li>
                                                                                <div className="principal">Soft Boiled Chicken</div>
                                                                                <div className="description">Width salad</div>
                                                                                <div className="price">$ 60.00</div>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/*<!-- Controls -->*/}
                                                        <a className="left carousel-control" href="#text-carousel-1" data-slide="prev">
                                                            <span className="glyphicon glyphicon-menu-left"></span>
                                                        </a>
                                                        <a className="right carousel-control" href="#text-carousel-1" data-slide="next">
                                                            <span className="glyphicon glyphicon-menu-right"></span>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div role="tabpanel" className="tab-pane list-day-content" id="launch">
                                                    <div id="text-carousel-2" className="carousel slide list-day-content-menu" data-ride="carousel">
                                                        <div className="row">
                                                            <h3>Launch</h3>
                                                            <div className="carousel-inner">
                                                                <div className="item active">
                                                                    <div className="carousel-content">
                                                                        <ul>
                                                                            <li>
                                                                                <div className="principal">Soft Boiled Chicken</div>
                                                                                <div className="description">Width salad</div>
                                                                                <div className="price">$ 60.00</div>
                                                                            </li>
                                                                            <li>
                                                                                <div className="principal">Soft Boiled Chicken</div>
                                                                                <div className="description">Width salad</div>
                                                                                <div className="price">$ 60.00</div>
                                                                            </li>
                                                                            <li>
                                                                                <div className="principal">Soft Boiled Chicken</div>
                                                                                <div className="description">Width salad</div>
                                                                                <div className="price">$ 60.00</div>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/*<!-- Controls -->*/}
                                                        <a className="left carousel-control" href="#text-carousel-2" data-slide="prev">
                                                            <span className="glyphicon glyphicon-menu-left"></span>
                                                        </a>
                                                        <a className="right carousel-control" href="#text-carousel-2" data-slide="next">
                                                            <span className="glyphicon glyphicon-menu-right"></span>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div role="tabpanel" className="tab-pane list-day-content" id="dinner">
                                                    <div id="text-carousel-3" className="carousel slide list-day-content-menu" data-ride="carousel">
                                                        <div className="row">
                                                            <h3>Dinner</h3>
                                                            <div className="carousel-inner">
                                                                <div className="item active">
                                                                    <div className="carousel-content">
                                                                        <ul>
                                                                            <li>
                                                                                <div className="principal">Soft Boiled Chicken</div>
                                                                                <div className="description">Width salad</div>
                                                                                <div className="price">$ 60.00</div>
                                                                            </li>
                                                                            <li>
                                                                                <div className="principal">Soft Boiled Chicken</div>
                                                                                <div className="description">Width salad</div>
                                                                                <div className="price">$ 60.00</div>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/*<!-- Controls -->*/}
                                                        <a className="left carousel-control" href="#text-carousel-3" data-slide="prev">
                                                            <span className="glyphicon glyphicon-menu-left"></span>
                                                        </a>
                                                        <a className="right carousel-control" href="#text-carousel-3" data-slide="next">
                                                            <span className="glyphicon glyphicon-menu-right"></span>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div role="tabpanel" className="tab-pane list-day-content" id="drink">
                                                    <div id="text-carousel-4" className="carousel slide list-day-content-menu" data-ride="carousel">
                                                        <div className="row">
                                                            <h3>Drink</h3>
                                                            <div className="carousel-inner">
                                                                <div className="item active">
                                                                    <div className="carousel-content">
                                                                        <ul>
                                                                            <li>
                                                                                <div className="principal">Soft Boiled Chicken</div>
                                                                                <div className="description">Width salad</div>
                                                                                <div className="price">$ 60.00</div>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/*<!-- Controls -->*/}
                                                        <a className="left carousel-control" href="#text-carousel-4" data-slide="prev">
                                                            <span className="glyphicon glyphicon-menu-left"></span>
                                                        </a>
                                                        <a className="right carousel-control" href="#text-carousel-4" data-slide="next">
                                                            <span className="glyphicon glyphicon-menu-right"></span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>

                                            {/*<!-- Nav tabs -->*/}
                                            <ul className="nav nav-tabs list-day" role="tablist">
                                                <li role="presentation" className="active">
                                                    <a href="#specials" aria-controls="specials" role="tab" data-toggle="tab" className="transition">Specials</a>
                                                </li>
                                                <li role="presentation">
                                                    <a href="#breakfast" aria-controls="breakfast" role="tab" data-toggle="tab" className="transition">Breakfast</a>
                                                </li>
                                                <li role="presentation">
                                                    <a href="#launch" aria-controls="launch" role="tab" data-toggle="tab" className="transition">Launch</a>
                                                </li>
                                                <li role="presentation">
                                                    <a href="#dinner" aria-controls="dinner" role="tab" data-toggle="tab" className="transition">Dinner</a>
                                                </li>
                                                <li role="presentation">
                                                    <a href="#drink" aria-controls="drink" role="tab" data-toggle="tab" className="transition">Drinks</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>{/*<!-- End Tab Panel -->*/}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        actions: {
            LoadBusinessItem
        }
    }
}

export default connect(null, mapDispatchToProps)(BusinessInformation);
