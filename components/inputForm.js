import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  Platform,
} from "react-native";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/slices/todoSlice";
// 기타 필요한 임포트

const InputForm = () => {
  const [currentValue, setCurrentValue] = useState("");
  const dispatch = useDispatch();

  // onChangeText속성은 텍트스가 변경될 때 마다 호출되는 콜백함수이다.
  // onSubmitEditing속성은 엔터를 클릭 했을 떄 함수를 호출 할수 있다.

  const handleSubmit = () => {
    if (currentValue !== "") {
      dispatch(addTodo(currentValue));
      setCurrentValue("");
    }
  };

  // KeyboardAvoidingView 컴포넌트는 키보드가 화면의 콘텐츠를 가리지 않도록 해준다.
  // 특히 사용자가 텍스트 입력 필드에 데이터를 입력할 때 키보드가 그 필드를 가리는 것을 방지해준다.
  // behavior: 이 속성은 키보드가 활성화 될 때 뷰의 동작을 결정한다.

  // Pressable 컴포넌트는 사용자가 누를 수 있는 영역을 생성한다. 버튼이나 링크와 같은 인터랙티브한 요소를 만드는데 사용한다.
  // onPress: 이 속성은 사용자가 Pressable 영역을 눌렀을 때 실행될 함수를 정의한다.

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.addFormContainer}
    >
      <TextInput
        style={styles.inputField}
        placeholder="할 일을 작성해주세요."
        value={currentValue}
        onChangeText={setCurrentValue}
        onSubmitEditing={handleSubmit}
      />
      <Pressable style={styles.addButton} onPress={handleSubmit}>
        <Text style={styles.addButtonText}>+</Text>
      </Pressable>
    </KeyboardAvoidingView>
  );
};

export default InputForm;

const styles = StyleSheet.create({
  addFormContainer: {
    flexDirection: "row",
    marginTop: "auto",
    marginBottom: 30,
    paddingHorizontal: 20,
    backgroundColor: "#f7f8fa",
  },
  inputField: {
    flex: 1,
    height: 42,
    padding: 5,
    marginRight: 25,
    borderRadius: 4,
    borderColor: "rgba(0, 0,0, 0.2)",
    borderWidth: 1,
    color: "#000000",
    fontSize: 15,
    textAlignVertical: "center",
  },
  addButton: {
    justifyContent: "center",
    alignItems: "center",
    width: 42,
    height: 42,
    borderRadius: 4,
    backgroundColor: "rgba(0,0,0,0.7)",
  },
  addButtonText: {
    color: "white",
    fontSize: 25,
  },
});
