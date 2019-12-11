import React from 'react';
import {
 Box,
 Grid,
 Text,
 Markdown,
 Image
} from 'grommet';
import SpeakerInfo from './../common/SpeakerInfo.js'
import t from './../information.js'
import styled from "styled-components";

class Intro extends React.Component {
  getImageName(imageName) {
    return imageName + ".jpg"
  }

  render() {
    const StyledPre = styled.p`
      font-size: 1vw;
      margin: 0;
      padding: 0
    `;

    return (
      <Grid
        fill
        rows={["small", "flex", "auto"]}
        areas={[["logos"], ["event"], ["speakers"]]}
        overflow="auto"
      >
        <Box gridArea="logos" direction="row" overflow="auto" pad={{vertical: "large"}} animation="slideRight">
          {
            t.partners && t.partners.map((logo, index) =>
              <Image key={index} fit="contain" src={this.getImageName(logo)}/>
            )
          }
        </Box>
        <Box gridArea="event" justify="center" animation="slideRight">
            <Text color="#130f40" weight="bold" textAlign="center" size="6.5vh" style={{overflowWrap: 'break-word'}}>
                <Markdown>{t.event.name.first}</Markdown>
              <br/>
            </Text>
            <Text color="#130f40" textAlign="center" level={2} size="3vh" style={{textTransform: 'uppercase'}}>
                &
                <br/>
                {t.event.name.second}
            </Text>
        </Box>


        <Box align="end" margin={{bottom: 'small'}} gridArea="speakers" justify="end" gap="medium" animation="slideRight">
          <Box width="100%" align="center">
            <Text weight="bold" size="1vw" color="#130f40" textAlign="center">{t.event.date}</Text>
            <Text weight="bold" color="#130f40" textAlign="center"><Markdown
              components={{
                p: StyledPre,
              }}
              >{t.event.location}</Markdown></Text>
          </Box>
          <Box gap="small" direction="row">
            {
              t.speakers.map((speaker, index) =>
                <SpeakerInfo speaker={speaker}/>
              )
            }
          </Box>
        </Box>
      </Grid>
    )
  }
}

export default Intro;
