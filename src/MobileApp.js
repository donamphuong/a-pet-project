import React from 'react';
import {
 Box,
 Grid,
 Grommet,
 ResponsiveContext,
} from 'grommet';
import MobileTimeline from './mobile-components/MobileTimeline.js'
import MobileIntro from './mobile-components/MobileIntro.js'

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
      size: '1em',
      height: '1em',
    },

  },
  heading: {
    font: {
      // 'family': 'Abril Fatface'
    }
  }
};

class MobileApp extends React.Component {
  render() {
    return (
      <Grommet theme={theme} full>
        <ResponsiveContext.Consumer>
          {size => (
            <Box
              gap="large">
              <Box direction="row-responsive" gridArea="sidebar"
                pad={{ horizontal: 'large', top: 'large'}}
                background={{
                  image:
                    "url(background.jpg)"
                }}>
                <MobileIntro/>
              </Box>

              <Box gridArea="agenda" direction="row-responsive"
                pad={{ left: 'xlarge', right: 'large', top: 'medium' }}
                margin={{ right: 'large'}}
                >
                <MobileTimeline/>
              </Box>

            </Box>
         )}
         </ResponsiveContext.Consumer>
     </Grommet>
   );
 }
}

export default (MobileApp);
