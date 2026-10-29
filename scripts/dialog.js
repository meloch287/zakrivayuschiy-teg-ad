const saveDialog = document.querySelector("#save-dialog");
const saveButton = document.querySelector(".save__button");

saveButton.addEventListener("click", () => saveDialog.showModal());

document.querySelector('.save-dialog__button').addEventListener('click', () => {
  saveDialog.close();
});
