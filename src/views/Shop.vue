<script setup>
import {inject, ref} from 'vue'

let cookieCount = ref(inject("cookieCount"))

let ownedUpgrades = inject("ownedUpgrades")

let cookiesPerClick = ref(inject("cookiesPerClick"))
let cookiesPerSecond = ref(inject("cookiesPerSecond"))

const baseCosts = inject("baseUpgradeCosts")
const miningUpgrades = inject("miningUpgrades")
const autoCookieGain = inject("autoCookieGain")

const costs = Object.fromEntries(
		Object.keys(ownedUpgrades).map(key => [key, baseCosts[key] * Math.floor(1.8**ownedUpgrades[key])])
);

function buy(name) {
	if (cookieCount.value >= costs[name]) {
		cookieCount.value -= costs[name]
		costs[name] = baseCosts[name] * Math.floor(1.8**ownedUpgrades[name])
		ownedUpgrades[name]++
		if (autoCookieGain[name]) {
			cookiesPerSecond.value += autoCookieGain[name]
		} else {
			cookiesPerClick.value += miningUpgrades[name]
		}
	}
}
</script>

<template>
	<div>
		<h2>Shop</h2>
		<ul>
			<li v-for="(cost, name) in costs" :key="name">
				{{name}}: {{cost}} cookies
				<button @click="buy(name)">Buy</button>
			</li>
		</ul>
	</div>

<!--	route to App.vue -->
	<router-link to="/">Back</router-link>
</template>

<style scoped>

</style>