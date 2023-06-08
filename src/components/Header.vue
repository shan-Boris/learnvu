<template>
  <div className="header_wrapper">
    <div className="header_NavBarWrapper">
      <div className="header_NavBarContent">
        <div className="header_logo">
          <router-link to="/">
            <img src="../img/logoRose.png" alt="logo" title="На главную" />
          </router-link>
        </div>
        <nav className="header_btnBar">
          <router-link to="/catalog">КАТАЛОГ</router-link>
          <router-link to="/about">О НАС</router-link>
          <router-link to="/reviews">ОТЗЫВЫ</router-link>
          <router-link to="/delivery">ОПЛАТА И ДОСТАВКА</router-link>
        </nav>
        <div className="header_icons">
          <router-link to="/newOrder">
            <div className="header_backet" title="Перейти в корзину">
              <div className="icon_header">
                <svg
                  viewBox="0 0 19 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.4 5.69995L15.3 17.5999H3.69998L1.59998 5.69995H17.4Z"
                    stroke-miterlimit="10"
                  />
                  <path
                    d="M12.9 5.6999C12.9 3.5999 11.9 1.3999 9.49998 1.3999C7.09998 1.3999 6.09998 3.4999 6.09998 5.6999"
                    stroke-miterlimit="10"
                  />
                </svg>
              </div>
              <!-- <span className="icon_amount">
                {orderStore.productsInOrder.length}
              </span> -->
            </div>
          </router-link>
          <router-link to="/search">
            <div title="Поиск по названию" className="icon_header">
              <svg
                viewBox="0 0 19 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-width="1.2"
                  d="M10.1 13.6001C13.6898 13.6001 16.6 10.69 16.6 7.1001C16.6 3.51025 13.6898 0.600098 10.1 0.600098C6.51013 0.600098 3.59998 3.51025 3.59998 7.1001C3.59998 10.69 6.51013 13.6001 10.1 13.6001Z"
                  stroke="#fff"
                  stroke-miterlimit="10"
                />
                <path
                  stroke-width="1.2"
                  d="M2.59998 16.9999L6.29998 12.3999"
                  stroke="#fff"
                  stroke-miterlimit="10"
                />
              </svg>
            </div>
          </router-link>
        </div>
      </div>
    </div>
    <div className="header_globalTitle">Доставка цветов в Братске</div>
    <div className="header_title">{{ title?.toUpperCase() }}</div>
  </div>
</template>

<script setup lang="ts">
import { toRefs, defineProps } from "vue";

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
});

let { title } = toRefs(props);
</script>

<style scoped>
.header_wrapper {
  /* min-width: 765px; */
  display: flex;
  flex-direction: column;
}
.header_NavBarWrapper {
  background-color: var(--color-rozeLogo);
}

.header_NavBarContent {
  padding: 5px 20px;
  margin: 0 auto;
  max-width: 1200px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
}

.header_logo {
  /* width: 160px; */
  height: 40px;
  object-fit: contain;
  overflow: hidden;
}
.header_logo img {
  /* width: 100%; */
  height: 100%;
}

.header_btnBar {
  display: flex;
  /* gap: 10px; */
  align-items: center;
  margin: 0 -5px 0 5vw;
  white-space: nowrap;
  font-weight: 300;
  font-family: "Sofia Sans", sans-serif;
}
.header_btnBar > a {
  margin: 0 5px;
}
.header_btnBar a:link,
.header_btnBar a:visited {
  color: #f0ede2;
}
.header_btnBar a:hover,
.header_btnBar a:active {
  font-weight: 400;
}
.header_icons img {
  cursor: pointer;
}
.header_icons {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  /* gap: 10px; */
  /* width: 100%; */
  flex-grow: 2;
  /* margin-right: 10px; */
  margin: 0 5px 0 -5px;
}
.header_icons > * {
  margin: 0 5px;
}

.header_globalTitle {
  font-weight: 400;
  font-family: "Sofia Sans", sans-serif;
  font-size: 12px;
  padding: 7px;
  background-color: var(--color-forTitle);
  color: black;
}

.header_title {
  margin-top: 10px;
  font-weight: 400;
  font-family: "Sofia Sans", sans-serif;
  font-size: 28px;
  padding: 15px;
  background-color: var(--color-forTitle);
  color: black;
}

.header_search_input {
  width: 0px;
  background-color: var(--color-forTitle);
  border-radius: 3px;
  padding: 3px;
  font-size: 16px;
  transition: width 0.3s;
  /* display: none; */
  /* opacity: 0; */
  visibility: hidden;
  position: absolute;
}

.show {
  position: relative;
  width: 150px;
  visibility: visible;
  /* opacity: 1; */
  /* display: block; */
}
.header_backet {
  position: relative;
}
.icon_header {
  width: 19px;
  height: 19px;
  stroke: #fff;
  stroke-width: 1.2;
  cursor: pointer;
}

.icon_amount {
  position: absolute;
  bottom: -2px;
  right: 0;
  width: 10px;
  height: 10px;
  padding: 1px;
  /* padding: 2px 2.5px 1px 4px; */
  border-radius: 100%;
  font-weight: bold;
  font-size: 7px;
  background-color: #ff0000;
  color: #fff;
  font-family: "Sofia Sans", sans-serif;
}

.burgermenu_header {
  display: none;
  z-index: 100;
}

#menuToggle {
  display: block;
  position: relative;
  /* top: 50px;
  left: 50px; */
  top: 9px;

  z-index: 1;

  -webkit-user-select: none;
  user-select: none;
}

#menuToggle a {
  text-decoration: none;
  color: #232323;

  transition: color 0.3s ease;
}

#menuToggle input {
  display: block;
  width: 40px;
  height: 32px;
  position: absolute;
  top: -7px;
  left: -5px;

  cursor: pointer;

  opacity: 0; /* hide this */
  z-index: 2; /* and place it over the hamburger */

  -webkit-touch-callout: none;
}

/*
 * Just a quick hamburger
 */
#menuToggle span {
  display: block;
  width: 33px;
  height: 4px;
  margin-bottom: 5px;
  position: relative;

  background: #fff;
  border-radius: 3px;

  z-index: 1;

  transform-origin: 4px 0px;

  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
    background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
}

#menuToggle span:first-child {
  transform-origin: 0% 0%;
}

#menuToggle span:nth-last-child(2) {
  transform-origin: 0% 100%;
}

/* 
 * Transform all the slices of hamburger
 * into a crossmark.
 */
#menuToggle input:checked ~ span {
  opacity: 1;
  transform: rotate(45deg) translate(-2px, -1px);
  background: #232323;
}

/*
 * But let's hide the middle one.
 */
#menuToggle input:checked ~ span:nth-last-child(3) {
  opacity: 0;
  transform: rotate(0deg) scale(0.2, 0.2);
}

/*
 * Ohyeah and the last one should go the other direction
 */
#menuToggle input:checked ~ span:nth-last-child(2) {
  transform: rotate(-45deg) translate(0, -1px);
}

/*
 * Make this absolute positioned
 * at the top left of the screen
 */
#menu {
  position: absolute;
  width: 100vw;
  right: -20px;
  margin: -45px 0 0 -50px;
  padding: 20px;
  background: var(--color-forTitle);
  border-bottom: 3px solid var(--color-rozeLogo);
  border-radius: 3px;
  list-style-type: none;
  -webkit-font-smoothing: antialiased;
  transform-origin: 0% 0%;
  transform: translate(0, -100%);
  transition: all 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
  display: flex;
  flex-direction: column;
  font-size: 20px;
}

#menu a {
  padding: 5px 0;
  font-family: "Sofia Sans", sans-serif;
  /* font-size: 22px; */
}
#menu a svg {
  width: 10px;
  height: 10px;
  filter: drop-shadow(0 1px 1px #1a1a1a);
  stroke: #1a1a1a;
  /* padding: 0 5px; */
}

/*
 * And let's slide it in from the left
 */
#menuToggle input:checked ~ div {
  transform: none;
}

.menuBrg_svgIcon {
  width: 10px;
  height: 10px;
  filter: drop-shadow(0 1px 1px #1a1a1a);
  stroke: #1a1a1a;
  transition: all 0.3s;
  margin-left: 5px;
}

.menuBrg_svgIcon_open {
  transform: rotateX(180deg) translateY(-140%);
}

.menuBrg_catalog {
  display: flex;
  justify-content: center;
  /* gap: 5px; */
  align-items: baseline;
  margin-left: 15px;
}

.categoriesBrg {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  /* transition: all 0.4s ease-in; */
  max-height: 100%;
}
.hide_categoriesBrg {
  /* transition: all 0.4s ease-out; */
  max-height: 0;
}
</style>
