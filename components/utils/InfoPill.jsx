import React from "react";
import { View, Text } from "react-native";
import { COLORS, LAYOUTS, TYPOGRAPHY } from "../../constants/theme";
import { StyleSheet } from "react-native";

const InfoPill = ({ text }) => {
  return (
    <View style={style.pill}>
      <Text style={{ color: COLORS.primaryLight, fontSize: 14 }}>{text}</Text>
    </View>
  );
};

export default InfoPill;

const style = StyleSheet.create({
  pill: {
    backgroundColor: COLORS.primaryDark,
    minWidth: 40,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 14,
    paddingVertical: 5,
    marginRight: 8,
    marginVertical: 5,
  },
});
