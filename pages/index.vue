<template>
  <div class="container w-full md:max-w-3xl mx-auto pt-20">
    <div class="w-full px-4 md:px-6 text-xl text-gray-800 leading-normal">

      <!-- Title -->
      <div class="font-sans">
        <h1 class="font-bold font-sans break-normal text-gray-900 pt-6 pb-2 text-3xl md:text-4xl">Engineering Portfolio</h1>
        <p class="text-sm md:text-base font-normal text-gray-600">Kazumasa Yamashita</p>
      </div>

      <h2 class="py-2 font-sans">Profile</h2>

      <!-- Logo -->
      <p class="py-6">
        <img
          src="/logo.png"
          class="rounded-full h-64 flex items-center m-0 m-auto"
          alt="logo"
        />
      </p>

        <!--Post Content-->
      <div class="hljs py-6 overflow-x-scroll p-4">
        <pre v-highlightjs>
<code class="javascript">const name = '山下 数政';
let age = {{0}};
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

      <h2 class="py-2 font-sans">Skill</h2>

      <div class="item" data-aos="slide-right">
        <p class="item_text">List.</p>
        <p class="item_text2">
          TEST
        </p>
      </div>






    </div>
  </div>

        <!-- Lead Para
        <p class="py-6">
          👋 Welcome fellow <a class="text-green-500 no-underline hover:underline" href="https://www.tailwindcss.com">Tailwind CSS</a> and miminal monochrome blog fan. This starter template provides a starting point to create your own minimal monochrome blog using Tailwind CSS and vanilla Javascript.
        </p>

        <p class="py-6">The basic blog page layout is available and all using the default Tailwind CSS classes (although there are a few hardcoded style tags). If you are going to use this in your project, you will want to convert the classes into components.</p>


        <h1 class="py-2 font-sans">Heading 1</h1>
        <h2 class="py-2 font-sans">Heading 2</h2>
        <h3 class="py-2 font-sans">Heading 3</h3>
        <h4 class="py-2 font-sans">Heading 4</h4>
        <h5 class="py-2 font-sans">Heading 5</h5>
        <h6 class="py-2 font-sans">Heading 6</h6>

        <p class="py-6">Sed dignissim lectus ut tincidunt vulputate. Fusce tincidunt lacus purus, in mattis tortor sollicitudin pretium. Phasellus at diam posuere, scelerisque nisl sit amet, tincidunt urna. Cras nisi diam, pulvinar ut molestie eget, eleifend ac magna. Sed at lorem condimentum, dignissim lorem eu, blandit massa. Phasellus eleifend turpis vel erat bibendum scelerisque. Maecenas id risus dictum, rhoncus odio vitae, maximus purus. Etiam efficitur dolor in dolor molestie ornare. Aenean pulvinar diam nec neque tincidunt, vitae molestie quam fermentum. Donec ac pretium diam. Suspendisse sed odio risus. Nunc nec luctus nisi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis nec nulla eget sem dictum elementum.</p>

        <ol>
          <li class="py-3">Maecenas accumsan lacus sit amet elementum porta. Aliquam eu libero lectus. Fusce vehicula dictum mi. In non dolor at sem ullamcorper venenatis ut sed dui. Ut ut est quam. Suspendisse quam quam, commodo sit amet placerat in, interdum a ipsum. Morbi sit amet tellus scelerisque tortor semper posuere.</li>
          <li class="py-3">Morbi varius posuere blandit. Praesent gravida bibendum neque eget commodo. Duis auctor ornare mauris, eu accumsan odio viverra in. Proin sagittis maximus pharetra. Nullam lorem mauris, faucibus ut odio tempus, ultrices aliquet ex. Nam id quam eget ipsum luctus hendrerit. Ut eros magna, eleifend ac ornare vulputate, pretium nec felis.</li>
          <li class="py-3">Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nunc vitae pretium elit. Cras leo mauris, tristique in risus ac, tristique rutrum velit. Mauris accumsan tempor felis vitae gravida. Cras egestas convallis malesuada. Etiam ac ante id tortor vulputate pretium. Maecenas vel sapien suscipit, elementum odio et, consequat tellus.</li>
        </ol>

        <blockquote class="border-l-4 border-green-500 italic my-8 pl-8 md:pl-12">Example of blockquote - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.</blockquote>

        <p class="py-6">Example code block:</p>
        <pre class="bg-gray-900 rounded text-white font-mono text-base p-2 md:p-4">
        <code class="break-words whitespace-pre-wrap">
&lt;header class="site-header outer"&gt;
&lt;div class="inner"&gt;
&lt;/div&gt;
&lt;/header&gt;
        </code>
      </pre>





  <p class="text">Slide.</p>
  <div class="container slide">
    <div class="item" data-aos="slide-right">
      <p class="item_text">List.</p>
      <p class="item_text2">
        TEST
      </p> -->
</template>