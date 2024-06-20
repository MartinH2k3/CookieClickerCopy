<script setup>
import {inject} from "vue";

defineProps(['name'])
let price = inject("ownedUpgrades")[name]
</script>

<template>
	<li> {{name}}</li>
</template>

<style scoped>

</style>