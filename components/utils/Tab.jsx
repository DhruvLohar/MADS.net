import { Text, TouchableOpacity } from "react-native"
import { COLORS, TYPOGRAPHY } from "../../constants/theme"

const Tab = ({ title, isActive, switchTab }) => {
    return (
        <TouchableOpacity style={{
            backgroundColor: isActive ? COLORS.primaryDark : "transparent",
            borderColor: COLORS.primaryDark,
            borderWidth: 2,
            paddingHorizontal: 30,
            paddingVertical: 8,
            borderRadius: 10,
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            marginHorizontal: 10
        }} onPress={switchTab}>
            <Text style={[TYPOGRAPHY.Body, { fontSize: 14, color: isActive ? COLORS.primaryLight : COLORS.primaryDark }]}>{title}</Text>
        </TouchableOpacity>
    )
}

export default Tab;