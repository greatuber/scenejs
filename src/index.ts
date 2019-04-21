import Scene from "./Scene";
import SceneItem from "./SceneItem";
import Frame from "./Frame";
import Animator from "./Animator";

export { SceneItem, Frame, Animator };
export * from "./easing";
export * from "./presets";
export * from "./types";
export { OPTIONS, EVENTS, FIXED, ROLES } from "./consts";
export { setRole, setAlias } from "./utils";
export { Scene as default };
