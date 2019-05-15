Vue.component('navbar',{

  	template: `<header class="default-header">
				<div class="header-wrap">
					<div class="header-top d-flex justify-content-between align-items-center">
						<div class="logo">
							<a href="index.html"><h1 style="font-family: 'Sacramento', cursive; font-weight:bold; font-size:40px; color:black; font-size: 50px; margin-top: 20px;">Posh</h1></a>
						</div>
						<div class="main-menubar d-flex align-items-right hidden-sm-and-down" style="text-align:right; margin-bottom: 0px;">
							<nav class="hidden-sm-and-down" style="text-align:right;">
								<a href="index.html">Home</a>
								<a href="generic.html">Events</a>
								<a href="elements.html">Partners</a>
								<a href="elements.html">Services</a>
								<a href="elements.html">About Us</a>
								<a href="elements.html">Login</a>
							</nav>
							<!-- <div class="menu-bar hidden-md-and-up"><span class="lnr lnr-menu"></span></div> -->
						</div>
						<div class="main-menubar d-flex align-items-right hidden-md-and-up" style="text-align:right; margin-bottom: 0px;">
							<nav class="hide hidden-md-and-up">
								<a href="index.html">Home</a>
								<a href="generic.html">Generic</a>
								<a href="elements.html">Elements</a>
							</nav>
							<div class="menu-bar hidden-md-and-up"><span class="lnr lnr-menu"></span></div>
						</div>
					</div>
				</div>
			</header>`
})