import React from "react";
import { LAYOUTS, COLORS, TYPOGRAPHY } from "../../../constants/theme";
import { View, Text } from "react-native";
const MadsWeekprocess = () => {
  return (
    <View style={[LAYOUTS.flexCenter]}>
      <Text style={[TYPOGRAPHY.Heading, { color: COLORS.primaryDark }]}>
        Stay Tuned....
      </Text>
    </View>
  );
};

export default MadsWeekprocess;
