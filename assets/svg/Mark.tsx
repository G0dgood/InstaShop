import { SvgXml } from "react-native-svg";

const mark = `<svg width="13" height="10" viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.6666 1.33334L4.33327 8.66667L0.999939 5.33334" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.6666 1.33334L4.33327 8.66667L0.999939 5.33334" stroke="black" stroke-opacity="0.6" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;
export const Mark = () => <SvgXml xml={mark} />;