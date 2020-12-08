<template>
  <header>
	<div class="container">
		<!-- nav -->
		<nav class="py-4 d-lg-flex">
			<div id="logo">
				<h1> <router-link to="/"><span class="fa fa-leaf"></span> Tsavo Seed</router-link></h1>
			</div>
			<label for="drop" class="toggle"><span class="fa fa-bars"></span></label>
			<input type="checkbox" id="drop" />
			<ul class="menu mt-md-2 ml-auto">
				<li class="mr-lg-4 mr-2 active"><router-link to="/">Home</router-link></li>
				<li class="mr-lg-4 mr-2"><router-link to="/about">About Us</router-link></li>
				<li class="mr-lg-4 mr-2"><router-link to="/services">Services</router-link></li>
				<li class="mr-lg-4 mr-2"><router-link to="/contact">Contact</router-link></li>
				<li class="mr-lg-4 mr-2"><span><a href="tel:+254775643903"><span class="fa fa-phone"></span> +254 775 643 903</a></span></li>
			</ul>
		</nav>
		<!-- //nav -->
	</div>
</header>
</template>

<script>
export default {
	name: 'Header'
}
</script>
