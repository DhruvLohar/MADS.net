import { ArrowDown2 } from "iconsax-react-native";
import { COLORS } from "../../constants/theme";

const Accordion = ({ title, content }) => {
    return (
        <View>
            <Text>{title}</Text>
            <ArrowDown2 color={COLORS.primaryDark} size={24} />
        </View>
    )
}

export default Accordion;