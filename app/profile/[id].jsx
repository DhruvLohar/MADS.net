import React, { memo, useMemo, useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
  Pressable,
} from "react-native";
import { COLORS, LAYOUTS, TYPOGRAPHY } from "../../constants/theme";
import InfoPill from "../../components/utils/InfoPill";

import { useRouter, useGlobalSearchParams } from "expo-router";
import Tab from "../../components/utils/Tab";
import { SafeAreaView } from "react-native-safe-area-context";
import { Setting, Setting2 } from "iconsax-react-native";
import { useAuth } from "../../context/Auth";
import useAxios from "../../components/services/useAxios";

const ProjectList = [
  {
    Title: "MADS",
    languages: ["kotlin", "java", "swift", "reaact-native", "react.js"],
    image:
      "https://miro.medium.com/v2/resize:fit:754/1*78erRW_c48p2HqM3ShQfwQ.jpeg",
  },
  {
    Title: "PCOSoul",
    languages: ["react-native", "react.js"],
    image:
      "https://png.pngtree.com/png-vector/20190321/ourlarge/pngtree-vector-doctor-icon-png-image_857057.jpg",
  },
  {
    Title: "JavaChat",
    languages: ["kotlin", "java"],
    image:
      "https://media.istockphoto.com/id/1362703367/vector/modern-minimalist-conversation-chat-infinity-people-logo-icon-vector-template-on-black.jpg?s=612x612&w=0&k=20&c=3IIap0Rv0piizP-f5rs_dKWEN3wZEvc8mykmU1RjFp4=",
  },
  {
    Title: "HELLOWORLD",
    languages: ["kotlin", "java", "swift", "Python", "C"],
    image:
      "https://learn.microsoft.com/en-us/shows/hello-world/media/helloworld_383x215.png",
  },
];

const ProjectCard = ({ Data }) => {
  return (
    <TouchableOpacity
      onPress={() => console.log("button pressed")}
      activeOpacity={0.9}
      style={{
        marginBottom: 30,
        width: Dimensions.get("screen").width - 50,
      }}
    >
      <View style={styles.blogCard}>
        <Text style={[TYPOGRAPHY.Heading, { fontSize: 18 }]}>{Data.Title}</Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-start",
            flexWrap: "wrap",
            marginBottom: 45,
          }}
        >
          {Data.languages.map((language) => (
            <InfoPill key={language} text={language} />
          ))}
        </View>
      </View>
      <Image
        style={{
          flex: 1,
          resizeMode: "contain",
          height: 250,
          borderRadius: 20,
          marginTop: -50,
        }}
        source={{
          uri: Data.image,
        }}
      />
    </TouchableOpacity>
  );
};

const ShowProjects = memo(() => {
  return ProjectList.map((Project) => (
    <ProjectCard key={Project.Title} Data={Project} />
  ));
});

const ShowDetails = memo(({ data }) => {

  const details = [
    { label: "GR. No.", value: "SN662002372" },
    { label: "Email", value: "dhruvlohar09@gmail.com" },
    { label: "Conact Number", value: "+91 93217 81063" },
    { label: "Github", value: "https://github.com/DhruvLohar", isLink: true },
    { label: "Semester", value: "4" },
    { label: "Div & Batch", value: "S.E A (A3)" },
    { label: "Department", value: "Computer Science" },
  ]

  return (
    <ScrollView>
      <View style={[LAYOUTS.flexCenter, { maxWidth: "100%", flexWrap: "wrap" }]}>
        {details.map((item, i) => (
          <View
            style={{
              marginBottom: 10,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              flex: 1,
              width: "100%"
            }}
          >
            <Text style={[TYPOGRAPHY.BodyInfo, { flex: 1, marginRight: "auto" }]}>{item.label}</Text>
            <Pressable style={{
              flex: 1,
              fontSize: 15,
              textAlign: "left"
            }} onPress={() => alert("copied to clipboard")}>
              <Text>
                {item.value}
              </Text>
            </Pressable>
          </View>
        ))}
      </View>
    </ScrollView>
  );
});

const Profile = () => {
  const { id } = useGlobalSearchParams();
  const router = useRouter()

  const { authState } = useAuth()
  const { data, error, loaded } = useAxios(`student/${id}/`)
  const { onLogout } = useAuth()

  const tabs = ["Details", "Projects"];
  const [active, setActive] = useState(tabs[0]);

  const ActiveTab = useMemo(() => { }, [active]);

  const handleLogout = async () => {
    onLogout()
    router.push('/accounts/login')
  }

  if (!loaded) {
    return <Text>Loading ...</Text>
  }

  return (
    <SafeAreaView
      style={[
        LAYOUTS.flexCenter,
        LAYOUTS.screenView,
        { alignItems: "center", backgroundColor: COLORS.primaryLight },
      ]}
    >
      <StatusBar style={"light"} backgroundColor={COLORS.primaryDark} />

      {/* Header */}
      {loaded ? (
        <>
          <View style={styles.bgEllipse}></View>
          <Image
            style={styles.imageCircle}
            source={{ uri: data.profile_pfp }}
          />

          <View style={LAYOUTS.flexRowCenter}>
            <Text style={[TYPOGRAPHY.Heading, { marginRight: 10 }]}>{data.name}</Text>
            <Pressable onPress={handleLogout}>
              <Setting color={COLORS.primaryDark} size={26} style={{ marginVertical: "auto" }} />
            </Pressable>
          </View>
          <Text style={[TYPOGRAPHY.Body, { textAlign: "center" }]}>
            {data.about}
          </Text>

          <View style={{ flexDirection: "row", marginVertical: 15 }}>
            <View style={{ alignItems: "center", marginRight: 20 }}>
              <Text style={[TYPOGRAPHY.Header, { opacity: 0.6 }]}>MADS POINTS</Text>
              <Text style={TYPOGRAPHY.SubTitle}>{data.mads_points}</Text>
            </View>
            <View style={{ alignItems: "center", marginLeft: 20 }}>
              <Text style={[TYPOGRAPHY.Header, { opacity: 0.6 }]}>PROJECTS</Text>
              <Text style={TYPOGRAPHY.SubTitle}>4</Text>
            </View>
          </View>

          <View
            style={{
              width: "100%",
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 30,
            }}
          >
            {tabs.map((item, idx) => (
              <Tab
                key={idx}
                title={item}
                isActive={active === item}
                switchTab={() => setActive(item)}
              />
            ))}
          </View>
          <ScrollView>
            {active === tabs[0] ? <ShowDetails data={data} /> : <ShowProjects />}
          </ScrollView>
        </>
      ) : (<Text>Loading ...</Text>)}

    </SafeAreaView>
  );
};
export default Profile;

const styles = StyleSheet.create({
  bgEllipse: {
    width: Dimensions.get("screen").width + 60,
    height: 120,
    backgroundColor: COLORS.primaryDark,
    borderBottomRightRadius: 400,
    borderBottomLeftRadius: 400,
    justifyContent: "center",
    alignItems: "center",
  },

  imageCircle: {
    width: 150,
    height: 150,
    borderRadius: 200,
    objectFit: "cover",
    borderColor: COLORS.primaryLight,
    borderWidth: 5,
    marginTop: -100,
    marginBottom: 10,
  },

  card: {
    backgroundColor: "#ffffff",
    borderRadius: 8,
    elevation: 3,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "#333",
    shadowOpacity: 0.3,
    margin: 10,
    width: 300,
    height: 300,
  },
  cardImage: {
    width: "100%",
    height: 200,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  cardTitle: {
    fontSize: 18,
    margin: 10,
  },
  pillContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingBottom: 10,
  },
  pill: {
    backgroundColor: "#0B2B26",
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  pillText: {
    color: "white",
    fontSize: 14,
  },
  blogCard: {
    backgroundColor: "transparent",
    borderWidth: 2,
    borderColor: "#252525",
    borderRadius: 20,
    padding: 20,
  },
});
