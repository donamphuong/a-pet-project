import React from 'react';
import {
 Box,
 Grommet,
 Layer,
 Button,
 Text,
 Markdown,
 ResponsiveContext,
} from 'grommet';
import MobileTimeline from './mobile-components/MobileTimeline.js'
import MobileIntro from './mobile-components/MobileIntro.js'
import t from './information.js'

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
  },
};

class MobileApp extends React.Component {
  state = {
    show: true
  }

  hide() {
    this.setState({show: false})
  }

  render() {
    return (
      <Grommet theme={theme} full>
        <ResponsiveContext.Consumer>
          {size => (
            <Box animation={{
                "type": "slideRight",
                "delay": 0,
                "duration": 1000,
                "size": "xsmall"
              }}
              gap="large">

              { this.state.show &&
                <Layer
                  onEsc={() => this.hide()}
                  onClickOutside={() => this.hide()}
                >
                  <Box pad="large"
                    gap="medium"
                    background={{
                      image: "url(sky.png)"
                    }}
                    overflow="scroll">
                    <Text color="light-3" size="large" textAlign="center"><Markdown>{t.event.description}</Markdown></Text>
                    <Button primary label="close" onClick={() => this.hide()} color='white'/>
                  </Box>
                </Layer>
              }

              <Box direction="row-responsive" gridArea="sidebar"
                pad={{ horizontal: 'large', top: 'large'}}
                background={{
                  image:
                    "url(background.jpg)"
                }}>
                <MobileIntro/>
              </Box>

              <Box gridArea="agenda" direction="row-responsive"
                pad={{ left: 'large', top: 'medium' }}
                margin={{ right: 'medium'}}
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
