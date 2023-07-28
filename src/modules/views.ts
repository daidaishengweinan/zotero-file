import { config } from "../../package.json";
export default class Views {
  constructor() { }

  public async init() {
    await this.registerItemMenu();
    await this.registerPreferencePane();
  }

  private async registerItemMenu() {
    ztoolkit.Menu.register("item", {
      tag: "menuseparator",
    })
    const menuIcon = `chrome://${config.addonRef}/content/icons/favicon@0.5x.png`;
    // item menuitem with icon
    ztoolkit.Menu.register("item", {
      tag: "menuitem",
      id: "id-zotfile-attach-file",
      label: "Attach New File",
      commandListener: (ev) => Zotero.ZotFile.attachFileFromSourceDirectory(),
      icon: menuIcon,
    },
      "after",
      // 不可用
      // Zotero.getMainWindow().document.querySelector(
      //   "#zotero-itemmenu .zotero-menuitem-create-note-from-annotations"
      // ) as XUL.Element
    );
  }

  private async registerPreferencePane() {
    const prefOptions = {
      pluginID: config.addonID,
      src: rootURI + "chrome/content/preferences.xhtml",
      label: "ZotFile",
      image: `chrome://${config.addonRef}/content/icons/favicon.png`,
      defaultXUL: true,
    };
    ztoolkit.PreferencePane.register(prefOptions);
  }
}
