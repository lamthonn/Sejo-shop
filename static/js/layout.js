
document.getElementById('header').innerHTML = `
<div class="container-fluid">
    <header>
      <div class="header_left">
        <img width="50px" src="./static/image/logo_nike.jpg" alt="logo" style="margin-left: 38px;">
      </div>
    
      <div class="right">
        <a href="#"><i class="fa-solid fa-magnifying-glass"></i> Find a Store </a>
        <p>|</p><a href="#"><i class="fa-solid fa-info"></i> Help </a>
        <p>|</p><a href="#"><i class="fa-solid fa-headset"></i> Contact </a>
      </div>
    </header>
     
    <nav>
      <a href="./home.html" class="brand" style="font-size: 30px;">SEJO SHOP</a>
      <ul>
        <li><a href="./home.html">Home</a></li>
        <li><a href="./aboutus.html">About Us</a></li>
        <li><a href="./product.html">Product</a></li>
        <li><a href="#">Sale</a></li>
      </ul>
      <form class="search-form" action="/search" method="GET">
        <input class="input_nav" type="text" name="q" placeholder="Search...">
        <button type="submit">Search</button>
      </form>
      <div class="user-buttons">
        <a href="./login.html">Log in</a>
        <a href="./SignIn.html">Sign in</a>
      </div>

      <div class="user-icon">
        <a href="./cart.html">
          <i class="fa-solid fa-cart-shopping cart-icon" style="padding: 0px 12px 0px 0px;"></i>
        </a>
        <div class="user-logout">
          <i class="fa-solid fa-circle-user"></i>
          <a href="./home.html" id="logOut" style="padding-bottom: 0;">Log Out</a>
        </div>
        
      </div>
    
      <div class="right_responsive" style="display: none">
        <i class="fa-solid fa-bars"></i>
      </div>
    </nav>
    </div>
  
  
    <div class="header_responsive">
    <form action="" style="height: 50%"><input type="text" placeholder="Search..."
        style="width: 100%; height: 100%; background-color: rgb(207, 207, 207); border: none; border-bottom:1px solid rgba(77, 77, 77, 0.305) ;"> 
    </form>
    <div class="header_responsive_content" >
      <div class="header_responsive_left">
        <ul>
          <li><a href="./home.html">HOME</a></li>
          <li><a href="./aboutus.html">ABOUT US</a></li>
          <li><a href="./product.html">PRODUCTS</a></li>
          <li><a href="">SALE</a></li>
          <li><a href="">CONTACT</a></li>
        </ul>
      </div>
      <div class="header_responsive_right">
        <ul>
            <li class="login_header_res"><a href="./login.html">LOGIN</a></li>
            <li class="login_header_res"><a href="./SignIn.html">SIGN IN</a></li>
          <li><a href="./cart.html">CART</a></li>
          <li class="logout_header_res"><a>LOGOUT</a></li>
        </ul>
      </div>

      
    </div>
    </div>
`

document.getElementById('footer').innerHTML = `
    <footer>
        <div >
            <span style="position: relative; left: 37%;">© copyright 2023 Sejo_Shop, LN Team</span>
        </div>

        <ul>
            <li><a href=""><i class="fa-brands fa-facebook"></i></a></li>
            <li><a href=""><i class="fa-brands fa-instagram"></i></a></li>
            <li><a href=""><i class="fa-brands fa-twitter"></i></a></li>
        </ul>
    </footer>
`

// responsive
const dropNav = document.querySelector('.fa-bars');
const isShow = false;
document.querySelector('.header_responsive').style.display = 'none';
dropNav.addEventListener('click',function (){
  this.isShow = !this.isShow;
  if(this.isShow)
  {
    document.querySelector('.header_responsive').style.display = 'grid';
  }
  else{
    document.querySelector('.header_responsive').style.display = 'none';
  }
})

document.getElementById('logOut').addEventListener('click', function() {
  let is_login = false;
  localStorage.setItem("isLogin", is_login);
})


const userIcon = document.querySelector(".user-icon");
const userButton = document.querySelector(".user-buttons");
      if (localStorage.getItem("isLogin") === "true") {
          userButton.style.display = "none";
          userIcon.style.display = "flex";
          document.querySelector(".user-logout").style.display = "grid";
          document.querySelector(".logout_header_res").style.display = "block";
          document.querySelectorAll(".login_header_res").style.display = "none";
      }

