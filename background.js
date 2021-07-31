browser.contextMenus.create({
    id: "mpv-append",
    title: "Queue Video",
    contexts: ["link", "selection"],
    icons: {
      "16": "icons/play.svg",
      "32": "icons/play.svg",
    }
});

function onResponse(response) {
  console.log("Received " + response);
}

function onError(error) {
  console.log(`Error: ${error}`);
}

browser.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "mpv-append") {
    const url = info.linkUrl ? info.linkUrl : info.selectionText;
    var sending = browser.runtime.sendNativeMessage( "mpv_append", url);
  }
  sending.then(onResponse, onError);
});
