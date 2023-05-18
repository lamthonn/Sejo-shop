
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
        <i class="fa-solid fa-circle-user"></i>
        <a href="./cart.html">
          <i class="fa-solid fa-cart-shopping cart-icon"></i>
        </a>
        <a href="./home.html" id="logOut">Log Out</a>
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
          <li><a href="">LOGIN</a></li>
          <li><a href="">SIGN IN</a></li>
        </ul>
      </div>
    </div>
    </div>
`

// document.getElementById('footer').innerHTML = `
//     <footer>
//         <div >
//             <span style="position: relative; left: 37%;">© copyright 2023 Sejo_Shop, LN Team</span>
//         </div>

//         <ul>
//             <li><a href=""><i class="fa-brands fa-facebook"></i></a></li>
//             <li><a href=""><i class="fa-brands fa-instagram"></i></a></li>
//             <li><a href=""><i class="fa-brands fa-twitter"></i></a></li>
//         </ul>
//     </footer>
// `

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
          userIcon.style.display = "block";
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