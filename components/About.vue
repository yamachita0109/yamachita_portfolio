<template>
  <section class="section ag-section" data-anchor="pg-wheel_page-anchor-2">
    <div class="slide ag-section-slide1">
      <div class="ag-section-slide1-content">
        <p class="ag-section-slide1-content_logo">
          <img src="logo.png" />
        </p>
        山下 数政(Yamashita Kazumasa)
      </div>
    </div>
    <div class="slide ag-section-slide2"></div>
    <div class="slide ag-section-slide3"></div>
  </section>
</template>

<script lang="ts">
export default {}
</script>

<style lang="scss" scoped>
.ag-section {
  height: 100vh;
  width: 100%;
  &-slide1 {
    background-color: #ADC4BE;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 25px;
    font-family: reitam, 游ゴシック体, "Yu Gothic", YuGothic, "ヒラギノ角ゴシック Pro", "Hiragino Kaku Gothic Pro", メイリオ, Meiryo, Osaka, "ＭＳ Ｐゴシック", "MS PGothic", sans-serif;
    &-content {
      font-size: 2.25rem;
      color: #384660;
      &_logo {
        width: 100%;
        height: 400px;
        position: relative;
        overflow: hidden;
        border-radius: 30px;
        img {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -40%);
        }
      }
    }
  }
  &-slide2 {
    background-image: url(/family.jpeg);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: 100%;
  }
  &-slide3 {
    background-image: url(/eat.jpeg);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: 100%;
  }
}
</style>
<style lang="scss">
// TODO refactoring
.fp-slides {
  width: 100% !important;
}
.fp-controlArrow {
  top: 90% !important;
}
.fp-prev {
  left: auto!important;
  right: 200px !important;
}

.fp-next {
  right: 50px !important;
}
</style>