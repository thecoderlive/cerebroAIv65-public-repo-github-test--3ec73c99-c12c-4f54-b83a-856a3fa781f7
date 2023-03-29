import React, { useState } from 'react'
import { FlatList, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'



function Projects1({ item, navigation }){

const onPressViewProject = () => {}

function projects1Item({ item }){
return (
<View style={styles.projects1_item}>
<Image
    style={styles.project_image}
    source={{uri: item.project_image}}
    />
<View style={{flexDirection: 'row'}}>
<Text style={styles.project_name} numberOfLines={1}>{item.project_name}</Text>
<Text style={styles.project_description} numberOfLines={1}>{item.project_description}</Text>
</View>
<TouchableOpacity  onPress={onPressViewProject}>
    <View style={styles.view_project}>{'View Project'}</View>
</TouchableOpacity>
</View>
)}

return (
<FlatList
    style={styles.projects1}
    data={item}
    renderItem={projects1Item}
    keyExtractor={item => item.id}
    showsVerticalScrollIndicator={false}
    />
)}

export default Projects1;

const styles = StyleSheet.create({
    "project_name": {
        "flex": 1,
        "color": "hsl(274,100%,60%)",
        "fontSize": 15,
        "marginTop": 5,
        "fontWeight": "400",
        "marginHorizontal": 10,
        "paddingHorizontal": 2
    },
    "view_project": {
        "flex": 1,
        "color": "white",
        "margin": 5,
        "padding": 10,
        "textAlign": "center",
        "backgroundColor": "#1ACDA5"
    },
    "project_image": {
        "width": "100vw",
        "height": "100vw",
        "marginTop": 5
    },
    "project_description": {
        "flex": 1,
        "color": "hsl(274,100%,60%)",
        "fontSize": 15,
        "marginTop": 5,
        "fontWeight": "400",
        "marginHorizontal": 10,
        "paddingHorizontal": 2
    }
});