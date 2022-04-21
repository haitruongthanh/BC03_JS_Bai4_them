/* Tính Tiền Cáp

Tính hóa đơn tiền cáp theo khách hàng: Hộ Gia Đình, Doanh Nghiệp

Hộ gia đình
    Phí xử lý hóa đơn: 4.5$
    Phí dịch vụ cơ bản: 20.5$
    Phí thuê kênh cao cấp: 7.5$/kênh

Doanh nghiệp
    Phí xử lý hóa đơn: 15$
    Phí dịch vụ cơ bản: 75$ cho 10 kết nối đầu, mỗi kết nối thêm 5$/kết nối
    Phí thuê kênh cao cấp: 50$/kênh

Viết chương trình: nhập 
    Mã khách hàng, 
    Loại khách hàng, 
    Số kết nối
    Số kênh cao cấp
    Nếu chọn Doanh nghiệp, ô kết nối hiện lên, nếu là Cá nhân thì sẽ ẩn hoặc disabled

*/
var hoGiaDinh = document.getElementById("gia-dinh");
hoGiaDinh.addEventListener("click", () => {
  document.getElementById("so-ket-noi").disabled = true;
});

var doanhNghiep = document.getElementById("doanh-nghiep");
doanhNghiep.addEventListener("click", () => {
  document.getElementById("so-ket-noi").disabled = false;
});

var tinhTienCapDoanhNghiep = function () {
  var loaiKhachHang =
    document.querySelector('input[name="loai-khach-hang"]:checked').value * 1;
  var soKenhCaoCap = document.getElementById("so-kenh").value * 1;
  var soKetNoi = document.getElementById("so-ket-noi").value * 1;
  var ketQua = 0;
  var maKhachHang = document.getElementById("userID").value;

  switch (loaiKhachHang) {
    case 1: //doanh nghiệp
      ketQua = 15 + tinhDichVuCoBan(soKetNoi) + soKenhCaoCap * 50;
      console.log({ ketQua });

      break;
    case 0: //gia đình
      ketQua = 4.5 + 20.5 + 7.5 * soKenhCaoCap;
      console.log({ ketQua });
      break;
  }

  document.getElementById(
    "ket-qua"
  ).innerHTML = `Tổng số tiền của khách hàng có mã ${maKhachHang} là ${ketQua}$`;
};

var tinhDichVuCoBan = function (soKetNoi) {
  if (soKetNoi <= 10) {
    return 75;
  } else {
    return 75 + 5 * (soKetNoi - 10);
  }
};
