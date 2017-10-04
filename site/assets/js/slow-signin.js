(function() {
  $('#signin-form').on('submit', function() {
    var credential = ['demouser', 'demopassword'];

    if ($('#inputUser').val() !== credential[0] || $('#inputPassword').val() !== credential[1]) {
      show_error('ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง');
      return false;
    }

    show_loading(5000, function() {
      window.location.href = "dashboard.html";
    });
    return false;
  });
})();

function show_loading(delay, callback) {
  $('#modalLoading').modal();
  setTimeout(callback, delay);
}

function show_error(msg) {
  $('#modalBody').html(msg);
  $('#modal').modal();
}