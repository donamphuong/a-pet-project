import React from 'react';
import {
 Box,
 Text,
 Image,
 Layer,
 Markdown,
 Heading
} from 'grommet';
import ZoomOnHover from './../common/ZoomOnHover.js'
import {
  isMobileView
} from "react-device-detect";

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
        <Text size="1vw" color="#130f40">{this.props.speaker.name}</Text>
        <Text size="1vw" color="#130f40">{this.props.speaker.description}</Text>

        {this.state.show && (
          <Layer pad="small"
            style={{maxHeight: '99.9%', overflow: 'scroll'}}
            onEsc={() => this.setShow(false)}
            onClickOutside={() => this.setShow(false)}
            onClick={() => this.setShow(false)}
          >
            <Box pad={{horizontal: "medium", vertical: "medium"}}>
              <Box border={{
                    "color": "border",
                    "size": "thin",
                    "side": "bottom"
                  }}
                >
                <Heading level={4} style={{height: "100%"}} margin={{top: "none"}} weight="bold">{this.props.speaker.name}</Heading>
              </Box>
              <Box pad={{bottom: 'small'}}>
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
