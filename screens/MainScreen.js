import { SafeAreaView, StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import InputForm from "../components/inputForm";
import TodoItem from "../components/TodoItem";
import { useSelector } from "react-redux";

const MainScreen = () => {
  const todos = useSelector((state) => state.todo.todos);
  const todoTasks = todos.filter((item) => item.state === "todo");
  const completedTasks = todos.filter((item) => item.state === "done");

  // FlatList와 ScrollView 어떤 것을 사용해야 될까?
  // ScrollView는 컴포넌트가 로드된 직후 스크롤용 데이터를 로드한다. 결과적으로 모든 데이터는
  // RAM에 저장되며 성능 저하로 인해 그 안에 있는 수백 또는 수천 개의 항목을 사용할 수 없게 된다.

  // 반면에 FlatList에는 10개의 스크롤 데이터를 화면에 탑재하고 사용자가 보기를 스크롤하면 다른 스크롤 데이터가 탑재된다.
  // 이러한 점에서 ScrollView 대신 FlatList를 사용하는 것이 좋다.

  // 즉 결론으로 적은 수의 스크롤 데이터에서는 ScrollView를 사용하고 많은 수의 스크롤 데이터는 FlatList를 사용하는게 좋다.

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={"default"} />
      <View style={styles.headerContainer}>
        <Text style={styles.pageTitle}>ToDo App</Text>
      </View>
      <View style={styles.listView}>
        <Text style={styles.listTitle}>할 일</Text>
        {todoTasks.length !== 0 ? (
          <FlatList
            data={todoTasks}
            renderItem={({ item }) => <TodoItem {...item} />}
            keyExtractor={(item) => item.id}
          />
        ) : (
          <Text style={styles.emptyListText}>할 일이 없습니다.</Text>
        )}
      </View>
      <View style={styles.separator} />
      <View style={styles.listView}>
        <Text style={styles.listTitle}>완료된 일</Text>
        {completedTasks.length !== 0 ? (
          <FlatList
            data={completedTasks}
            renderItem={({ item }) => <TodoItem {...item} />}
            keyExtractor={(item) => item.id}
          />
        ) : (
          <Text style={styles.emptyListText}>완료된 일이 없습니다.</Text>
        )}
      </View>
      <InputForm />
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
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0,0,0,0.2)",
  },
  listView: {
    flex: 1,
  },
  listTitle: {
    marginBottom: 25,
    paddingHorizontal: 15,
    fontSize: 41,
    fontWeight: "500",
  },
  emptyListText: {
    paddingTop: 10,
    paddingBottom: 15,
    paddingHorizontal: 15,
    fontSize: 15,
    lineHeight: 20,
    color: "#737373",
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
