import "styled-components/native";
import theme from "../theme";

type ThemeType = typeof theme;

declare module "styled-components" {
    export interface DefaultTheme extends ThemeType {}
}
