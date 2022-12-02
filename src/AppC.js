import { Box, Button, Container } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";

class AppClassComp extends React.Component {
  state = {
    result: [
      95, 25, 317, 331, 589, 312, 495, 610, 74, 149, 37, 122, 534, 199, 415,
      598, 429, 558, 613, 25, 225, 468, 505, 304, 110, 417, 223, 489, 402, 428,
      333, 179, 615, 339, 208, 112, 649, 269, 302, 302, 54, 527, 269, 678, 523,
      593, 455, 279, 308, 360, 55, 647, 232, 638, 165, 310, 530, 187, 666, 492,
      292, 225, 651, 393, 579, 562, 506, 364, 344, 505, 311, 214, 240, 201, 127,
      208, 459, 440, 366, 523, 415, 454, 419, 690, 220, 155, 360, 497, 135, 105,
      467, 152, 231, 600, 214, 151, 118, 696, 569, 409,
    ],
    ans: [],
    intervalId: 0,
    firstEle: null,
    secondEle: null,
  };
  constructor() {
    super();
    this.arr = [
      95, 25, 317, 331, 589, 312, 495, 610, 74, 149, 37, 122, 534, 199, 415,
      598, 429, 558, 613, 25, 225, 468, 505, 304, 110, 417, 223, 489, 402, 428,
      333, 179, 615, 339, 208, 112, 649, 269, 302, 302, 54, 527, 269, 678, 523,
      593, 455, 279, 308, 360, 55, 647, 232, 638, 165, 310, 530, 187, 666, 492,
      292, 225, 651, 393, 579, 562, 506, 364, 344, 505, 311, 214, 240, 201, 127,
      208, 459, 440, 366, 523, 415, 454, 419, 690, 220, 155, 360, 497, 135, 105,
      467, 152, 231, 600, 214, 151, 118, 696, 569, 409,
    ];
  }

  sleep = (milliseconds) => {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  };

  bblSort = (arr) => {
    for (var i = 0; i < arr.length; i++) {
      for (var j = 0; j < arr.length - i - 1; j++) {
        this.setState({ firstEle: j });
        this.setState({ secondEle: j + 1 });
        if (arr[j] > arr[j + 1]) {
          var temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
          return arr;
        }
      }
    }
  };

  initialBblSort = (arr) => {
    for (var i = 0; i < arr.length; i++) {
      for (var j = 0; j < arr.length - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          var temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
    return arr;
  };

  temp = (arr) => {
    const res = this.bblSort(arr);
    this.setState({ result: res });
    if (JSON.stringify(res) === JSON.stringify(this.initialBblSort(this.arr))) {
      clearInterval(this.state.intervalId);
      return;
    } else {
      console.log(this.state.result);
    }
  };

  temp2 = () => {
    const myInterval = setInterval(() => {
      this.temp(this.state.result);
      console.log("i,j", this.state.firstEle, this.state.secondEle);
    }, 10);
    this.setState((prevState) => {
      return {
        ...prevState,
        intervalId: myInterval,
      };
    });
  };

  render() {
    const { result } = this.state;
    return (
      <>
        <Container fixed>
          <Button onClick={() => this.temp2(this.arr)}>Click</Button>
          <div
            style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
          >
            <AnimatePresence>
              {result?.map((item, id) => (
                <motion.div
                  key={id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1 }}
                >
                  <Box
                    sx={{
                      width: 10,
                      height: item,
                      margin: 0.09,
                      background: this.state.firstEle === id ? "white" : "gray",
                    }}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </Container>
      </>
    );
  }
}

export default AppClassComp;
