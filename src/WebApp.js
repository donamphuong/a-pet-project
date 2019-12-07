import React from 'react';
import {
 Box,
 Grid,
 Grommet,
 Video,
 ResponsiveContext,
} from 'grommet';
import Timeline from './web-components/Timeline.js'
import Intro from './web-components/Intro.js'
import styled from 'styled-components';

const theme = {
  global: {
    colors: {
     icon: 'dark-3',
     background: 'light-2'
   },
   active: {
     background: {
       color: '#321DBF'
     }
   },
    font: {
      family: 'Montserrat',
      size: '18px',
      height: '20px',
    },

  },
  heading: {
    font: {
      // 'family': 'Faster One'
    }
  }
};

const ScrollableBox = styled(Box)`
  display: inline-block;
  vertical-align: top;
  overflow: auto
`;

class WebApp extends React.Component {
  render() {
    return (
      <Grommet theme={theme} full>
        <ResponsiveContext.Consumer>
          {size => (
            <Grid
              fill
              columns={["flex", "flex"]}
              areas={[["sidebar", "agenda"]]}
              gap="large"
            >
              <Box gridArea="sidebar"
                pad={{ left: 'large', right: 'large'}}
                background={{
                  image:
                    "url(background.jpg)"
                }}>
                <Intro/>
              </Box>

              <ScrollableBox gridArea="agenda"
                pad={{ left: 'small', top: 'medium' }}
                margin={{ right: 'medium'}}
                >
                <Timeline/>
              </ScrollableBox>

            </Grid>
         )}
         </ResponsiveContext.Consumer>
     </Grommet>
   );
 }
}

export default WebApp;
