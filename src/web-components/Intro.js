import React from 'react';
import {
 Box,
 Grid,
 Text,
 Heading,
 Markdown,
 Image
} from 'grommet';
import SpeakerInfo from './../common/SpeakerInfo.js'
import t from './../information.js'

class Intro extends React.Component {
  getImageMobileName(imageName) {
    return imageName + "-mobile.jpg"
  }

  render() {
    return (
      <Grid
        fill
        rows={["small", "flex", "auto"]}
        areas={[["logos"], ["event"], ["speakers"]]}
        overflow="auto"
      >
        <Box gridArea="logos" direction="row" overflow="auto" pad={{vertical: "large"}}>
          {
            t.partners && t.partners.map(logo =>
              <Image fit="contain" src={this.getImageMobileName(logo)}/>
            )
          }
        </Box>
        <Box gridArea="event" justify="center" wrap="true" overflow="auto">
          <Text full color="#f9ca24" weight="bold" size="6.5vh" textAlign="center" style={{overflowWrap: 'break-word'}}>
              <Markdown>{t.event.name.first}</Markdown>
          </Text>
          <Text color="#f9ca24" textAlign="center" size="2vh" level={2} style={{textTransform: 'uppercase'}}>
              &
              <br/>
              {t.event.name.second}
          </Text>
          <br/>

          <Text weight="bold" size="1.5vh" color="white" textAlign="center"></Text>
          <br/>
          <Text weight="bold" size="1.5vh" color="white" textAlign="center"></Text>
        </Box>

        <Box align="end" margin={{bottom: 'small'}} gridArea="speakers" justify="end" gap="medium">
          <Box>
            <Text weight="bold" size="2vh" color="#130f40" textAlign="center">{t.event.date}</Text>
            <br/>
            <Text weight="bold" size="2vh" color="#130f40" textAlign="center"><Markdown>{t.event.location}</Markdown></Text>
          </Box>
          <Box gap="small" direction="row" >
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
