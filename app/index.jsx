import { View, Text, ScrollView,StatusBar,TouchableOpacity  } from 'react-native'
import { SafeAreaView} from 'react-native-safe-area-context'
import { Redirect, router } from 'expo-router'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

const index = () => {
  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView contentContainerStyle={{height: '100%'}}>
        <View className="flex flex-col items-center justify-center w-full h-full">
            {/* <Text className = "text-3xl">Open up App.js to start working on your app!</Text> */}
            <StatusBar style="auto" /> 
          <Text className = "text-3xl">Open up App.js to start working on your app!</Text>
          <TouchableOpacity onPress={() => router.push('/sign-in')}>
            <Text>Go to SignIn</Text>
          </TouchableOpacity>
          
          <TouchableOpacity onPress={() => router.push('/home')}>
            <Text>Home</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default index