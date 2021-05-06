import React, { Component } from 'react'
import { Tab } from 'semantic-ui-react'
import Finance from '../S_Finance/finance';

const panes = [
  { menuItem: 'COMPANY PROFILE', render: () => <Tab.Pane>Tab 1 Content</Tab.Pane> },
  { menuItem: 'CONTACT DETAILS', render: () => <Tab.Pane>Tab 2 Content</Tab.Pane> },
  { menuItem: 'FINANCE', render: () => <Tab.Pane><Finance /></Tab.Pane> },
  { menuItem: 'COMPLIANCE', render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> },
]

class SInfo extends Component {
  state = { activeIndex: 1 }

  handleRangeChange = (e) => this.setState({ activeIndex: e.target.value })
  handleTabChange = (e, { activeIndex }) => this.setState({ activeIndex })

  render() {
    const { activeIndex } = this.state

    return (
      <div>
        <Tab
            grid={{paneWidth:12}}
          panes={panes}
          activeIndex={activeIndex}
          onTabChange={this.handleTabChange}
        />
      </div>
    )
  }
}

export default SInfo