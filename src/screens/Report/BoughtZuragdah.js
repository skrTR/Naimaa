import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";

const BoughtRemainderScreen = () => {
  return (
    <>
      <ScrollView horizontal>
        <View>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ width: 340 }}>Нийт орлого</Text>
            <Text style={{ width: 340 }}>Нийт борлуулалт</Text>
            <Text style={{ width: 340 }}>Нийт үлдэгдэл</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text>Нэр</Text>
            <Text>Тоо</Text>
            <Text>Өртөг</Text>
            <Text>Үнэ</Text>
            <Text>Тоо</Text>
            <Text>Өртөг</Text>
            <Text>Үлдэгдэл</Text>
            <Text>Өртөг</Text>
          </View>
          <ScrollView style={{}}>
            <View style={{ flexDirection: "row" }}>
              <Text>Coffee</Text>
              <Text>10</Text>
              <Text>10,000</Text>
              <Text>1,000</Text>
              <Text>5</Text>
              <Text>5000</Text>
              <Text>5</Text>
              <Text>5000</Text>
            </View>
          </ScrollView>
        </View>
      </ScrollView>
    </>
  );
};

export default BoughtRemainderScreen;

const styles = StyleSheet.create({});
