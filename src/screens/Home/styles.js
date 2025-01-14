import { StyleSheet, Dimensions } from "react-native";
 
const styles = StyleSheet.create({
image: {
    width: '100%',
    height: 500,
    resizeMode: 'cover',
    justifyContent: 'center',
},
title: {
    fontSize: 80,
    fontWeight: 'bold',
    color: '#354f52',
    width: '70%',
    marginLeft: 25,
},
button: {
    backgroundColor: '#1b263b',
    width: 200,
    height: 40,
    borderRadius: 10,
    marginTop: 25,
    marginLeft: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#e0e1dd'
  },
  searchButton: {
    backgroundColor: '#cad2c5',
    height: 60,
    width: Dimensions.get('screen').width - 20,
    borderRadius: 30,
    marginHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position:'absolute',
    top: 10,
    zIndex: 180,
  },
  searchButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
export default styles