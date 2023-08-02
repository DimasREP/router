<template>
  <br>
  <br>
<center>
<div v-if="detail  == undefined">ID YAANG ANDA CARI TIDAK ADA</div>
<div v-else>
  <h1>Detail {{ detail.nama }}</h1>
  <h4>Harga : {{ detail.harga }}</h4>
</div>
</center>
</template>

<script>
import { produk } from '../assets/Produk';

export default {
  props: ['id_produk'],
  setup(props) {
    const detail = produk['produk'].find(function (item) {
      return item.id == props.id_produk;
    });
    return {
      detail,
    };
  },
};
</script>