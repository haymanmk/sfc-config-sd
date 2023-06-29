import Head from "next/head";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Container,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  Unstable_Grid2 as Grid,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import { Layout as DashboardLayout } from "src/layouts/dashboard/layout";
import { SettingsAutocomplete } from "src/sections/settings/settings-autocomplete";
import { useCallback, useEffect, useState } from "react";
import { useGetDeviceInfo } from "src/hooks/use-get-device-info";

const now = new Date();

const Page = () => {
  const deviceInfo = useGetDeviceInfo();
  const [cartInfo, setCartInfo] = useState({});
  const [alertOpen, setAlertOpen] = useState(false);
  const [alertMsg, setAlerMsg] = useState("");
  const domain = window.location.hostname;
  const port = 3001;
  const url = `http://${domain}:${port}/config`;

  useEffect(() => {
    if (deviceInfo?.length) {
      if (cartInfo == null) setCartInfo(cartInfo);
      else if (Object.keys(cartInfo).length === 0) setCartInfo(deviceInfo[0]);
    }
  }, [deviceInfo]);

  const handleAlert = useCallback(
    (msg) => {
      setAlertOpen(true);
      setAlerMsg(msg.toString());
    },
    [alertMsg]
  );

  const handleBtnWriteClick = useCallback(
    (event) => {
      if (cartInfo == null) {
        console.error("cartInfo shall not be empty, before writing to SD card.");
        handleAlert("Select Cart ID before Write SD.");
        return;
      }
      const body = {
        cmd: "write",
        msg: cartInfo,
      };

      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      })
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          if (res.status === "success") {
            handleAlert("Write Successfully. Power off before Pulling SD Card Out.");
          }
        })
        .catch((err) => {
          console.error(err);
          handleAlert(err);
        });
    },
    [cartInfo]
  );
  const handleBtnPoweroffClick = useCallback((event) => {
    const body = {
      cmd: "poweroff",
      msg: "",
    };

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((res) => res.json)
      .then((res) => {
        handleAlert("Power Off...");
      })
      .catch((err) => {
        console.error(err);
        handleAlert(err);
      });
  }, []);

  const handleCartIDChange = useCallback(
    (event, value) => {
      setCartInfo(value);
    },
    [cartInfo]
  );

  const handleAlertClose = useCallback(() => {
    setAlertOpen(false);
  }, []);

  return (
    <>
      <Head>
        <title>SFC | GARMIN</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth="lg">
          <Stack spacing={3}>
            <Stack direction="row" justifyContent="space-between" spacing={4}>
              <Typography variant="h4">SD Card Config</Typography>
              <Stack direction="row" spacing={2}>
                <Button variant="contained" onClick={handleBtnWriteClick}>
                  Write
                </Button>
                <Button variant="contained" onClick={handleBtnPoweroffClick}>
                  Power off
                </Button>
              </Stack>
            </Stack>
            <Card>
              <CardHeader title="Cart ID" subheader="[ Org. ] - sfc - [ Cart ID ]   [ Up/Down ]" />
              <Divider />
              <CardContent sx={{ display: "flex", justifyContent: "center" }}>
                <Stack
                  direction="column"
                  justifyContent="center"
                  spacing={3}
                  sx={{ minWidth: 600 }}
                >
                  {
                    <SettingsAutocomplete
                      required
                      id="input_cart_id"
                      value={cartInfo}
                      onChange={handleCartIDChange}
                      options={deviceInfo}
                      optionKeys={["cartID", "position"]}
                      textFieldLabel="Cart ID"
                      groupBy={(option) => option.org}
                    />
                  }
                </Stack>
              </CardContent>
            </Card>
            <Card>
              <CardHeader title="Device Info." />
              <Divider />
              <CardContent sx={{ display: "flex", justifyContent: "center" }}>
                <Table>
                  <TableBody>
                    {cartInfo &&
                      Object.entries(cartInfo).map(([key, value]) => {
                        return (
                          <TableRow>
                            <TableCell>{key}</TableCell>
                            <TableCell>{value.toString()}</TableCell>
                          </TableRow>
                        );
                      })}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </Stack>
        </Container>
      </Box>
      <Dialog
        open={alertOpen}
        onClose={handleAlertClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Alert"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">{alertMsg}</DialogContentText>
        </DialogContent>
      </Dialog>
    </>
  );
};

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
