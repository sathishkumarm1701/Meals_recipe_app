import {  Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React,{ useContext } from 'react';
import { MEALS } from '../data/dummy-data';
import { addFavorite, removeFavorite } from '../store/redux/favorites';
import MealDetails from '../components/MealDetails';
import Subtitle from '../components/MealDetail/Subtitle';
import List from '../components/MealDetail/List';
import { useLayoutEffect } from 'react';
import IconButton from '../components/IconButton';
import { useDispatch, useSelector } from 'react-redux';
// import { FavoritesContext } from '../store/context/favorite-context';

const MealDetailScreen = ({ route, navigation }) => {
    // const favoriteMealCtx = useContext(FavoritesContext);

    const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);
    const dispatch = useDispatch();

    const mealId = route.params.mealId;

    const selectedMeal = MEALS.find((meal) => meal.id === mealId);

    // const mealIsFavorite = favoriteMealCtx.ids.includes(mealId)
    const mealIsFavorite = favoriteMealIds.includes(mealId)


    function changeFavoriteStatusHandler() {
        if (mealIsFavorite) {
            // favoriteMealCtx.removeFavorite(mealId);
            dispatch(removeFavorite({id:mealId}))
        } else {
            // favoriteMealCtx.addFavorite(mealId);
            dispatch(addFavorite({id:mealId}))

        }
    }
    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return <IconButton
                    icon={mealIsFavorite ? 'star' : 'star-outline'}
                    color={'white'}
                    onPress={changeFavoriteStatusHandler} />
            }
        })
    }, [navigation, changeFavoriteStatusHandler])
    // console.log(selectedMeal)
    return (
        <ScrollView style={styles.rootConatiner}>
            <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
            <Text style={styles.title}>{selectedMeal.title}</Text>
            <MealDetails
                duration={selectedMeal.duration}
                complexity={selectedMeal.complexity}
                affordability={selectedMeal.affordability}
                textStyle={styles.detailText} />
            <View style={styles.listOuterConatainer}>
                <View style={styles.listConatiner}>
                    <Subtitle>Ingredients</Subtitle>
                    <List data={selectedMeal.ingredients} />
                    <Subtitle>Steps</Subtitle>
                    <List data={selectedMeal.steps} />
                </View>
            </View>


        </ScrollView>
    )
}

export default MealDetailScreen

const styles = StyleSheet.create({
    rootConatiner: {
        marginBottom: 32
    },
    image: {
        width: '100%',
        height: 350,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        margin: 8,
        textAlign: 'center',
        color: 'white'
    },
    detailText: {
        color: 'white'
    },
    listOuterConatainer: {
        alignItems: 'center'
    },
    listConatiner: {
        width: '80%',
    }

})