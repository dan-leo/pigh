// @flow
import { Component, PropTypes } from 'react'
import { View } from 'react-native'
import styles from './style'
import Video from 'react-native-video'

export default
class Streamer extends Component {

   static propTypes = {
      url: PropTypes.string
   }

   componentDidMount() {
      // this.player.presentFullscreenPlayer()
   }

   render() {
      const {url} = this.props

      return (
         <Video
            ref={c => this.player = c}
            style={styles.container}
            source={{uri: url}} />
      )
   }
}