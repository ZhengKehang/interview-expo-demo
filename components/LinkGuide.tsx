import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons'; // For the right arrow icon

interface LinkGuideProps {
  title: string;
  onPress: () => void;
}

const LinkGuide: React.FC<LinkGuideProps> = ({ title, onPress }) => {

  return (
    <TouchableOpacity style={styles.linkContainer} onPress={onPress}>
      <Text style={styles.pageName}>{title}</Text>
      <Ionicons name="chevron-forward" size={24} color="black" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  linkContainer: {
    flexDirection: 'row', // Align left and right elements
    justifyContent: 'space-between', // Space between page name and arrow
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderColor: '#ececec',
  },
  pageName: {
    fontSize: 16,
    color: '#333',
  },
});

export default LinkGuide;
