const PAGE = {
  init:function(){
    this.bind();
  },
  bind:function(){
    $('#exitButton').bind('click',this.exitButton);
  },
  exitButton:function(){
    $.ajax({
      url:'/exit',
      type:'GET',
      success:function(data){
        if(data.code === 200){
          alert('退出成功')
          location.href = '/admin/login'
        }else{
          console.log(data)
        }
      },
      error:function(err){
        console.log(err)
      }
    })
  }
}

PAGE.init();