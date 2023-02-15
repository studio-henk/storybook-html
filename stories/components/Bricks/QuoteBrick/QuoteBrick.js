import "./quote-brick.css";
import { createMCLBgBox } from "../../Molecules/MCLBgBox/MCLBgBox";
import { createMoleculePaddingBox } from "../../Molecules/PaddingBox/molecule-padding-box";

export const QuoteBrick = ({
  quoteText = "To Be or Not To Be",
  quoteMarks = false,
  quoteLink,
  quoteCitation,
  quoteJobtitle,
  lang,
  id,
  bgColor = "var(--color-accent10)",
  fgColor = "var(--color-henk-white)",
  paddingTopUnits = 11,
  paddingRightUnits = 6,
  paddingBottomUnits = 10,
  paddingLeftUnits = 6,
  paddingTopUnitsDesktop = 22,
  paddingRightUnitsDesktop = 66,
  paddingBottomUnitsDesktop = 17,
  paddingLeftUnitsDesktop = 66,
}) => {
  const QuoteBrick = document.createElement("div");
  QuoteBrick.className = ["quote-brick"].join(" ");

  if (lang) {
    QuoteBrick.lang = lang;
  }

  if (id) {
    QuoteBrick.id = id;
  }

  // bgBox
  const bgBox = createMCLBgBox({
    bgColor: bgColor,
    fgColor: fgColor,
  });

  // paddingBox
  const paddingBox = createMoleculePaddingBox({
    paddingTopUnits: paddingTopUnits,
    paddingRightUnits: paddingRightUnits,
    paddingBottomUnits: paddingBottomUnits,
    paddingLeftUnits: paddingLeftUnits,
    paddingTopUnitsDesktop: paddingTopUnitsDesktop,
    paddingRightUnitsDesktop: paddingRightUnitsDesktop,
    paddingBottomUnitsDesktop: paddingBottomUnitsDesktop,
    paddingLeftUnitsDesktop: paddingLeftUnitsDesktop,
  });

  // component-layout-box
  const layoutBox = document.createElement("div");
  layoutBox.className = ["component__layout-box"].join(" ");

  // quote__text
  const quoteTextElement = document.createElement("p");
  quoteTextElement.className = ["quote__text"].join(" ");
  quoteTextElement.innerHTML = quoteText;

  const quoteLinkElement = document.createElement("a");
  quoteLinkElement.className = ["quote__link"].join(" ");

  const quoteMarksElement = document.createElement("blockquote");
  quoteMarksElement.className = ["quote__blockquote"].join(" ");

  if (quoteMarks) {
    if (quoteLink) {
      quoteLinkElement.appendChild(quoteTextElement);
      quoteLinkElement.href = quoteLink;
      quoteMarksElement.appendChild(quoteLinkElement);
    } else {
      quoteMarksElement.appendChild(quoteTextElement);
    }
    layoutBox.appendChild(quoteMarksElement);
  } else {
    if (quoteLink) {
      quoteLinkElement.appendChild(quoteTextElement);
      quoteLinkElement.href = quoteLink;
      layoutBox.appendChild(quoteLinkElement);
    } else {
      // add to layoutbox
      layoutBox.appendChild(quoteTextElement);
    }
  }

  // quote__citation
  if (quoteCitation) {
    const quoteMeta = document.createElement("div");
    quoteMeta.className = ["quote__meta"].join(" ");

    if (quoteMarks) {
      quoteMarksElement.appendChild(quoteMeta);
    } else {
      layoutBox.appendChild(quoteMeta);
    }

    const quoteCitationElement = document.createElement("p");
    quoteCitationElement.className = ["quote__citation"].join(" ");
    quoteCitationElement.innerText = quoteCitation;

    // if jobtitle
    const quoteJobtitleElement = document.createElement("p");
    quoteJobtitleElement.className = ["quote__jobtitle"].join(" ");
    quoteJobtitleElement.innerText = quoteJobtitle;

    // add to meta
    quoteMeta.appendChild(quoteCitationElement);
    if (quoteJobtitle) {
      quoteMeta.appendChild(quoteJobtitleElement);
    }
  }

  paddingBox.appendChild(layoutBox);

  bgBox.appendChild(paddingBox);
  QuoteBrick.appendChild(bgBox);

  return QuoteBrick;
};
