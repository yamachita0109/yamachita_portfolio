<template>
  <section>
    <h2 class="py-6 font-sans">Skill</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2">
      <div
        v-for="skill in skills"
        :key="skill.logo"
        class="grid grid-cols-2 gap-4 py-4"
      >
        <div data-aos="slide-right">
          <img
            :src="skill.logo"
            class="h-16 flex items-center m-0 m-auto"
            :alt="skill.name"
          />
        </div>
        <div class="review-container" data-aos="slide-left">
          <p class="review"><span :data-rate=skill.rate></span></p>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
export default {
  data() {
    return {
      skills: [
        {
          name: 'js',
          logo: '/js.png',
          rate: '4.5',
        },
        {
          name: 'ts',
          logo: '/ts.png',
          rate: '3.5',
        },
        {
          name: 'java',
          logo: '/java.png',
          rate: '4',
        },
        {
          name: 'php',
          logo: '/php.png',
          rate: '3.5',
        },
        {
          name: 'ruby',
          logo: '/ruby.png',
          rate: '4',
        },
        {
          name: 'kotlin',
          logo: '/kotlin.png',
          rate: '3',
        },
        {
          name: 'mysql',
          logo: '/mysql.png',
          rate: '4',
        },
        {
          name: 'aws',
          logo: '/aws.png',
          rate: '3.5',
        },
      ],
    };
  },
}
</script>