import {View, StyleSheet, Text, Image} from "react-native";

const ResultsDetail = ({result}) => {
    return <View style={styles.container}>
        <Image style={styles.image} source={{
            uri: result.image_url
        }} />
        <Text style={styles.name}>{result.name}</Text>
        <Text>{result.rating} Starts, {result.review_count} Reviews </Text>
    </View>
}

const styles = StyleSheet.create({
    image: {
        height: 250,
        width: 250,
        borderRadius: 5,
        marginBottom: 5
    },
    name: {
        fontWeight: "bold",
    },
    container: {
        marginLeft: 15
    }
})

export default ResultsDetail;