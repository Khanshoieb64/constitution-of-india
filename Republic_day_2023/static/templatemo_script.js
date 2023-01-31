/*  CODE FOR CLICK EVENT Pagination */
function changePage(event) {
  
  var pageNo = $(this).html();

  $('.portfolio-page').hide();
  $('#page-' + pageNo).fadeIn();
  $('.pagination li').removeClass('active');
  $(this).addClass('active');
  
}



function changePages(event) {
  
  var pageNo = $(this).html();

  $('.portfolio-pages').hide();
  $('#pages-' + pageNo).fadeIn();
  $('.paginations li').removeClass('active');
  $(this).addClass('active');
}