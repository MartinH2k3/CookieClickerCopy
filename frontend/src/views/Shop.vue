<script setup>
import { formatPrice } from '@/utils'
import {useStore} from "@/store.js";
import {reactive, ref} from "vue";

const store = useStore()
const cookieCount = ref(store.cookieCount)
const costs = reactive(store.costs)
const ownedUpgrades = store.ownedUpgrades
const cookiesPerClick = store.cookiesPerClick
const cookiesPerSecond = store.cookiesPerSecond
const miningUpgrades = store.miningUpgrades
const autoCookieGain = store.autoCookieGain

function buy(name) {
	if (cookieCount.value >= costs[name]) {
		cookieCount.value -= costs[name]
		ownedUpgrades[name]++
		costs[name] = Math.floor( costs[name] * 1.2)
		if (autoCookieGain[name]) {
			cookiesPerSecond.value += autoCookieGain[name]
		} else {
			cookiesPerClick.value += miningUpgrades[name]
		}
	}
}

</script>

<template>
	<div id="container">
		<header>
			<router-link to="/"><i class='fas fa-arrow-left'></i></router-link>
			<h2>Shop</h2>
			<span id="cookie-count">{{ formatPrice(cookieCount) }}</span>
		</header>

		<ul>
			<li v-for="name in Object.keys(costs)" :key="name">
				<div class="image-container">
					<img :src="`@/assets/images/${name}.png`" alt="" onerror="">
					<img class="alt-image" src="@/assets/images/default.png" alt="">
				</div>
				<span>{{name}}</span> {{ formatPrice(costs[name]) }}
				<button @click="buy(name)">Buy</button>
			</li>
		</ul>
	</div>
</template>

<style scoped>
	header {
		display: grid;
		grid-template-columns: 1fr 4fr 2fr;
		align-items: center;
	}
	#cookie-count {
		padding: 0.5rem;
		font-weight: bold;
	}

	ul {
		list-style-type: none;
		padding: 0.5rem;
	}

	li {
		display: grid;
		grid-template-columns: 1fr 4fr 2fr 1fr;
		padding: 0.1rem;
	}

	.image-container>img{
		position: absolute;
		width: 1.1rem;
		height: 1.1rem;
	}

</style>