import React from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import withWidth, { LARGE, SMALL } from 'material-ui/utils/withWidth';

import Header from './Header.js';
import LeftDrawer from './LeftDrawer';
import ThemeDefault from './theme-default';
import Data from './data';

class Layout extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            navDrawerOpen: true
        };
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.width !== nextProps.width) {
            this.setState({ navDrawerOpen: nextProps.width === LARGE });
        }
    }

    handleChangeRequestNavDrawer = () => {
        this.setState({
            navDrawerOpen: !this.state.navDrawerOpen
        });
    }

    render() {
        let { navDrawerOpen } = this.state;
        const paddingLeftDrawerOpen = 236;

        const styles = {
            header: {
                paddingLeft: navDrawerOpen ? paddingLeftDrawerOpen : 0
            },
            container: {
                margin: '80px 20px 20px 15px',
                paddingLeft: navDrawerOpen && this.props.width !== SMALL ? paddingLeftDrawerOpen : 0
            }
        };

        return (
            <MuiThemeProvider muiTheme={ThemeDefault}>
                <div>
                    <Header 
                        styles={styles.header}
                        handleChangeRequestNavDrawer={this.handleChangeRequestNavDrawer} 
                    />
                    <LeftDrawer 
                        navDrawerOpen={navDrawerOpen}
                        menus={Data.menus}
                        username="User Admin" 
                    />
                    <div style={styles.container}>
                        {this.props.children}
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default withWidth()(Layout);
