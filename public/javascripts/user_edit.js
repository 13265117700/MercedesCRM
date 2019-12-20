const PAGE = {
  init:function(){
    this.bind();
  },
  bind:function(){
    $('#userSubmit').bind('click',this.userSubmit);
    $('#exitButton').bind('click',this.exitButton);
  },
  userSubmit:function(){
    let id = $('#userId').val();
    let name = $('#userName').val();
    let phone = $('#userPhone').val();
    let password = $('#userPassword').val();
    let role = $('#userRole').val();
    let phoneNumber = PAGE.phoneNumber(phone);
    console.log(name,phone,password,role)

    if(!name || !phone || !password || !role){
      alert('必须输入参数')
      return
    }
    if(!phoneNumber){
      alert('请输入正确手机号码')
      return
    }

    $.ajax({
      url:'/user/' + id,
      data:{name,phone,password,role},
      type:'PUT',
      beforeSend: function() {
        $("#userSubmit").attr("disabled",true);
      },
      success:function(data){
        console.log(data)
        if(data.code === 200){
          alert('编辑成功')
          location.href = '/admin/user'
        }else{
          console.log(data)
        }
        console.log(data.code)
      },
      error:function(err){
        console.log(err)
      },
      complete: function() {
        $("#userSubmit").attr("disabled",false);
      },
    })
  },

  phoneNumber:function(phone){
    return  /^1[345678]\d{9}$/.test(phone)
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