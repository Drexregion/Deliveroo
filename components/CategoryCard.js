import { View, Text, Image } from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { TailwindProvider } from 'tailwindcss-react-native';
import { useNavigation } from '@react-navigation/native';
// import { urlFor } from '../sanity';

const Categorycard = ({title,imgUrl}) => {
  const navigation = useNavigation()
  return (
    <TailwindProvider>
      <View className = 'relative mr-2'>
        {/* <Image
          // source={{
          //   // urlFor(imgUrl).url()
          //   uri: {'https://links.papareact.com/wru'}
          // }}
          source={require=('../assets/food2.jpg')}
          className = 'h-20 w-20 rounded'
        /> */}
          <Image
                      source={{
                        uri:imgUrl,
                      }}
            className = 'h-20 w-20 rounded'
          />
        <Text className='absolute bottom-1 left-1 text-white'>{title}</Text>
      </View>
    </TailwindProvider>
  )
}

export default Categorycard