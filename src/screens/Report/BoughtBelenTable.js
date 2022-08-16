import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Table, Row } from "react-native-table-component";
import { api } from "../../../Constants";
import axios from "axios";
const BoughtRemainderScreen = () => {
  const [testTable, setTestTable] = useState([]);
  const [data, setData] = useState([]);
  const getAllData = () => {
    axios
      .get(`${api}/api/v1/goods/user?limit=100`)
      .then((res) => {
        setData(res.data.data);
        res.data.data.map((e) => {
          let data = [
            `${e.name}`,
            `${e.drain}`,
            `${e.unit}`,
            `${e.receipt}`,
            `${e.quantity}`,
            `${e.price}`,
            `${e.drain}`,
            `${e.barCode}`,
          ];

          return setTestTable(data);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getAllData();
  }, []);
  // Header
  const header = {
    tableHead: [
      "Нэр",
      "Тоо",
      "Өртөг",
      "Үнэ",
      "Тоо",
      "Өртөг",
      "Үлдэгдэл",
      "Өртөг",
    ],
    widthArr: [100, 60, 80, 100, 120, 140, 160, 180],
  };
  const state = header;
  let rawPayload = [
    {
      _id: "62fbbc48fd2881af5a4e55aa",
      barCode: "6936380906813",
      bestSeller: false,
      createUser: "62fbbc03fd2881af5a4e559a",
      createdAt: "2022-08-16T15:48:24.189Z",
      drain: 20,
      id: "62fbbc48fd2881af5a4e55aa",
      name: "Huzur",
      photo: "photo_62fbbc48fd2881af5a4e55aa.jpg",
      price: 1500,
      quantity: 80,
      receipt: 100,
      unit: "ширхэг",
    },
    {
      _id: "62fbbcb1fd2881af5a4e55bf",
      barCode: "4550012125476",
      bestSeller: false,
      createUser: "62fbbc03fd2881af5a4e559a",
      createdAt: "2022-08-16T15:50:09.977Z",
      drain: 10,
      id: "62fbbcb1fd2881af5a4e55bf",
      name: "Calogne",
      photo: "photo_62fbbcb1fd2881af5a4e55bf.jpg",
      price: 56000,
      quantity: 20,
      receipt: 30,
      unit: "ширхэг",
    },
  ];

  const tableMap = (rawPayload) => {
    let colNames = Object.keys(rawPayload);
    let length = Object.values(rawPayload).length;

    let rTableObj = [];
    for (let i = 0; i < length; i++) {
      var entry = [];
      for (let j = 0; j < colNames.length; j++) {
        console.log([i._id], "psdanar");
        var name = colNames[j];
        entry[name] = rawPayload[name][i.name];
      }
      rTableObj.push(entry);
    }
    return rTableObj;
  };

  console.log(tableMap(rawPayload), "psda");
  // console.log(Object.keys(rawPayload));
  return (
    <View style={styles.container}>
      <ScrollView horizontal={true}>
        <View>
          <Table
            borderStyle={{
              borderWidth: 1,
              borderColor: "#C1C0B9",
              flexDirection: "column",
            }}
          >
            <Row
              data={["Нийт орлого", "Нийт борлуулалт", "Нийт үлдэгдэл"]}
              style={styles.header1}
              textStyle={styles.text}
              widthArr={[340, 260, 340]}
            />
            <Row
              data={state.tableHead}
              widthArr={state.widthArr}
              style={styles.header}
              textStyle={styles.text}
            />
          </Table>

          <ScrollView style={styles.dataWrapper}>
            <Table borderStyle={{ borderWidth: 1, borderColor: "#C1C0B9" }}>
              {data.map((e, index) => {
                return (
                  <Row
                    data={testTable}
                    widthArr={state.widthArr}
                    style={[
                      styles.row,
                      index % 2 && { backgroundColor: "#F7F6E7" },
                    ]}
                    textStyle={styles.text}
                  />
                );
              })}
            </Table>
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
};

export default BoughtRemainderScreen;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 10, backgroundColor: "#fff" },
  header: { height: 50, backgroundColor: "#537791" },
  header1: { height: 50, backgroundColor: "#cccccccc" },
  text: { textAlign: "center", fontWeight: "100" },
  dataWrapper: { marginTop: -1 },
  row: { height: 40, backgroundColor: "#E7E6E1" },
  singleHead: { width: 80, height: 40, backgroundColor: "#c8e1ff" },
});
