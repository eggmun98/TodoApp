import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";

const MainScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={"default"}></StatusBar>
      <Text style={styles.pageTitle}>ToDo App</Text>
      <View style={styles.listView}>
        <Text style={styles.listTitle}>할 일</Text>
      </View>
      <View style={styles.separator}>
        <Text style={styles.listTitle}>완료된 일</Text>
      </View>
    </SafeAreaView>
  );
};

// SafeAreaView는 아이폰에서 위에 상태바 밑으로 화면을 출력하게 할수 있다.(아이폰 11 버전 이상)
// 안드로이드는 SafeAreaView가 적용이 안되기 때문에 container 스타일시트를 이용한다.
//  container: {
//   flex: 1,
//   paddingTop: Platform.OS === "android" ? 20 : 0,
//   backgroundColor: "#f7f8fa",
// },
// paddingTop:에서 안드로이드 기기일 때만 20을 주면 된다.

// ES7+ React/Redux/React-Native snippets 이 확장 플러그인을 이용하면
// renfs or renf 명령어를 이용하면 리액트 네이티브 컴포넌트 생성 가능
// rfc 는 일반 리액트 컴포넌트 만들 수 있음

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 20 : 0,
    backgroundColor: "#f7f8fa",
  },
  pageTitle: {
    marginBottom: 35,
    paddingHorizontal: 15,
    fontSize: 54,
    fontWeight: "600",
  },
  separator: {
    marginHorizontal: 10,
    marginTop: 25,
    marginBottom10,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0,0,0,0.2)",
  },
  listView: {
    flex: 1,
  },
  listTitle: {
    marginBottom: 25,
    paddingHorizontal: 15,
    fontStyle: 41,
    fontWeight: "500",
  },
});
