import { View, Text, Pressable, Image, StyleSheet } from "react-native";

import { useNavigation } from '@react-navigation/native';
import MealDetails from "./MealDetails";

function MealItem({ id, title, imageUrl, duration, complexity, affordability }) {

    const navigation = useNavigation();

    function selectMealItemHandler() {
        navigation.navigate('MealDetail', {// içerisine navigasyon id koyabiliyoruz.
            mealId: id,
        });
    }

    return (
        <View style={styles.mealItem}>
            <Pressable android_ripple={{ color: '#ccc' }} onPress={selectMealItemHandler}>
                <View>
                    <Image source={{ uri: imageUrl }} style={styles.image} />
                    <Text style={styles.title}>{title}</Text>
                </View>
                <MealDetails
                    duration={duration}
                    complexity={complexity}
                    affordability={affordability}
                />
            </Pressable>
        </View>
    );
}


export default MealItem;


const styles = StyleSheet.create({
    mealItem: {
        margin: 16,
        borderRadius: 10,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
        backgroundColor: 'white',
        elevation: 4,
    },
    image: {
        width: '100%',
        height: 200,
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        padding: 16,
    },
});

