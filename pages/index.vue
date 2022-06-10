<template>
  <div>
    <section class="container">
      <full-page :options="options">
        <section class="section" id="section-1" data-anchor="pg-wheel_page-anchor-1">
          <div class="ag-section_title">Section 1</div>
        </section>
        <section class="section" id="section-2" data-anchor="pg-wheel_page-anchor-2">
          <div class="ag-section_title">Section 2</div>
        </section>
        <section class="section" id="section-3" data-anchor="pg-wheel_page-anchor-3">
          <div class="ag-section_title">Section 3</div>
        </section>
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
.section {
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 25px;
}

.ag-section_title {
  text-align: center;
  font-size: 80px;
  color: #FFF;

  font-family: Arial, sans-serif;
}

#section-1 {
  background-image: url(https://raw.githubusercontent.com/SochavaAG/example-mycode/master/pens/1_images/img-1920-800-4.jpg);
  background-size: cover;
}
#section-2 {
  background-image: url(https://raw.githubusercontent.com/SochavaAG/example-mycode/master/pens/scroll-wheel-control/images/bg-3.jpg);
  background-size: cover;
}
#section-3 {
  background-image: url(https://raw.githubusercontent.com/SochavaAG/example-mycode/master/pens/scroll-wheel-control/images/bg-4.jpg);
  background-size: cover;
}
.fp-controlArrow {
  top: auto;
  bottom: 7%;
}
.fp-controlArrow.fp-prev {
  left: auto;
  right: 200px;
}
.fp-controlArrow.fp-next {
  right: 50px;
}
</style>
