import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
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
                  <View>
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <Text>{item.type}</Text>
                      <Text>{moment(item.createdAt).format("YYYY-MM-DD")}</Text>
                    </View>
                    {item.good && (
                      <>
                        <Image
                          source={{ uri: `${api}/upload/${item.good.photo}` }}
                          style={{ width: 50, height: 50, borderRadius: 10 }}
                        />
                        <Text>{item.good.name}</Text>
                      </>
                    )}
                  </View>
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
