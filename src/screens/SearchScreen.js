import {View, Text, StyleSheet} from "react-native";
import SearchBar from "../components/SearchBar";
import {useState} from "react";
import yelp from "../api/yelp";

const SearchScreen = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [results, setResults] = useState([]);

    const searchApi = async () => {
        try{
            const response = await yelp.get('/search', {
                params: {
                    limit: 20,
                    term: searchTerm,
                    location: 'san jose'
                }
            });
            setResults(response.data['businesses']);
        } catch (err) {
            setErrorMessage('Something went wrong');
        }
    }

    return <View>
        <SearchBar term={searchTerm}
                   onSearchTermChange={setSearchTerm}
                   onSearchTermSubmit={searchApi}
        />
        {errorMessage !== '' && <Text>{errorMessage}</Text>}
        <Text>We have found {results.length} results</Text>
    </View>
}

const styles = StyleSheet.create({});

export default SearchScreen;