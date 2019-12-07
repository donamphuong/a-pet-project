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

class MobileTimelineRow extends React.Component {
  state = {
		open: false
	}

	switchCollapsible() {
		this.setState({ open: this.state.open ? false : true });
	}

  isEmpty(value) {
    return value ? true : false;
  }

  render() {
    var renderedColour = colours[currentColour];

    currentColour = (currentColour + 1) % colours.length;
    return (
      <div>
        <Box
          justify="evenly"
          elevation="xx"
          margin={{top: 'small'}}
          pad='small'
          direction="row-responsive"
          gap="medium"
        >
          {/* Time */}
          <Box gap="xsmall">
            <Box className="start-time">
              <Text size="xlarge" weight="bold"><Markdown>{this.props.detail.startTime}</Markdown></Text>
            </Box>
            <Box className="end-time">
              <Text size="small" color="dark-2" ><Markdown>{this.props.detail.endTime}</Markdown></Text>
            </Box>
          </Box>

          {/* Divider */}
          <Box size="xsmall" border={{"color": renderedColour, "size": "0.5em", "side": "left"}} round="2em" />

          <Box gap="xsmall" width="xlarge">
            <Box>
              <Text weight="bold"><Markdown>{this.props.detail.topic}</Markdown></Text>
            </Box>
            <Box>
              <Text style={{fontStyle: 'italic'}} color='dark-3'><Markdown>{this.props.detail.speakerName}</Markdown></Text>
            </Box>
          </Box>

          <Button align='center'
            icon={<StatusInfo />}
            disabled={!this.props.detail.moreInfo}
            onClick={(e) => this.switchCollapsible()}
            style={{opacity: this.props.detail.moreInfo ? 1 : 0, pointerEvents: this.props.detail.moreInfo ? 'auto' : 'none'}}/>

        </Box>

        <Collapsible direction='vertical' open={this.state.open} style={{overflow: 'auto'}}>{this.props.detail.moreInfo}</Collapsible>
      </div>
    )
  }
}

export default MobileTimelineRow;
