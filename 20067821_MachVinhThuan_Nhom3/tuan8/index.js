$(document).ready(function () {
  var i = 1; // Khởi tạo số thứ tự
  $("#btn2").click(function () {
    $("#modal-id").modal();
  });
  //   kiem tra ten
  function kiemtraten() {
    let maukt = /([A-Z]{1}[a-z]+)((\s{1}[A-Z]{1}[a-z]+){1,})$/;
    if ($("#Name").val() == "") {
      $("#tbName").html("Không để trống");
      return false;
    } else if (!maukt.test($("#Name").val())) {
      $("#tbName").html("Ký tự đầu tiên viết hoa, không sử dụng số");
      return false;
    } else {
      $("#tbName").html("*");
      return true;
    }
  }
  $("#Name").blur(kiemtraten);
  //  kiem tra so ao
  function kiemtrasoao() {
    let maukt = /^\d*$/;
    if ($("#Ao").val() == "") {
      $("#tbAo").html("Không để trống");
      return false;
    } else if (!maukt.test($("#Ao").val())) {
      $("#tbAo").html("Dùng số từ 1 đến 100");
      return false;
    } else {
      let soao = $("#Ao").val();
      if (soao < 1 || soao > 100) {
        $("#tbAo").html("Số áo từ 1 đến 100");
      } else {
        $("#tbAo").html("*");
        return true;
      }
    }
  }
  $("#Ao").blur(kiemtrasoao);
  //   kiem tra dia chi
  function kiemtradiachi() {
    let maukt = /^[A-Z0-9][a-z0-9]*(\s[A-Z0-9][a-z0-9]*)*$/;
    if ($("#DC").val() == "") {
      $("#tbDC").html("Không để trống");
      return false;
    } else if (!maukt.test($("#DC").val())) {
      $("#tbDC").html("Ký tự đầu tiên viết hoa, không sử dụng số");
      return false;
    } else {
      $("#tbDC").html("*");
      return true;
    }
  }
  $("#DC").blur(kiemtradiachi);
  //   kiem tra ngay tap trung
  function kiemtrantt() {
    if ($("#NTT").val() == "") {
      $("#tbNTT").html("Không để trống");
      return false;
    }
    let today = new Date();
    let ntt = new Date($("#NTT").val());
    today = today.setDate(today.getDate() + 7);
    if (today > ntt) {
      $("#tbNTT").html("Phải sau ngày hiện tại 7 ngày");
      return false;
    } else {
      $("#tbNTT").html("*");
      return true;
    }
  }
  $("#NTT").blur(kiemtrantt);
  //   kiem tra so dien thoai
  function kiemtrasdt() {
    let maukt = /^0\d{3}-\d{3}-\d{3}$/;
    if ($("#SDT").val() == "") {
      $("#tbSDT").html("Không để trống");
      return false;
    } else if (!maukt.test($("#SDT").val())) {
      $("#tbSDT").html("Theo dạng 0-xxx-xxx-xxx");
      return false;
    } else {
      $("#tbSDT").html("*");
      return true;
    }
  }
  $("#SDT").blur(kiemtrasdt);
  //   luu danh sach
  $("#save").click(function () {
    if (
      kiemtraten() == true &&
      kiemtrasoao() == true &&
      kiemtrasdt() == true &&
      kiemtradiachi() == true &&
      kiemtrantt() == true
    ) {
      let row = "<tr>";
      row += "<th>" + i++ + "</th>";
      row += "<th>" + $("#Name").val() + "</th>";
      row += "<th>" + $("#Ao").val() + "</th>";
      row += "<th>" + $("#DC").val() + "</th>";
      row += "<th>" + $("#NTT").val() + "</th>";
      row += "<th>" + $("#SDT").val() + "</th>";
      row += "<th>" + $("#ADD").val() + "</th>";
      $("#danhsach").append(row);
      $("#modal-id").modal("hide");
    }
  });
});
