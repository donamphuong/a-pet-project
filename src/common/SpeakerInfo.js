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
        <Box>
          <Image src={this.props.speaker.image} onClick={() => this.setShow(true)}/>
        </Box>
        <Text size="small" color="white">{this.props.speaker.name}</Text>
        <Text size="xsmall" color="white">{this.props.speaker.description}</Text>

        {this.state.show && (
          <Layer
            onEsc={() => this.setShow(false)}
            onClickOutside={() => this.setShow(false)}
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
