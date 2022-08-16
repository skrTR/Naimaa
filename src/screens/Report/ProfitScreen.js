import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { DataTable } from "react-native-paper";

const ProfitScreen = () => {
  return (
    <DataTable>
      <DataTable.Header>
        <DataTable.Title>Нэр</DataTable.Title>
        <DataTable.Title numeric>Борлуулсан тоо</DataTable.Title>
        <DataTable.Title numeric>Борлуулсан үнэ</DataTable.Title>
        <DataTable.Title numeric>Нэгж үнэ</DataTable.Title>
        <DataTable.Title numeric>Ашиг</DataTable.Title>
      </DataTable.Header>

      <DataTable.Row>
        <DataTable.Cell>Coffee</DataTable.Cell>
        <DataTable.Cell numeric>5</DataTable.Cell>
        <DataTable.Cell numeric>8,000</DataTable.Cell>
        <DataTable.Cell numeric>1,600</DataTable.Cell>
        <DataTable.Cell numeric textStyle={{ color: "green" }}>
          3,000
        </DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell>Хөзөр</DataTable.Cell>
        <DataTable.Cell numeric>10</DataTable.Cell>
        <DataTable.Cell numeric>18,000</DataTable.Cell>
        <DataTable.Cell numeric>11,600</DataTable.Cell>
        <DataTable.Cell numeric textStyle={{ color: "green" }}>
          31,000
        </DataTable.Cell>
      </DataTable.Row>
    </DataTable>
  );
};

export default ProfitScreen;

const styles = StyleSheet.create({});
