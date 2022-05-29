$(document).ready(function() {
    var i=0;
    $("#btnDK").click(function() {
        $("#myModal").modal();

        function KTMa() {
            let maukt = /^KH.[0-9]{5}.[A-Z]{1}.[0-9]{2,}$/;
            if($("#txtMa").val()==""){
                $("#tbMa").html("Không được để trống");
                return false;
            }

            if(!maukt.test($("#txtMa").val())){
                $("#tbMa").html("Mã khách hàng có dạng KH.xxxxx.Pxxx");
                return false;
            }

            $("#tbMa").html("(*)");
            return true;
        }
        $("#txtMa").blur(KTMa);

        function KTDT() {
            let maukt = /^((09)|(08))[0-9]{8}$/;
            if($("#txtSDT").val()==""){
                $("#tbSDT").html("Không được để trống");
                return false;
            }

            if(!maukt.test($("#txtSDT").val())){
                $("#tbSDT").html("Số điện thoại gồm 10 số bắt đầu với hai kí số 09 hoặc 08");
                return false;
            }

            $("#tbSDT").html("(*)");
            return true;
        }
        $("#txtSDT").blur(KTDT);

        $("#txtGTT").change(function() {
            var tien = $("#txtGTT").val();
            $("#txtTT").val(tien);
        });

        $("#KM").click(function() {
            var tien = $("#txtGTT").val();
            if($("#KM").is(":checked")){
                $("#txtTT").val(tien - tien *0.1);
            }
            else{
                $("#txtTT").val(tien);
            }

        });


        $("#btnSave").click(function(){

            var ma = $("#txtMa").val();
            var SDT = $("#txtSDT").val();
            var tienthe = $("#txtGTT").val();
            var loaithe;
            if($("#mb").is(":checked")){
                loaithe="Mobifone";
            }
            if($("#vn").is(":checked")){
                loaithe="Vinaphone";
            }
            if($("#vt").is(":checked")){
                loaithe="Vettel";
            }
            var khuyenmai;
            var tongTien;
            
            if($("#KM").is(":checked")){
                khuyenmai = "10%";
                tien = $("#txtGTT").val()
                tongTien = tienthe - tienthe * 0.1;
            }
            else{
                khuyenmai = "Không được giảm giá"
                tongTien = tienthe;
            }
            
            var them = '<tr><td>' + (++i) + '</td><td>' + ma + 
            '</td><td>' + SDT + '</td><td>' + tienthe + '</td><td>'
            +  loaithe + '</td><td>' + khuyenmai + '</td><td>' + tongTien + '</td></tr>';

            $("#danhsach").append(them);
            $("#myModal").modal("hide");
        })
    });
});