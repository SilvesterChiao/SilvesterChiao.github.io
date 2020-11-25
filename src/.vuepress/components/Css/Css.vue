<template>
  <div>
    <h3>CSS Demo</h3>
    <div class="container">
      <h3>清除浮动</h3>
      <div class="outer">
        <div class="left">1</div>
        <div class="middle">2</div>
        <div class="right">3</div>
      </div>
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
      <form action="">
        <output></output>
      </form>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.outer {
  border: 1px solid #ccc;
  background-color: #fc9;
}
.outer::after {
  clear: both;
  content: '';
}
.outer .left, .outer .middle, .outer .right {
  width: 80px;
  height: 80px;
  float: left;
}
.left {
  background-color: sienna;
}
.middle {
  background-color: tomato;
}
.right {
  background-color: navajowhite;
}
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

@media (min-width: 768px) {
  .box {
    background-color: green;
  }
}

@media (min-width: 992px) {
  .box {
    background-color: blue;
  }
}

@media (min-width: 1200px) {
  .box {
    background-color: yellow;
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