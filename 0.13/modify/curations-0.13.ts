import { defineCurationLists } from "@theweave/moss-types";

export default defineCurationLists({
  curator: {
    name: "Lightningrod Labs",
    description: "The official curation of Tools from Lightningrod Labs",
    contact: {
      website: "https://lightningrodlabs.org",
    },
    icon: "https://lightningrodlabs.org/lrl_logo.png",
  },
  curationLists: {
    default: {
      name: "Default Curation List",
      description: "Default Curation List of Lightningrod Labs",
      tags: [],
      tools: [
        {
          toolListUrl:
            "https://raw.githubusercontent.com/lightningrodlabs/weave-tool-curation/refs/heads/test-0.13/0.13/lists/tool-list.json",
          toolId: "kando",
          versionBranch: "0.11.x",
          tags: ["productivity", "tagnr2"],
        },
        {
          toolListUrl:
            "https://drive.switch.ch/index.php/s/YaWnZzVcTH8Wvzd/download",
          toolId: "matthme.presence",
          versionBranch: "0.10.x",
          tags: [],
        },
      ],
    },
  },
});
