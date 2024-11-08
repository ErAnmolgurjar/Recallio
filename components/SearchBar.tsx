import { View, TextInput, StyleSheet} from 'react-native'
import React from 'react'
import { useColorScheme } from 'react-native';


export function SearchBar({ placeholder = 'Enter keywords to search', SearchIn = "0" , Category = "0"}) {
	const theme = useColorScheme() ?? 'light';
	let backgroundColor = "#FAF9F6"
	if(theme != "dark"){
		backgroundColor = "#f5f1f1";
	}  
	return (
		<View style={[{ backgroundColor },styles.searchBarStyle]}>
			<TextInput style={styles.searchBarTextStyle} placeholder={placeholder}></TextInput>
		</View>
	)
}

const styles = StyleSheet.create({
	searchBarStyle:{
		marginVertical:15,
		height:40,
		borderRadius:15,
		paddingHorizontal:10,
		paddingVertical:7,
	},
	searchBarTextStyle:{
		fontSize:18,
	}
})

