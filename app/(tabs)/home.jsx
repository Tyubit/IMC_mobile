import { View, Text, ScrollView } from 'react-native'
import {Canvas} from "@react-three/fiber/native"
import { Suspense } from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import InfoBar from '../components/InfoBar'
import Model from '../components/Model'
import { SafeAreaView } from 'react-native-safe-area-context'
import { PerspectiveCamera } from '@react-three/drei/native'
const Home = () => {
  return (
    <View>
        <SafeAreaView>
        <ScrollView>
            {/* Header */}
            <View className="w-full flex flex-row justify-end p-2">
                <FontAwesome5 name="bars" size={30} color="black"/>    
            </View>

            <View className="w-full h-[70vh] p-2">
                <InfoBar isOverlay={true}/>
                <Canvas
                camera={{ position: [0, 0, 8], fov: 60 }}
                onCreated={(state) => {
                    const _gl = state.gl.getContext();
                    const pixelStorei = _gl.pixelStorei.bind(_gl);
                    _gl.pixelStorei = function (...args) {
                    const [parameter] = args;
                    switch (parameter) {
                    case _gl.UNPACK_FLIP_Y_WEBGL:
                        return pixelStorei(...args);
                    }
                };
                }}>
                <ambientLight intensity={1.5} />
                    <Suspense fallback={null}>
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
        </SafeAreaView>
    </View>
  )
}

export default Home