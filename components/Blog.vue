<template>
  <section>
    <h2 class="py-6 font-sans">Blog</h2>
    <div
      v-for="article in articles"
      :key="article.id"
      class="container mx-auto flex flex-wrap pt-3"
    >
      <article class="flex flex-col shadow my-4 w-full" data-aos="zoom-in">
        <div class="bg-white flex flex-col justify-start p-6">
          <p :href=article.url class="text-sm pb-3">
              By <a href="https://qiita.com/yamachita0109" target="_blank" class="font-semibold hover:text-gray-800">@yamachita0109</a>, {{ article.created_at }}
          </p>
          <a :href=article.url class="text-l font-bold hover:text-gray-700 pb-4">{{ article.title }}</a>
          <a
            :href=article.url
            class="text-gray-500 text-sm font-bold pb-4 flex justify"
          >
            <svg class="h-4 mr-1" style="margin-top: 3px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M0 80V229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7H48C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg>
            <span>{{ article.tags.map((tag) => tag.name).join(', ') }}</span>
          </a>
          <a
            :href=article.url
            class="text-gray-500 text-sm font-bold pb-4 flex justify"
          >
            <svg class="h-4 mr-1" style="margin-top: 3px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/></svg>
            <span>{{ article.likes_count }}</span>
          </a>
        </div>
      </article>
    </div>
  </section>
</template>

<script lang="ts">
type Article = {
  id: string;
  title: string;
  tags: any[];
  created_at: string;
  url: string;
  likes_count: number;
};

export default {
  data() {
    return {
      articles: [] as Article[],
    };
  },
  async created() {
    const data = await fetch(`${process.env.APP_URL}/api/qiita`)
    const json = await data.json()
    // @ts-ignore
    this.articles = json.slice(0, 5)
  },
}
</script>