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
    <Sns />
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