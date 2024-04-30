import { View, Text, ScrollView } from 'react-native'
import { StatusBar } from 'react-native'
import { SafeAreaView} from 'react-native-safe-area-context'

const index = () => {
  return (
    <SafeAreaView className="">
      <ScrollView>
        <View>
            <Text className = "text-3xl">Open up App.js to start working on your app!</Text>
            <StatusBar style="auto" /> 
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default index