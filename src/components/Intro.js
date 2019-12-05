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
          <Box>
            <Heading color="light-1" weight="bold" textAlign="center" margin="small">
                <Markdown>{t.event.name.first}</Markdown>
              <br/>
            </Heading>
            <Heading color="light-1" textAlign="center" level={2} margin="small">
                &
                <br/>
                {t.event.name.second}
            </Heading>
            <br/>
          </Box>

          <Text weight="bold" size="xlarge" color="neutral-2" textAlign="center">{t.event.date}</Text>
          <br/>
          <Text weight="bold" size="xlarge" color="neutral-2" textAlign="center"><Markdown>{t.event.location}</Markdown></Text>
        </Box>

        <Box gridArea="speakers" gap="small" direction="row-responsive" align="end" margin={{bottom: 'large'}}>
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
