var i = 1;

$(document).ready(function () {
  $("#myBtn").click(function () {
    $("#myModal").modal();
  });
});
let span = document.createElement("span");
function KTTen() {
  let kt = /^[a-z]\W*$/;
  if ($("#txtTen").val() == "") {
    $("tbTen").html("Bat buoc nhap!!");
    return false;
  }
  if (!kt.test($("#txtTen").val())) {
    $("#tbTen").html("*Chu cai dau moi tu phai viet hoa!!");
    return false;
  }
  $("#tbTen").html("*");
  return true;
}
$("#txtTen").blur(KTTen);

function KTDC() {
  if ($("#txtDC").val() == "") {
    $("#tbDC").html("Bat buoc nhap!!");
    return false;
  }
  $("#tbDC").html("*");
  return true;
}
$("#txtDC").blur(KTDC);

function KTNgay() {
  if ($("#txtNgay").val() == "") {
    $("#tbNgay").html("Bat buoc nhap!!");
    return false;
  }
  let day = new Date($("#txtNgay").val());
  let today = new Date();
  today.setDate(today.getDate() + 3);
  if (day < today) {
    $("#tbNgay").html("*Nhap ngay sau ngay hien hanh 3 nam!");
    return false;
  }
  $("#tbNgay").html("*");
  return true;
}
$("#txtNgay").blur(KTNgay);

function KTSDT() {
  let sdt = /^[0-9]{3}\-\d{4}\-\d{3}$/;
  if ($("#txtSDT").val() == "") {
    $("#tbSDT").html("Bat buoc nhap!!");
    return false;
  }
  if (!sdt.test($("#txtSDT").val())) {
    $("#tbSDT").html("Nhap theo dang 000-0000-000");
    return false;
  }
  $("#tbSDT").html("*");
  return true;
}
$("#txtSDT").blur(KTSDT);

function KTMail() {
  let mail = /^\w+([\.-]?w+)*@\w+([\.-]?w+)+(\.\w{2,3})+$/;
  if ($("#txtMail").val() == "") {
    $("#tbMail").html("Bat buoc nhap!!");
    return false;
  }
  if (!mail.test($("#txtMail").val())) {
    $("#tbMail").html("Nhap dung dinh dang mail");
    return false;
  }
  $("#tbMail").html("*");
  return true;
}
$("#txtMail").blur(KTMail);
