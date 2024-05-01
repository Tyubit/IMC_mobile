import { View, Text, ScrollView, } from 'react-native'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native-safe-area-context'


const AuthLayout = () => {
  return (
    <>
      <Stack>
        <Stack.Screen 
        name="sign-in" 
        options={{ headerShown: false }}
        />
        <Stack.Screen 
        name="sign-up" 
        options={{ headerShown: false }}
        />
      </Stack>
    </>  
  )
}

export default AuthLayout