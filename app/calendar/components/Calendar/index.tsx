import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import dayjs from "dayjs";
import { UseCalendar } from "../../useCalendar";
import { WeekNames } from "../../utils";

const Calendar: React.FC<UseCalendar> = (props) => {
  const {
    selectedDate,
    viewSelectedDate,
    viewMode,
    years,
    months,
    days,
    selectYear,
    selectMonth,
    selectDate,
    setViewMode,
    nextYearPage,
    prevYearPage,
    prevMonth,
    nextMonth,
  } = props;
  const [selectedYear, selectedMonth] = viewSelectedDate;

  return (
    <View style={styles.calendarComponent}>
      {/* Current selected date */}
      <View style={styles.header}>
        <View style={styles.headerInfo}>
          <TouchableOpacity onPress={() => setViewMode('month')}>
            <Text style={styles.dateInfo}>{dayjs(viewSelectedDate.join('/')).format('MMMM')}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setViewMode('year')}>
            <Text style={styles.dateInfo}>{dayjs(viewSelectedDate.join('/')).format('YYYY')}</Text>
          </TouchableOpacity>
        </View>
        {viewMode !== 'month' && (
          <View style={styles.headerBtns}>
            <TouchableOpacity onPress={viewMode === 'year' ? prevYearPage : prevMonth}>
              <Text style={styles.btnText}>Prev</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={viewMode === 'year' ? nextYearPage : nextMonth}>
              <Text style={styles.btnText}>Next</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>

      <View style={styles.content}>
        {viewMode === 'year' && (
          <View style={styles.grid}>
            {years.map((year) => (
              <TouchableOpacity
                key={year}
                style={[
                  styles.gridItem,
                  styles.yearItem,
                ]}
                onPress={() => selectYear(year.toString())}
              >
                <Text style={[
                  selectedYear === year.toString() && styles.selectedItem
                ]}>{year}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}

        {viewMode === 'month' && (
          <View style={styles.grid}>
            {months.map((month, index) => (
              <TouchableOpacity
                key={month}
                style={[
                  styles.gridItem,
                  styles.yearItem,
                ]}
                onPress={() => selectMonth(dayjs().month(index).format('MM'))}
              >
                <Text style={[
                  Number(selectedMonth) - 1 === index && styles.selectedItem
                ]}>{month}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}

        {viewMode === 'day' && (
          <View style={styles.grid}>
            {Array(7).fill(0).map((_, index) => (
              <View key={`week_name_${index}`} style={styles.weekItem}>
                <Text>{WeekNames[index]}</Text>
              </View>
            ))}
            {days.map((day) => (
              <TouchableOpacity
                key={day}
                style={[
                  styles.gridItem,
                  selectedDate === day && styles.selectedDayItem
                ]}
                onPress={() => selectDate(day)}
              >
                <Text style={[
                  selectedDate === day && styles.selectedDayItemText
                ]}>{day.split('-')[2]}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  calendarComponent: {
    fontFamily: 'Arial',
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 10,
    width: 380,
    fontSize: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ececec',
    paddingBottom: 15,
  },
  headerInfo: {
    flexDirection: 'row',
    gap: 16,
  },
  dateInfo: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  headerBtns: {
    flexDirection: 'row',
    gap: 16,
  },
  btnText: {
    color: '#007BFF',
  },
  content: {
    paddingTop: 15,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  gridItem: {
    textAlign: 'center',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    color: '#333',
    width: `${100/7}%`
  },
  selectedItem: {
    color: '#007BFF',
  },
  weekItem: {
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    color: '#999',
    width: `${100/7}%`
  },
  yearItem: {
    width: `${100/3}%`

  },
  selectedDayItem: {
    backgroundColor: '#007BFF',
    borderRadius: 50,
  },
  selectedDayItemText: {
    color: '#ffffff',
  }
});

export default Calendar;
