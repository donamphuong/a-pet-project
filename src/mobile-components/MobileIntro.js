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

class MobileIntro extends React.Component {
  getImageMobileName(imageName) {
    return imageName + "-mobile.jpg"
  }

  render() {
    return (
      <Grid
        fill
        rows={["small", "flex", "auto"]}
        areas={[["logos"], ["event"], ["speakers"]]}
        style={{height: 'auto', display: 'block'}}
      >
      <Box gridArea="logos" direction="row">
        {
          t.partners && t.partners.map((logo, index) =>
            <Image style={{height: '200px'}} key={index} fit="contain" src={this.getImageMobileName(logo)} />
          )
        }
      </Box>
        <Box gridArea="event" justify="center">
            <Text color="#f9ca24" weight="bold" textAlign="center" size="6.5vh" style={{overflowWrap: 'break-word'}}>
                <Markdown>{t.event.name.first}</Markdown>
              <br/>
            </Text>
            <Text color="#f9ca24" textAlign="center" level={2} size="3vh" style={{textTransform: 'uppercase'}}>
                &
                <br/>
                {t.event.name.second}
            </Text>
        </Box>

        <Box align="end" margin={{bottom: 'small'}} gridArea="speakers" justify="end" gap="medium">
          <Box>
            <Text weight="bold" size="2vh" color="#130f40" textAlign="center">{t.event.date}</Text>
            <br/>
            <Text weight="bold" size="2vh" color="#130f40" textAlign="center"><Markdown>{t.event.location}</Markdown></Text>
          </Box>
          <Box gap="small" align="center" margin={{vertical: 'large'}}>
            {
              t.speakers.map((speaker, index) =>
                <SpeakerInfo speaker={speaker} key={index}/>
              )
            }
          </Box>
        </Box>


      </Grid>
    )
  }
}

export default MobileIntro;
