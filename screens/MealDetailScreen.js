import { Button, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MEALS } from '../data/dummy-data'
import MealDetails from '../components/MealDetails'
import Subtitle from '../components/MealDetail/Subtitle';
import List from '../components/MealDetail/List';
import { useLayoutEffect } from 'react';
import IconButton from '../components/IconButton';

const MealDetailScreen = ({ route ,navigation}) => {
    const mealId = route.params.mealId
    const selectedMeal = MEALS.find((meal) => meal.id === mealId)
    function headerButtonPressHandler(){
    }
    useLayoutEffect(()=>{
        navigation.setOptions({
            headerRight:()=>{
                return <IconButton
                icon={'star'}
                color={'white'}
                 onPress={headerButtonPressHandler}/>
              }
        })
    },[navigation,headerButtonPressHandler])
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
    rootConatiner:{
        marginBottom:32
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
