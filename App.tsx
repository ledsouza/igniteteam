import { StatusBar } from "expo-status-bar";
import {
    useFonts,
    Roboto_400Regular,
    Roboto_700Bold,
} from "@expo-google-fonts/roboto";

import { ThemeProvider } from "styled-components/native";
import theme from "./src/theme";

import { Loading } from "@components/Loading";
import { Routes } from "@routes/index";

export default function App() {
    const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });
    return (
        <ThemeProvider theme={theme}>
            <StatusBar style="light" translucent />
            {fontsLoaded ? <Routes /> : <Loading />}
        </ThemeProvider>
    );
}
