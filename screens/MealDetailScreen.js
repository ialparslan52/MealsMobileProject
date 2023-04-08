import { Text, View, Image, ScrollView, StyleSheet } from 'react-native';
import List from '../components/MealDetail/List';
import TitleSub from '../components/MealDetail/TitleSub';
import MealDetails from '../components/MealDetails';
import { MEALS } from '../data/dummy-data';
import { useLayoutEffect } from 'react'
import IconButton from '../components/IconButton';
//import Subtitle from '../components/MealDetail/SubTitle';

function MealDetailScreen({ route, navigation }) {

    const mealId = route.params.mealId;

    const selectedMeal = MEALS.find((meal) => meal.id === mealId);


    function headerButtonPressHandler() {

    }


    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return <IconButton  onPress={headerButtonPressHandler} color={'white'} icon={'star'}/>
            }
        });
    }, [navigation, headerButtonPressHandler]);






    return <ScrollView style={ss.rootContainer}>
        <Image source={{ uri: selectedMeal.imageUrl }} style={ss.image} />
        <Text style={ss.title}>{selectedMeal.title}</Text>
        <MealDetails
            duration={selectedMeal.duration}
            affordability={selectedMeal.affordability}
            complexity={selectedMeal.complexity}
            textStyle={ss.detailText} />
        <View style={ss.listOuterContainer}>
            <View style={ss.listContainer}>
                <TitleSub>Ingredients</TitleSub>
                <List data={selectedMeal.ingredients} />
                <TitleSub>Steps</TitleSub>
                <List data={selectedMeal.steps} />
            </View>
        </View>
    </ScrollView>
}

export default MealDetailScreen;

const ss = StyleSheet.create({
    image: {
        width: '100%',
        height: 200,

    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        margin: 8,
        textAlign: 'center',
        color: 'white',
    },
    detailText: {
        color: 'white',
    },
    listOuterContainer: {
        alignItems: 'center'
    },
    listContainer: {
        maxWidth: '80%'
    },
    rootContainer: {
        marginBottom: 32,
    }
});