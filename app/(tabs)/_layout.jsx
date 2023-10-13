import { Tabs } from "expo-router";
import { StyleSheet, View, Text, TouchableWithoutFeedback } from "react-native";
import { COLORS, TYPOGRAPHY } from "../../constants/theme";
import { AddSquare, CodeCircle, Home, Message, Notification } from "iconsax-react-native";

export default () => {

    const tabs = [
        { name: "home", title: "Home", Icon: Home },
        { name: "madsWeek", title: "MADS Week", Icon: CodeCircle },
        { name: "addProject", title: "Add Project", Icon: AddSquare },
        { name: "collegeNotice", title: "Notice Board", Icon: Notification },
        { name: "community", title: "Community", Icon: Message },
    ];

    return (
        <Tabs screenOptions={{
            tabBarStyle: styles.tabBar,
            headerStyle: {
                backgroundColor: COLORS.primaryLight
            },
            headerTitleStyle: {
                alignSelf: "center"
            }
        }}>
            {tabs.map((item, idx) => (
                <Tabs.Screen
                    key={idx}
                    name={item.name}
                    options={{
                        title: item.title,
                        tabBarShowLabel: false,
                        tabBarIcon: ({ focused }) => {
                            return (
                                <View style={[styles.container]}>
                                    <item.Icon size={focused ? 30 : 26} variant={focused ? "Bold" : "Outline"} color={COLORS.primaryLight} />
                                </View>
                            );
                        }
                    }}
                />
            ))}
        </Tabs>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        paddingVertical: 16,
        // borderTopWidth: 2
    },
    tabBar: {
        position: "absolute",
        bottom: 0,
        right: 0,
        left: 0,
        height: 60,
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25,
        elevation: 0,
        backgroundColor: COLORS.primary
    }
})