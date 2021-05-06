import React from 'react'
import { Button, Image, List, ListHeader, Container, Grid, GridColumn, Header } from 'semantic-ui-react'
import lifestyle from '../../assets/List/lifestyle.png';
import './styles/list.css'
export default class SList extends React.Component{
  state={
    listArray: [1,2,3,4,5,6,7,8,9]
  }
  render(){
    const {listArray} = this.state
    return(
      <div>
        {listArray.map(item => (
          <List divided verticalAlign='middle' id='listWrapper'>
          <List.Item >
            <Grid id='listItem'>
              <GridColumn width={2} id='listLogo'>
                <Image src={lifestyle} />
              </GridColumn>
              <GridColumn width={2}>
                <Header className='gridhead' as='h6'>CUSTOMER</Header>
                <Header id='customerName' as='h5'>LIFESTYLE</Header>
              </GridColumn>
              <GridColumn width={4}>
                <Header className='gridhead' as='h6'>CONTACT</Header>
                <Header as='h5'>ankit.sha@.com</Header>
              </GridColumn>
              <GridColumn width={4}>
                <Header className='gridhead' as='h6'>ACTIVE SHIPMENT</Header>
                <Header as='h5'>2345</Header>
              </GridColumn>
              <GridColumn >
                <Button id='listBtn'>DETAIL</Button>
              </GridColumn>
            </Grid>
          </List.Item>     
        </List>
        ))}
      </div>
)}}
