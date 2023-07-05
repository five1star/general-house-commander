import { StyleSheet, Text, View } from "react-native";

import { db } from "../../firebaseConfig";
import { useEffect, useState } from "react";
import { collection, getDocs, setDoc } from "firebase/firestore";

export default function ScreenA() {
  const [name, setName] = useState("");

  useEffect(() => {
    getDocs(collection(db, "test"))
      .then((snapshot) =>
        snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
      )
      .then((data: any) => {
        if (data.length) setName(data[0]?.name);
      });
  }, []);

  return (
    <View style={styles.container}>
      <Text>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
