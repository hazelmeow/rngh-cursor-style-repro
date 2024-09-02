import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  GestureHandlerRootView,
  RectButton,
} from "react-native-gesture-handler";

export default function Index() {
  return (
    <GestureHandlerRootView>
      <View style={styles.container}>
        {/* not setting the cursor style: */}
        <RectButton style={{ cursor: undefined }}>
          <Text>works</Text>
        </RectButton>

        {/* setting the cursor style: */}
        <RectButton style={{ cursor: "auto" }}>
          <Text>doesn't work</Text>
        </RectButton>
        <RectButton style={{ cursor: "pointer" }}>
          <Text>also doesn't work</Text>
        </RectButton>
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
