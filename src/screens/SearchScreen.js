import {View, Text, StyleSheet} from "react-native";
import SearchBar from "../components/SearchBar";
import {useEffect, useState} from "react";
import yelp from "../api/yelp";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [results, errorMessage, searchApi] = useResults();

    // const lowPriceResults = results.filter((result) => result.price === '$');
    // const mediumPriceResults = results.filter((result) => result.price === '$$');
    // const highPriceResults = results.filter((result) => result.price === '$$$');

    const filterByPrice = (price) => {
        return results.filter((result) => {
            return result.price === price
        })
    }

    return <View>
        <SearchBar term={term}
                   onSearchTermChange={setTerm}
                   onSearchTermSubmit={() => searchApi(term)}
        />
        {errorMessage !== '' && <Text>{errorMessage}</Text>}
        <Text>We have found {results.length} results</Text>
        <ResultsList results={filterByPrice('$')} title='Cost Effective'/>
        <ResultsList results={filterByPrice('$$')} title='Bit Pricer'/>
        <ResultsList results={filterByPrice('$$$')} title='Big Spender!'/>
    </View>
}

const styles = StyleSheet.create({});

export default SearchScreen;