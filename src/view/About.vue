<template>
  <center>
    <br>
  <h1><b>ABOUT</b></h1>
</center>
</template>

<script>
import { onMounted } from 'vue';

export default {
  setup(props, context) {
    onMounted(() => {
      context.emit('id-menu', 3);
    });
  },
};
</script>