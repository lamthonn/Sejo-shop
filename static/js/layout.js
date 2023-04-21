document.getElementById('header').innerHTML = `
<div class="container-fluid">
<header style="display: flex;">
  <div class="header_left">
    <img width="50px" src="./static/image/logo_nike.jpg" alt="logo" style="margin-left: 38px;">
  </div>

  <div class="right">
    <a href="#"><i class="fa-solid fa-magnifying-glass"></i> Find a Store </a>
    <p>|</p><a href="#"><i class="fa-solid fa-info"></i> Help </a>
    <p>|</p><a href="#"><i class="fa-solid fa-headset"></i> Contact </a>
  </div>

  <div class="right_responsive">
    <i class="fa-solid fa-bars"></i>
  </div>
</header>
<!-- nav -->
<nav>
  <a href="#home" class="brand" style="font-size: 30px;">SEJO SHOP</a>
  <ul>
    <li><a href="./home.html">Home</a></li>
    <li><a href="./aboutus.html">About Us</a></li>
    <li><a href="#">Product</a></li>
    <li><a href="#">Sale</a></li>
  </ul>
  <form class="search-form" action="/search" method="GET">
    <input type="text" name="q" placeholder="Search...">
    <button type="submit">Search</button>
  </form>
  <div class="user-buttons">
    <a href="">Log in</a>
    <a href="">Sign in</a>
  </div>
</nav>
</div>
`

document.getElementById('footer').innerHTML = `
    <footer>
        <div >
            <span style="position: relative; left: 37%;">© copyright 2023 Sejo_Shop, LamVu</span>
        </div>

        <ul>
            <li><a href=""><i class="fa-brands fa-facebook"></i></a></li>
            <li><a href=""><i class="fa-brands fa-instagram"></i></a></li>
            <li><a href=""><i class="fa-brands fa-twitter"></i></a></li>
        </ul>
    </footer>
`