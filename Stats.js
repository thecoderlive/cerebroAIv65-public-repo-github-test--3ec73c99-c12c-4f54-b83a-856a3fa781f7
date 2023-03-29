import React, { useState } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'



function Stats({ item, navigation }){



function statsItem({ item }){
return (
<View style={styles.stats_item}>
<View style={{flexDirection: 'row'}}>
<Text style={styles.projects} numberOfLines={1}>{item.projects}</Text>
<Text style={styles.followers} numberOfLines={1}>{item.followers}</Text>
<Text style={styles.following} numberOfLines={1}>{item.following}</Text>
</View>
</View>
)}

return (
<FlatList
    horizontal={true}
    style={styles.stats}
    data={item}
    renderItem={statsItem}
    keyExtractor={item => item.id}
    showsHorizontalScrollIndicator={false}
    pagingEnabled={true}
    />
)}

export default Stats;

const styles = StyleSheet.create({
    "projects": {
        "flex": 1,
        "color": "hsl(274,100%,60%)",
        "fontSize": 15,
        "marginTop": 5,
        "fontWeight": "400",
        "marginHorizontal": 10,
        "paddingHorizontal": 2
    },
    "followers": {
        "flex": 1,
        "color": "hsl(274,100%,60%)",
        "fontSize": 15,
        "marginTop": 5,
        "fontWeight": "400",
        "marginHorizontal": 10,
        "paddingHorizontal": 2
    },
    "following": {
        "flex": 1,
        "color": "hsl(274,100%,60%)",
        "fontSize": 15,
        "marginTop": 5,
        "fontWeight": "400",
        "marginHorizontal": 10,
        "paddingHorizontal": 2
    }
});