import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Subtitle = ({children}) => {
    console.log(children); 
    return (
        <View style={styles.subtitleConatiner}>
            <Text style={styles.subTitle}>{children}</Text>
        </View> 
    )
}

export default Subtitle

const styles = StyleSheet.create({
    subTitle: {
        color: '#eec2a6',
        fontSize: 18,
        fontWeight: 'bold',
        // margin: 4,
        // borderBottomColor: 'white',
        // borderBottomWidth: 2,
        // padding: 6,
        textAlign: 'center'
    },
    subtitleConatiner: {
        // margin: 4,
        borderBottomColor: 'white',
        borderBottomWidth: 2,
        padding: 6,
        marginHorizontal: 12,
        marginVertical: 4,
    }
})