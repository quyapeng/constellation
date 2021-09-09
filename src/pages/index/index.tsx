import * as React from "react";
import { View, Text, Image } from "remax/wechat";
import styles from "./index.css";

export default () => {
  return (
    <View className={styles.app}>
      <View className={styles.header}>
        <Image src="../imgs/banner.png" />
      </View>
    </View>
  );
};
