import React, { useState } from "react";
import {
  Image,
  View,
  TouchableOpacity,
  FlatList,
  Modal,
  Text,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";

import { styles } from "./styles";
import { colors } from "@/src/styles/colors";

import { Link } from "@/src/components/link";
import { Categories } from "@/src/components/categories";
import { Option } from "@/src/components/option";
import { categories } from "@/src/utils/categories";

export default function Home() {
  const [category, setCategory] = useState(categories[0].name)
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require("@/src/assets/logo.png")} style={styles.logo} />

        <TouchableOpacity onPress={() => router.navigate("/add")}>
          <MaterialIcons name="add" size={32} color={colors.gray[100]} />
        </TouchableOpacity>
      </View>
      <Categories onChange={setCategory} selected={category}/>

      <FlatList
        data={["1", "2", "3", "4", "5", "6"]}
        keyExtractor={(item) => item}
        renderItem={() => (
          <Link name="e" url="" onDetails={() => console.log("click")} />
        )}
        style={styles.links}
        contentContainerStyle={styles.linksContent}
        showsVerticalScrollIndicator={false}
      />

      <Modal visible={false} transparent>
        <View style={styles.modal}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalCategory}>Curso</Text>
              <TouchableOpacity>
                <MaterialIcons name="close" size={20} color={colors.gray[400]} />
              </TouchableOpacity>
            </View>

            <Text style={styles.modalLinkName}>MK</Text>
            <Text style={styles.modalUrl}>MK</Text>

            <View style={styles.modalFooter}>
              <Option name="Excluir" icon="delete" variant="secondary"/>
              <Option name="Abrir" icon="language"/>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}
