// Only create main object once
if (!Zotero.ZotFile) {
  var zotfileLoader = Components.classes[
    "@mozilla.org/moz/jssubscript-loader;1"
  ].getService(Components.interfaces.mozIJSSubScriptLoader);
  var scripts = [
    "zotfile",
    "pdfAnnotations",
    "pdfOutline",
    "wildcards",
    "tablet",
    "utils",
    "notifier",
    "ui",
  ];
  scripts.forEach((s) =>
    zotfileLoader.loadSubScript(
      `chrome://zoterofile/content/zotfile/` + s + ".js",
    ),
  );
}

console.log("Zotero.ZotFile.init is called");
Zotero.ZotFile.init();
