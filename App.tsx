import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import FormTest from "./src/screens/1.form";
import { StyledProvider } from "@gluestack-style/react";
import { config } from "@gluestack-ui/config";
import { Box } from "@gluestack-ui/themed";

export default function App() {
  return (
    <StyledProvider config={config}>
      <Box width="100%" justifyContent="center" alignItems="center">
        <Text>Open up App.js to start working on your app!</Text>
      </Box>
      <View>
        <StatusBar style="auto" />
        <FormTest />
      </View>
    </StyledProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
