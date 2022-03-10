function KiemTraTenDN() {
  var re = /^[a-z]\W*/;
  if (re.test(document.getElementById("txtDN").value.trim()) == false) {
    tendn.innerText = "* bắt buộc, bắt đầu bằng kí tự *";
    return false;
  } else {
    tendn.innerText = "*";
    return true;
  }
}
function KiemTraTenMK() {
  var re = /(?=.*\d).{6,}/;
  if (re.test(document.getElementById("txtMK").value.trim()) == false) {
    mk.innerText = "* phải có chữ, số, ít nhất 6 kí tự *";
    return false;
  } else {
    mk.innerText = "*";
    return true;
  }
}
function KiemTraXNMK() {
  if (
    document.getElementById("txtXNMK").value !=
    document.getElementById("txtMK").value
  ) {
    xnmk.innerText = "* phải giống ô mật khẩu";
    return false;
  } else {
    xnmk.innerText = "*";
    return true;
  }
}
function KiemTraNgaySinh() {
  var ns = new Date(document.getElementById("txtNS").value);
  var today = new Date();
  if (eval(today.getFullYear() - ns.getFullYear()) <= 10) {
    ngaysinh.innerText = "tuổi phải lớn hơn 10";
    return false;
  } else {
    ngaysinh.innerText = "*";
    return true;
  }
}
function SubmitForm() {
  if (
    KiemtraTenDN() == false ||
    KiemTraTenMK() == false ||
    KiemTraXNMK == false
  ) {
    alert("Bạn chưa nhập đầy đủ thông tin!");
  } else {
    var tt1 = document.getElementById("txtName").value;
    var tt2 = document.getElementById("txtNS").value;
    var w = open("form_validation_info.html", "ket qua");
    w.document.write("THÔNG TIN CÁ NHÂN");
    w.document.write("Họ tên:" + tt1 + "<br>");
    w.document.write("Năm sinh" + tt2 + "<br>");
  }
}
