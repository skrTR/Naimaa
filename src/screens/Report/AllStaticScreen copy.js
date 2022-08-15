import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { api } from "../../../Constants";
import moment from "moment";
const AllStaticScreen = () => {
  const [data, setData] = useState([]);
  const getAllData = () => {
    axios
      .get(`${api}/api/v1/transactions/user?isBasket=true&limit=1000`)
      .then((res) => {
        console.log(res.data.data);
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
      <FlatList
        data={data}
        keyExtractor={(item, index) => index}
        renderItem={({ item }) => {
          return (
            <View>
              <View
                style={{
                  borderWidth: 0.5,
                  borderColor: "#cccccc",
                  marginTop: 10,
                }}
              />
              {item.type === "Орлого" && (
                <>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      marginHorizontal: 10,
                    }}
                  >
                    <View>
                      <Text
                        style={{
                          color: "green",
                          fontWeight: "bold",
                        }}
                      >
                        {item.type}
                      </Text>

                      {item.good && <Text>Нэр:{item.good.name}</Text>}
                    </View>
                    <Text style={{ fontWeight: "300" }}>
                      {moment(item.createdAt).format("YYYY-MM-DD hh:mm")}
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      marginHorizontal: 10,
                    }}
                  >
                    <Text>Төрөл: {item.incomeType} </Text>
                    <View>
                      <Text>
                        Анхны үлдэгдэл:{item.balanceGoodNumber - item.quantity}
                      </Text>
                      <Text
                        style={{
                          color: "green",
                          fontWeight: "bold",
                        }}
                      >
                        Нэмэгдсэн: +{item.quantity}
                      </Text>
                    </View>
                  </View>
                  <Text style={{ textAlign: "right", marginRight: 10 }}>
                    Эцсийн үлдэгдэл: {item.balanceGoodNumber}{" "}
                  </Text>
                  <View
                    style={{
                      borderWidth: 0.5,
                      borderColor: "#cccccc",
                      marginTop: 10,
                    }}
                  />
                </>
              )}
              {item.type === "Зарлага" && (
                <>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      marginHorizontal: 10,
                    }}
                  >
                    <View>
                      <Text
                        style={{
                          color: "red",
                          fontWeight: "bold",
                        }}
                      >
                        {item.type}
                      </Text>
                      {item.good && <Text>{item.good.name}</Text>}
                    </View>
                    <Text style={{ fontWeight: "300" }}>
                      {moment(item.createdAt).format("YYYY-MM-DD hh:mm")}
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      marginHorizontal: 10,
                    }}
                  >
                    <Text>Төрөл: {item.incomeType} </Text>
                    <View>
                      <Text>
                        Анхны үлдэгдэл:{item.balanceGoodNumber + item.quantity}
                      </Text>
                      <Text
                        style={{
                          color: "red",
                          fontWeight: "bold",
                        }}
                      >
                        Хасагдсан: -{item.quantity}
                      </Text>
                    </View>
                  </View>
                  <Text style={{ textAlign: "right", marginRight: 10 }}>
                    Эцсийн үлдэгдэл: {item.balanceGoodNumber}{" "}
                  </Text>
                  <View
                    style={{
                      borderWidth: 0.5,
                      borderColor: "#cccccc",
                      marginTop: 10,
                    }}
                  />
                </>
              )}
            </View>
          );
        }}
      />
    </View>
  );
};

export default AllStaticScreen;

const styles = StyleSheet.create({});
