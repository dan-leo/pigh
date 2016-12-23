import { Component, PropTypes } from 'react'
import { Animated, View, TouchableWithoutFeedback, Text } from 'react-native'
import { conditional } from '../../utils'
import styles from './style'

export default
class Button extends Component {

   static propTypes = {
      onPress: PropTypes.func,
      onPressIn: PropTypes.func,
      onPressOut: PropTypes.func,

      hitSlop: PropTypes.number,

      disabled: PropTypes.bool,

      textStyle: PropTypes.any,
      style: PropTypes.any,
      fontSize: PropTypes.number
   }

   static defaultProps = {
      onPress: () => {
      },
      onPressIn: () => {
      },
      onPressOut: () => {
      },
      loading: false
   }

   opacity = new Animated.Value(0)
   state = {}

   timing({toValue, duration = 200}, cb) {
      Animated.timing(this.opacity, {toValue, duration})
         .start(cb)
   }

   toggle = val => {
      if (!this.props.loading) {
         this.timing({toValue: val})
      }
   }

   pressIn = e => {
      this.toggle(.2)
      this.props.onPressIn(e)
   }

   pressOut = e => {
      this.toggle(0)
      this.props.onPressOut(e)
   }

   press = e => {
      if (!this.props.loading && !this.props.disabled) {
         this.props.onPress(e)
      }
   }

   render() {
      const {children, fontSize, textStyle = {}, style = {}, disabled, hitSlop = 20} = this.props
      const isDisabled = conditional(disabled)

      return (
         <TouchableWithoutFeedback onPressIn={this.pressIn} onPressOut={this.pressOut} onPress={this.press}
                                   hitSlop={{left: hitSlop, right: hitSlop, top: hitSlop, bottom: hitSlop}}>
            <View style={[styles.button, style]}>
               <Animated.View style={[styles.background, {opacity: isDisabled(.1, this.opacity)}]} />

               <View style={[styles.content_container, isDisabled({opacity: .4}, {})]}>
                  <Text style={[{fontSize}, textStyle]}>{children}</Text>
               </View>
            </View>
         </TouchableWithoutFeedback>
      )
   }
}