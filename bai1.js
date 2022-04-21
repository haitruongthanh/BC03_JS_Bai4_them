/* Tính thuế thu nhập cá nhân

thuNhapChiuThue = tongThuNhap - 4 - soNguoiPhu * 1.6
Tổng thu nhập <= 60 : thuế suất 5%
Tổng thu nhập <= 120 : thuế suất 10%
Tổng thu nhập <= 210 : thuế suất 15%
Tổng thu nhập <= 384 : thuế suất 20%
Tổng thu nhập <= 624 : thuế suất 25%
Tổng thu nhập <= 960 : thuế suất 30%
Tổng thu nhập > 960 : thuế suất 35%
*/

var tinhThue = function () {
  var hoTen = document.getElementById("user_name").value;
  var tongThuNhap = document.getElementById("tong_thu_nhap").value * 1;
  var soNguoiPhuThuoc = document.getElementById("so_nguoi_phu_thuoc").value * 1;
  var thuNhapChiuThue = 0;

  if (tongThuNhap <= 60) {
    thuNhapChiuThue = tinhThuNhapTruocThue(tongThuNhap, soNguoiPhuThuoc) * 0.05;
  } else if (tongThuNhap <= 120) {
    thuNhapChiuThue = tinhThuNhapTruocThue(tongThuNhap, soNguoiPhuThuoc) * 0.1;
  } else if (tongThuNhap <= 210) {
    thuNhapChiuThue = tinhThuNhapTruocThue(tongThuNhap, soNguoiPhuThuoc) * 0.15;
  } else if (tongThuNhap <= 384) {
    thuNhapChiuThue = tinhThuNhapTruocThue(tongThuNhap, soNguoiPhuThuoc) * 0.2;
  } else if (tongThuNhap <= 624) {
    thuNhapChiuThue = tinhThuNhapTruocThue(tongThuNhap, soNguoiPhuThuoc) * 0.25;
  } else if (tongThuNhap <= 960) {
    thuNhapChiuThue = tinhThuNhapTruocThue(tongThuNhap, soNguoiPhuThuoc) * 0.3;
  } else {
    thuNhapChiuThue = tinhThuNhapTruocThue(tongThuNhap, soNguoiPhuThuoc) * 0.35;
  }

  document.getElementById("ket_qua").innerHTML = `Thuế TNCN của ${hoTen} là ${
    Math.round(thuNhapChiuThue * 100) / 100
  } triệu đồng`;
};

var tinhThuNhapTruocThue = function (tongThuNhap, soNguoiPhu) {
  return tongThuNhap - 4 - soNguoiPhu * 1.6;
};
