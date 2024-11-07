const nhapSo = () => {
  const nhapMang = document.querySelector("#number").value;
  return nhapMang.split(" ").map(Number);
};

// 1. Tổng các số dương trong hàm
const TongSoDuong = () => {
  // Lấy giá trị nhập vào từ input
  const numbers = nhapSo();
  // Lọc các số dương
  const SoDuong = numbers.filter((i) => i > 0);

  // Tính tổng các số dương
  let TinhTong = SoDuong.reduce((sum, so) => sum + so, 0);

  // Hiển thị kết quả
  document.querySelector(
    "#result"
  ).innerText = `Tổng các số dương là: ${TinhTong}`;
};

// 2. Đêm có bao nhiêu số dương trong hàm
const DemSoDuong = () => {
  // Lấy giá trị nhập vào từ input
  const numbers = nhapSo();
  //lọc tất cả các số dương có trong mảng
  const SoDuongTrongMang = numbers.filter((num) => num > 0).length;

  // Hiển thị kết quả
  document.querySelector(
    "#result2"
  ).innerText = `Mảng vừa nhập có ${SoDuongTrongMang} số dương`;
};

// 3. Tìm số nhỏ nhất trong mảng.
const SoNhoNhat = () => {
  // Lấy giá trị nhập vào từ input
  const numbers = nhapSo();

  //   tìm số nhỏ nhất có trong mảng
  const SoMin = Math.min(...numbers);

  // Hiển thị kết quả
  document.querySelector(
    "#result3"
  ).innerText = `Số nhỏ nhất trong mảng là: ${SoMin}`;
};

// Tìm số dương nhỏ nhất trong mảng.
const SoDuongNhoNhat = () => {
  const numbers = nhapSo();

  // Lọc các số dương
  const SoDuong = numbers.filter((i) => i > 0);

  //   tìm số nhỏ nhất có trong mảng
  const SoDuongMin = Math.min(...numbers);
  document.querySelector(
    "#result4"
  ).innerText = `Số dương nhỏ nhất trong mảng là: ${SoDuongMin}`;
};

const SoChanCuoiCung = () => {
  const numbers = nhapSo();

  const soChanCuoi = (array) => {
    for (let i = array.length; i >= 0; i--) {
      if (array[i] % 2 === 0) {
        return array[i];
      }
    }
    return -1;
  };

  const ketQua = soChanCuoi(numbers);
  document.querySelector(
    "#result5"
  ).innerText = `Số chẵn cuối cùng trong mảng là: ${ketQua}`;
};
