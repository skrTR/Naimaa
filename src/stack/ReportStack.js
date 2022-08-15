import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import MyBackButton from "../components/MyBackButton";
import ProductDetailScreen from "../screens/List/ProductDetailScreen";
import AllStaticScreen from "../screens/Report/AllStaticScreen";
import BillDetailScreen from "../screens/Report/BillDetailScreen";
import IncomeStaticScreen from "../screens/Report/IncomeStaticScreen";
import OutcomeStaticScreen from "../screens/Report/OutcomeStaticScreen";
import ReportScreen from "../screens/Report/ReportScreen";

const ReportStack = () => {
  const ReportStack = createNativeStackNavigator();
  return (
    <ReportStack.Navigator>
      <ReportStack.Screen
        name="ReportScreen"
        component={ReportScreen}
        options={{ headerShown: false }}
      />
      <ReportStack.Screen
        name="BillDetailScreen"
        component={BillDetailScreen}
        options={{
          presentation: "formSheet",
          title: "Билл дэлгэрэнгүй",
          headerLeft: () => <MyBackButton />,
        }}
      />
      <ReportStack.Screen
        name="AllStaticScreen"
        component={AllStaticScreen}
        options={{
          presentation: "formSheet",
          title: "Бүх тайлан",
          headerLeft: () => <MyBackButton />,
        }}
      />
      <ReportStack.Screen
        name="IncomeStaticScreen"
        component={IncomeStaticScreen}
        options={{
          presentation: "formSheet",
          title: "Орлогын тайлан",
          headerLeft: () => <MyBackButton />,
        }}
      />
      <ReportStack.Screen
        name="OutcomeStaticScreen"
        component={OutcomeStaticScreen}
        options={{
          presentation: "formSheet",
          title: "Зарлагын тайлан",
          headerLeft: () => <MyBackButton />,
        }}
      />
      <ReportStack.Screen
        name="ProductDetailScreen"
        component={ProductDetailScreen}
        options={{
          presentation: "formSheet",
          title: "Барааны дэлгэрэнгүй",
          headerLeft: () => <MyBackButton />,
        }}
      />
    </ReportStack.Navigator>
  );
};

export default ReportStack;
