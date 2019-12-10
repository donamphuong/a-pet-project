import React from 'react';
import {
 Box,
 Markdown,
 Heading,
} from 'grommet';
import MobileTimelineSession from './MobileTimelineSession.js'
import t from './../information.js'

class MobileTimeline extends React.Component {
  render() {
    return (
      <Box align="center">
        <Box
          margin={{bottom: 'small' }}
          direction="row-responsive"
          alignContent="center"
        >
          <Heading level={3} margin={{top: 'large'}} style={{textTransform: 'uppercase'}}><Markdown>{t.schedulesHeader}</Markdown></Heading>
        </Box>
        {
          t.schedules.map((schedule, index) =>
            <MobileTimelineSession key={index} schedule={schedule}/>
          )
        }
      </Box>
    )
  }
}

export default MobileTimeline;
