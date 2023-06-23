import {View, Text, StyleSheet, TextInput} from "react-native";
import { Feather } from '@expo/vector-icons';

const SearchBar = ({term, onSearchTermChange, onSearchTermSubmit}) => {

    return <View style={styles.backgroundStyle}>
        <Feather name="search" size={30} color="black" style={styles.iconStyle} />
        <TextInput
            style={styles.inputStyle}
            autoCapitalize='none'
            autoCorrect={false}
            value={term}
            onChangeText={onSearchTermChange}
            onEndEditing={onSearchTermSubmit}
            placeholder='Search'
        />
    </View>
}

const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: '#c0b8b8',
        flexDirection: 'row',
        height: 50,
        borderRadius: 5,
        alignItems: 'center',
        marginHorizontal: 15,
        marginVertical: 10
    },
    inputStyle: {
        height: 40,
        marginLeft: 15,
        flex: 1
    },
    iconStyle: {
        marginLeft: 15
    }
});

export default SearchBar;