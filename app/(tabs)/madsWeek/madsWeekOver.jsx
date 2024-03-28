import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import { Medal } from "iconsax-react-native";
import { COLORS, TYPOGRAPHY, LAYOUTS } from "../../../constants/theme";
import { FlatList } from "react-native";

const data = [
  {
    "name": "John Doe",
    "number": "#11",
    "image": "https://www.shutterstock.com/image-photo/head-shot-portrait-close-smiling-600nw-1714666150.jpg",
    "madsPoints": 72
  },
  {
    "name": "Jane Smith",
    "number": "#12",
    "image": "https://www.shutterstock.com/image-photo/head-shot-portrait-close-smiling-600nw-1714666150.jpg",
    "madsPoints": 65
  },
  {
    "name": "Alice Johnson",
    "number": "#13",
    "image": "https://www.shutterstock.com/image-photo/head-shot-portrait-close-smiling-600nw-1714666150.jpg",
    "madsPoints": 70
  },
  {
    "name": "Bob Brown",
    "number": "#4",
    "image": "https://www.shutterstock.com/image-photo/head-shot-portrait-close-smiling-600nw-1714666150.jpg",
    "madsPoints": 68
  },
  {
    "name": "Sarah Williams",
    "number": "#5",
    "image": "https://www.shutterstock.com/image-photo/head-shot-portrait-close-smiling-600nw-1714666150.jpg",
    "madsPoints": 75
  },
  {
    "name": "Michael Wilson",
    "number": "#6",
    "image": "https://www.shutterstock.com/image-photo/head-shot-portrait-close-smiling-600nw-1714666150.jpg",
    "madsPoints": 71
  },
  {
    "name": "Aadish Gote",
    "number": "#7",
    "image": "https://www.shutterstock.com/image-photo/head-shot-portrait-close-smiling-600nw-1714666150.jpg",
    "madsPoints": 71
  },
  {
    "name": "Mohit Jain",
    "number": "#8",
    "image": "https://www.shutterstock.com/image-photo/head-shot-portrait-close-smiling-600nw-1714666150.jpg",
    "madsPoints": 71
  }
]

const topThreeData = [
  {
    name: data[1].name,
    madsPoints: data[1].madsPoints,
    image: data[1].image,
    nameSize: 18,
    pointSize: 12,
    medalSize: 85,
    medalTextSize: 28,
    medalTextPadding: 12,
    rank: 2,
    medalColor: "#C0C0C0",
  },
  {
    name: data[0].name,
    madsPoints: data[0].madsPoints,
    image: data[0].image,
    nameSize: 24,
    pointSize: 13,
    medalSize: 110,
    medalTextSize: 38,
    medalTextPadding: 10,
    rank: 1,
    medalColor: "#E5A01D",
  },
  {
    name: data[2].name,
    madsPoints: data[2].madsPoints,
    image: data[2].image,
    nameSize: 14,
    pointSize: 10,
    medalSize: 60,
    medalTextSize: 24,
    medalTextPadding: 7,
    rank: 3,
    medalColor: "#804A00",
  },
];

const MadsWeekOver = () => {

  const otherData = data.slice(3, data.length);

  const screenWidth = Dimensions.get("window").width - 50;

  return (
    <View
      style={[
        LAYOUTS.screenView,
        {
          backgroundColor: COLORS.primary,
          position: "relative",
          // paddingBottom: 70
        },
      ]}
    >
      <StatusBar style="light" />
      <Text style={[TYPOGRAPHY.Heading, { color: COLORS.primaryLight, marginTop: 5 }]}>
        MADS LeaderBoard
      </Text>
      <Text style={[TYPOGRAPHY.Body, { color: COLORS.primaryLight, marginBottom: 20 }]}>
        And the Champions are ... 🏆
      </Text>
      <View style={styles.podiumContainer}>
        {topThreeData.map((data) => {
          return (
            <View style={styles.rankContainer} key={data.rank}>
              <View
                style={{
                  position: "absolute",
                  top: -20,
                  left: "30%",
                  right: 0,
                  zIndex: 1,
                }}
              >
                <Image
                  source={{ uri: data.image }}
                  style={styles.profileImage}
                />
              </View>
              <View style={styles.winnerInfo}>
                <Text
                  style={[
                    TYPOGRAPHY.SubTitle,
                    { color: COLORS.primaryLight, fontSize: data.nameSize },
                  ]}
                >
                  {data.name}
                </Text>
                <Text
                  style={[
                    TYPOGRAPHY.Body,
                    { color: COLORS.primaryLight, fontSize: data.pointSize },
                  ]}
                >
                  {`${data.madsPoints} MADS Points`}
                </Text>
              </View>
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text
                  style={[
                    styles.rankText,
                    {
                      fontSize: data.medalTextSize,
                      top: `${data.medalTextPadding}%`,
                    },
                  ]}
                >
                  {data.rank}
                </Text>
                <Medal
                  size={`${data.medalSize}`}
                  color={data.medalColor}
                  variant="Bulk"
                />
              </View>
            </View>
          );
        })}
      </View>
      <View style={styles.ranks}>
        <FlatList
          data={otherData}
          contentContainerStyle={{
            alignItems: "center",
            rowGap: 20,
            paddingVertical: 20,
            overflow: "hidden",
          }}
          renderItem={({ item }) => (
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddingVertical: 8,
                paddingHorizontal: 20,
                width: screenWidth, // Adjusted width to accommodate the offset
                borderBottomColor: COLORS.primaryDark,
                borderBottomWidth: 1,
              }}
            >
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 15,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  source={{ uri: item.image }}
                  style={[styles.profileImage, { height: 40, width: 40 }]}
                />
                <View
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <Text
                    style={[
                      TYPOGRAPHY.SubTitle,
                      { color: COLORS.primaryDark, fontSize: 18 },
                    ]}
                  >
                    {item.name}
                  </Text>
                  <Text
                    style={[TYPOGRAPHY.Body, { color: COLORS.primaryDark }]}
                  >
                    {item.number}
                  </Text>
                </View>
              </View>
              <View
                style={[
                  TYPOGRAPHY.Body,
                  {
                    display: "flex",
                    flexDirection: "column",
                  },
                ]}
              >
                <Text style={{ color: COLORS.primaryDark }}>
                  {item.madsPoints}
                </Text>
                <Text style={{ color: COLORS.primaryDark }}>Mads Points</Text>
              </View>
            </View>
          )}
          keyExtractor={(item) => item.number}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  podiumContainer: {
    height: "fit-content",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    width: "100%",
    paddingTop: 20,
  },
  rankContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "auto",
    backgroundColor: COLORS.primaryDark,
    width: "33%",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    gap: 5,
  },
  rankText: {
    fontWeight: "900",
    fontSize: 25,
    color: COLORS.primaryDark,
    position: "absolute",
    zIndex: 1,
  },
  winnerInfo: {
    paddingTop: 40,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  winnerName: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  winnerPoints: {
    fontSize: 14,
  },
  profileImage: {
    width: 54,
    height: 54,
    resizeMode: "contain",
    borderRadius: 100,
  },

  ranks: {
    position: "absolute",
    height: "54%",
    bottom: 0,
    right: -200,
    left: -200,
    backgroundColor: COLORS.primaryLight,
    borderTopLeftRadius: 300,
    borderTopRightRadius: 300,
    paddingTop: 10,
    paddingBottom: 50,
  },
});

export default MadsWeekOver;
