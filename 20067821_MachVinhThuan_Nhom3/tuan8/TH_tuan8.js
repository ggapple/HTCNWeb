$(document).ready(function () {
  let i = 1; // Khởi tạo số thứ tự
  $("#mybtn").click(function () {
    $("#myModal").modal();
  });
  //   kiem tra ma
  function kiemtrama() {
    let maukt = /^[A-Z]{3}\-[A-Z]{3}\-\d{2}\-\d{4}$/;
    if ($("#txtma").val() == "") {
      $("#tbma").html("Bắt buộc nhập");
      return false;
    }
    if (!maukt.test($("#txtma").val())) {
      $("#tbma").html("Mã tour theo mẫu: XXX-XXX-mm-yyyy");
      return false;
    } else $("#tbma").html("*");
    return true;
  }
  $("#txtma").blur(kiemtrama);
  // kiem tra diem den
  function kiemtradiemden() {
    if ($("#txtdiemden").val() == "") {
      $("#tbdiemden").html("Bắt buộc nhập");
      return false;
    }
    $("#tbdiemden").html("*");
    return true;
  }
  $("#txtdiemden").blur(kiemtradiemden);
  // kiem tra ngay khoi hanh
  function kiemtrangaykh() {
    if ($("#txtngay").val() == "") {
      $("#tbngay").html("Bắt buộc nhập");
      return false;
    }
    let today = new Date();
    let day = new Date($("#txtngay").val());
    today = today.setDate(today.getDate() + 30);
    if (day < today) {
      $("#tbngay").html("Phải sau ngày hiện tại 30 ngày");
      return false;
    }
    $("#tbngay").html("*");
    return true;
  }
  $("#txtngay").blur(kiemtrangaykh);
  // kiem tra gia tour
  function kiemtragia() {
    let gia = $("txtgia").val();
    if (gia == "") {
      $("#tbgia").html("Bắt buộc nhập");
      return false;
    }
    if (Number.isNaN(gia)) {
      $("#tbgia").html("Phải nhập số");
      return false;
    }
    if (eval(gia) < 0) {
      $("#tbgia").html("Phải nhập số > 0");
      return false;
    }
    $("#tbgia").html("*");
    return true;
  }
  $("#txtgia").blur(kiemtragia);
  //
  $("#btnsave").click(function () {
    if (
      !kiemtrama() ||
      !kiemtradiemden() ||
      !kiemtrangaykh() ||
      !kiemtragia()
    ) {
      $("#thongbao").html("moi ban nhap day du thong tin");
      return false;
    } else {
      let ma = $("#txtma").val();
      let diemden = $("#txtdiemden").val();
      let ngaykh = $("#txtngay").val();
      let tg = $("#txtthoigian").val();
      let gia = $("#txtgia").val();
      let anh = $("#txtanh").val().substring(12);

      let them =
        "<tr><th>" +
        i++ +
        "</th><th>" +
        ma +
        "</th><th>" +
        diemden +
        "</th><th>" +
        ngaykh +
        "</th><th>" +
        tg +
        "</th><th>" +
        gia +
        "</th><th>" +
        anh +
        "</th></tr>";

      $("table tbody").append(them);
      $("#myModal").modal("hide");
      return true;
    }
  });
});
