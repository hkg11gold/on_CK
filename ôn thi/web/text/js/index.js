$(document).ready(function () {
    var i = 1;
    $("#myBtn").click(function () {
      $("#myModal").modal();
    });
    // ===================================================
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
    

    // ===================================================
    function Hoten(){
        var kt=/(^[A-Z]{1}[a-z]+)(\s[A-Z][a-z A-Z]+)*$/;
        if($("#txthoten").val() == ""){
            $("#tbhoten").html("*Bắt buộc nhập !!");
            return false;
        }
        if(!kt.test($("#txthoten").val())){
            $("#tbhoten").html("*Chữ cái đầu của mỗi từthấy  phải viết hoa !!");
            return false;
        }
        $("#tbhoten").html("*");
        return true;
        };
        $("#txthoten").blur(Hoten);

        
    // ===================================================

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
     

    // ===================================================

    $("#btnSave").click(function(){
        if(!Makh() || !Hoten() ){
        $("#thongbao").html("*Nhập đúng và đủ thông tin");
        return false;
        }
        var makh=$("#txtmakh").val();
        var hoten=$("#txthoten").val();
        var thangtt=$("#ThangTT").val();
        var stt=$("#txtSTT").val();
        var ttt=$("#txtTTT").val();

        if($("input[type='radio'].check").is(':checked')) {
            var hinhthuc = $("input[type='radio'].check:checked").val();
          } 
        
        
        var them = "<tr><td>" + (i++) + "</td><td>" + makh + "</td><td>" + hoten + "</td><td>"+ thangtt+"</td><td>"+stt +"</td><td>"+ttt+"</td><td>" + hinhthuc + "</td></tr>";
        $("#table").append(them);
        $("#myModal").modal("hide");


    });

    // ===================================================

  });
 
  