import { View, Text,Pressable } from 'react-native'
import React from 'react'
import styles from './styles'
import { useState } from 'react'

const GuestsScreen = () => {
    const [adults, setAdults] = useState(0);
    const [children, setChildren] = useState(0);
    const [infants, setInfants] = useState(0);
  return (
    <View style={{justifyContent: 'space-between', height: '100%'}}>
    <View>
      <View style={styles.row}>
        <View>
          <Text style={{fontWeight: 'bold'}}>Adults</Text>
          <Text style={{color: '#8d8d8d'}}>Ages 13 or above</Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Pressable
            onPress={() => setAdults(Math.max(0, adults - 1))}
            style={styles.button}>
            <Text style={{fontSize: 20, color: '#474747'}}>-</Text>
          </Pressable>

          <Text style={{marginHorizontal: 20, fontSize: 16}}>{adults}</Text>

          <Pressable
            onPress={() => setAdults(adults + 1)}
            style={styles.button}>
            <Text style={{fontSize: 20, color: '#474747'}}>+</Text>
          </Pressable>
        </View>
      </View>

      <View style={styles.row}>
        <View>
          <Text style={{fontWeight: 'bold'}}>Children</Text>
          <Text style={{color: '#8d8d8d'}}>Ages 2-12</Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Pressable
            onPress={() => setChildren(Math.max(0, children - 1))}
            style={styles.button}>
            <Text style={{fontSize: 20, color: '#474747'}}>-</Text>
          </Pressable>

          <Text style={{marginHorizontal: 20, fontSize: 16}}>{children}</Text>

          <Pressable
            onPress={() => setChildren(children + 1)}
            style={styles.button}>
            <Text style={{fontSize: 20, color: '#474747'}}>+</Text>
          </Pressable>
        </View>
      </View>

      <View style={styles.row}>
        <View>
          <Text style={{fontWeight: 'bold'}}>Infants</Text>
          <Text style={{color: '#8d8d8d'}}>Under 2</Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Pressable
            onPress={() => setInfants(Math.max(0, infants - 1))}
            style={styles.button}>
            <Text style={{fontSize: 20, color: '#474747'}}>-</Text>
          </Pressable>

          <Text style={{marginHorizontal: 20, fontSize: 16}}>{infants}</Text>

          <Pressable
            onPress={() => setInfants(infants + 1)}
            style={styles.button}>
            <Text style={{fontSize: 20, color: '#474747'}}>+</Text>
          </Pressable>
        </View>
      </View>
    </View>

    {/* <Pressable
      onPress={() =>
        navigation.navigate('Home', {
          screen: 'Explore',
          params: {
            screen: 'SearchResults',
            params: {
              guests: adults + children,
              viewport: route.params.viewport,
            }
          },
        })
      }
      style={{
        marginBottom: 20,
        backgroundColor: '#83c5be',
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        marginHorizontal: 20,
        borderRadius: 10,
      }}>
      <Text style={{fontSize: 20, color: 'white', fontWeight: 'bold'}}>
        Search
      </Text>
    </Pressable> */}
  </View>
  )
}

export default GuestsScreen