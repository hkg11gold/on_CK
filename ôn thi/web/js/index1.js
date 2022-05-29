$(document).ready(function() {
    $("#myBtn").click(function() {
        $("#modal").modal();
    })

    /*
        {4,} là tối thiểu 4 kí tự
        {,4} tối đa 4 kí tự
        {4,10} 4 tới 10 kí tự
        \w là chữ và số tính lun shift gạch
        \d dấu cách
        [A-Z] chữ hoa
        [a-z] chữ thường
        \s dấu cách
        * là có củng được không có củng được
        ^ bắt buộc cái gì đó ví dụ: ^[A-Z]{1} bắt buọc ký tự đầu viết hoa
        $ kết thúc chuỗi
    */
//===============================================================
// kiểm tra họ tên
    function Hoten() {
        var kt= /(^[A-Z]{1}[a-z]+)(\s[A-Z][a-z A-z]+)*$/;
        if($("#txthoten").val() == "") {
            $("#tbhoten").html("Không được để chống !!");
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
    var day2 = new Date($("#txtngaydi").val());
    var day1 = new Date($("#txtngayden").val());
    $("#txtSongay")= day2-day1;

//===============================================================   
// Mã khách hàng (theo phom đề cho)
    function Makh(){
        var kt=/(^(PE160000)+)(\d{4})*$/;
        if($("#txtmakh").val() == ""){
            $("#tbmakh").html("*Bắt buộc nhập !!");
            return false;
        }
        if(!kt.test($("#txtmakh").val())){
            $("#tbmakh").html("*Chữ cái đầu của mỗi từthấy  phải viết hoa !!");
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
// Này là theo kỉu chọn 1 hoặc 2 hoặc 3 hoặc 4 tương ứng với nó là
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

        var hoten = $("#txtHoten").val();   // họ tên
        var kiemtrangayden = $("#txtngayden").val(); // Kiểm tra ngày đến
        var kiemtrangaydi = $("#txtngaydi").val();   // kiểm tra ngày đi
        var songay = $("#txtSongay").val();          // Số ngày
        var makhachhang = $("#txtmakh").val();       // Mã khách hàng
        var kiemtramasach = $("#txtMasach").val();   // Kiểm tra mã sách
        var kiemtrasoluong = $("#txtSL").val();      // Kiểm tra số lượng

        var thangtt=$("#ThangTT").val();             // tháng thanh toán
        var stt=$("#txtSTT").val();                  // STT
        var ttt=$("#txtTTT").val();                  // TTT

        var ktsdt = $("#txtSDT").val();              // Kiểm tra số điện thoại
        var ntg = $("#txtntg").val();                // Ngày tham gia
        var gio=$("#txtGN").val();                   // In ra giờ (chỉ cần dòng này thôi là in ra h dx rồi)


        if($("input[type='radio'].check").is(':checked')) {                // in ra dấu check radio
            var radio = $("input[type='radio'].check:checked").val();
        } 

        if($("input[type='checkbox'].checkk").is(':checked')) {                // in ra dấu check checkbox
            var checkbox = $("input[type='checkbox'].checkk:checked").val();
        } 

// In thông tin ra màng hình
        var them = "<tr><td>" + (i++) + "</td><td>" + hoten +           "</td><td>" + kiemtrangayden +  "</td><td>" + kiemtrangaydi + 
                                        "</td><td>" + songay +          "</td><td>" + makhachhang +     "</td><td>" + kiemtramasach + 
                                        "</td><td>" + kiemtrasoluong +  "</td><td>" + thangtt +         "</td><td>" + stt +             
                                        "</td><td>" + ttt +             "</td><td>" + radio +           "</td><td>" + checkbox + 
                                        "</td><td>" + ktsdt +           "</td><td>" + ntg +             "</td><td>" + gio +  
                   "</td></tr>";

        $("#table").append(them);  //  in thông tin ra bên trong dòng có id=("table")
        $("#myModal").modal("hide");

    });

});