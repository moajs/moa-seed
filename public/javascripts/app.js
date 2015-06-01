
function click_del(url){
  if (!confirm("确认要删除？")) {
    return window.event.returnValue = false;
  }
  
  console.log(url);
  
  $.ajax({
    type: "DELETE",
    url: url
  })
  .done(function( res ) {
    if(res.status.code == 0){
      // alert( "Data delete: success " + res.status.msg );
      window.location.href= location.href;
    }else{
      alert( "Data delete fail: " + res.status.msg );
    } 
  });
}