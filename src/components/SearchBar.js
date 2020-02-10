import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';


const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
    return (
        <View style={styles.backgroundStyle}>
            <Feather name="search" style={styles.iconStyle} />
           <TextInput 
           onEndEditing={() => onTermSubmit()}
           autoCapitalize="none"
           autoCorrect={false}
           style={styles.inputStyle} 
           placeholder="Buscar" 
           value={term}
           onChangeText={newTerm => onTermChange(newTerm)}
           />
        </View>
    )
}

const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: "row",
        marginTop: 15,
        marginBottom: 10
    },
    inputStyle: {
        flex: 1,
        fontSize: 18
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: "center",
        marginHorizontal: 15

    }
});

export default SearchBar;