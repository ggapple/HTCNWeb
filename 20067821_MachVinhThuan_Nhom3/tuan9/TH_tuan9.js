$(document).ready(function () {
  let i = 2; // Khởi tạo số thứ tự
  $("#btnDK").click(function () {
    $("#myModal").modal();
  });
  //   kiem tra ma
  function kiemtrama() {
    let maukt = /^[0-9]{9}$/;
    let chuoi = $("#txtMASV").val();
    if (chuoi == "") {
      $("#tbMA").html("Bắt buộc nhập");
      return false;
    } else if (!maukt.test(chuoi)) {
      $("#tbMA").html("Nhập sai, chỉ dùng 9 chữ số");
      return false;
    } else {
      $("#tbMA").html("*");
      return true;
    }
  }
  $("#txtMASV").blur(kiemtrama);
  //   kiem tra ho ten
  function kiemtrahoten() {
    let chuoi = $("#txtHOTEN").val();
    let maukt = /([A-Z]{1}[a-z]+)((\s{1}[A-Z]{1}[a-z]+){1,})$/;
    if (chuoi == "") {
      $("#tbHOTEN").html("Bắt buộc nhập");
      return false;
    } else if (!maukt.test(chuoi)) {
      $("#tbHOTEN").html("Ký tự đầu tiên viết hoa, không sử dụng số");
      return false;
    } else {
      $("#tbHOTEN").html("*");
      return true;
    }
  }
  $("#txtHOTEN").blur(kiemtrahoten);
  //   kiem tra email
  function kiemtraemail() {
    let chuoi = $("#txtEMAIL").val();
    let maukt = /^\w+([\.-]?w+)*@iuh.edu.vn$/;
    if (chuoi == "") {
      $("#tbEMAIL").html("Bắt buộc nhập");
      return false;
    } else if (!maukt.test(chuoi)) {
      $("#tbEMAIL").html("Nhập sai mẫu, nhập theo mẫu xxxxx@iuh.edu.vn");
      return false;
    } else {
      $("#tbEMAIL").html("*");
      return true;
    }
  }
  $("#txtEMAIL").blur(kiemtraemail);
  //
  $("#btnSubDK").click(function () {
    if (
      kiemtrama() == true &&
      kiemtrahoten() == true &&
      kiemtraemail() == true
    ) {
      let masv = $("#txtMASV").val();
      let hoten = $("#txtHOTEN").val();
      let email = $("#txtEMAIL").val();
      let gioitinh = $("input[name=gt]:checked").val();
      let nangkhieu = $("input[name=nangkhieu]:checked").val();
      let city = $("#slCITY").val();

      let them =
        "<tr><td>" +
        i++ +
        "</td><td>" +
        masv +
        "</td><td>" +
        hoten +
        "</td><td>" +
        gioitinh +
        "</td><td>" +
        nangkhieu +
        "</td><td>" +
        email +
        "</td><td>" +
        city +
        "</td></tr>";

      $("table tbody").append(them);
      $("#myModal").modal("hide");
      return true;
    }
  });
});
