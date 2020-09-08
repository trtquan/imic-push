let ban = ["anhA", "anhB", "anhC"];
let hang = ["anhE", "anhD"];
let giuxe = ["anhF,anhG"];

let banIndex = 0;
const boNguoiVaoBan = () => {
  if (banIndex == 4) return;
  const test = document.querySelectorAll(`.ban-container .should-have-value`);
  test[banIndex].innerHTML = ban[banIndex];
  banIndex++;
};
const layNguoiRaBan = () => { 
  if (banIndex == 0) return;
  banIndex--;
  const test = document.querySelectorAll(`.ban-container .should-have-value`);
  test[banIndex].innerHTML = "";
};

let hangIndex = 0;
const boNguoiVaoHang = () => {
  if (hangIndex == 4) return;
  const test = document.querySelectorAll(`.hang-container .should-have-value`);
  test[hangIndex].innerHTML = ban[hangIndex];
  hangIndex++;
};
const layNguoiRaHang = () => {
  if (hangIndex == 0) return;
  hangIndex--;
  const test = document.querySelectorAll(`.hang-container .should-have-value`);
  test[hangIndex].innerHTML = "";
};

const render = (data) => {
    const test = document.querySelectorAll(`.ban-container .should-have-value`);
    data.array.forEach((element, index) => {
        test[index].innerHTML = element;
    });
}