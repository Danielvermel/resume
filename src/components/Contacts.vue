<template>
    <span class="col-md-6 my-2">
        <a  v-if="data?.includes('linkedin') || data?.includes('github')" class="contact-items-link" :href="data" target="_blank">
            <i :class="`${className} mr-3`"></i>
            {{data}}
        </a>
        <div v-else>
            <i :class="`${className} mr-3`"></i>
            {{data}}
        </div>
    </span>
</template>

<script>
export default {
  name: 'Contacts',
  props: {
    data: String,
    className: String
  },
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .contact-items-link{
        text-decoration: none;
        color: white
    }
</style>
