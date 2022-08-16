import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { DataTable } from "react-native-paper";

const BoughtRemainderScreen = () => {
  return (
    <DataTable style={{ width: "100%" }}>
      <DataTable.Header>
        <DataTable.Title>Нийт орлого</DataTable.Title>
        <DataTable.Title numeric style={{ left: 55 }}>
          Нийт борлуулалт
        </DataTable.Title>
        <DataTable.Title numeric>Нийт үлдэгдэл</DataTable.Title>
      </DataTable.Header>
      <DataTable.Header>
        <DataTable.Title>Нэр</DataTable.Title>
        <DataTable.Title numeric>Тоо</DataTable.Title>
        <DataTable.Title numeric>Өртөг</DataTable.Title>
        <DataTable.Title numeric>Үнэ</DataTable.Title>
        <DataTable.Title numeric>Тоо</DataTable.Title>
        <DataTable.Title numeric>Өртөг</DataTable.Title>
        <DataTable.Title numeric>Үлдэгдэл</DataTable.Title>
        <DataTable.Title numeric>Өртөг</DataTable.Title>
      </DataTable.Header>

      <DataTable.Row>
        <DataTable.Cell>Coffee</DataTable.Cell>
        <DataTable.Cell numeric>10</DataTable.Cell>
        <DataTable.Cell numeric>10,000</DataTable.Cell>
        <DataTable.Cell numeric>1,000</DataTable.Cell>
        <DataTable.Cell numeric>5</DataTable.Cell>
        <DataTable.Cell numeric>5000</DataTable.Cell>
        <DataTable.Cell numeric>5</DataTable.Cell>
        <DataTable.Cell numeric>5000</DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell>Хөзөр</DataTable.Cell>
        <DataTable.Cell numeric>90</DataTable.Cell>
        <DataTable.Cell numeric>220,000</DataTable.Cell>
        <DataTable.Cell numeric>15,000</DataTable.Cell>
        <DataTable.Cell numeric>5</DataTable.Cell>
        <DataTable.Cell numeric>15000</DataTable.Cell>
        <DataTable.Cell numeric>5</DataTable.Cell>
        <DataTable.Cell numeric>15000</DataTable.Cell>
      </DataTable.Row>
    </DataTable>
  );
};

export default BoughtRemainderScreen;

const styles = StyleSheet.create({});
