import { styled } from "@mui/material/styles";
import Switch from "@mui/material/Switch";

const MuiToggleSwitch = styled(Switch)(({ theme }) => ({
  //   width: 120,
  //   height: 67,
  padding: 7,
  "& .MuiSwitch-switchBase": {
    padding: 9,
    "&.Mui-checked": {
      //   transform: 'translateX(53px)',
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: "#5ba3d3",
        opacity: 1,
      },
      "& .MuiSwitch-thumb:before": {
        content: '"YES"',
        color: "#fff",
        left: -6,
        top: 11,
      },
    },
    "& .MuiSwitch-thumb:before": {
      content: '"NO"',
      color: "white",
      position: "absolute",
      left: 30,
      top: 11,
      fontSize: 10,
    },
  },
  "& .MuiSwitch-thumb": {
    // width: 50,
    // height: 50,
    borderRadius: "50%",
    backgroundColor: "#ccc",
  },
  "& .MuiSwitch-track": {
    borderRadius: 33.5,
    backgroundColor: "#15273b",
    opacity: 1,
  },
}));

export default MuiToggleSwitch;
