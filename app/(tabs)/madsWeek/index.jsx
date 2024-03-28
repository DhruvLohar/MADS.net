import React, { useState, useContext, useMemo, useEffect } from "react";
import { Redirect } from "expo-router"
import { StatusBar } from "expo-status-bar";
import { View, Text } from "react-native";
import { COLORS, LAYOUTS, TYPOGRAPHY } from "../../../constants/theme";
import MadsWeekLive from "./madsWeekLive";
import MadsWeekOver from "./madsWeekOver";
import MadsWeekprocess from "./madsWeekprocess";
import ConditionContext from "../../../condition/conditionsContext";
import useAxios from "../../../components/services/useAxios";


export default () => {
  // const { setIsConditionMet, isConditionMet } = useContext(ConditionContext);
  // const [Data, setPageData] = useState("");

  // useEffect(() => {
  //   fetch("/data.json")
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error("Network response was not ok");
  //       }
  //       return response.json();
  //     })
  //     .then((data) => {
  //       setPageData(data);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching data:", error);
  //     });
  // }, []);

  // useEffect(() => {
  //   if (Data && Data.pageData.status === "Completed") {
  //     setIsConditionMet(true);
  //   }
  // }, [Data, setIsConditionMet]);

  // const Page = () => {
  //   if (Data && Data.pageData) {
  //     if (Data.pageData.status === "Completed") {
  //       return <MadsWeekOver data={Data.studentInfo} />;
  //     } else if (Data.pageData.status === "pending") {
  //       return <MadsWeekprocess />;
  //     } else if (Data.pageData.status === "Live") {
  //       return <MadsWeekLive PageData={Data.pageData} />;
  //     }
  //   }
  //   return null;
  // };

  const { data, error, loaded } = useAxios('mads/ps/latest/')

  return (
    <>
      {loaded ? (
        <View
          style={[
            LAYOUTS.flexCenter,
            {
              backgroundColor: COLORS.primaryLight,
              position: "relative",
              paddingBottom: 70,
            },
          ]}
        >
          <StatusBar style={"dark"} />
          <View style={[LAYOUTS.screenView, { marginTop: 30 }]}>
            {data.status === "upcoming" ? (
              <MadsWeekLive ps={data} />
            ) : data.status === "processing" ? (
              <MadsWeekprocess />
            ) : (
              // <MadsWeekOver />
              <Redirect href={"/madsWeek/madsWeekOver"} />
              // <Text>Khatam</Text>
            )}
          </View>
        </View>
      ) : (null)}
    </>
  );
};
