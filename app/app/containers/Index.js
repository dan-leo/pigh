// @flow
import { Component, PropTypes } from 'react'
import { View, TextInput } from 'react-native'
import styles from './style'
import { conditional } from '../utils'

import { Streamer, Button } from '../components'

export default
class Index extends Component {

   state = {
      url: null,

      streaming: false
   }

   render() {
      const {url, streaming} = this.state

      const isStreaming = conditional(streaming)

      return (
         <View style={styles.container}>
            {isStreaming(
               () => <Streamer url={url} />,

               <View style={styles.setup_container}>
                  <TextInput
                     value={url}
                     onChangeText={url => this.setState({url})}
                     style={styles.input}
                     autoFocus={true}
                     autoCapitalize="none"
                  />

                  <Button onPress={() => this.setState({streaming: true})} >STREAM</Button>
               </View>
            )}
         </View>
      )
   }
}