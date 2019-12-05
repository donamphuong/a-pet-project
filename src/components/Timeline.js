import React from 'react';
import {
 Box,
 Markdown,
 InfiniteScroll,
 Text
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
          <h2><Markdown>{t.schedulesHeader}</Markdown></h2>
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
