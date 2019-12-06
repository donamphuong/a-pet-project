import React from 'react';
import {
 Box,
 Grid,
 Text,
 Heading,
 Markdown,
 Image
} from 'grommet';
import t from './../information.js'

class Intro extends React.Component {
  render() {
    return (
      <Grid
        fill
        rows={["3/4", "1/4"]}
        areas={[["event"], ["speakers"]]}
        overflow="auto"
      >
        <Box gridArea="event" justify="center">
          <Text color="light-1" weight="bold" textAlign="center" margin="small" size="10vh" style={{overflowWrap: 'break-word'}}>
              <Markdown>{t.event.name.first}</Markdown>
            <br/>
          </Text>
          <Text color="light-1" textAlign="center" level={2} margin="small" size="3vh">
              &
              <br/>
              {t.event.name.second}
          </Text>
          <br/>

          <Text weight="bold" size="3vh" color="neutral-2" textAlign="center">{t.event.date}</Text>
          <br/>
          <Text weight="bold" size="3vh" color="neutral-2" textAlign="center"><Markdown>{t.event.location}</Markdown></Text>
        </Box>

        <Box gridArea="speakers" gap="small" direction="row" align="end" margin={{bottom: 'small'}} overflow='auto'>
          {
            t.speakers.map((speaker, index) =>
              <Box key={index}>
                <Image src={speaker.image}/>
                <Text color="white">{speaker.name}</Text>
                <Text size="small" color="white">{speaker.description}</Text>
              </Box>
            )
          }
        </Box>

      </Grid>
    )
  }
}

export default Intro;
