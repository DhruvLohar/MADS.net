import { Tabs, usePathname, useRouter } from "expo-router";
import { StyleSheet, View, Text, SafeAreaView, Image, TouchableOpacity } from "react-native";
import { COLORS, TYPOGRAPHY } from "../../constants/theme";
import { AddSquare, Crown, Home, Message, Notification } from "iconsax-react-native";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";

export default () => {

    const tabs = [
        { name: "home", title: "Home", Icon: Home },
        { name: "madsWeek", title: "MADS Week", Icon: Crown },
        { name: "addProject", title: "Add Project", Icon: AddSquare },
        { name: "collegeNotice", title: "Notifications", Icon: Notification },
        { name: "community", title: "Community", Icon: Message },
    ];
    const [activeTab, setActiveTab] = useState(tabs[0]);

    const TabHeader = () => {
        const route = useRouter();
        const path = usePathname();

        const currentTab = tabs.find((tab) => tab.name === path.replace("/", ""));

        return (
            <SafeAreaView>
                <View style={styles.tabHeader}>
                    <StatusBar style="dark" translucent={false} backgroundColor={COLORS.primaryLight} />
                    <Text style={[TYPOGRAPHY.Header, {color: COLORS.primaryDark}]}>{currentTab?.title}</Text>

                    <TouchableOpacity style={{ marginLeft: "auto" }} onPress={() => route.push('/profile/1')}>
                        <View>
                            <Image source={require("../../assets/profile.jpeg")} style={styles.profileImage} />
                        </View>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        );
    }

    return (
        <Tabs screenOptions={{
            tabBarStyle: styles.tabBar,
            tabBarHideOnKeyboard: true,
            headerStyle: {
                backgroundColor: COLORS.primaryLight
            },
            header: () => (
                <TabHeader />
            )
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
                                    <item.Icon size={focused ? 28 : 24} variant={focused ? "Bold" : "Outline"} color={COLORS.primaryLight} />
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
    },
    tabBar: {
        position: "absolute",
        bottom: 0,
        right: 0,
        left: 0,
        height: 58,
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25,
        elevation: 0,
        backgroundColor: COLORS.primary
    },

    tabHeader: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        height: 60,
        backgroundColor: COLORS.primaryLight,
        paddingTop: 5,
        paddingHorizontal: 20
    },
    profileImage: {
        width: 44, 
        height: 44, 
        resizeMode: "contain",
        borderRadius: 22
    }
})