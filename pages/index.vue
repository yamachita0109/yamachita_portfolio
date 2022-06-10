<template>
  <div>
    <section class="container">
      <full-page :options="options">
        <Top></Top>
        <About></About>
        <Works></Works>
        <Contact></Contact>
      </full-page>
    </section>

    <Sidebar :index="index"></Sidebar>
  </div>
</template>

<script lang="ts">
export default {
    // @ts-ignore
    data() {
      return {
        index: 0 as Number,
        options: {
          verticalCentered: false,
          css3: true,
          responsiveWidth: 0,
          responsiveHeight: 0,
          responsiveSlides: false,
          scrollBar: true,
          controlArrows: true,
          // @ts-ignore
          onLeave: this.onLeave,
        },
      };
    },
    methods: {
      onLeave(origin: any, destination: any, direction: any) {
        // @ts-ignore
        this.index = Number(destination.index)
      },
    },
}
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
}

// .ag-section_title {
//   text-align: center;
//   font-size: 80px;
//   color: #FFF;

//   font-family: Arial, sans-serif;
// }

// #section-1 {
//   background-image: url(https://raw.githubusercontent.com/SochavaAG/example-mycode/master/pens/1_images/img-1920-800-4.jpg);
//   background-size: cover;
// }
// #section-2 {
//   background-image: url(https://raw.githubusercontent.com/SochavaAG/example-mycode/master/pens/scroll-wheel-control/images/bg-3.jpg);
//   background-size: cover;
// }
// #section-3 {
//   background-image: url(https://raw.githubusercontent.com/SochavaAG/example-mycode/master/pens/scroll-wheel-control/images/bg-4.jpg);
//   background-size: cover;
// }

</style>
