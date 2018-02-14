import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { selectBusiness, hideMap } from 'components/actions';


const TeaserWrapper = styled.div`
    display: flex;
    border: 1px solid #ccc;
    margin: 15px 15px 0px 15px;
    background: #fff;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
`;

const SeccionImage = styled.div`
    flex: 1;
`;
const SeccionDetails = styled.div`
    flex: 2;
    padding: 15px 20px 20px 20px ;

`;

const Title = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 0;

    & span {
        font-weight: bold;
        color: #aaa;
        cursor: pointer;
        &:hover {
            color: #000
        }
    }
`;

const HeardIcon = styled.div``;


const Description = styled.div``;


const Options = styled.div`
    display: flex;
    justify-content: space-between;
    padding-top: 10px;
    align-items: center;

`;

const Votes = styled.div``;
const ViewMore = styled.div`
    border: 2px solid orange;
    border-radius: 20px;
    padding: 5px 29px;
    color: orange;

    & .more-text {
        display: inline-block;
        padding-right: 10px;
        text-transform: uppercase;
    }

`;

class BusinessTeaser extends React.PureComponent {

    selectBusiness = () => {
        this.props.actions.selectBusiness(this.props.item);
        this.props.actions.hideMap();
    }

    render() {
        return (
            <TeaserWrapper className="TeaserWrapper">
                <SeccionImage className="SeccionImage">
                    <img src="/images/comida-1.png" />
                </SeccionImage>

                <SeccionDetails className="SeccionDetails">
                    <Title className="Title">
                        <img src="/images/ico-culver.png" alt="" />
                        <span onClick={this.selectBusiness}>
                            <Link to={`/dashboard/business/${this.props.item.id}`} > { this.props.item.name }</Link>
                        </span>
                        <span className="glyphicon glyphicon-heart" aria-hidden="true"></span>
                    </Title>
                    <Description className="Description">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae rerum dicta a debitis.
                    </Description>
                    <Options className="Options">
                        <Votes className="Votes">
                            <span className="glyphicon glyphicon-star" aria-hidden="true" style={{ color: '#ccc' }}></span>
                            <span className="glyphicon glyphicon-star" aria-hidden="true" style={{ color: '#ccc' }}></span>
                            <span className="glyphicon glyphicon-star" aria-hidden="true" style={{ color: '#ccc' }}></span>
                            <span className="glyphicon glyphicon-star" aria-hidden="true" style={{ color: '#ccc' }}></span>
                            <span className="glyphicon glyphicon-star" aria-hidden="true" style={{ color: '#ccc' }}></span>
                        </Votes>
                        <ViewMore className="ViewMore">
                            <span className="more-text">$10 Off</span>
                            <span className=" more-icon glyphicon glyphicon-menu-right" aria-hidden="true"></span>
                        </ViewMore>
                    </Options>

                </SeccionDetails>

            </TeaserWrapper>
        );
    }
}

const mapStateToProps = (state) => {
    return {
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: {
            selectBusiness: (item) => dispatch(selectBusiness(item)),
            hideMap: () => dispatch(hideMap()),
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(BusinessTeaser);