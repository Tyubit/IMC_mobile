import { View, Text,ScrollView } from 'react-native'
import { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import FormField from '../components/FormField'
import CustomBtn from '../components/CustomBtn'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { Link } from 'expo-router'
const SignUp = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
  })
  return (
    <View className="bg-white h-full">
      <ScrollView contentContainerStyle={{height: '100%'}}>
        <View className="flex justify-center w-full h-full">
          <Text className="self-center font-bold text-2xl">SignIn</Text>
          <FormField 
          title={'Name'}
          value={form.email}
          handleChangeText={(e) => setForm({...form, email: e})}
          keyboardType = 'email-adress'/>
          <FormField 
          title={'Email'}
          value={form.email}
          handleChangeText={(e) => setForm({...form, email: e})}
          keyboardType = 'email-adress'/>
          <FormField 
          title={'Password'}
          value={form.password}
          handleChangeText={(e) => setForm({...form, email: e})}
          />

          <CustomBtn title={'Sign In'} btnStyle={'py-3 m-4 rounded'}/>
          <Link href="/sign-up" className='self-center text-blue-500'>Create a new account</Link>
          <Text className='self-center py-4'>or</Text>
          <View className="flex flex-row justify-center gap-5">
            <FontAwesome5 name="google" size={30} color="black" />
            <FontAwesome5 name="facebook" size={30} color="black"/>
          </View>
        </View>
        
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  )
}

export default SignUp