// import React, { useState, useEffect, useContext } from "react";
// import { StatusBar } from "expo-status-bar";
// import { View } from "react-native";
// import { COLORS, LAYOUTS, TYPOGRAPHY } from "../../../constants/theme";
// import { date } from "./data";
// import MadsWeekLive from "./madsWeekLive";
// import MadsWeekOver from "./madsWeekOver";
// import ConditionContext from "../../../condition/conditionsContext";

// const MADSWeekView = () => {
//   const { setIsConditionMet, isConditionMet } = useContext(ConditionContext);

//   useEffect(() => {
//     const currentDate = new Date();
//     const condition = currentDate > new Date(date.endDate);
//     setIsConditionMet(condition);
//   }, [setIsConditionMet]);

//   return (
//     <View
//       style={[
//         LAYOUTS.flexCenter,
//         {
//           backgroundColor: isConditionMet
//             ? COLORS.primary
//             : COLORS.primaryLight,
//           position: "relative",
//           paddingBottom: 70,
//         },
//       ]}
//     >
//       <StatusBar style={"dark"} />
//       <View style={[LAYOUTS.screenView, { marginTop: 30 }]}>
//         {isConditionMet ? <MadsWeekOver /> : <MadsWeekLive date={date} />}
//       </View>
//     </View>
//   );
// };

// export default MADSWeekView;

import { Stack } from "expo-router";

export default function _layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="madsWeekOver" options={{ headerShown: false }} />
    </Stack>
  );
}
