// https://github.com/rafaelhz/react-material-admin-template/blob/master/src/containers/TablePage.js
import React from 'react';
import { withRouter, Link } from 'react-router-dom';

import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ContentCreate from 'material-ui/svg-icons/content/create';
import { grey200, grey500 } from 'material-ui/styles/colors';

import PageBase from 'components/containers/admin/commons/PageBase.js';

const style = {
    marginRight: 20,
    position: 'absolute',
    top: 140,
    right: 30,
};

const styles = {
    floatingActionButton: {
        margin: 0,
        top: 'auto',
        right: 20,
        bottom: 20,
        left: 'auto',
        position: 'fixed',
    },
    editButton: {
        fill: grey500
    },
    columns: {
        id: {
            width: '10%'
        },
        name: {
            width: '40%'
        },
        price: {
            width: '20%'
        },
        category: {
            width: '20%'
        },
        edit: {
            width: '10%'
        }
    }
};

import { connect } from 'react-redux';
import { loadVisitsList } from 'components/actions';

class VisitsList extends React.Component {

    state = {
        items: []
    }

    componentDidMount = () => {
        this.props.actions.loadVisitsList()
            .subscribe((list) => {
                this.setState({ items: list });
            });
    }

    add = () => {
        this.props.history.push({ pathname: '/admin/visits/add' });
    }

    render() {
        return (
            <PageBase title="Visits " navigation="Visits / List" >
                <FloatingActionButton style={style} onClick={this.add}>
                    <ContentAdd />
                </FloatingActionButton>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHeaderColumn>Get Code</TableHeaderColumn>
                            <TableHeaderColumn>Coupon</TableHeaderColumn>
                            <TableHeaderColumn>Business</TableHeaderColumn>
                            <TableHeaderColumn>Valid</TableHeaderColumn>
                            <TableHeaderColumn style={styles.columns.edit}>Edit</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {this.state.items.map((item) => RowItem({ ...item }))}
                    </TableBody>
                </Table>
            </PageBase>
        );
    }
}

const RowItem = (props) => {
    return (
        <TableRow key={props.id}>
            <TableRowColumn>Get Code GENERATE</TableRowColumn>
            <TableRowColumn>{props.coupon_id}</TableRowColumn>
            <TableRowColumn>{props.business_id}</TableRowColumn>
            <TableRowColumn>{props.valid}</TableRowColumn>
            <TableRowColumn style={styles.columns.edit}>
                <Link className="button" to={`/admin/visits/${props.id}/edit`}>
                    <FloatingActionButton zDepth={0}
                        mini={true}
                        backgroundColor={grey200}
                        iconStyle={styles.editButton}>
                        <ContentCreate />
                    </FloatingActionButton>
                </Link>
            </TableRowColumn>
        </TableRow>
    );
};


const mapDispatchToProps = () => {
    return {
        actions: {
            loadVisitsList
        }
    };
};



export default withRouter(connect(null, mapDispatchToProps)(VisitsList));
