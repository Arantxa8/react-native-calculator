import React from "react";
import { View } from "react-native";

//Row settings for the buttons
export default ({ children }) => (
  <View style={{ flexDirection: "row" }}>{children}</View>
);