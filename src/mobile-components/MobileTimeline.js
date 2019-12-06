import React from 'react';
import {
 Box,
 Markdown,
 InfiniteScroll,
 Text
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
          <h2><Markdown>{t.schedulesHeader}</Markdown></h2>
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
