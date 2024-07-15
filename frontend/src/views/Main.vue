<script setup>
import { formatPrice } from '@/utils.js'
import { useStore } from '@/store.js'
import {ref} from "vue";

const store = useStore()
const cookieCount = store.cookieCount
const cookiesPerClick = store.cookiesPerClick
const cookiesPerSecond = store.cookiesPerSecond

const tooltips = ref([]);

function click(e) {
	cookieCount.value += cookiesPerClick.value
	e.target.style.width = '270px'


	const tooltip = {
		id: Date.now(), // Unique ID for each tooltip
		content: `+${store.cookiesPerClick.value}`,
		x: e.clientX,
		y: e.clientY,
	}

	tooltips.value.push(tooltip)

	// Remove the tooltip after some time
	setTimeout(() => {
		tooltips.value = tooltips.value.filter(t => t.id !== tooltip.id)
	}, 1000)

	setTimeout(() => {
		e.target.style.width = ''
		e.target.style.height = ''
	}, 100)
}



</script>

<template>
	<div id="main">
		<h1 id="title">{{ formatPrice(cookieCount) }}</h1>
		<img @click="click" src="../assets/cookie_img.svg" id="cookie" alt="cookie">
		<p id="auto_gain">{{cookiesPerSecond}}/s</p>
		<router-link id="shop-button" to="shop"><i class="fa fa-shopping-cart" aria-hidden="true"></i></router-link>
	</div>

	<div v-for="tooltip in tooltips" :key="tooltip.id" :style="{ top: tooltip.y + 'px', left: tooltip.x + 'px' }" class="tooltip">
		+{{ cookiesPerClick }}
	</div>

</template>

<style scoped>
	#main {
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		height: 500px;
	}

	#title {
		margin-top: 50px;
		width: 100%;
		text-align: center;
		border-radius: 1rem;
		border: black 1px solid;
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
		width: 60%;
		text-align: center;
		border-radius: 1rem;
		border: black 1px solid;
		font-weight: bold;
	}

	#shop-button {
		position: absolute;
		top: 1rem;
		right: 0;
	}

	@keyframes spin {
		0% { transform: rotate(0deg); }
		100% { transform: rotate(360deg); }
	}

	.tooltip {
		position: absolute;
		pointer-events: none;
		transform: translate(-50%, -100%); /* Center the tooltip above the cursor */
		white-space: nowrap;
		animation: fadeInOut 1s forwards; /* Fade in and out animation */
	}

	@keyframes fadeInOut {
		0% { opacity: 1; transform: translateY(0); }
		100% { opacity: 0; transform: translateY(-2.5rem); }
	}
</style>
