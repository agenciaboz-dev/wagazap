import React from "react"
import { Box, Grid, useMediaQuery } from "@mui/material"
import { Header } from "../../components/Header"
import { backgroundStyle } from "../../style/background"
import { Title2 } from "../../components/Title"
import { nagazap_notifications, washima_notifications } from "./notifications_list"
import { NotificationSwitch } from "./NotificationSwitch"

interface SettingsProps {}

export const Settings: React.FC<SettingsProps> = ({}) => {
    const isMobile = useMediaQuery("(orientation: portrait)")
    return (
        <Box sx={backgroundStyle}>
            <Header />

            <Box sx={{ padding: "2vw", flexDirection: "column", gap: "1vw" }}>
                <Grid container columns={isMobile ? 1 : 2} spacing={"1vw"}>
                    <Grid item xs={1}>
                        <Title2 name="Notificações - Washima" />
                        {washima_notifications.map((item) => (
                            <NotificationSwitch key={item.event} notification={item} />
                        ))}
                    </Grid>
                    <Grid item xs={1}>
                        <Title2 name="Notificações - Nagazap" />
                        {nagazap_notifications.map((item) => (
                            <NotificationSwitch key={item.event} notification={item} />
                        ))}
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}
