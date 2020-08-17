<template>
  <div>
    <h1>{{ title }}</h1>
    <p class="des">{{ des }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "标题",
      des: "描述",
    };
  },
};
</script>

<style>
h1 {
  color: red;
}
.des {
  color: #000;
  font-size: 18px;
}
</style>