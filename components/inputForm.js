import React from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  Platform,
} from "react-native";

const InputForm = () => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"} // 오타 수정
      style={styles.addFormContainer} // 'styles.addFormContainer' 로 변경할 필요가 있음
    >
      <TextInput
        style={styles.inputField}
        placeholder="할 일을 작성해주세요."
      />
      <Pressable style={styles.addButton}>
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
