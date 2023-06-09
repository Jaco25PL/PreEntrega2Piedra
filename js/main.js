// HOME
let store;
let currency;
const spinner = document.querySelector("#spinner");
const productsCont = document.querySelector("#productsCont");
const categoryBtn = document.querySelectorAll(".category__items");
const catTitle = document.querySelector("#categoryTitle");
const logOut = document.querySelector(".log-out-cont");
const logOutBtn = document.querySelector(".log-out-btn");
const searchInput = document.querySelector("#searchInput");
const searchBtn = document.querySelector("#searchBtn");
const usdBtn = document.querySelector("#toUsd");
const uyuBtn = document.querySelector("#toUyu");
const bagNum = document.querySelector("#bagNum");
const goCart = document.querySelector("#goCart");

// BAG
const getBag = getProductsBag();
const showBag = document.querySelector("#showBag");
const bagAmount = document.querySelector("#totalAmount");
const bagAmountCont = document.querySelector("#bagAmountCont");
const currencyCodeTotal = document.querySelector("#currencyCodeTotal");
// FORM
const form = document.querySelector("#form");
const userName = document.querySelector("#formUserName");
const alertUserName = document.querySelector("#alertUserName");
const userTel = document.querySelector("#formUserTel");
const alertUserTel = document.querySelector("#alertUserTel");
const userLogBtn = document.querySelector(".log-btn");

fetchData();
selectCategory();
searchProducts();
userLogOut();
goToCart();

total();
renderBagProducts();

valFormEvent()
userChange();
scrollBottom();


