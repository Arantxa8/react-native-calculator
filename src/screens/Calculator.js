import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  pressButton,
  result,
  operation,
  clear,
  clearEntry,
} from "../actions/actions";
import Row from "../../components/Row";
import Button from "../../components/Button";

//Calculator front
const Calculator = ({
  calculatorState: { stack, resultState },
  operationAction,
  pressNumWithDispatch,
  enterAction,
  clearLastDigit,
  clearScreen,
}) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <SafeAreaView>
        <Text style={styles.value}>{stack || 0}</Text>
        <Text style={styles.value}>{resultState || 0}</Text>
        <Row>
          <Button
            text="Clear"
            size="double"
            theme="secondary"
            onPress={clearScreen}
          />
          <Button text="CE" theme="secondary" onPress={clearLastDigit} />
          <Button text="/" theme="accent" onPress={operationAction} />
        </Row>

        <Row>
          <Button text="7" onPress={pressNumWithDispatch} />
          <Button text="8" onPress={pressNumWithDispatch} />
          <Button text="9" onPress={pressNumWithDispatch} />
          <Button text="x" theme="accent" onPress={operationAction} />
        </Row>

        <Row>
          <Button text="4" onPress={pressNumWithDispatch} />
          <Button text="5" onPress={pressNumWithDispatch} />
          <Button text="6" onPress={pressNumWithDispatch} />
          <Button text="-" theme="accent" onPress={operationAction} />
        </Row>

        <Row>
          <Button text="1" onPress={pressNumWithDispatch} />
          <Button text="2" onPress={pressNumWithDispatch} />
          <Button text="3" onPress={pressNumWithDispatch} />
          <Button text="+" theme="accent" onPress={operationAction} />
        </Row>

        <Row>
          <Button text="0" size="double" onPress={pressNumWithDispatch} />
          <Button text="." onPress={pressNumWithDispatch} />
          <Button text="=" theme="accent" onPress={enterAction} />
        </Row>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#202020",
    justifyContent: "flex-end",
  },
  value: {
    color: "#fff",
    fontSize: 40,
    textAlign: "right",
    marginRight: 20,
    marginBottom: 10,
  },
});
//Connect redux
export default connect(
  (state) => ({ calculatorState: state }),
  (dispatch) =>
    bindActionCreators(
      {
        pressNumWithDispatch: pressButton,
        enterAction: result,
        operationAction: operation,
        clearScreen: clear,
        clearLastDigit: clearEntry,
      },
      dispatch
    )
)(Calculator);
