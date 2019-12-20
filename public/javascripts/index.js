const PAGE = {
  init:function(){
    this.bind();
  },
  bind:function(){
    $('#userSubmit').bind('click',this.userSubmit);
  },

  userSubmit:function(){
    let name = $('#userName').val();
    let phone = $('#userPhone').val();
    if(!name || !phone){
      alert('必须输入参数')
      return
    }

    $.ajax({
      url:'/clue',
      data:{name,phone},
      type:'POST',
      beforeSend:function(){
        $("#userSubmit").attr("disabled",true);
      },
      success:function(data){
        console.log(data)
        if(data.code === 200){
          alert('预约成功')
          return
        }else{
          console.log(data.message)
        }
      },
      error:function(err){
        console.log(err)
      },
      complete: function() {
        $("#userSubmit").attr("disabled",false);
      },
    })
    console.log(name,phone)
  },
}

PAGE.init()