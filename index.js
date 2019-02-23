import React from "react";
import { AppRegistry, StyleSheet, Text, View, VrButton } from "react-360";

const demoProps = [
  {
    name: "justifyContent",
    values: ["flex-start", "flex-end", "center", "stretch", "baseline"]
  },
  {
    name: "alignItems",
    values: ["flex-start", "flex-end", "center", "stretch", "baseline"]
  },
  {
    name: "flexDirection",
    values: ["column", "row"]
  }
];
export default class Layout2d extends React.Component {
  state = {
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flexDirection: "column"
  };
  render() {
    return (
      <View style={styles.panel}>
        <View style={styles.controls}>
          {demoProps.map(prop => (
            <View style={styles.propContainer} key={prop.name}>
              <Text style={styles.propLable}>{prop.name}:</Text>
              <View style={styles.controlsButtons}>
                {prop.values.map(value => (
                  <VrButton
                    key={value}
                    style={{
                      borderWidth: 2,
                      borderColor:
                        this.state[prop.name] === value ? "blue" : "black"
                    }}
                    onClick={() => {
                      this.setState({ [prop.name]: value });
                    }}
                  >
                    <Text>{value}</Text>
                  </VrButton>
                ))}
              </View>
            </View>
          ))}
        </View>
        <View style={styles.demoContainer}>
          <View
            style={{
              height: 400,
              width: 400,
              justifyContent: this.state.justifyContent,
              alignItems: this.state.alignItems,
              flexDirection: this.state.flexDirection
            }}
          >
            <Text style={{ color: "red", backgroundColor: "gray", margin: 2 }}>
              Red
            </Text>
            <Text style={{ color: "green", backgroundColor: "gray" }}>
              Green
            </Text>
            <Text style={{ color: "blue", backgroundColor: "gray", margin: 2 }}>
              Blue
            </Text>
            <Text
              style={{ color: "yellow", backgroundColor: "gray", margin: 2 }}
            >
              Yellow
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  controls: {
    justifyContent: "flex-start",
    alignItems: "flex-start"
  },
  controlsButtons: {
    width: 350,
    justifyContent: "space-between",
    flexDirection: "row"
  },
  propContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: 600
  },
  propLable: {
    fontSize: 30
  },
  panel: {
    // Fill the entire surface
    width: 1000,
    height: 600,
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    justifyContent: "center",
    alignItems: "center"
  },
  demoContainer: {
    padding: 20,
    backgroundColor: "#000000",
    borderColor: "#639dda",
    borderWidth: 2
  }
});

AppRegistry.registerComponent("layout-2d", () => Layout2d);
