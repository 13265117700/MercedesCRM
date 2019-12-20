const PAGE = {
  init:function(){
    this.bind();
  },
  bind:function(){
    $('#userSubmit').bind('click',this.userSubmit);
  },

  userSubmit:function(){
    let phone = $('#userPhone').val();
    let password = $('#userPassword').val();
    console.log(phone,password)
    if(!phone || !password){
      alert('必须输入参数')
      return
    }

    $.ajax({
      url:'/login',
      data:{phone,password},
      type:'POST',
      success:function(data){
        if(data.code === 200){
          alert('登录成功')
          location.href = '/admin/clue'
        }else{
          console.log(data)
          alert('没有此用户')
        }
      },
      error:function(err){
        console.log(err)
      },
    })
  }
}

PAGE.init()