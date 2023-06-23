import {View, Text, StyleSheet, FlatList, Image} from "react-native";
import yelp from "../api/yelp";
import {useEffect, useState} from "react";

const ResultsShowScreen = ({navigation}) => {
    const [result, setResult] = useState(null);
    const id = navigation.getParam('id');

    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    }

    useEffect(() => {
        getResult(id);
    }, [])

    if (!result) {
        return null;
    }

    return <View style={styles.container}>
        <FlatList data={result.photos} renderItem={({item}) => {
            return <Image style={styles.image} source={{uri: item}}/>
        }}/>
    </View>
}

const styles = StyleSheet.create({
    image : {
        height: 200,
        width: 200,
        marginVertical: 10,
    },
    container: {
        alignItems: "center"
    }
})

export default ResultsShowScreen;