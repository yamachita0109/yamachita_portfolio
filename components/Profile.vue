<template>
  <section>
    <h2 class="py-6 font-sans">Profile</h2>
    <p class="py-1">
      <img
        src="/logo.png"
        class="rounded-full h-32 flex items-center m-0 m-auto"
        alt="logo"
      />
    </p>
    <div class="flex justify-center">
      <a href="https://twitter.com/yamashita0109" target="_blank">
        <svg class="h-6 m-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/></svg>
      </a>
      <a href="https://www.facebook.com/kazumasa.yamashita.14" target="_blank">
        <svg class="h-6 m-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"/></svg>
      </a>
      <a href="https://qiita.com/yamachita0109" target="_blank">
        <svg class="h-6 m-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M64 256c0 88.4 71.6 160 160 160c28.9 0 56-7.7 79.4-21.1l-72-86.4c-11.3-13.6-9.5-33.8 4.1-45.1s33.8-9.5 45.1 4.1l70.9 85.1C371.9 325.8 384 292.3 384 256c0-88.4-71.6-160-160-160S64 167.6 64 256zM344.9 444.6C310 467 268.5 480 224 480C100.3 480 0 379.7 0 256S100.3 32 224 32s224 100.3 224 224c0 56.1-20.6 107.4-54.7 146.7l47.3 56.8c11.3 13.6 9.5 33.8-4.1 45.1s-33.8 9.5-45.1-4.1l-46.6-55.9z"/></svg>
      </a>
    </div>
    <div class="hljs overflow-x-scroll p-4 text-xs">
      <pre v-highlightjs>
<code class="javascript">const name = '山下 数政';
let age = {{ age() }};
const jobs = [
  'PG',
  'SE',
  'PL',
  'PM',
  'TL',
  'EM',
  'SM'
];
let description = '2人の息子を愛するWebエンジニア.普段はEM,副業でWebシステム開発やってます.';
const tags = [
  'JAVA',
  'JavaScript / TypeScript',
  'AWS'
];</code>
      </pre>
    </div>
  </section>
</template>

<script lang="ts">
export default {
  methods: {
    age(): number {
      const birthday = { year: 1992, month: 1, date: 9 }
      const today = new Date()
      const thisYearsBirthday = new Date(today.getFullYear(), birthday.month - 1, birthday.date)
      let age = today.getFullYear() - birthday.year
      if (today < thisYearsBirthday) {
        age--
      }
      return age
    },
  },
}
</script>