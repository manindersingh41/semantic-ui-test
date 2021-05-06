import React from 'react';
import { Container, Input, Icon , Label, Menu, Form, Table , Header, Dropdown, Grid, GridColumn } from 'semantic-ui-react';
import './styles/finance.css';

const brokerOptions = [
    {
      key: 'Jenny Hess',
      text: 'Jenny Hess',
      value: 'Jenny Hess',
      image: { avatar: true, src: '/images/avatar/small/jenny.jpg' },
    },
    {
      key: 'Elliot Fu',
      text: 'Elliot Fu',
      value: 'Elliot Fu',
      image: { avatar: true, src: '/images/avatar/small/elliot.jpg' },
    },
    {
      key: 'Stevie Feliciano',
      text: 'Stevie Feliciano',
      value: 'Stevie Feliciano',
      image: { avatar: true, src: '/images/avatar/small/stevie.jpg' },
    },
    {
      key: 'Christian',
      text: 'Christian',
      value: 'Christian',
      image: { avatar: true, src: '/images/avatar/small/christian.jpg' },
    },
    {
      key: 'Matt',
      text: 'Matt',
      value: 'Matt',
      image: { avatar: true, src: '/images/avatar/small/matt.jpg' },
    },
    {
      key: 'Justen Kitsune',
      text: 'Justen Kitsune',
      value: 'Justen Kitsune',
      image: { avatar: true, src: '/images/avatar/small/justen.jpg' },
    },
  ]

  
class Finance extends React.Component {
    render() {
        return(
            <Container>
                <Header as='h6'>
                    FEES
                </Header>
                <Dropdown
                    placeholder='BrokerName'
                    fluid
                    selection
                    options={brokerOptions}
                />
                <Container>
                    {/* <Header as='a'>VIEW PAST FEES CHANGES</Header>
                    <Grid className='tableBorder'>
                        <Grid.Row width={12} className='tableBorder'>
                            <GridColumn  width={4}>
                                <Header as='h6'>ENTRY FEES</Header>
                                <Header>${this.props.entryFees}</Header>
                            </GridColumn>
                            <GridColumn  width={4}>
                                <Header as='h6'>EXP.FEES</Header>
                                <Header>${this.props.entryFees}</Header>
                            </GridColumn>
                            <GridColumn  width={4}>
                                <Header as='h6'>FIOR SETUP FEES</Header>
                                <Header>${this.props.entryFees}</Header>
                            </GridColumn>
                        </Grid.Row>
                        <Grid.Row  className='tableBorder'>
                            <GridColumn  width={4}>
                                <Header as='h6'>SERVICES FEES (GENERAL)</Header>
                                <Header>${this.props.entryFees}</Header>
                            </GridColumn>
                            <GridColumn  width={4}>
                                <Header as='h6'>SERVICE FEES (DEMURRAGE)</Header>
                                <Header>${this.props.entryFees}</Header>
                            </GridColumn>
                            <GridColumn width={4}>
                                <Header as='h6'>SERVICE FEES (AIR STORAGE)</Header>
                                <Header>${this.props.entryFees}</Header>
                            </GridColumn>
                        </Grid.Row>
                        <Grid.Row className='tableBorder'>
                            <GridColumn width={12}>
                                <Header as='h6'>UPDATE NOTES</Header>
                                <Input />
                            </GridColumn>
                        </Grid.Row>
                    </Grid> */}
                    <Table celled>
   

    <Table.Body>
      <Table.Row>
        <Table.Cell>
        <Form.Field inline>
            <label>ENTRY FEES</label>
            <Input />
        </Form.Field>
        </Table.Cell>
        
        <Table.Cell>
        <Form.Field inline>
            <label>EXP. FEES</label>
            <Input />
        </Form.Field>
        {/* <Header>$<Input  placeholder='' width={}/></Header> */}
        </Table.Cell>
        <Table.Cell>
        <Form.Field inline>
            <label>FIOR SETUP</label>
            <Input />
        </Form.Field>
        {/* <Header>$<Input  placeholder='' width={}/></Header> */}
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>
            <Form.Field inline>
                <label>SERVICES FEES (GENERAL)</label>
                <Input />
            </Form.Field>
        </Table.Cell>
        <Table.Cell>
            <Form.Field inline>
                <label>SERVICE FEES (DEMURRAGE)</label>
                <Input />
            </Form.Field>
        </Table.Cell>
        <Table.Cell>
            <Form.Field inline>
                <label>SERVICE FEES (AIR STORAGE)</label>
                <Input />
            </Form.Field>
        </Table.Cell>
      </Table.Row>
   
    </Table.Body>


  </Table>
                </Container>
            </Container>
        )
    }
}
export default Finance