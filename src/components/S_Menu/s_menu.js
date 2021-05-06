import React from 'react';
import { Search, Grid, Header, Segment, Menu, Container,Input, Dropdown, Icon, Button, GridColumn } from 'semantic-ui-react';
import _ from 'lodash'
import './styles/s_menu.css'

class SMenu extends React.Component{
    state = {
        "isLoading": false,
        "results": [],
        "value": ""
    }
    render() {
        const { isLoading, value, results } = this.state
        return (
                <Container fluid>
                   <Grid id='menuGrid'>
                       <GridColumn width={8}>
                            <Menu id='searchMenu' secondary>
                                <Menu.Item onClick={this.props.func}><Icon name='align justify' /></Menu.Item>
                                <Menu.Item as='p'>
                                    Customers
                                </Menu.Item>
                                <Menu.Item>
                                    {/* <Search
                                        input={{ icon: 'search', iconPosition: 'left' }}
                                        loading={isLoading}
                                        onResultSelect={this.handleResultSelect}
                                        results={results}
                                        value={value}
                                    /> */}
                                    <Input icon='search' placeholder='Search...' iconPosition='left' />
                                </Menu.Item>
                                <Menu.Item>
                                    <Button id='newBtn'>NEW</Button>
                                </Menu.Item>
                            </Menu>
                       </GridColumn>
                       <GridColumn width={8}>
                           
                       </GridColumn>
                   </Grid>
                </Container>
        )
    }
}
export default SMenu