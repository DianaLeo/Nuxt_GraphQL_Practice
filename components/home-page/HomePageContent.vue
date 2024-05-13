
import type { DiffieHellmanGroup } from 'crypto';
<script setup lang="ts">
    defineProps<{
        data: any
    }>()
</script>

<template>
    <p>Hello {{data}}</p>
</template>