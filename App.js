import { SafeAreaView, StatusBar } from 'react-native'
import React from 'react'
import HomeScreen from './src/screens/Home'
import Post from './src/components/post'
import feed from './assets/data/feed'
import SearchResultsScreen from './src/screens/SearchResults'
import DestinationSearchScreen from './src/screens/DestinationSearch'
import GuestsScreen from './src/screens/Guests'


const post1= feed[0];
const post2 = feed[2]
const App = () => {
  return (
    <>
    <StatusBar barStyle={"dark-content"} /> 
    <SafeAreaView>
      {/* <Post post={post2}/>
      <Post post={post1}/> */}
      {/* <SearchResultsScreen/> */}
      {/* <DestinationSearchScreen/> */}
      <GuestsScreen/>
      
    </SafeAreaView>
    </>
  )
}

export default App