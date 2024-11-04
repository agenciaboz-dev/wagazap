import React from "react"
import { Box } from "@mui/material"
import { SentMessageLog } from "../../../types/server/Meta/WhatsappBusiness/Logs"

interface LogContainerProps {
    log: SentMessageLog
}

export const LogContainer: React.FC<LogContainerProps> = ({ log }) => {
    const date = new Date(Number(log.timestamp)).toLocaleString("pt-br")
    const number = log.data.contacts[0].wa_id.slice(2)

    return (
        <Box sx={{ alignItems: "center", gap: "1vw", justifyContent: "space-between" }}>
            <Box sx={{ alignItems: "center", gap: "1vw" }}>
                <Box
                    sx={{
                        bgcolor: log.data.messages[0].message_status == "accepted" ? "success.main" : "warning.main",
                        width: "1vw",
                        height: "1vw",
                        borderRadius: "100%",
                    }}
                />
                <Box>{number}</Box>
            </Box>
            <Box sx={{ color: "secondary.main", fontSize: "0.8rem" }}>{date}</Box>
        </Box>
    )
}
