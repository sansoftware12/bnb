import { View,ImageBackground, Text, Pressable } from 'react-native'
import React from 'react'
import Fontisto from 'react-native-vector-icons/Fontisto';
import styles from './styles'


const HomeScreen = () => {
  return (
    <View>
     <ImageBackground 
     source={require('../../../assets/images/home.jpg')}
      style={styles.image}>
      <Pressable
        style={styles.searchButton}
        onPress={() => navigation.navigate('Destination Search')}>
        <Fontisto name="search" size={25} color={'#f15454'} />
        <Text style={styles.searchButtonText}>Where are you going?</Text>
      </Pressable>
      <Text style={styles.title}>Go Near</Text>
      <Pressable
          style={styles.button}
          onPress={() => console.warn('Explore Btn clicked')}>
          <Text style={styles.buttonText}>Explore nearby stays</Text>
        </Pressable>

        
      </ImageBackground>
    </View>
  )
}

export default HomeScreen  
