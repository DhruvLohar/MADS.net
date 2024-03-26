import React, { useState, useContext, useMemo, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { COLORS, LAYOUTS, TYPOGRAPHY } from "../../../constants/theme";
import MadsWeekLive from "./madsWeekLive";
import MadsWeekOver from "./madsWeekOver";
import MadsWeekprocess from "./madsWeekprocess";
import ConditionContext from "../../../condition/conditionsContext";
export default () => {
  const { setIsConditionMet, isConditionMet } = useContext(ConditionContext);
  const [Data, setPageData] = useState("");

  useEffect(() => {
    fetch("/data.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setPageData(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  useEffect(() => {
    if (Data && Data.pageData.status === "Completed") {
      setIsConditionMet(true);
    }
  }, [Data, setIsConditionMet]);

  const Page = () => {
    if (Data && Data.pageData) {
      if (Data.pageData.status === "Completed") {
        return <MadsWeekOver data={Data.studentInfo} />;
      } else if (Data.pageData.status === "pending") {
        return <MadsWeekprocess />;
      } else if (Data.pageData.status === "Live") {
        return <MadsWeekLive PageData={Data.pageData} />;
      }
    }
    return null;
  };

  return (
    <View
      style={[
        LAYOUTS.flexCenter,
        {
          backgroundColor: isConditionMet
            ? COLORS.primary
            : COLORS.primaryLight,
          position: "relative",
          paddingBottom: 70,
        },
      ]}
    >
      <StatusBar style={"dark"} />
      <View style={[LAYOUTS.screenView, { marginTop: 30 }]}>
        <Page />
      </View>
    </View>
  );
};
