<script setup>
  const links = [
    {name:'Instagram', href: 'https://github.com', icon:'uil:instagram'},
    {name:'Facebook', href: 'https://facebook.com', icon:'uil:facebook'},
    {name:'Twitter', href: 'https://twitter.com', icon:'uil:twitter'},
  ]
</script>

<template>
  <footer class="bg-gray-800 w-full fixed bottom-0 h-10">
    <section class="mx-auto w-56 flex items-center">
      <div class="flex justify-center  gap-4 text-white">
        <a v-for="link in links" :key="link.name" :href="link.href">
          <Icon :name="link.icon"/>
        </a>
      </div>

    </section>
  </footer>
</template>

