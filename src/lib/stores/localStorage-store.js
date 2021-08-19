import  { writable } from 'svelte/store'
import { browser } from '$app/env'

// Array
const storedFruits = browser && (JSON.parse(localStorage.getItem("fruits")) || ["apple", "orange", "grapes"])

// Object
// const storedUser = browser && (JSON.parse(localStorage.getItem("user")) || {name: "brian", id: 12345})

export const fruits = writable(
    storedFruits
)
fruits.subscribe((val) => browser && (localStorage.userName = JSON.stringify(val)))