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
          height="auto"
          gap="medium"
        >
          {/* Time */}
          <Box gap="xsmall" margin={{right: 'medium'}} width="xsmall">
            <Box className="start-time">
              <Text size="xlarge" weight="bold"><Markdown>{this.props.detail.startTime}</Markdown></Text>
            </Box>
            <Box className="end-time">
              <Text size="small" color="dark-2" ><Markdown>{this.props.detail.endTime}</Markdown></Text>
            </Box>
          </Box>

          {/* Divider */}
          <Box size="xsmall" border={{"color": renderedColour, "size": "0.5em", "side": "left"}} round="2em" />

          <Box gap="xsmall" width="medium">
            <Box>
              <Text><Markdown>{this.props.detail.topic}</Markdown></Text>
            </Box>
            <Box>
              <Text color='dark-3'><Markdown>{this.props.detail.speakerName}</Markdown></Text>
            </Box>
          </Box>

          <Button align='center'
            icon={<StatusInfo />}
            disabled={!this.props.detail.moreInfo}
            onClick={(e) => this.switchCollapsible()}
            style={{opacity: this.props.detail.moreInfo ? 1 : 0, pointerEvents: this.props.detail.moreInfo ? 'auto' : 'none'}}/>

        </Box>

        <Collapsible direction='vertical' open={this.state.open}>{this.props.detail.moreInfo}</Collapsible>
      </div>
    )
  }
}

export default TimelineRow;
