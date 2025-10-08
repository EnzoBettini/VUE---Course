<template>
    <ul>
        <LearningResource
        v-for="storedResource in resources"
        :key="storedResource.id"
        :id="storedResource.id"
        :title="storedResource.title"
        :description="storedResource.description"
        :link="storedResource.link"
        >
        </LearningResource>
  </ul>
</template>

<script>
import LearningResource from './LearningResource.vue';

export default {
    components: {
        LearningResource
    },
    inject: ['resources'],
    data() {
        return {

        }
    }
}
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  margin: auto;
  max-width: 40rem;
}
</style>
