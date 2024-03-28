import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { COLORS, LAYOUTS, TYPOGRAPHY } from '../../constants/theme';
import { AddSquare, Link2, Sms } from 'iconsax-react-native';

import Button, { TextButton } from "../../components/utils/Button";
import Input, { MultiSelectInput } from "../../components/utils/Input";
import { Text as TextIcon } from 'iconsax-react-native';
import { TECHNOLOGIES } from '../../constants/misc';

import { Formik } from 'formik';
import { SafeAreaView } from 'react-native-safe-area-context';

const AddProjectView = () => {
    const [skills, setSkills] = useState([])

    const handleImageInput = () => {
        console.log("Handling Images")
    }

    const handleSubmit = (values) => {
        console.log("Submit Project", values)
    }

    return (
        <SafeAreaView style={[LAYOUTS.screenView, { flex: 1, backgroundColor: COLORS.primaryLight, paddingBottom: 60 }]}>
            <StatusBar style={"dark"} />

            <ScrollView style={{ width: "100%" }}>
                <TouchableOpacity style={[{
                    width: "100%", height: 200, marginTop: 20,
                    borderRadius: 20, backgroundColor: COLORS.primaryDark,
                    alignItems: "center", justifyContent: "center", marginBottom: 30
                }]}
                    onPress={handleImageInput}
                >
                    <AddSquare size={28} color={COLORS.primaryLight} />
                    <Text style={[TYPOGRAPHY.SubTitle, { color: COLORS.primaryLight, marginTop: 10 }]}>Add Images</Text>
                    <Text style={[TYPOGRAPHY.Body, { color: COLORS.primaryLight }]}>You can add upto 4 images ...</Text>

                </TouchableOpacity>

                <Formik
                    initialValues={{ title: '', description: '', github_link: '', technologies: [] }}
                    onSubmit={values => console.log(values)}
                >
                    {({ handleChange, handleBlur, handleSubmit, values }) => (
                        <>
                            <View style={{ marginBottom: 20 }}>
                                <Text style={TYPOGRAPHY.SubTitle}>Describe your project ...</Text>

                                <Input placeHolder="Project Title*" IconPrefix={TextIcon}
                                    handleFormik={{ name: 'email', onChange: handleChange, value: values.email }}
                                />
                                <Input placeHolder="Project Description*" IconPrefix={Sms} isTextarea={true}
                                    handleFormik={{ name: 'email', onChange: handleChange, value: values.email }}
                                />
                                <Input placeHolder="Github Link*" IconPrefix={Link2}
                                    handleFormik={{ name: 'email', onChange: handleChange, value: values.email }}
                                />

                                <MultiSelectInput data={TECHNOLOGIES} placeHolder={"Select languages you used ..."} label={"Languages used"} />
                            </View>


                            <Button title="Add Project" onPress={handleSubmit} type={"fill"} />
                        </>
                    )}
                </Formik>

            </ScrollView>
        </SafeAreaView>

    );
}

export default AddProjectView;