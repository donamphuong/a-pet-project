import React from 'react';
import {
 Box,
 Text,
 Image,
 Layer,
 Button,
 Markdown,
 Heading
} from 'grommet';
import ZoomOnHover from './../common/ZoomOnHover.js'

class SpeakerInfo extends React.Component {
  state = {
    show: false
  }

  setShow(isActive) {
    this.setState({show: isActive})
  }

  render() {
    return (
      <Box>
        <Text size="small" color="#130f40" textAlign="center" weight="bold">{this.props.speaker.role}</Text>

        <ZoomOnHover
          onClick={() => this.setShow(true)}
          pose={this.state.hovering ? "hovered" : "idle"}
          onMouseEnter={() => this.setState({ hovering: true })}
          onMouseLeave={() => this.setState({ hovering: false })}
        >

              <Image src={this.props.speaker.image}/>
          </ZoomOnHover>
        <Text size="small" color="white">{this.props.speaker.name}</Text>
        <Text size="xsmall" color="white">{this.props.speaker.description}</Text>

        {this.state.show && (
          <Layer
            onEsc={() => this.setShow(false)}
            onClickOutside={() => this.setShow(false)}
            onClick={() => this.setShow(false)}
          >
            <Box pad={{horizontal: "medium", bottom: "medium"}}>
              <Box border={{
                    "color": "border",
                    "size": "thin",
                    "side": "bottom"
                  }}>
                <Heading level={4} margin={{bottom: "none"}} weight="bold">{this.props.speaker.name}</Heading>
              </Box>
              <Box overflow="scroll">
                <Markdown margin={{top: "none"}}>{this.props.speaker.bio}</Markdown>
              </Box>
            </Box>

          </Layer>
        )}
      </Box>
    )
  }
}

export default SpeakerInfo;
