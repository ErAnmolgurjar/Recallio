import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

export function MemoryCard({text = ""}){
  return (
    <View style={style.meoryCardStyle}>
      <Image style={style.memoryCardBanner} source={require('../assets/images/car.jpg')}></Image>
      <Text style={style.memoryCardText}>This is a long discription for this digital content {text}</Text>
    </View>
  )
}

const style = StyleSheet.create({
    meoryCardStyle :{
        // height:200,
        width: 190,
        // marginBottom:10,
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
    },
    memoryCardBanner:{
        height:200,
        width: '100%',
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
    },
    memoryCardText:{
        height:40,
        backgroundColor:'#ffffff',
        borderBottomLeftRadius:10,
        borderBottomRightRadius:10,
        textAlign:"center",
    }
    
})