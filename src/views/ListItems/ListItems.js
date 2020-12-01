import React from 'react'
import { View, Text, Button } from 'react-native'



export default function ListItems({ navigation }) {
 
    return (
        <View>
        <Text>
            List Itemss
            </Text>
            <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
      />

    </View>
    )
}
