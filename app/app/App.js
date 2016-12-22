// @flow
import { Component, PropTypes } from 'react'
import { View, StatusBar } from 'react-native'

import Index from './containers/Index'

export default
class App extends Component {

   state = {}

   render() {
      return (
         <View style={{flex: 1}}>
            <StatusBar hidden={true} />

            <Index />
         </View>
      )
   }
}