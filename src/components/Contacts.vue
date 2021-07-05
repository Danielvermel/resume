<template >
  <span class="col-md-6 my-2">
    <a
      v-if="data?.includes('linkedin') || data?.includes('github')"
      class="contact-items-link"
      :href="data"
      target="_blank"
    >
      <i :class="`${className} mr-3`" />
      {{ data }}
    </a>
    <div v-else>
      <i :class="`${className} mr-3`" />
      {{ data }}
    </div>
  </span>
</template>

<script>
export default {
  name: "Contacts",
  props: {
    data: {
      type: String,
      default: ''
    },
    className: {
      type: String,
      default: ''
    },
  },
};
</script>

<style scoped>
.contact-items-link {
  text-decoration: none;
  color: white;
}
</style>
