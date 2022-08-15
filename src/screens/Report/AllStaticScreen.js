import { FlatList, StyleSheet, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { api } from "../../../Constants";
import { DataTable } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
const AllStaticScreen = () => {
  const [data, setData] = useState([]);
  const navigation = useNavigation();
  const getAllData = () => {
    axios
      .get(`${api}/api/v1/goods/user?limit=100`)
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getAllData();
  }, []);
  return (
    <View>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Нэр</DataTable.Title>
          <DataTable.Title numeric>Орлого</DataTable.Title>
          <DataTable.Title numeric>Зарлага</DataTable.Title>
          <DataTable.Title numeric>Үлдэгдэл</DataTable.Title>
        </DataTable.Header>

        <FlatList
          data={data}
          keyExtractor={(item, index) => index}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("ProductDetailScreen", { id: item._id })
                }
              >
                <DataTable.Row>
                  <DataTable.Cell>{item.name}</DataTable.Cell>
                  <DataTable.Cell numeric>{item.receipt}</DataTable.Cell>
                  <DataTable.Cell numeric>{item.drain}</DataTable.Cell>
                  <DataTable.Cell numeric>{item.quantity}</DataTable.Cell>
                </DataTable.Row>
              </TouchableOpacity>
            );
          }}
        />
      </DataTable>
    </View>
  );
};

export default AllStaticScreen;

const styles = StyleSheet.create({});
