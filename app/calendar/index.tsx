import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import useCalendar from './useCalendar'; // Custom useCalendar Hook
import Calendar from "./components/Calendar";
import dayjs from "dayjs";

const Index: React.FC = () => {
  const calendarProps = useCalendar();
  const { selectedDate } = calendarProps;

  return (
    <View style={styles.calendarDemo}>
      <View style={styles.calendarInfo}>
        <Text>Selected Date: {dayjs(selectedDate).format('MM/DD/YYYY dddd')}</Text>
      </View>
      <Calendar {...calendarProps} />
    </View>
  );
};

const styles = StyleSheet.create({
  calendarDemo: {
    width: '100%',
    height: '100%',
    padding: 30,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#f7f7f7',
  },
  calendarInfo: {
    marginBottom: 16,
    width: 380,
  },
});

export default Index;
