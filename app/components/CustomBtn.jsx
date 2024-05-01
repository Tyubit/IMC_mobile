import { View, Text, TouchableOpacity, ActivityIndicator} from 'react-native'
import React from 'react'

const CustomBtn = ({title,handlePress,btnStyle,textStyle,isLoading}) => {
  return (
    <TouchableOpacity className={`bg-slate-300 flex flex-row justify-center item center ${btnStyle}`}
    onPress={handlePress}
    disabled={isLoading}>
      <Text className={`font-bold text-lg `}>{title}</Text>
      { isLoading && <ActivityIndicator size="small" color="black" /> }
    </TouchableOpacity>
  )
}

export default CustomBtn