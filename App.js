import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import MainScreen from "./screens/MainScreen";
import Svg, { Path } from "react-native-svg";

export default function App() {
  return (
    <>
      <MainScreen></MainScreen>
      {/* <View style={styles.container}>
        <Text>TodoApp</Text>
        <StatusBar style="auto" />
      </View> */}
    </>
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
