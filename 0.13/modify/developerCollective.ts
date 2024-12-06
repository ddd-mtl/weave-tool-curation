import { defineDevCollectiveContent } from "@theweave/moss-types";

export default defineDevCollectiveContent({
  name: "Lightningrod Labs",
  description: "Nurturing The Holochain Ecosystem",
  id: "lightningrodlabs",
  icon: "https://lightningrodlabs.org/lrl_logo.png",
  contact: {
    website: "https://lightningrodlabs.org"
  },
  apps: [{
    id: "kando-0.11",
    title: "KanDo",
    subtitle: "Kanban board.",
    description: "Kanban board",
    icon: "https://theweave.social/images/kando_icon.png",
    happSha256: "asldfsöljdjhfasjhdf",
    tags: ["test"],
    versions: [{
      info: {
        version: "0.11.3",
        source: {
          type: "https",
          url: "https://github.com/holochain-apps/kando/releases/download/v0.11.3/kando.webhapp"
        },
        publishedAt: 1733512135815,
        changelog: "Same new",
        hashes: {
          happSha256: "sdfasdfasdf",
          uiSha256: "asdfasfdasd",
          webhappSha256: "asdfasdf",
        }
      }
    }],
  }],
})

