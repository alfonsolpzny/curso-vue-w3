<template>
  <p>Choose what part of this page you want to see:</p>
  <router-link to="/animals">Animals</router-link><br>
  <router-link to="/food">Food</router-link><br>
  <div>
    <router-view></router-view>
  </div>
</template>
