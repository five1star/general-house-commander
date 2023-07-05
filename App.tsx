import { StatusBar } from "react-native";
import Navigation from "./components/Navigate/Navigation";
import { useEffect } from "react";
import { firebase } from "@react-native-firebase/database";

import { db } from "./firebaseConfig";

export default function App() {
  return <Navigation />;
}
