export default class Views {
  constructor() {

  }

  public async init() {
    await this.registerItemMenu();
  }

  private async registerItemMenu() {
    // const menuIcon = `chrome://${config.addonRef}/content/icons/favicon@0.5x.png`;
    // item menuitem with icon
    ztoolkit.Menu.register("item", {
      tag: "menuitem",
      id: "id-zotfile-attach-file",
      label: "Attach New File",
      commandListener: (ev) => Zotero.ZotFile.attachFileFromSourceDirectory(),
      // icon: menuIcon,
    });
  }
}