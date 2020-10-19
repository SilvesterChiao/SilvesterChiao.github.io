<template>
  <div>
    <h3>CSS Demo</h3>
    <div class="container">
      <h3>1. 居中对齐</h3>
      <div class="wrapper">
        <div class="inner">

        </div>
      </div>
    </div>
    <div class="container">
      <h3>2. 响应式</h3>
      <div class="box"></div>
    </div>
    <div class="container">
      <h3>三角形</h3>
      <div class="sanjiao"></div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.wrapper {
  width: 200px;
  height: 200px;
  background-color: red;
  position: relative;
}

.wrapper .inner {
  width: 100px;
  height: 100px;
  background-color: blue;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.box{
  width: 100px;
  height: 100px;
  background-color: red;
}

@media (max-width: 768px) {
  .box {
    background-color: blue;
  }
}

.sanjiao {
  width: 0;
  height: 0;
  border-top: 20px solid red;
  border-right: 20px solid transparent;
  border-left: 20px solid transparent;
  transition: transform 0.5s;
}

.sanjiao:hover {
  transform: rotate(180deg);
  /* transform: translate(100px, 100px); */
  /* transform: scale(2, 3); */
  /* transform: skew(45deg, 45deg); */
}

</style>