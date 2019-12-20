{% extends './layout.tpl' %}

{% block css %}
  <link rel="stylesheet" href="/stylesheets/index.css">
{% endblock %}

{% block content %}
<div class="page">
  <header class="page-header">
    <img src="/images/mercedes_logo.png"  class="logo">
    <button class="login-button">登录</button>
  </header>
  <div class="page-mainer">
    <div class="mainer-title">
      <h1>预约试驾</h1>
      <p></p>
    </div>
    <div class="mainer-try">
      <div class="container">
        <p class="try-description">欢迎在线预约试驾。只需填写姓名及手机号码，我们会第一时间与您联系，安排试驾事宜。</p>
        <input id="userName" type="text" class="try-input" placeholder="你的姓名" onfocus="this.placeholder=''" onblur="this.placeholder='你的姓名'"/>
        <input id="userPhone" type="text" class="try-input" placeholder="你的电话" onfocus="this.placeholder=''" onblur="this.placeholder='你的电话'"/>
        <button id="userSubmit" class="try-button">马上抢占名额</button>
      </div>
    </div>
    <img src="/images/mercedes_background.png" class="mainer-background">
  </div>
  <footer class="page-footer">Copyright © 2019 极客学院体验技术部出品</footer>
</div>
{% endblock %}

{% block js %}
<script src="/javascripts/jquery-3.4.1.js"></script>
<script src="/javascripts/index.js"></script>
{% endblock %}