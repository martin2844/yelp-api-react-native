import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import yelp from '../api/yelp';

const ResultsShowScreen = ({ navigation }) => {
    const [result, setResult] = useState(null);
    const id = navigation.getParam('id');

    const getResult = async (id) => {

        let response = await yelp.get(`/${id}`);
        setResult(response.data);

    }

    useEffect(() => {

        getResult(id);

    }, []);

    console.log(result);

    if(!result) {
        return null;
    }

    return (
        <View>
            <Text>{result.name}</Text>
            <FlatList data={result.photos}
            keyExtractor={(photo) => {
                return photo

            }}
            renderItem={({item}) => {
                return <Image style={styles.images} source={{uri: item}} />
            }}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    images: {
        height: 200,
        width: 300
    }

});

export default ResultsShowScreen;