<script setup>
import {inject, ref} from 'vue'
import Shop from "@/views/Shop.vue";
let cookieCount = ref(inject("cookieCount"))

const cookiesPerClick = ref(inject("cookiesPerClick"))
const cookiesPerSecond = ref(inject("cookiesPerSecond"))

function click(e) {
	cookieCount.value += cookiesPerClick.value
	e.target.style.width = '270px'
	setTimeout(() => {
		e.target.style.width = ''
		e.target.style.height = ''
	}, 200)
}

function formatNumber(num) {
	return  num >= 1e15 ? (num / 1e15).toFixed(1) + 'q' :
					num >= 1e12 ? (num / 1e12).toFixed(1) + 't' :
					num >= 1e9 ? (num / 1e9).toFixed(1) + 'b' :
					num >= 1e6 ? (num / 1e6).toFixed(1) + 'm' :
					num >= 1e3 ? (num / 1e3).toFixed(1) + 'k' :
					num;
}

</script>

<template>
	<div id="main">
		<h1 id="title">{{ formatNumber(cookieCount) }}</h1>
		<img @click="click" src="@/assets/cookie_img.svg" id="cookie" alt="cookie">
		<p id="auto_gain">per second: {{cookiesPerSecond}}</p>
		<router-link id="shop-button" to="shop">Shop</router-link>
	</div>
</template>

<style scoped>
	#main {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		height: 500px;
		width: 350px;
	}

	#title {
		margin-top: 50px;
	}

	#cookie {
		width: 250px;
		top: 50%;
		transition: width 0.2s;
		animation: spin 15s linear infinite;
		cursor: pointer;
	}

	#auto_gain {
		top: 50%;
	}

	#shop-button {
		position: absolute;
		top: 0;
		right: 0;
	}

	@keyframes spin {
		0% { transform: rotate(0deg); }
		100% { transform: rotate(360deg); }
	}
</style>
