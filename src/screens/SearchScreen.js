import {View, Text, StyleSheet} from "react-native";
import SearchBar from "../components/SearchBar";
import {useState} from "react";

const SearchScreen = () => {
    const [searchTerm, setSearchTerm] = useState('');

    return <View>
        <SearchBar term={searchTerm}
                   onSearchTermChange={(value) => setSearchTerm(value)}
                   onSearchTermSubmit={() => console.log('Ernad') }
        />
        <Text>Search Screen {searchTerm}</Text>
    </View>
}

const styles = StyleSheet.create({});

export default SearchScreen;