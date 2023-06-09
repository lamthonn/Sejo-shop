
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
            <li class="login_header_res1"><a href="./login.html">LOGIN</a></li>
            <li class="login_header_res2"><a href="./SignIn.html">SIGN IN</a></li>
          <li><a href="./cart.html">CART</a></li>
          <li class="logout_header_res"><a>LOGOUT</a></li>
        </ul>
      </div>

      
    </div>
    </div>
`

document.getElementById('footer').innerHTML = `
  <footer>
    <div class="info_dif">Different Informations</div>
    <div class="footer_intro">
        <div class="footer-title">
            Introduction
            <i class="fa-solid fa-chevron-down iconshow"></i>
        </div>
        <div class="intro_detail">
            <p>Discover our extensive collection of stylish and high-quality footwear for every occasion at our online shoe store. Step into fashion and comfort with us today!</p>
            <div>
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-youtube"></i>
                <i class="fa-brands fa-google"></i>
            </div>
        </div>
    </div>

    <div class="footer_contact">
        <div class="footer-title">
            Contact
                <i class="fa-solid fa-chevron-down iconshow"></i>
        </div>
        <div class="contact_detail">
            <div>
                <i class="fa-sharp fa-solid fa-location-dot"></i>
                <span>Electric Power University, Hoang Quoc Viet street, Bac Tu Liem, Ha Noi</span>
            </div>
            <div>
                <i class="fa-solid fa-phone"></i>
                <span>093292999</span>
            </div>
            <div>
                <i class="fa-solid fa-envelope"></i>
                <span>SejoShop00@gmail.com</span>
            </div>
        </div>
    </div>

    <div class="footer_help">
        <div class="footer-title">
            Get help
            <i class="fa-solid fa-chevron-down iconshow"></i>
        </div>
        <div class="help_detail">
            <a href="">Order status</a>
            <a href="">Delivery</a>
            <a href="">Returns</a>
            <a href="">Payment options</a>
        </div>
    </div>

    <div class="footer_about">
        <div class="footer-title">
            About us
            <i class="fa-solid fa-chevron-down iconshow"></i>
        </div>
        <div class="about_detail">
            <a href="">News</a>
            <a href="">Careers</a>
            <a href="">Investors</a>
            <a href="./aboutus.html">About us</a>
        </div>
    </div>
  </footer>
  <div class='footer-2'>
        <div >
            <span style="position: relative; left: 28%;">© copyright 2023 Sejo_Shop, LN Team</span>
        </div>

        <ul>
            <li><a href=""><i class="fa-brands fa-facebook"></i></a></li>
            <li><a href=""><i class="fa-brands fa-instagram"></i></a></li>
            <li><a href=""><i class="fa-brands fa-twitter"></i></a></li>
        </ul>
    </div>
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
const login_res1 = document.querySelector(".login_header_res1");
const login_res2 = document.querySelector(".login_header_res2");
      if (localStorage.getItem("isLogin") === "true") {
          userButton.style.display = "none";
          userIcon.style.display = "flex";
          document.querySelector(".user-logout").style.display = "grid";
          document.querySelector(" .logout_header_res").style.display = "block";
          login_res1.style.display = "none";
          login_res2.style.display = "none";
      }


// footer 
const iconshows = document.querySelectorAll('.iconshow');

iconshows.forEach(iconshow => {
  const father1 = iconshow.parentElement;
  const father2 = iconshow.parentElement.parentElement;

  if(father2.className === 'footer_intro') {
    father1.addEventListener('click', () => {
      document.querySelector('.intro_detail').classList.toggle('show_footer')
    })
  }
  else if(father2.className === 'footer_contact') {
    father1.addEventListener('click', () => {
      document.querySelector('.contact_detail').classList.toggle('show_footer')
    })
  }
  else if(father2.className === 'footer_help') {
    father1.addEventListener('click', () => {
      document.querySelector('.help_detail').classList.toggle('show_footer')
    })
  }
  else {
    father1.addEventListener('click', () => {
      document.querySelector('.about_detail').classList.toggle('show_footer')
    })
  }
})