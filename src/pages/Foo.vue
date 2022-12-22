<template>
    <div><p>Foo</p></div>
</template>
<script>
export default {
    name: 'Foo'
}
</script>
<style lang="less" scoped>
@import '../style/global.less';

div {
    height: 60px;
    width: 100px;
    text-align: center;
    background-image: url('../assets/cover_title.png');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
}
</style>