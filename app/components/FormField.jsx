import { View, Text, TextInput } from 'react-native'
import React from 'react'

const FormField = ({title,value,placeholder,handleChangeText,extraStyle, ...props}) => {
  return (
    <View>
      <Text className="px-2 py-1">{title}</Text>
      <View className="px-2">
        <TextInput className="border-2 border-black rounded-lg py-2 px-2" value={value} onChangeText={handleChangeText} placeholder={placeholder} 
        keyboardType={props.keyboardType}/>
      </View>
    </View>
  )
}

export default FormField