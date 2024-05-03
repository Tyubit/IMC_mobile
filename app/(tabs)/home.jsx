import { View, Text, ScrollView } from 'react-native'
import {Canvas} from "@react-three/fiber/native"
import { Suspense } from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import InfoBar from '../components/InfoBar'
import Model from '../components/Model'
const Home = () => {
  return (
    <View>
        <ScrollView>
            {/* Header */}
            <View className="w-full flex flex-row justify-end p-2">
                <FontAwesome5 name="bars" size={30} color="black"/>    
            </View>

            <View className="w-full h-[70vh] p-2">
                <InfoBar style="absolute top-0 right-0"/>
                <Canvas>
                    <color attach="background" args={["#512DA8"]} />
                    <Suspense>
                    <Model/>
                    </Suspense>
                </Canvas>
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