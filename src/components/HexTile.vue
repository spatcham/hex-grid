<template>
    <div>
        <div class="hexagon"></div>
    </div>
</template>

<script>

export default {
  data () {
    return {
      hexagon: function () {
        // var graphics = new createjs.Shape().beginStroke('black');
      }
    }
  }

}
</script>

<style>
/* http://csshexagon.com/ */
.hexagon {
  position: relative;
  width: 150px;
  height: 86.60px;
  background-color: #5fdf51;
  margin: 43.30px 0;
}

.hexagon:before,
.hexagon:after {
  content: "";
  position: absolute;
  width: 0;
  border-left: 75px solid transparent;
  border-right: 75px solid transparent;
}

.hexagon:before {
  bottom: 100%;
  border-bottom: 43.30px solid #5fdf51;
}

.hexagon:after {
  top: 100%;
  width: 0;
  border-top: 43.30px solid #5fdf51;
}

.hexagon:hover {
  background-color: #5fdfda
}

</style>
