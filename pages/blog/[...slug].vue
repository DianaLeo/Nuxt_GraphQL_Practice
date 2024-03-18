<script setup>
  import {useAsyncData} from "#app";

  const {path} = useRoute();

  const {data} = await useAsyncData(`content-${path}`,()=>{
    return queryContent().where({_path:path}).findOne()
  })

</script>

<template>
  <ContentRenderer :value="data"/>
  <div class="">
    {{ data.tags }}
    <a v-for="tag in data.tags" :key="tag" :href="`blog/tags/${tag}`" class="inline-block mx-4 px-4 py-2 bg-blue-400 text-white">
      {{ tag }}
    </a>
  </div>
</template>