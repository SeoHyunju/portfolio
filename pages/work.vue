<template>
  <div class="work-wrap">
    <div class="bg-image">
      <v-img :src="bgImages"></v-img>
    </div>
    
    <carousel-3d
      style="position:absolute;top:0px;"
      :controls-visible="true" :controls-prev-html="'&#10092; '" :controls-next-html="'&#10093;'" 
      :controls-width="200" :controls-height="60" :clickable="false"
    >
      <slide v-for="(slide, i) in slides" :index="i" :key="i">
        <template slot-scope="{ index, isCurrent, leftIndex, rightIndex }">
            <img  ref="test" :data-index="index" :class="{ current: isCurrent, onLeft: (leftIndex >= 0), onRight: (rightIndex >= 0) }" :src="slide.src">
        </template>
      </slide>
    </carousel-3d>
  </div>
  
</template>

<script>
export default {
  data:() => ({
    //bgImages:{"https://source.unsplash.com/9dmycbFE7mQ", "https://source.unsplash.com/9dmycbFE7mQ", "https://source.unsplash.com/m7K4KzL5aQ8"},
    bgImages:"https://source.unsplash.com/9dmycbFE7mQ",
    index:null,
    slides:[
      {src:"https://source.unsplash.com/Z8dtTatMVMw"},
      {src:"https://source.unsplash.com/9dmycbFE7mQ"},
      {src:"https://source.unsplash.com/m7K4KzL5aQ8"}
    ]
  }),
  methods:{
    getIndex(){
      console.log(this.$refs.test[0])

    }
  },
  mounted(){
    this.getIndex()
  },
  created(){
    //this.getIndex()
  }

}
</script>

<style>

</style>