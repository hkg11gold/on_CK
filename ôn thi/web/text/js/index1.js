$(document).ready(function() {
    var i = 1;
    $("#myBtn").click(function () {
        $("#myModal").modal();
      });

//===============================================================
// kiểm tra họ tên
    function Hoten() {
        var kt= /(^[A-Z]{1}[a-z]+)(\s[A-Z][a-z A-z]+)*$/;
        if($("#txthoten").val() == "") {
            $("#tbhoten").html("Không được để trống !!");
            return false;
        }
        if(!kt.test($("#txthoten").val())) {
            $("#tbhoten").html("Chữ cái đầu viết hoa !!");
            return false;
        }
        $("#tbhoten").html("*");
        return true;
    };
    $("#txthoten").blur(Hoten);

//===============================================================
// Kiểm tra ngày đến 1 địa điểm (Như khách sạn)
    function KTNgayden(){
        if($("#txtngayden").val() == ""){
        $("#tbngayden").html("*Bắt buộc nhập !!");
        return false;
        }
        var day1 = new Date($("#txtngayden").val());
        var today = new Date;
        today.setDate(today.getDate() );
        if(day1 < today){
        $("#tbngayden").html("*Ngày đến phải lớn hơn ngày hiện tại");
        return false;
        }
        $("#tbngayden").html("*");
        return true;
    };
    $("#txtngayden").blur(KTNgayden);

//===============================================================
//Kiểm tra ngày rời đi 1 địa điểm (như khách sạn)
    function KTNgaydi(){
        if($("#txtngaydi").val() == ""){
        $("#tbngaydi").html("*Bắt buộc nhập !!");
        return false;
        }
        var day2 = new Date($("#txtngaydi").val());
        var day1 = new Date($("#txtngayden").val());
        day1.setDate(day1.getDate() +1);
        if(day2 < day1){
        $("#tbngaydi").html("Ngày đi phải lớn hơn ngày đến");
        return false;
        }
        $("#tbngaydi").html("*");
        return true;
    };
    $("#txtngaydi").blur(KTNgaydi);

//===============================================================
// Kiểm tra số ngày ở loại 1 địa điểm (ngày rời đi trừ ngày đến)
function KTsongay(){
    
    var day2 = new Date($("#txtngaydi").val());
    var day1 = new Date($("#txtngayden").val());
    $("#txtsongay")= day2-day1;
    return true;
};
$("#txtsongay").blur(KTsongay);
    

//===============================================================   
// Mã khách hàng (theo form đề cho)
    function Makh(){
        var kt=/(^(PE160000)+)(\d{4})*$/;
        if($("#txtmakh").val() == ""){
            $("#tbmakh").html("*Bắt buộc nhập !!");
            return false;
        }
        if(!kt.test($("#txtmakh").val())){
            $("#tbmakh").html("*Chữ cái đầu của mỗi từ phải viết hoa !!");
            return false;
        }
        $("#tbmakh").html("*");
        return true;
        };
        $("#txtmakh").blur(Makh);

//===============================================================
// Kiểm tra mã sách
    function kiemTraMasach() {
        var re = /^[0-9]{3}\-[A-Za-z]{5}$/;
        if ($("#txtMasach").val() == "") {
            $("#tbMasach").html("* Bắt buộc nhập");
            return false;
        }
        if (!re.test($("#txtMasach").val())) {
            $("#tbMasach").html("* XXX là số, YYYYY là chữ");
            return false;
        }
        $("#tbMasach").html("(*)");
        return true;
        }
        $("#txtMasach").blur(kiemTraMasach);

//===============================================================
// Kiểm tra số lượng
function KTSL() {
    if($("#txtSL").val()<=0||$("#txtSL").val()>=1000){
      $("#tbSL").html("* Số lượng >0 và <1000");
      return false;
    }
    $("#tbSL").html("(*)");
    return true;
  }
  $("#txtSL").blur(KTSL);

//===============================================================
// Này là theo kiểu chọn 1 hoặc 2 hoặc 3 hoặc 4 tương ứng với nó là
// chọn 1 thì sẽ in ra theo 121 và 61000
// chọn 2 thì sẽ in ra theo 130 và 780000 mấy còn lại tương tự
$("#ThangTT").change(function(){
    var a=/^1$/;
    var b=/^2$/;
    var c=/^3$/;
    var d=/^4$/;
    if(a.test($("#ThangTT").val())){
      $("#txtSTT").val("121")
      $("#txtTTT").val("610000")
    }
    if(b.test($("#ThangTT").val())){
        $("#txtSTT").val("130") 
        $("#txtTTT").val("780000")
    }
    if(c.test($("#ThangTT").val())){
        $("#txtSTT").val("189")
        $("#txtTTT").val("905000")
    }
    if(d.test($("#ThangTT").val())){
        $("#txtSTT").val("154")
        $("#txtTTT").val("760000")
    }
  });

//===============================================================
// kiểm tra số điện thoại
function KTSDT(){
    var sdt=/^[0-9]{3}\-\d{4}\-\d{3}$/;
    if($("#txtSDT").val() == ""){
    $("#tbSDT").html("* Bắt buộc nhập");
    return false;
    }
    if(!sdt.test($("#txtSDT").val())){
    $("#tbSDT").html("Nhập theo dạng 000-0000-000");
    return false;
    }
    $("#tbSDT").html("*");
    return true;
};
$("#txtSDT").blur(KTSDT);

//===============================================================
// ngày tham gia gì đó tự nhập từ bàn phím
function Ntg(){
    var kt=/\d$/;
    if($("#txtntg").val() == ""){
        $("#tbntg").html("*Bắt buộc nhập !!");
        return false;
    }
    if(!kt.test($("#txtntg").val())){
        $("#tbntg").html("*phải số và lớn hơn 0 !!");
        return false;
    }
    $("#tbntg").html("*");
    return true;
    };
    $("#txtntg").blur(Ntg);

//===============================================================
    


$("#btnSave").click(function(){
    
    if(!KTNgayden() || !Hoten() ){
        $("#thongbao").html("*Nhập đúng và đủ thông tin");
        return false;
        }

    var hoten = $("#txthoten").val();   // họ tên
    var kiemtrangayden = $("#txtngayden").val(); // Kiểm tra ngày đến
    

    // In thông tin ra màn hình
    var them = "<tr><td>" + (i++) + "</td><td>" + kiemtrangayden + "</td><td>" + hoten + "</td></tr>";
    $("#table").append(them);
    $("#myModal").modal("hide");
    // "</td><td>" + kiemtrangaydi + "</td><td>" + songay + "</td><td>" + makhachhang + "</td><td>" + kiemtramasach + "</td><td>" + kiemtrasoluong +  "</td><td>" + thangtt + "</td><td>" + stt + "</td><td>" + ttt + "</td><td>" + radio + "</td><td>" + checkbox + "</td><td>" + ktsdt + "</td><td>" + ntg + "</td><td>" + gio +   
});

});