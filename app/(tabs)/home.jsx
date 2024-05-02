import { View, Text, ScrollView } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import InfoBar from '../components/InfoBar'
const Home = () => {
  return (
    <View>
        <ScrollView>
            {/* Header */}
            <View className="w-full flex flex-row justify-end p-2">
                <FontAwesome5 name="bars" size={30} color="black"/>    
            </View>

            <View className="w-full h-[70vh] flex justify-center  items-center p-2">
                <InfoBar/>
                <Text>Character</Text>
            </View>
            <View className="w-full flex flex-row justify-around p-2">
                <Text>Dailies</Text>
                <Text>Weekly</Text>
                <Text>Global</Text>
            </View>
        </ScrollView>
    </View>
  )
}

export default Home