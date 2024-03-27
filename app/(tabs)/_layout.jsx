import { Tabs, usePathname, useRouter } from "expo-router";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { COLORS, TYPOGRAPHY } from "../../constants/theme";
import {
  AddSquare,
  Crown,
  Home,
  Message,
  Notification,
} from "iconsax-react-native";
import { StatusBar } from "expo-status-bar";
import { memo, useContext, useMemo, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import ConditionContext, {
  ConditionProvider,
} from "../../condition/conditionsContext";

const TabIcon = memo(({ Icon, focused }) => {
  return (
    <View style={styles.container}>
      <Icon
        size={focused ? 28 : 24}
        variant={focused ? "Bold" : "Outline"}
        color={COLORS.primaryLight}
      />
    </View>
  );
});

export default _layout = () => {
  
  const tabs = useMemo(() => new Map([
    ["home", { title: "Home", name: "home", Icon: Home }],
    ["madsWeek", { title: "MADS Week", name: "madsWeek", Icon: Crown }],
    ["addProject", { title: "Add Project", name: "addProject", Icon: AddSquare }],
    ["collegeNotice", { title: "Notifications", name: "collegeNotice", Icon: Notification }],
    ["community", { title: "Community", name: "community", Icon: Message }],
  ]), []);

  const TabHeader = memo(({ route }) => {
    // const route = useRouter();
    const path = usePathname();
    const { isConditionMet } = useContext(ConditionContext);

    // const currentTab = tabs.find((tab) => tab.name === path.replace("/", ""));
    const currentTab = tabs.get(route.params.title)

    return (
      <SafeAreaView
        style={[
          styles.tabHeader,
          {
            backgroundColor:
              path === "/madsWeek" && isConditionMet
                ? COLORS.primary
                : COLORS.primaryLight,
          },
        ]}
      >
        <StatusBar
          style={path === "/madsWeek" && isConditionMet ? "light" : "dark"}
          translucent={false}
          backgroundColor={
            path === "/madsWeek" && isConditionMet
              ? COLORS.primary
              : COLORS.primaryLight
          }
        />
        <Text
          style={[
            TYPOGRAPHY.Header,
            {
              color:
                path === "/madsWeek" && isConditionMet
                  ? COLORS.primaryLight
                  : COLORS.primaryDark,
            },
          ]}
        >
          {currentTab?.title}
        </Text>

        <TouchableOpacity
          style={{ marginLeft: "auto" }}
          onPress={() => route.push("/profile/1")}
        >
          <View>
            <Image
              source={require("../../assets/profile.jpeg")}
              style={styles.profileImage}
            />
          </View>
        </TouchableOpacity>
      </SafeAreaView>
    );
  });

  return (
    <ConditionProvider>
      <Tabs
        screenOptions={{
          tabBarStyle: styles.tabBar,
          tabBarHideOnKeyboard: true,
          headerStyle: {
            backgroundColor: COLORS.primaryLight,
          },
          header: ({ route }) => <TabHeader route={route} />,
        }}
      >
        {Array.from(tabs.values()).map((item, idx) => (
          <Tabs.Screen
            key={idx}
            name={item.name}
            initialParams={{ title: item.name }}
            options={{
              title: item.title,
              tabBarShowLabel: false,
              tabBarIcon: ({ focused }) => {
                if (item.Icon) {
                  return <TabIcon focused={focused} Icon={item.Icon} />;
                } else {
                  // Handle missing icon gracefully
                  console.warn("Missing icon for tab:", item.title);
                  return null;
                }
              },
            }}
          />
        ))}
      </Tabs>
    </ConditionProvider>
  );
};

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
    backgroundColor: COLORS.primary,
  },

  tabHeader: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 60,
    backgroundColor: COLORS.primaryLight,
    paddingTop: 5,
    paddingHorizontal: 20,
  },
  profileImage: {
    width: 44,
    height: 44,
    resizeMode: "contain",
    borderRadius: 22,
  },
});
