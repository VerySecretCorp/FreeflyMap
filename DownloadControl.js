export default class DownloadControl {
  onClick_;
  constructor(controlDiv, onClick) {
    controlDiv.style.clear = "both";
    const downloadUI = document.createElement("button");
    downloadUI.classList = "controls"
    downloadUI.style.marginRight = "12px"
    downloadUI.style.marginTop = "0px"
    downloadUI.id = "downloadUI";
    downloadUI.title = "Click to download points";
    controlDiv.appendChild(downloadUI);

    const downloadText = document.createElement("div");
    downloadText.id = "downloadText";
    downloadText.innerHTML = "Download (.kml)";
    downloadUI.appendChild(downloadText);

    downloadUI.addEventListener("click", onClick);
  }
}