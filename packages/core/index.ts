import { makeInstaller } from "@HsLap-element/utils";
import '@HsLap-element/theme/index.css';
import components from "./components";

const installer = makeInstaller(components);

export * from "@HsLap-element/components";
export default installer;