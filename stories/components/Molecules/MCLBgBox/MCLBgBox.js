import "./_MCLBgBox.css";
import { createBaseParagraph } from "../../Atoms/p/BaseParagraph";
import { createMoleculePaddingBox } from "../PaddingBox/molecule-padding-box";

export const createMCLBgBox = ({
  text,
  bgColor,
  fgColor,
  hasPaddingBox = false,
  paddingTopUnits,
  paddingRightUnits,
  paddingBottomUnits,
  paddingLeftUnits,
  paddingTopUnitsDesktop,
  paddingRightUnitsDesktop,
  paddingBottomUnitsDesktop,
  paddingLeftUnitsDesktop,
}) => {
  const mclBgBox = document.createElement("div");
  mclBgBox.className = ["sh-molecule-bg-box"].join(" ");

  // set style attribute
  if (bgColor && !fgColor) {
    mclBgBox.setAttribute(
      "style",
      "--color-background-component-bgbox:" + bgColor + ";"
    );
  } else if (!bgColor && fgColor) {
    mclBgBox.setAttribute(
      "style",
      "--color-text-component-bgbox:" + fgColor + ";"
    );
  } else if (bgColor && fgColor) {
    mclBgBox.setAttribute(
      "style",
      "--color-background-component-bgbox:" +
        bgColor +
        "; --color-text-component-bgbox:" +
        fgColor +
        ";"
    );
  }

  if (hasPaddingBox) {
    mclBgBox.appendChild(
      createMoleculePaddingBox({
        text: text,
        paddingTopUnits: paddingTopUnits,
        paddingRightUnits: paddingRightUnits,
        paddingBottomUnits: paddingBottomUnits,
        paddingLeftUnits: paddingLeftUnits,
        paddingTopUnitsDesktop: paddingTopUnitsDesktop,
        paddingRightUnitsDesktop: paddingRightUnitsDesktop,
        paddingBottomUnitsDesktop: paddingBottomUnitsDesktop,
        paddingLeftUnitsDesktop: paddingLeftUnitsDesktop,
      })
    );

    return mclBgBox;
  } else {
    if (text) {
      // p
      mclBgBox.appendChild(
        createBaseParagraph({
          text: text,
        })
      );
    }

    return mclBgBox;
  }
};
