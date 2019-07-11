import React, { useState, useEffect } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import {
  Container,
  Paper,
  Box,
  Button,
  Typography,
  Select,
  MenuItem
} from "@material-ui/core";
import Filler from "../components/Filler";

const useStyles = makeStyles(theme => ({
  root: {
    height: "400px",
    marginTop: "10%",
    paddingTop: "10%"
  },
  progressBar: {
    margin: theme.spacing(3),
    position: "relative",
    height: "40px",
    width: "80%",
    borderRadius: "10px",
    border: "1px solid #000",
    top: "20%"
  },
  button: {
    margin: theme.spacing(1),
    display: "inline-flex"
  },
  select: {
    marginLeft: theme.spacing(4),
    width: "110px"
  }
}));

function ProgressBar() {
  const classes = useStyles();
  const [bars, setBars] = useState([0, 0, 0, 0]);
  const [buttonsList, setButtonsList] = useState([1, 1]);
  const [limit, setLimit] = useState(null);
  const [selectedBar, setSelectedBar] = useState(0);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get("http://pb-api.herokuapp.com/bars");
      setButtonsList(response.data.buttons);
      setBars(response.data.bars);
      setLimit(response.data.limit);
    }
    fetchData();
  }, []);

  const clickHandler = btn => event => {
    const maxLimit =
      bars[selectedBar] + btn > limit ? limit : bars[selectedBar] + btn;
    const updatedBars = Object.assign([], bars, {
      [selectedBar]: maxLimit < 0 ? 0 : maxLimit
    });
    setBars(updatedBars);
  };
  const handleChange = () => event => {
    setSelectedBar(event.target.value);
  };
  return (
    <Container maxWidth="sm">
      <Paper className={classes.root}>
        <Typography variant="h4" align="center">
          Progress bar Demo
        </Typography>
        <div id="progressBarContainer">
          {bars.map((value, index) => (
            <div
              data-testid={`progressBar${index}`}
              key={`bar-${value}${Math.random()}`}
              className={classes.progressBar}
            >
              <Filler percentage={value} />
            </div>
          ))}
        </div>
        <Box className={classes.box}>
          <Select
            className={classes.select}
            value={selectedBar}
            onChange={handleChange()}
          >
            {bars &&
              bars.map((bar, index) => {
                return (
                  <MenuItem value={index} key={`option-${bar}${Math.random()}`}>
                    #Option {index + 1}
                  </MenuItem>
                );
              })}
          </Select>
          {buttonsList.map((btn, index) => (
            <div
              data-testid={`button${index}`}
              key={`button-${btn}${Math.random()}`}
              className={classes.button}
            >
              <Button variant="outlined" onClick={clickHandler(btn)}>
                {btn}
              </Button>
            </div>
          ))}
        </Box>
      </Paper>
    </Container>
  );
}

export default ProgressBar;
