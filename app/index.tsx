import {StyleSheet, TouchableOpacity, Text} from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import {useRouter} from "expo-router";
import LinkGuide from "@/components/LinkGuide";

export default function Hello() {
  const router = useRouter()
  return (
    <ThemedView style={styles.titleContainer}>
      <ThemedText type="title">Hello World</ThemedText>
      <LinkGuide title="Calculator" onPress={() => {router.push('/calculator')}} />
      <LinkGuide title="Calendar" onPress={() => {router.push('/calendar')}} />
      <LinkGuide title="Time" onPress={() => {router.push('/time')}} />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    padding: 16
  },
});
