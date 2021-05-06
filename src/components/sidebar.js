import React, { Component } from 'react'
import { Container, Header, Image, List } from 'semantic-ui-react'
import './styles/sidebar.css';

export class Sidebar extends Component {
    render() {
        return (
            <div id='sidebar'>
                <Container fluid id='container'>
                    <Image src={this.props.avatar} size='medium' circular centered/>
                    <Header as="h3" style={styles.h3}  textAlign='center'>{this.props.name}</Header>
                    <Header as='h6' style={styles.h6} textAlign='center'>{this.props.email}</Header>
                    <br/>
                </Container>
                <Container fluid>
                    <List link>
                        <Header as='p'>Setup</Header>
                            <List.Item className='listItem' active>Customer</List.Item>
                            <List.Item as='a'>Broker</List.Item>
                            <List.Item as='a'>Freight Forwarder</List.Item>
                            <List.Item as='a'>Invoices</List.Item>
                        <Header as='p'>Updates</Header>
                            <List.Item as='a'>Location</List.Item>
                            <List.Item as='a'>SKU</List.Item>
                        <Header as='p'>Statements</Header>
                            <List.Item as='a'>CBP Daily Statement</List.Item>
                            <List.Item as='a'>CBP Monthly Statement</List.Item>
                    </List>
                </Container>
            </div>
        )
    }
}
const styles = {
    h6: {
        margin:'0 0 15px 0'
    },
    h3: {
        margin:'10px 0 0 0 '
    }
}



export default Sidebar
