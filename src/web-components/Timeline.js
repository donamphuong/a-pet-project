import React from 'react';
import {
 Box,
 Markdown,
 Heading,
} from 'grommet';
import TimelineSession from './TimelineSession.js'
import t from './../information.js'

class Timeline extends React.Component {
  render() {
    return (
      <Box>
        <Box
          margin={{bottom: 'small' }}
          direction="row"
        >
          <Heading level={3} margin={{top: 'large'}} style={{textTransform: 'uppercase'}}><Markdown>{t.schedulesHeader}</Markdown></Heading>
        </Box>
        {
          t.schedules.map((schedule, index) =>
            <TimelineSession key={index} schedule={schedule}/>
          )
        }
      </Box>
    )
  }
}

export default Timeline;
