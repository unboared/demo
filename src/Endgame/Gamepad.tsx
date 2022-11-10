import React from "react";
import { TouchableOpacity, View, StyleSheet, Text } from "react-native";

import { useUnboared } from "@unboared/native.lib";

const Gamepad = () => {
    const unboared = useUnboared()

    return (
        <View style={styles.center}>
            <TouchableOpacity
                style={[styles.center, { backgroundColor: "#FAF" }]}
                onPress={() => unboared.emitAction("pressA")}
            >
                <Text>A</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.center, { backgroundColor: "#AFF" }]}
                onPress={() => unboared.emitAction("pressB")}
            >
                <Text>B</Text>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    center: {
        flex: 1,
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default Gamepad;