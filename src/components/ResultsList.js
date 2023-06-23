import {Text, View, StyleSheet, FlatList} from "react-native";
import ResultsDetail from "./ResultsDetail";

const ResultsList = ({results, title}) => {
    return <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <FlatList keyExtractor={(result) => result.id}
                  showsHorizontalScrollIndicator={false}
                  horizontal
                  data={results}
                  renderItem={({item}) => {
                      return <ResultsDetail result={item} />;
                  }}/>
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

export default ResultsList;
