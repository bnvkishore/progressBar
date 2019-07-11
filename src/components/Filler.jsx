import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

const useStyles = makeStyles(theme => ({
  filler: ({ width, color }) => ({
    width: `${width}%`,
    height: "100%",
    borderRadius: "inherit",
    background: `${color}`,
    textAlign: "center",
    lineHeight: "2.5"
  })
}));

function Filler(props) {
  const { percentage } = props;
  const [styleProps, setStyleProps] = useState({
    width: percentage,
    color: "#1DA598"
  });
  const classes = useStyles(styleProps);
  useEffect(() => {
    if (percentage < 0) {
      setStyleProps({ width: 0, color: "#1DA598" });
    } else if (percentage > 100) {
      setStyleProps({ width: 100, color: "#ff0000" });
    } else {
      setStyleProps({ width: percentage, color: "#1DA598" });
    }
  }, []);
  return (
    <div
      className={classes.filler}
      data-testid="percentvalue"
    >{`${percentage}%`}</div>
  );
}

Filler.propTypes = {
  percentage: PropTypes.number.isRequired
};
export default Filler;
