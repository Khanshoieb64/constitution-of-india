$(document).ready(function(){
	$("ul.video li a ").click(function(){
	  $(this).parent().addClass("active");
	  
	  $(this).parent().siblings().removeClass("active");
	});
});
function hideallexcept(id) 
{ 
  document.getElementById('video').style.display = '';
   var xmlhttp;
	   if (window.XMLHttpRequest) 
			  {
				  xmlhttp = new XMLHttpRequest();
			  }
		   else 
			  {
				 xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
			  }
		xmlhttp.onreadystatechange = function() 
		
	   {
		   if (xmlhttp.readyState == 4 && xmlhttp.status == 200) 
			   {
				 document.getElementById("video").innerHTML = xmlhttp.responseText;
			   }
			else 
				{
				  document.getElementById("video").innerHTML = "<font color='#ff0000'>Loading........</font>";
				}
		}
		var val_id = btoa(id);
		xmlhttp.open("POST", "asp-page/indexvod1.asp?id=" + val_id, false);
		xmlhttp.send();
		
  document.getElementById('text').style.display = '';
   var xmlhttp;
	   if (window.XMLHttpRequest) 
			  {
				  xmlhttp = new XMLHttpRequest();
			  }
		   else 
			  {
				 xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
			  }
		xmlhttp.onreadystatechange = function() 
		
	   {
		   if (xmlhttp.readyState == 4 && xmlhttp.status == 200) 
			   {
				 document.getElementById("text").innerHTML = xmlhttp.responseText;
			   }
			else 
				{
				  document.getElementById("text").innerHTML = "<font color='#ff0000'>Loading........</font>";
				}
		}
		var val_id = btoa(id);
		xmlhttp.open("POST", "asp-page/indextext.asp?id=" + val_id, false);
		xmlhttp.send();
}	



$(function () {
    $('[id*=submenu]').addClass('nav-item open');
    $('[id*=Master_Pages]').attr("aria-expanded", true);

    $('.subMenus').click(function () {
        localStorage.setItem('lastTab', $(this).attr('id'));
    });
});
function pageLoad() {
    var isActiveLink = false;
    $.each($('.subMenus'), function () {
        if ($(this).attr('id') == localStorage.getItem('lastTab')) {
            $(this).closest('li').addClass('active');
            localStorage.removeItem('lastTab');
            isActiveLink = true;
        }
        else {
            $(this).closest('li').removeClass('active');
        }
    });
    if (!isActiveLink) {
        $('[id*=Master_Home]').closest('li').addClass('active');
    }
}


$(function () {
    $('a').click(function () {
        if ($(this).hasClass('changeTarget')) {
            window.document.forms[0].target = '_blank';
        } else {
            window.document.forms[0].target = '_self';
        }
    });
});

