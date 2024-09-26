import { SvgXml } from "react-native-svg";

const ellipse = `<svg width="5" height="4" viewBox="0 0 5 4" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="2.6665" cy="2" r="2" fill="white"/>
<circle cx="2.6665" cy="2" r="2" fill="black" fill-opacity="0.6"/>
</svg>
`;
export const Ellipse = () => <SvgXml xml={ellipse} />;