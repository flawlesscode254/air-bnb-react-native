import React from 'react'
import { StyleSheet, Text, View, ImageBackground, Dimensions, TextInput } from 'react-native'
import {Ionicons} from '@expo/vector-icons'

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <ImageBackground resizeMode="cover" style={{
                flex: 1,
                justifyContent: "center",
                width: Dimensions.get("window").width,
                height: Dimensions.get("window").height
            }} source={{ uri: "https://images.adsttc.com/media/images/5ecd/d4ac/b357/65c6/7300/009d/large_jpg/02C.jpg?1590547607" }}>

                <View style={{
                    backgroundColor: "#FFF",
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    flexDirection: 'row',
                    borderRadius: 25,
                    paddingHorizontal: 30,
                    marginHorizontal: 30,
                    height: 45,
                    position: "absolute",
                    top: 50,
                    left: 0,
                    right: 0
                }}>
                    <Ionicons name="search" color="#e32d64" size={30} />
                    <TextInput style={{
                        flex: 1,
                        height: 45,
                        paddingLeft: 5
                    }} placeholderTextColor="black" placeholder="Where are you going?" />
                </View>

                <View style={{
                    marginLeft: 30,
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "flex-start"
                }}>
                    <Text style={{
                        fontSize: 100,
                        color: "#FFF",
                        fontWeight: "bold",
                        letterSpacing: 10
                    }}>Go</Text>
                    <Text style={{
                        fontSize: 100,
                        color: "#FFF",
                        fontWeight: "bold",
                        letterSpacing: 10
                    }}>Near</Text>
                    <View style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "#FFF",
                        borderRadius: 12,
                        paddingHorizontal: 50,
                        paddingVertical: 10,
                    }}>
                        <Text>Eplore nearby stays</Text>
                    </View>
                </View>

            </ImageBackground>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center"
    }
})