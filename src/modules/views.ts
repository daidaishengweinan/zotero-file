import { config } from "../../package.json";
export default class Views {
  constructor() {}

  public async init() {
    await this.registerItemMenu();
    await this.registerPreferencePane();
  }

  private async registerItemMenu() {
    ztoolkit.Menu.register("item", {
      tag: "menuseparator",
    });
    // Attach New File
    ztoolkit.Menu.register("item", {
      tag: "menuitem",
      id: "id-zotfile-attach-file",
      label: "Attach New File",
      getVisibility: () =>
        ZoteroPane.getSelectedItems().some(
          (item) => item.isAttachment() || item.isRegularItem(),
        ),
      commandListener: (ev) => Zotero.ZotFile.attachFileFromSourceDirectory(),
      icon: `chrome://${config.addonRef}/content/icons/attachNewFile.png`,
    });
    // renameAndMove.png
    ztoolkit.Menu.register("item", {
      tag: "menuitem",
      label: "Rename and Move",
      getVisibility: () =>
        ZoteroPane.getSelectedItems().some(
          (item) => item.isAttachment() || item.isRegularItem(),
        ),
      commandListener: (ev) => Zotero.ZotFile.renameSelectedAttachments(),
      icon: `chrome://${config.addonRef}/content/icons/renameAndMove.png`,
    });
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
