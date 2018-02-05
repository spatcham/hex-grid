<template>
  <div>
    <div>
        <span>Width</span>
        <input type="number" v-model=width>
        <br>
        <span>Height</span>
        <input type="number" v-model=height>
        <input type="submit" value="Submit" v-on:click="getAsInteger()" :disabled="width == 0 || height == 0" >
    </div>
    <span v-if="width > 0 && height > 0">Click "Submit"!</span>
    <div class="hexagonGrid">
      <div id="row" v-for="i in desiredHeight" :key="i">
        <div class="rowOdd" v-if="i % 2 == 1">
            <hex-tile class="tileOdd" v-for="n in desiredWidth" :key="i+n"></hex-tile>
        </div>
        <div class="rowEven" v-if="i % 2 == 0">
            <hex-tile class="tileEven" v-for="m in desiredWidth" :key="i+m"></hex-tile>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HexTile from '@/components/HexTile'

export default {
  components: {
    HexTile: HexTile
  },
  data () {
    return {
      width: 0,
      desiredWidth: 0,
      height: 0,
      desiredHeight: 0
    }
  },
  methods: {
    getAsInteger: function () {
      this.desiredWidth = Number(this.width)
      this.desiredHeight = Number(this.height)
    }
  }
}
</script>

<style>

.row{
  display:inline-block;
}
.rowOdd {
  white-space: nowrap;
  height: 135px;
}

.rowEven {
  height: 135px;
  padding-left: 79px;
  right: 80px;
  white-space: nowrap;
}

.tileOdd {
  padding: 4px;
  display:inline-flex;
  /* position:relative; */
  /* float:left; */
}

.tileEven {
  padding: 4px;
  display:inline-block;
  /* position:relative; */
  /* float:left; */
}

</style>
