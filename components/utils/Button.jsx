import React from 'react';
import { View, StyleSheet, Text, Pressable, TouchableOpacity } from 'react-native'
import { COLORS, LAYOUTS, TYPOGRAPHY } from '../../constants/theme';
// import { TouchableOpacity, StyleSheet, Text } from 'react-native';

const Button = ({ title, onPress, type, ...otherProps }) => {
    const [elevation, setElevation] = React.useState(5)

    const toggleElevationIn = () => setElevation(5)
    const toggleElevationOut = () => setElevation(0)

    return (
        <TouchableOpacity
            activeOpacity={0.8} // Adjust the activeOpacity as needed
            onPress={onPress}
            onPressIn={toggleElevationIn}
            onPressOut={toggleElevationOut}
            style={[
                styles.button,
                (type === "outline") ? styles.buttonOutline : { elevation: elevation },
            ]}
            {...otherProps}
        >
            <Text
                style={[
                    styles.text,
                    { color: (type === 'outline') ? COLORS.primaryDark : COLORS.primaryLight },
                ]}
            >
                {title}
            </Text>
        </TouchableOpacity>
    )
}

export const TextButton = ({ title, onPress }) => {
    return (
        <View>
            <TouchableOpacity onPress={onPress} style={styles.buttonText}>
                <Text style={TYPOGRAPHY.BodyInfo}>{title}</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Button;

const styles = StyleSheet.create({
    button: {
        width: '100%',

        backgroundColor: COLORS.primaryDark,
        color: COLORS.primaryLight,

        alignItems: 'center',
        justifyContent: 'center',

        paddingHorizontal: 40,
        paddingVertical: 17,
        marginVertical: 10,
        borderRadius: 20
    },

    buttonOutline: {
        backgroundColor: 'transparent',
        borderStyle: "solid",
        borderWidth: 2,
        borderColor: COLORS.primaryDark
    },
    buttonText: {
        backgroundColor: 'transparent',
        padding: 5,
        borderRadius: 5,
    },

    text: {
        fontSize: TYPOGRAPHY.Button,
        lineHeight: TYPOGRAPHY.Button + 8,
        letterSpacing: 0.25,
        fontFamily: 'Poppins_500Medium'
    }
})