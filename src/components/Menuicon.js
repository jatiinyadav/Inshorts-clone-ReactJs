import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
// import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from "@material-ui/icons/Menu";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import categories from "../data/categories";

const useStyles = makeStyles({
  list: {
    width: 200,
    paddingTop: 20,
    paddingLeft: 10,
    paddingRight: 10,
  },
  fullList: {
    width: "auto",
  },
});

export default function TemporaryDrawer({ setcategory }) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });

  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          type: prefersDarkMode ? "dark" : "light",
        },
      }),
    [prefersDarkMode]
  );

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      {/* <h2>English : Hindi</h2> */}
      {/* <Divider /> */}
      <p>Categories</p>
      <List>
        {categories.map((text, index) => (
          <ListItem
            button
            key={text}
            onClick={() => {
              setcategory(text);
            }}
            style={{
              textTransform: "capitalize",
              height: "40px",
              borderRadius: 5,
            }}
          >
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div>
      <React.Fragment key={"left"}>
        <Button onClick={toggleDrawer("left", true)}>
          <MenuIcon />
        </Button>

        <ThemeProvider theme={theme}>
          <Drawer
            anchor={"left"}
            open={state["left"]}
            onClose={toggleDrawer("left", false)}
          >
            {list("left")}
          </Drawer>
        </ThemeProvider>
      </React.Fragment>
    </div>
  );
}
