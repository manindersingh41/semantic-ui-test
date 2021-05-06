import React from 'react';
import SSidebar from '../../components/sidebar';
import avatar from '../../assets/Landing/avatar.png';
import SMenu from '../../components/S_Menu/s_menu';
import SList from '../../components/S_List/list';
import { GridColumn, Grid, Sidebar, Segment, Menu } from 'semantic-ui-react';
import SInfo from '../../components/S_Info/info';
import './styles/landing.css'

class Landing extends React.Component {
    state = {
        visible: false,
        menuWidth: 3,
        mainWidth: 9
    }
    setVisible = () => {
        this.setState({
            visible: !this.state.visible
        })
    }
    render() {
        return(
            <Grid>
                {this.state.visible
                    ?
                    <GridColumn id='gridLeft' width={this.state.visible ? 3 : 0}>
                        <SSidebar 
                            avatar={avatar}
                            name="Maninder Singh"
                            email="hello@gmail.com"
                            visible={this.state.visible}
                            func={this.setVisible}
                        />
                    </GridColumn>
                : null
                }
                <GridColumn id='gridRight' width={this.state.visible ? 12 : null}>
                    <SMenu 
                        func={this.setVisible}
                    />
                    <Grid id='landingListGrid'>
                        <GridColumn width={8}>
                            <SList />
                        </GridColumn>
                        <GridColumn width={8}>
                            <SInfo />
                        </GridColumn>
                    </Grid>
                </GridColumn>
            </Grid>
        )
    }
}
export default Landing