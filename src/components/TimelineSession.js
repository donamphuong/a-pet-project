import React from 'react';
import {
 Box,
 Text
} from 'grommet';
import { Clock } from 'grommet-icons';
import TimelineRow from './TimelineRow.js'

class TimelineSession extends React.Component {
  render() {
    return (
      <Box
        margin={{bottom: 'large'}}
      >
        <Text size="small">{this.props.schedule.sessionName} <Clock size="small"/></Text>

        {
          this.props.schedule.workshops.map((workshop, index) =>
            <TimelineRow detail={workshop} key={index}/>
          )
        }
      </Box>

    )
  }
}

export default TimelineSession;
