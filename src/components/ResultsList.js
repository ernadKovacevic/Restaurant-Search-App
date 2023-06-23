import {Text, View, StyleSheet, FlatList} from "react-native";

const ResultsList = ({results, title}) => {
    return <View>
        <Text style={styles.title}>{title}</Text>
        <Text>Results: {results.length}</Text>
        <FlatList keyExtractor={(result) => result.id}
                  showsHorizontalScrollIndicator={false}
                  horizontal
                  data={results}
                  renderItem={({item}) => {
                      return <Text>{item.name}</Text>;
                  }}/>
    </View>
}

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: "bold"
    }
})

export default ResultsList;
