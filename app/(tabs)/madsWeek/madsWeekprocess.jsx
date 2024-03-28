import React from "react";
import { LAYOUTS, COLORS, TYPOGRAPHY } from "../../../constants/theme";
import { View, Text, Image } from "react-native";

const MadsWeekprocess = () => {
  return (
    <View style={[LAYOUTS.flexCenter]}>
      <Text style={[TYPOGRAPHY.Heading, { textAlign: "center" }]}>We are reviewing your submissions ...</Text>
      <Text style={[TYPOGRAPHY.Body, { textAlign: "center" }]}>
        MADS Week is finished. Our team is reviewing your submissions, until then take a break champ you did great 🏆
      </Text>
      {/* <Image
        source={require("../../../assets/relax.png")}
        width={200}
        height={200}
      /> */}
    </View>
  );
};

export default MadsWeekprocess;
