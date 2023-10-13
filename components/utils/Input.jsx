import { Pressable, StyleSheet, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { Sms, Lock, Eye, EyeSlash, User } from 'iconsax-react-native'
import { COLORS, TYPOGRAPHY } from '../../constants/theme';

const getIconClass = (name) => {
    switch (name) {
        case 'user':
            return User
        case 'sms':
            return Sms
        case 'lock':
            return Lock
        case 'eye':
            return Eye
        case 'eye-slash':
            return EyeSlash
        default:
            return false
    }
};

const Input = ({ placeHolder, iconNamePrefix, iconNameSuffix, type }) => {
    const IconPrefix = getIconClass(iconNamePrefix)

    const [showPassword, setShowPassword] = useState(false)

    const toggleShowPassword = () => setShowPassword(!showPassword)

    return (
        <View style={styles.inputContainer}>
            {iconNamePrefix &&
                <View style={styles.inputIconPrefix}>
                    <IconPrefix size={24} color={COLORS.primaryDark} />
                </View>
            }

            <TextInput
                style={[styles.input, TYPOGRAPHY.Body, { paddingLeft: iconNamePrefix ? 50 : 10, paddingRight: iconNameSuffix ? 50 : 10 }]}
                placeholder={placeHolder} autoComplete={type}
                placeholderTextColor={COLORS.primaryDark}
                secureTextEntry={(type === 'current-password' && !showPassword)}
                keyboardType={(type === 'email' ? 'email-address' : 'default')}>
            </TextInput>

            {iconNameSuffix &&
                <Pressable style={styles.inputIconSuffix} onPress={toggleShowPassword}>
                    {!showPassword
                        ? <Eye size={24} color={COLORS.primaryDark} />
                        : <EyeSlash size={24} color={COLORS.primaryDark} />
                    }
                </Pressable>
            }
        </View>
    )
}

export default Input;

const styles = StyleSheet.create({
    inputContainer: {
        position: 'relative',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        width: "100%",
        height: 55,
        marginVertical: 8,
        borderRadius: 20,

        backgroundColor: 'transparent',
        borderStyle: "solid",
        borderWidth: 2,
        borderColor: COLORS.primaryDark
    },
    inputIconPrefix: {
        position: 'absolute',
        left: 15
    },
    inputIconSuffix: {
        position: 'absolute',
        right: 15
    }
})
