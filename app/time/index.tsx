import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {useRequest} from 'ahooks';
import {getServerTime} from '../apis';
import dayjs from 'dayjs';

const Index = React.memo(() => {
  const {data, refresh} = useRequest(getServerTime, {
    manual: true
  });

  useEffect(() => {
    refresh()
    const intervalId = setInterval(() => {
      refresh();
    }, 1000);
    return () => clearInterval(intervalId);
  }, [refresh]);

  return (
    <View style={{padding: 16}}>
      <Text style={{fontSize: 16}}>服务器时间</Text>
      <Text style={{fontSize: 18, lineHeight: 40}}>{dayjs(data?.data).format('YYYY/MM/DD HH:mm:ss')}</Text>
    </View>
  );
});

export default Index;
