import { withDesign } from "storybook-addon-designs";
// badges
import { BADGE } from "@geometricpanda/storybook-addon-badges";
import { QuoteBrick } from "./QuoteBrick";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

export default {
  title: "Components/Bricks/QuoteBrick",
  component: "QuoteBrick",
  parameters: {
    badges: [BADGE.BETA],
    controls: { sort: "requiredFirst" },
    docs: {
      description: {
        component: "Infoboxes",
      },
    },
  },
  argTypes: {
    quoteText: {
      control: "text",
      table: {
        category: "Content",
        type: { summary: "text" },
        defaultValue: { summary: "To Be or Not to Be" },
      },
    },
    bgColor: {
      control: { type: "select" },
      options: [
        "var(--color-black)",
        "var(--color-henk-black)",
        "var(--color-white)",
        "var(--color-henk-white)",
        "var(--color-accent1)",
        "var(--color-accent2)",
        "var(--color-accent3)",
        "var(--color-accent4)",
        "var(--color-accent5)",
        "var(--color-accent6)",
        "var(--color-accent7)",
        "var(--color-accent8)",
        "var(--color-accent9)",
        "var(--color-accent10)",
        "var(--color-accent11)",
        "var(--color-accent12)",
        "var(--color-accent13)",
        "var(--color-accent14)",
        "var(--color-accent15)",
        "var(--color-accent16)",
        "var(--color-accent17)",
        "var(--color-transparent)",
      ],
      table: {
        category: "Colors",
        type: { summary: "select" },
        defaultValue: { summary: "var(--color-accent15)" },
      },
    },
    fgColor: {
      control: { type: "select" },
      options: [
        "var(--color-black)",
        "var(--color-henk-black)",
        "var(--color-white)",
        "var(--color-henk-white)",
        "var(--color-accent1)",
        "var(--color-accent2)",
        "var(--color-accent3)",
        "var(--color-accent4)",
        "var(--color-accent5)",
        "var(--color-accent6)",
        "var(--color-accent7)",
        "var(--color-accent8)",
        "var(--color-accent9)",
        "var(--color-accent10)",
        "var(--color-accent11)",
        "var(--color-accent12)",
        "var(--color-accent13)",
        "var(--color-accent14)",
        "var(--color-accent15)",
        "var(--color-accent16)",
        "var(--color-accent17)",
        "var(--color-transparent)",
      ],
      table: {
        category: "Colors",
        type: { summary: "select" },
        defaultValue: { summary: "var(--color-black)" },
      },
    },
    paddingTopUnits: {
      control: { type: "number", min: 0 },
      table: {
        category: "Padding",
        type: { summary: "number" },
        defaultValue: { summary: 3 },
      },
    },
    paddingRightUnits: {
      control: { type: "number", min: 0 },
      table: {
        category: "Padding",
        type: { summary: "number" },
        defaultValue: { summary: 5 },
      },
    },
    paddingBottomUnits: {
      control: { type: "number", min: 0 },
      table: {
        category: "Padding",
        type: { summary: "number" },
        defaultValue: { summary: 4 },
      },
    },
    paddingLeftUnits: {
      control: { type: "number", min: 0 },
      table: {
        category: "Padding",
        type: { summary: "number" },
        defaultValue: { summary: 5 },
      },
    },
    paddingTopUnitsDesktop: {
      control: {
        type: "number",
        min: 0,
      },
      table: {
        category: "Padding",
        type: { summary: "number" },
        defaultValue: { summary: 7 },
      },
    },
    paddingRightUnitsDesktop: {
      control: { type: "number", min: 0 },
      table: {
        category: "Padding",
        type: { summary: "number" },
        defaultValue: { summary: 7 },
      },
    },
    paddingBottomUnitsDesktop: {
      control: { type: "number", min: 0 },
      table: {
        category: "Padding",
        type: { summary: "number" },
        defaultValue: { summary: 7 },
      },
    },
    paddingLeftUnitsDesktop: {
      control: { type: "number", min: 0 },
      table: {
        category: "Padding",
        type: { summary: "number" },
        defaultValue: { summary: 7 },
      },
    },
  },
  decorators: [withDesign],
  viewport: {
    //👇 The viewports you want to use
    viewports: INITIAL_VIEWPORTS,
    //👇 Your own default viewport
    defaultViewport: "mobile1",
  },
};

const Template = ({ ...args }) => {
  return QuoteBrick({ ...args });
};

export const Base = Template.bind({});
// prettier-ignore
Base.args = {
  //quoteText : "Heading",
  quoteMarks: false,
  // quoteLink: "https://www.somewhere.com",
  lang      : "en",
  id        : "quoteblock_1",
};
Base.parameters = {
  design: {
    name: "Figma",
    type: "figma",
    url: "https://www.figma.com/file/DHpJJWTOUv4MpfeCEx3pe6/UI?node-id=111%3A123&t=GDdILhF3ojig0wTh-1",
    offset: [0, 0],
    scale: 1,
    allowFullscreen: false,
  },
};

export const withQuoteMarks = Template.bind({});
// prettier-ignore
withQuoteMarks.args = {
  //quoteText : "Heading",
  quoteMarks: true,
  lang      : "en",
  id        : "quoteblock_2",
};

export const withQuoteLink = Template.bind({});
// prettier-ignore
withQuoteLink.args = {
  quoteMarks: false,
  quoteLink: "https://www.somewhere.com",
  lang      : "en",
  id        : "quoteblock_3",
};

export const withQuoteLinkAndMarks = Template.bind({});
// prettier-ignore
withQuoteLinkAndMarks.args = {
  quoteMarks: true,
  quoteLink: "https://www.somewhere.com",
  lang      : "en",
  id        : "quoteblock_4",
};

export const withCitation = Template.bind({});
// prettier-ignore
withCitation.args = {
  quoteMarks: false,
  quoteCitation: "William Shakespeare",
  lang      : "en",
  id        : "quoteblock_5",
};

export const withCitationAndJobtitle = Template.bind({});
// prettier-ignore
withCitationAndJobtitle.args = {
  quoteMarks: false,
  quoteCitation: "William Shakespeare",
  quoteJobtitle: "Playwright • Poet • Actor",
  lang      : "en",
  id        : "quoteblock_6",
};

export const onMobile = Template.bind({});
// prettier-ignore
onMobile.args = {
  quoteMarks: true,
  quoteCitation: "William Shakespeare",
  quoteJobtitle: "Playwright • Poet • Actor",
  lang      : "en",
  id        : "quoteblock_7",
};
onMobile.parameters = {
  viewport: {
    defaultViewport: "iphonex",
  },
};

export const withExampleText = Template.bind({});
withExampleText.args = {
  quoteText:
    "Studio HENK wants to inspire people not only with beautiful furniture<br /> but with our values too. We’re proud to have just introduced a range of<br /> new sustainable fabrics including recycled and reused options.",
  quoteMarks: true,
  quoteCitation: "Corine De Bruijne",
  quoteJobtitle: "Head of Sustainability",
  lang: "en",
  id: "quoteblock_7",
};

export const withJapanese = Template.bind({});
withJapanese.args = {
  quoteText: "なるかどうか",
  quoteMarks: true,
  quoteCitation: "Corine De Bruijne",
  quoteJobtitle: "サステナビリティ責任者",
  lang: "jp",
  id: "quoteblock_8",
};
