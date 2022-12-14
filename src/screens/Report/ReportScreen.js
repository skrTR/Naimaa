import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import Header from "../../components/Header";
import { useNavigation } from "@react-navigation/native";
const ReportScreen = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Header />
      <TouchableOpacity
        onPress={() => navigation.navigate("IncomeStaticScreen")}
        style={{
          backgroundColor: "#175E26",
          padding: 5,
          marginTop: 10,
          marginHorizontal: 10,
          borderRadius: 10,
        }}
      >
        <Text
          style={{
            color: "white",
            padding: 5,
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          Орлогын тайлан
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("OutcomeStaticScreen")}
        style={{
          backgroundColor: "#175E26",
          padding: 5,
          marginTop: 10,
          marginHorizontal: 10,
          borderRadius: 10,
        }}
      >
        <Text
          style={{
            color: "white",
            padding: 5,
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          Зарлагын тайлан
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("AllStaticScreen")}
        style={{
          backgroundColor: "#175E26",
          padding: 5,
          marginTop: 10,
          marginHorizontal: 10,
          borderRadius: 10,
        }}
      >
        <Text
          style={{
            color: "white",
            padding: 5,
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          Гүйлгээний тайлан
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ReportScreen;

const styles = StyleSheet.create({});
