import { reactive, ref } from 'vue'

const cookieCount = ref(0)
const cookiesPerClick = ref(1)
const cookiesPerSecond = ref(0)

const ownedUpgrades = reactive({
    farmers: 0,
    grandmas: 0,
    bakeries: 0,
    factories: 0,
    islands: 0,
    spaceBakers: 0,
    gods: 0,
    bigTittyBaddies: 0,
    fork: 0,
    pickaxe: 0,
    machineGun: 0,
    dynamite: 0,
    nuke: 0,
    deathStar: 0
})

const costs = {
    farmers: 10,
    grandmas: 50,
    bakeries: 100,
    factories: 200,
    islands: 500,
    spaceBakers: 1000,
    gods: 2000,
    bigTittyBaddies: 50000,
    fork: 10,
    pickaxe: 50,
    machineGun: 100,
    dynamite: 200,
    nuke: 500,
    deathStar: 10000
}

const miningUpgrades = {
    fork: 1,
    pickaxe: 5,
    machineGun: 10,
    dynamite: 20,
    nuke: 50,
    deathStar: 1000
}

const autoCookieGain = {
    farmers: 1,
    grandmas: 5,
    bakeries: 10,
    factories: 20,
    islands: 50,
    spaceBakers: 100,
    gods: 200,
    bigTittyBaddies: 5000
}

function autoIncrement() {
    setInterval(() => {
        cookieCount.value += cookiesPerSecond.value;
    }, 1000);
}

autoIncrement()

export function useStore() {
    return {
        cookieCount,
        ownedUpgrades,
        cookiesPerClick,
        cookiesPerSecond,
        costs,
        miningUpgrades,
        autoCookieGain,
    }
}