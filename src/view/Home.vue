<template>
  <center>
    <br>
  <h2><b>HOME</b></h2>
</center>
</template>

<script>
import { onMounted } from 'vue';

export default {
  setup(props, context) {
    onMounted(() => {
      context.emit('id-menu', 1);
    });
  },
};
</script>