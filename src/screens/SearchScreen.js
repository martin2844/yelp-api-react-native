import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();


    const filterResultsByPrice = (price) => {

        return results.filter((result) => {
            return result.price === price;
        })

    }
    


    return (
        <>
            <SearchBar 
            term={term} 
            onTermChange={(newTerm) => setTerm(newTerm)} 
            onTermSubmit={() => searchApi(term) }
            />
           {errorMessage ? <Text> {errorMessage}</Text> : null}
           <Text style={{marginLeft: 15, marginBottom: 10}}>Encontré {results.length} lugares pa morfar</Text> 
            <ScrollView>
           <ResultsList results={filterResultsByPrice('$')} title="Barato" />
           <ResultsList results={filterResultsByPrice('$$')} title="Un toque más caro" />
           <ResultsList results={filterResultsByPrice('$$$')} title="Caro" />
           </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({});

export default SearchScreen;