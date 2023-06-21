import { View, StyleSheet, Dimensions } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";

const { height: SCREEN_HEIGHT } = Dimensions.get("window");

const BottomSheet = () => {
  const translateY = useSharedValue(0);

  const gesture = Gesture.Pan().onUpdate((event) => {
    console.log(event);
    translateY.value = event.translationY;
  });

  const bottomStyleStyleGesture = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
  }));

  return (
    <GestureDetector gesture={gesture}>
      <Animated.View style={[styles.container, bottomStyleStyleGesture]}>
        <View style={styles.line} />
      </Animated.View>
    </GestureDetector>
  );
};

const styles = StyleSheet.create({
  container: {
    height: SCREEN_HEIGHT,
    width: "100%",
    backgroundColor: "white",
    position: "absolute",
    top: SCREEN_HEIGHT / 1.5,
    borderRadius: 25,
  },
  line: {
    alignSelf: "center",
    backgroundColor: "gray",
    width: 75,
    height: 4,
    borderRadius: 2,
    marginVertical: 15,
  },
});

export default BottomSheet;
