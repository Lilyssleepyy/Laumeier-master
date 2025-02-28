import React from "react";
import {
  Text,
  Image,
  View,
  SafeAreaView,
  TouchableOpacity,
  Linking,
} from "react-native";
import { colors } from "../../infrastructure/theme/colors.js";
import { fonts } from "../../infrastructure/theme/fonts";
// import { SafeArea } from ".../spacer/safe-area.components.js";
// import styled from "styled-components/native";

export const ExploreScreen = () => {
  return (<SafeAreaView>
    <View style={{justifyContent: "center", alignItems: "flex-start" }}>
        <Text style={{ color: colors.ui.primary,
        font: fonts.heading,
        textAlign: "center",
        }}
        >
            Explore Laumeier
        </Text>
    </View>

    <TouchableOpacity>
            <Text style={{ color: colors.ui.quaternary, font: fonts.body, textAlign: "center",
justifyContent: "space-evenly" }}
                // CHANGE IMAGES AND URL FOR PLACE HOLDERS
                onPress={() =>
                    Linking.openURL("https://www.laumeiersculpturepark.org/")
                }
            >
                Place-Holder-For-Interactive-Map
            </Text>

        </TouchableOpacity>

        <TouchableOpacity>
            <Text style={{ color: colors.ui.quaternary, font: fonts.body, textAlign: "center",
justifyContent: "space-evenly" }}
                // CHANGE IMAGES AND URL FOR PLACE HOLDERS
                onPress={() =>
                    Linking.openURL("https://www.laumeiersculpturepark.org/")
                }
            >
                Place-Holder-For-Northern-Grove
            </Text>
        </TouchableOpacity>

        <TouchableOpacity>
            <Text style={{ color: colors.ui.quaternary, font: fonts.body, textAlign: "center",
justifyContent: "space-evenly" }}
                // CHANGE IMAGES AND URL FOR PLACE HOLDERS
                onPress={() =>
                    Linking.openURL("https://www.laumeiersculpturepark.org/")
                }
            >
                Place-Holder-For-Museum-Circle
            </Text>
        </TouchableOpacity>

        <TouchableOpacity>
            <Text style={{ color: colors.ui.quaternary, font: fonts.body, textAlign: "center",
justifyContent: "space-evenly" }}
                // CHANGE IMAGES AND URL FOR PLACE HOLDERS
                onPress={() =>
                    Linking.openURL("https://www.laumeiersculpturepark.org/")
                }
            >
                Place-Holder-For-Emerson's-Children-Sculpture-Garden
            </Text>
        </TouchableOpacity>

        <TouchableOpacity>
            <Text style={{ color: colors.ui.quaternary, font: fonts.body, textAlign: "center",
justifyContent: "space-evenly" }}
                // CHANGE IMAGES AND URL FOR PLACE HOLDERS
                onPress={() =>
                    Linking.openURL("https://www.laumeiersculpturepark.org/")
                }
            >
                Place-Holder-For-Eastern-Woodland
            </Text>
        </TouchableOpacity>

        <TouchableOpacity>
            <Text style={{ color: colors.ui.quaternary, font: fonts.body, textAlign: "center",
justifyContent: "space-evenly" }}
                // CHANGE IMAGES AND URL FOR PLACE HOLDERS
                onPress={() =>
                    Linking.openURL("https://www.laumeiersculpturepark.org/")
                }
            >
                Place-Holder-For-Way-Field
            </Text>
        </TouchableOpacity>

        <TouchableOpacity>
            <Text style={{ color: colors.ui.quaternary, font: fonts.body, textAlign: "center",
justifyContent: "space-evenly" }}
                // CHANGE IMAGES AND URL FOR PLACE HOLDERS
                onPress={() =>
                    Linking.openURL("https://www.laumeiersculpturepark.org/")
                }
            >
                Place-Holder-For-South-Lawn
            </Text>
        </TouchableOpacity>

        <TouchableOpacity>
            <Text style={{ color: colors.ui.quaternary, font: fonts.body, textAlign: "center",
justifyContent: "space-evenly" }}
                // CHANGE IMAGES AND URL FOR PLACE HOLDERS
                onPress={() =>
                    Linking.openURL("https://www.laumeiersculpturepark.org/")
                }
            >
                Place-Holder-For-Ferring-Family-Foundation
            </Text>
        </TouchableOpacity>

        <TouchableOpacity>
            <Text style={{ color: colors.ui.quaternary, font: fonts.body, textAlign: "center",
justifyContent: "space-evenly" }}
                // CHANGE IMAGES AND URL FOR PLACE HOLDERS
                onPress={() =>
                    Linking.openURL("https://www.laumeiersculpturepark.org/")
                }
            >
                Place-Holder-For-Features-And-History
            </Text>
        </TouchableOpacity>



  </SafeAreaView>
  );};