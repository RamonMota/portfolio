import {
    bgLightColor, contentLightColor, textLightColor, textGrayLightColor,
    bgDarkColor, contentDarkColor, textDarktColor, textGrayDarkColor
} from "./variaveis";

export const lightTheme ={
    body: bgLightColor,
    inside: contentLightColor,
    text: textLightColor,
    filter: '',

}
export const darkTheme ={
    body: bgDarkColor,
    inside: contentDarkColor,
    text: textDarktColor,
    filter: "invert(100%)",
}