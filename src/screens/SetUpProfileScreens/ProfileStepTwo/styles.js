import { StyleSheet, StatusBar } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  headerContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 25,
    paddingBottom: 10
  },
  headerTitle: {
    fontSize: 30,
    fontWeight: '600',
  },
  headerText: {
    fontSize: 20,
    lineHeight: 36
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 8,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    flex: 1
  },
  itemName: {
    fontSize: 16,
  },
  progressContainer: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    left: 0,
    right: 0,
    bottom: '15%',
  },
});
