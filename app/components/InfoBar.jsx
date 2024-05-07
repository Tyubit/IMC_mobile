import { View, Text } from 'react-native'
import React from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
const InfoBar = (isOverlay) => {
  console.log("hi")
  return (
    <View className={`absolute z-10 top-[20vh] left-2`}>
        <FontAwesome5 name="heart" size={30} color="black"/>
        <FontAwesome5 name="bolt" size={30} color="black"/>
        <FontAwesome5 name="hamburger" size={30} color="black"/>
        <FontAwesome5 name="mug-hot" size={30} color="black"/>
    </View>
  )
}

export default InfoBar