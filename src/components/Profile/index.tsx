import React from "react";
import { View } from "react-native";
import { styles } from "./styles";

export function Profile () {
    return (
        <View style = {styles.container}>

            <View>
                <View style={styles.user}>
                    <Text style={styles.greeting}>
                        Olá,
                    </Text>

                    <Text style={styles.username}>

                        Rodrigo,
                    </Text>

                </View>
                    <text style={styles.message}>
                        Hoje é dia de vitória
                    </text>
            </View>

        </View>
    )
}