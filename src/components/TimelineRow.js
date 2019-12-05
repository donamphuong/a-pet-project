import React from 'react';
import {
 Box,
 Markdown,
 Text,
 Grid,
 Collapsible,
 Button,
 Heading
} from 'grommet';
import './../css/index.css'
import { StatusInfo } from 'grommet-icons';

const colours = ['#FFCA58', '#00C781', '#FD6FFF', '#3D138D']
var currentColour = 0

class TimelineRow extends React.Component {
  state = {
		open: false
	}

	switchCollapsible() {
		this.setState({ open: this.state.open ? false : true });
	}

  render() {
    var renderedColour = colours[currentColour];

    currentColour = (currentColour + 1) % colours.length;
    return (
      <div>
        <Box
          margin={{top: 'small'}}
          pad={{bottom: 'small'}}
          direction="row"
          height="4em"
          gap="medium"
        >
          {/* Time */}
          <Box gap="xsmall" margin={{right: 'medium'}}>
            <Box className="start-time">
              <Text size="xlarge" weight="bold"><Markdown>{this.props.detail.startTime}</Markdown></Text>
            </Box>
            <Box className="end-time">
              <Text size="small" color="dark-2" ><Markdown>{this.props.detail.endTime}</Markdown></Text>
            </Box>
          </Box>

          {/* Divider */}
          <div className="vertical-line" style={{'borderLeft': 'thick solid ' + renderedColour, borderRadius: '2em'}}/>

          <Box gap="xsmall" width="medium">
            <Box className="start-time">
              <Text color='dark-3'><Markdown>{this.props.detail.speakerName}</Markdown></Text>
            </Box>
            <Box className="end-time">
              <Text><Markdown>{this.props.detail.topic}</Markdown></Text>
            </Box>
          </Box>

          <Button align='center' icon={<StatusInfo />} onClick={(e) => this.switchCollapsible()}/>

        </Box>

        <Collapsible direction='vertical' open={this.state.open}>{this.props.detail.moreInfo}</Collapsible>
      </div>
    )
  }
}

export default TimelineRow;
