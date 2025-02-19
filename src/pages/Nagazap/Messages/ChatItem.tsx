import React from "react"
import { Avatar, Box, MenuItem, Paper, Typography, useMediaQuery } from "@mui/material"
import { NagaChat } from "../../../types/NagaChat"
import { MessageAuthor } from "../../Zap/MessageAuthor"
import { AudioPlayer } from "../../Washima/AudioComponents/AudioPlayer"
import { useFormatMessageTime } from "../../../hooks/useFormatMessageTime"
import { TrianguloFudido } from "../../Zap/TrianguloFudido"

interface ChatItemProps {
    chat: NagaChat
    onChatClick: (chat: NagaChat) => void
    active?: boolean
}

export const ChatItem: React.FC<ChatItemProps> = ({ chat, onChatClick, active }) => {
    const isMobile = useMediaQuery("(orientation: portrait)")
    const formatTime = useFormatMessageTime()

    return (
        <MenuItem sx={{ padding: 0, margin: 0, whiteSpace: "normal", borderRadius: "0.5vw" }} onClick={() => onChatClick(chat)}>
            <Paper
                elevation={active ? 15 : undefined}
                sx={{
                    flexDirection: "column",
                    gap: isMobile ? "2vw" : "0.5vw",
                    padding: isMobile ? "4vw" : "0.5vw",
                    position: "relative",
                    borderRadius: "0.5vw",
                    borderTopLeftRadius: 0,
                    color: "secondary.main",
                    flex: 1,
                }}
            >
                <MessageAuthor author={chat.name + " - " + chat.from} small />
                {(chat.lastMessage.type === "image" || chat.lastMessage.type === "sticker") && (
                    <Avatar
                        variant="rounded"
                        sx={{
                            width: "3vw",
                            height: "auto",
                            maxHeight: isMobile ? "80vw" : "20vw",
                            margin: "0 auto",
                        }}
                        src={chat.lastMessage.text}
                    />
                )}
                {(chat.lastMessage.type === "text" || chat.lastMessage.type === "button" || chat.lastMessage.type === "reaction") && (
                    <Typography
                        color="#fff"
                        sx={{
                            wordBreak: "break-all",
                            color: "text.secondary",
                            fontSize: chat.lastMessage.type === "reaction" ? "3rem" : undefined,
                            alignSelf: chat.lastMessage.type === "reaction" ? "center" : undefined,
                            maxHeight: "3vw",
                            textOverflow: "ellipsis",
                            overflow: "hidden",
                        }}
                    >
                        {chat.lastMessage.text}
                    </Typography>
                )}

                {chat.lastMessage.type === "audio" && (
                    <AudioPlayer
                        containerSx={{ width: undefined, height: isMobile ? undefined : "3vw", paddingBottom: isMobile ? "4vw" : undefined }}
                        media={{ source: chat.lastMessage.text, ext: chat.lastMessage.text.split(".")[chat.lastMessage.text.split(".").length - 1] }}
                    />
                )}

                <Box
                    sx={{
                        fontSize: isMobile ? "3vw" : "0.6vw",
                        marginLeft: "auto",
                        position:
                            chat.lastMessage.type === "audio" || chat.lastMessage.type === "sticker" || chat.lastMessage.type === "reaction"
                                ? "absolute"
                                : undefined,
                        right: "0.5vw",
                        bottom: "0.5vw",
                    }}
                >
                    {formatTime(new Date(Number(chat.lastMessage.timestamp)))}
                </Box>
                <TrianguloFudido alignment="left" color="#2a323c" />
            </Paper>
        </MenuItem>
    )
}
