import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ScreenA from "../../views/ScreenA";
import ScreenB from "../../views/ScreenB";

const BottomTab = createBottomTabNavigator();
export default function BottomTabNavigator() {
  return (
    <BottomTab.Navigator initialRouteName="ScreenA">
      <BottomTab.Screen name="미션" component={ScreenA} />
      <BottomTab.Screen name="평가" component={ScreenB} />
    </BottomTab.Navigator>
  );
}
