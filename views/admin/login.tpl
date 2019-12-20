{% extends './../layout.tpl' %}

{% block css %}
  <link rel="stylesheet" href="/stylesheets/admin_login.css">
{% endblock %}

{% block content %}
<div class="page">
  <header class="page-header">
    <img src="/images/mercedes_logo.png"  class="logo">
  </header>
  <div class="page-mainer">
    <div class="mainer-title">
      <h1>登录</h1>
      <p></p>
    </div>
    <div class="mainer-login">
      <div class="login-container">
        <p class="login-title">MERCEDS-BENZ</p>
        <input id="userPhone" type="text" class="login-input" placeholder="请输入你的手机" onfocus="this.placeholder=''" onblur="this.placeholder='请输入你的手机'"/>
        <input id="userPassword" type="text" class="login-input" placeholder="请输入你的密码" onfocus="this.placeholder=''" onblur="this.placeholder='请输入你的密码'"/>
        <button id="userSubmit" class="login-button">点击登录</button>
      </div>
    </div>
    <img src="/images/mercedes_background.png" class="mainer-background">
  </div>
  <footer class="page-footer">Copyright © 2019 极客学院体验技术部出品</footer>
</div>
{% endblock %}

{% block js %}
<script src="/javascripts/jquery-3.4.1.js"></script>
<script src="/javascripts/login.js"></script>
{% endblock %}