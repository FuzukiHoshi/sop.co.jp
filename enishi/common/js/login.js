$(document).ready(function () {
    var ua = navigator.userAgent;
    $('#equipment-login').on('click',function(){
		var input_pass = $("#password").val();
		if(input_pass =="") {
			alert("パスワードを入力してください。");
			$("#password").focus();
			return false ;
		}
		$.post("./inc/viewChk.php",{mode:"passchk",input_pass:input_pass},function(data){
			if(data){
				$(window.opener.document).find('.p-roomMap').addClass("is-show");
                window.opener.location.reload()
                if (ua.indexOf('iPhone') > 0 || ua.indexOf('iPod') > 0 || (ua.indexOf('Android') > 0) && (ua.indexOf('Mobile') > 0) || ua.indexOf('Windows Phone') > 0) {
            		window.location.hash = "#anchorRoomMap"
            	}
				window.close();
				return false;
			}
			else{
				alert("パスワードがただしくありません。");
				return false ;
			}
		});
    });

})
