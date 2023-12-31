import {Text, View, StyleSheet, FlatList, Button, TouchableOpacity} from "react-native";
import {withNavigation} from "react-navigation";
import ResultsDetail from "./ResultsDetail";

const ResultsList = ({results, title, navigation}) => {

    if (results.length === 0) {
        return null;
    }

    return <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <FlatList keyExtractor={(result) => result.id}
                  showsHorizontalScrollIndicator={false}
                  horizontal
                  data={results}
                  renderItem={({item}) => {
                      return <TouchableOpacity onPress={() => navigation.navigate('ResultsShow', {
                          id: item.id
                      })}>
                          <ResultsDetail result={item}/>
                      </TouchableOpacity>;
                  }}
        />
    </View>
}

const styles = StyleSheet.create({
    title: {
        marginLeft: 15,
        marginBottom: 5,
        fontSize: 18,
        fontWeight: "bold"
    },
    container: {
        marginBottom: 10
    }
})

export default withNavigation(ResultsList);
