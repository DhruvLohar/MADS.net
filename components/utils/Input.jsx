import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { Eye, EyeSlash, SearchNormal, ArrowDown2 } from 'iconsax-react-native'
import { COLORS, TYPOGRAPHY } from '../../constants/theme';
import { MultipleSelectList } from 'react-native-dropdown-select-list';

export const MultiSelectInput = ({data, placeHolder, label}) => {
    const [skills, setSkills] = useState([])
    
    return (
        <MultipleSelectList
            setSelected={(val) => setSkills(val)}
            data={data}

            searchicon={<SearchNormal size={24} color={COLORS.primaryDark} style={{marginRight: 10}} />}
            arrowicon={<ArrowDown2 size={24} color={COLORS.primaryDark} />}
            
            placeholder={placeHolder}
            
            boxStyles={styles.multiSelectBox}
            searchPlaceholder=''
            label={label}
            
            maxHeight={300}
            inputStyles={[TYPOGRAPHY.Body, {textAlignVertical: "center"}]}
            labelStyles={TYPOGRAPHY.Body}
            badgeTextStyles={[TYPOGRAPHY.Body, {color: COLORS.primaryLight, fontSize: 13}]}
            badgeStyles={styles.badgeStyle}
            dropdownTextStyles={[TYPOGRAPHY.BodyInfo, {textDecorationLine: 'none'}]}
        />
    )
}

const Input = ({ placeHolder, iconNameSuffix, type, IconPrefix, isTextarea, handleFormik }) => {

    const { name, onChange, value } = handleFormik;

    const [showPassword, setShowPassword] = useState(false)

    const toggleShowPassword = () => setShowPassword(!showPassword)

    return (
        <View style={styles.inputContainer}>
            {IconPrefix &&
                <View style={[styles.inputIconPrefix, { top: isTextarea ? 18 : "inherit" }]}>
                    <IconPrefix size={24} color={COLORS.primaryDark} />
                </View>
            }

            {isTextarea ? (
                <TextInput
                    style={[styles.textarea, TYPOGRAPHY.Body, { paddingLeft: IconPrefix ? 50 : 10 }]}
                    placeholder={placeHolder}
                    textAlignVertical='top'
                    placeholderTextColor={COLORS.primaryDark}
                    multiline

                    onChangeText={onChange(name)}
                    // onBlur={onBlur(name)}
                    value={value}
                />
            ) : (
                <>
                    <TextInput
                        style={[styles.input, TYPOGRAPHY.Body, { paddingLeft: IconPrefix ? 50 : 10, paddingRight: iconNameSuffix ? 50 : 10 }]}
                        placeholder={placeHolder} autoComplete={type}
                        placeholderTextColor={COLORS.primaryDark}
                        secureTextEntry={(type === 'current-password' && !showPassword)}
                        keyboardType={(type === 'email' ? 'email-address' : 'default')}

                        onChangeText={onChange(name)}
                        // onBlur={onBlur(name)}
                        value={value}
                    />

                    {iconNameSuffix &&
                        <Pressable style={styles.inputIconSuffix} onPress={toggleShowPassword}>
                            {!showPassword
                                ? <Eye size={24} color={COLORS.primaryDark} />
                                : <EyeSlash size={24} color={COLORS.primaryDark} />
                            }
                        </Pressable>
                    }
                </>
            )}

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
    },

    textarea: {
        width: '100%',
        height: 120, // Adjust the height for your textarea
        marginVertical: 8,
        borderRadius: 20,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: COLORS.primaryDark,
        paddingHorizontal: 10, // Padding on the left for text area
        paddingVertical: 10, // Padding for text area content
        justifyContent: "flex-start",
        alignItems: "flex-start"
    },

    multiSelectBox: { 
        borderWidth: 2, 
        borderColor: COLORS.primaryDark, 
        borderRadius: 20,
        minHeight: 55,
        marginVertical: 8 
    },
    badgeStyle: {
        paddingHorizontal: 20, 
        paddingVertical: 10, 
        backgroundColor: COLORS.primaryDark, 
        color: COLORS.primaryLight,
    }
})
