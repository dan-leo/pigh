import { StyleSheet, Dimensions } from 'react-native'

const {width, height} = Dimensions.get('window')

export default StyleSheet.create({
   button: {
      padding: 10,
      paddingTop: 5, paddingBottom: 5,
      borderRadius: 2,
      overflow: "hidden"
   },
   background: {
      position: "absolute",
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      backgroundColor: "white"
   },

   content_container: {
      flexDirection: "row",
      alignItems: "center"
   }
})