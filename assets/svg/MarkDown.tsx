import { SvgXml } from "react-native-svg";

const markdown = `<svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<mask id="mask0_1041_901" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="21" height="21">
<rect x="0.333252" y="0.5" width="20" height="20" fill="#D9D9D9"/>
</mask>
<g mask="url(#mask0_1041_901)">
<path d="M15.3333 8L10.3333 13L5.33325 8" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15.3333 8L10.3333 13L5.33325 8" stroke="black" stroke-opacity="0.6" stroke-linecap="round" stroke-linejoin="round"/>
</g>
</svg>
`;
export const MarkDown = () => <SvgXml xml={markdown} />;