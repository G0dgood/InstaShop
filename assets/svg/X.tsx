import { SvgXml } from "react-native-svg";

const x = `<svg width="10" height="9" viewBox="0 0 10 9" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.6665 0.5L0.666504 8.5M0.666504 0.5L8.6665 8.5" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.6665 0.5L0.666504 8.5M0.666504 0.5L8.6665 8.5" stroke="black" stroke-opacity="0.6" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;
export const X = () => <SvgXml xml={x} />;