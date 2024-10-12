import {StyleSheet, View} from 'react-native';
import Box from './Box';
export default function Flexbox() {
  return (
    <View style={styles.container}>
      <Box style={[styles.boxy, {backgroundColor: '#ab9156'}]}>Box 4</Box>
      <Box style={[styles.boxy, {backgroundColor: '#6b0803'}]}>Box 5</Box>
      <Box style={[styles.boxy, {backgroundColor: '#1c4c56'}]}>Box 6</Box>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    borderWidth: 6,
    borderColor: 'red',
  },
  boxy: {
    flex: 1,
  },
});
