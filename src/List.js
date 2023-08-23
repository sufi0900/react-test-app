import * as React from "react";

import Box from "@mui/material/Box";
import List from "@mui/material/List";

import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MosqueIcon from "@mui/icons-material/Mosque";
import TodayIcon from "@mui/icons-material/Today";
import FlagIcon from "@mui/icons-material/Flag";
import CodeIcon from "@mui/icons-material/Code";
import InfoIcon from "@mui/icons-material/Info";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import AbcIcon from "@mui/icons-material/Abc";
import { Facebook, LanguageOutlined, Mail } from "@mui/icons-material";
import { ListItemButton } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";

export default function InteractiveList() {
  const [secondary, setSecondary] = React.useState(false);
  AOS.init();
  return (
    <Box sx={{ flexGrow: 1, overflow: "auto" }}>
      <FormGroup row>
        <FormControlLabel
          control={
            <Checkbox
              checked={secondary}
              onChange={(event) => setSecondary(event.target.checked)}
            />
          }
          label="Show Basic info"
        />
      </FormGroup>
      <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
        Basic Info
      </Typography>
      <Grid container spacing={2} sx={{ display: "flex", overflow: "auto" }}>
        <Grid item xs={6} md={6} sm={12} lg={12}>
          <Box
            sx={{
              display: "flex",
              alignContent: "space-between",
              gap: "60px",
            }}
          >
            <Grid item lg={12} sm={12}>
              <List>
                <ListItemButton>
                  <ListItemIcon className="ListItemText">
                    <AbcIcon />
                  </ListItemIcon>
                  <ListItemText
                    className="ListItemText"
                    primary={"Full Name"}
                    secondary={secondary ? "SuFian Mustafa" : null}
                  />
                </ListItemButton>
                <ListItemButton>
                  <ListItemIcon className="ListItemText">
                    <TodayIcon />
                  </ListItemIcon>
                  <ListItemText
                    className="ListItemText"
                    primary={"Age"}
                    secondary={secondary ? "26" : null}
                  />
                </ListItemButton>
                <ListItemButton>
                  <ListItemIcon className="ListItemText">
                    <FlagIcon />
                  </ListItemIcon>
                  <ListItemText
                    className="ListItemText"
                    primary={"Country"}
                    secondary={secondary ? "Pakistan" : null}
                  />
                </ListItemButton>
              </List>
            </Grid>
            <Grid item lg={12} sm={12}>
              <List>
                <ListItemButton>
                  <ListItemIcon className="ListItemText">
                    <MosqueIcon />
                  </ListItemIcon>
                  <ListItemText
                    className="ListItemText"
                    primary={"Religion"}
                    secondary={secondary ? "Muslim" : null}
                  />
                </ListItemButton>
                <ListItemButton>
                  <ListItemIcon className="ListItemText">
                    <CodeIcon />
                  </ListItemIcon>
                  <ListItemText
                    className="ListItemText"
                    primary={"Interst"}
                    secondary={secondary ? "Web Development" : null}
                  />
                </ListItemButton>
                <ListItemButton>
                  <ListItemIcon className="ListItemText">
                    <InfoIcon />
                  </ListItemIcon>
                  <ListItemText
                    className="ListItemText"
                    primary={"Experience"}
                    secondary={secondary ? "1year+" : null}
                  />
                </ListItemButton>
              </List>
            </Grid>
            <Grid item lg={12} sm={12}>
              <List sx={{ overflow: "auto" }}>
                <ListItemButton>
                  <ListItemIcon className="ListItemText">
                    <LocalPhoneIcon />
                  </ListItemIcon>
                  <ListItemText
                    className="ListItemText"
                    primary={"Phone Number"}
                    secondary={secondary ? "+923177652064" : null}
                  />
                </ListItemButton>
                <ListItemButton>
                  <ListItemIcon className="ListItemText">
                    <Mail />
                  </ListItemIcon>
                  <ListItemText
                    className="ListItemText"
                    primary={"Email"}
                    secondary={secondary ? "sufianmustafa0900@gmail.com" : null}
                  />
                </ListItemButton>
                <ListItemButton>
                  <ListItemIcon className="ListItemText">
                    <Facebook />
                  </ListItemIcon>
                  <ListItemText
                    className="ListItemText"
                    primary={"Facebook"}
                    secondary={secondary ? "Link" : null}
                  />
                </ListItemButton>
              </List>
            </Grid>
            <Grid item lg={12} sm={12}>
              <List sx={{ overflow: "auto" }}>
                <ListItemButton>
                  <ListItemIcon className="ListItemText">
                    <SportsEsportsIcon />
                  </ListItemIcon>
                  <ListItemText
                    className="ListItemText"
                    primary={"Hobby"}
                    secondary={secondary ? "Video Games" : null}
                  />
                </ListItemButton>
                <ListItemButton>
                  <ListItemIcon className="ListItemText">
                    <LanguageOutlined />
                  </ListItemIcon>
                  <ListItemText
                    className="ListItemText"
                    primary={"Language"}
                    secondary={secondary ? "English & Urdu" : null}
                  />
                </ListItemButton>
              </List>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
