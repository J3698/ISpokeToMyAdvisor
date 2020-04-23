function deletePopup() {
  var dialogBox = document.getElementsByClassName("gwt-DialogBox");
  if (dialogBox.length != 0) {
    dialogBox = dialogBox[0];
    caption = dialogBox.getElementsByClassName("Caption")[0].innerHTML;
    if (caption == "Have You Spoken to Your Advisor?") {
      dialogBox.parentNode.removeChild(dialogBox);
      var backdrop = document.getElementsByClassName("gwt-PopupPanelGlass")[0];
      backdrop.parentNode.removeChild(backdrop);
    }
  }
}

setInterval(deletePopup, 50);
