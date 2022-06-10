<template>
  <div class="ag-wheel-block">
    <ul ref="wheel" class="ag-wheel_list">
      <li v-for="(title, i) in titles" :key="title" class="pg-wheel_page-name ag-wheel_page-name"
        v-bind:class="[i === index ? 'pg-ag-active' : 'passive']">
        <a :href="`#pg-wheel_page-anchor-${i + 1}`">
          <span class="ag-wheel-page_num">{{ i }}</span>
          <div class="ag-wheel-page_name">{{ title }}</div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      titles: [
        'Top',
        'About',
        'Works',
        'Contact',
      ],
    };
  },
  props: {
    index: {
      type: Number,
      default: 0,
      required: true
    },
  },
  watch: {
    index(val: number) {
      // @ts-ignore
      (this.$refs as any).wheel.style.transform = `rotate(${(0 === val ? 0 : -22.5 * (val))}deg)`;
    },
  },
}
</script>

<style lang="scss" scoped>
.ag-wheel-block {
  margin-top: -400px;
  z-index: 1;
  position: fixed;
  left: 0;
  top: 50%;
  font-family: Acrom, sans-serif;
}

.ag-wheel_list {
  height: 800px;
  width: 800px;
  margin: 0 50px 50px -680px;
  border: 1px solid rgb(118, 118, 118);
  font-size: 36px;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
  -webkit-transform-origin: 50% 50%;
  -moz-transform-origin: 50% 50%;
  -ms-transform-origin: 50% 50%;
  -o-transform-origin: 50% 50%;
  transform-origin: 50% 50%;
  -webkit-transition: all 1s ease;
  -moz-transition: all 1s ease;
  -o-transition: all 1s ease;
  transition: all 1s ease;
  position: relative;
  list-style: none;
}

.ag-wheel_page-name {
  cursor: pointer;
  transition: all 1s ease;
  position: absolute;

  a {
    text-decoration: none;
    color: rgb(118, 118, 118);
  }

  &:hover a {
    color: #FFF;
  }
}

.pg-ag-active a {
  cursor: default;
  color: #FFF;
}

.ag-wheel_page-name {
  &:first-child {
    top: 377px;
    left: 797px;
  }

  &:nth-child(2) {
    top: 561px;
    left: 761px;
    -webkit-transform: rotate(22.5deg);
    -moz-transform: rotate(22.5deg);
    -ms-transform: rotate(22.5deg);
    -o-transform: rotate(22.5deg);
    transform: rotate(22.5deg);
  }

  &:nth-child(3) {
    top: 718px;
    left: 657px;
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
  }

  &:nth-child(4) {
    top: 823px;
    left: 501px;
    -webkit-transform: rotate(67.5deg);
    -moz-transform: rotate(67.5deg);
    -ms-transform: rotate(67.5deg);
    -o-transform: rotate(67.5deg);
    transform: rotate(67.5deg);
  }

  &:nth-child(5) {
    top: 860px;
    left: 316px;
    -webkit-transform: rotate(90deg);
    -moz-transform: rotate(90deg);
    -ms-transform: rotate(90deg);
    -o-transform: rotate(90deg);
    transform: rotate(90deg);
  }

  &:nth-child(6) {
    top: 824px;
    left: 133px;
    -webkit-transform: rotate(112.5deg);
    -moz-transform: rotate(112.5deg);
    -ms-transform: rotate(112.5deg);
    -o-transform: rotate(112.5deg);
    transform: rotate(112.5deg);
  }

  &:nth-child(7) {
    top: 719px;
    left: -21px;
    -webkit-transform: rotate(135deg);
    -moz-transform: rotate(135deg);
    -ms-transform: rotate(135deg);
    -o-transform: rotate(135deg);
    transform: rotate(135deg);
  }

  &:nth-child(8) {
    top: 564px;
    left: -128px;
    -webkit-transform: rotate(157deg);
    -moz-transform: rotate(157deg);
    -ms-transform: rotate(157deg);
    -o-transform: rotate(157deg);
    transform: rotate(157deg);
  }
}

.ag-wheel-page_num {
  float: left;
  padding: 0 15px;
  position: relative;

  &:before {
    content: "";
    height: 7px;
    width: 7px;
    background-color: rgb(118, 118, 118);
    position: absolute;
    top: 18px;
    left: 0;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
  }
}

.pg-ag-active .ag-wheel-page_num:before {
  height: 13px;
  width: 13px;
  margin: -3px 0 0 -3px;
  background-color: #FFF;
}

.ag-wheel-page_name {
  white-space: nowrap;
  font-size: 36px;
}
</style>
