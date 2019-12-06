import React from 'react';
import {
 Box,
 Text
} from 'grommet';
import { Clock } from 'grommet-icons';
import MobileTimelineRow from './MobileTimelineRow.js'

class MobileTimelineSession extends React.Component {
  render() {
    return (
      <Box
        margin={{bottom: 'large'}}
      >
        <Text size="small">{this.props.schedule.sessionName} <Clock size="small"/></Text>

        {
          this.props.schedule.workshops.map((workshop, index) =>
            <MobileTimelineRow detail={workshop} key={index}/>
          )
        }
      </Box>

    )
  }
}

export default MobileTimelineSession;
