<template>
    <div>
        <h2>Contact Page</h2>
        <ContactForm contactMsg="Welcome to Contact Page"/>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ContactForm from '@/components/ContactForm.vue';

@Component({
    components: {
       ContactForm,
    },
})
export default class ContactPage extends Vue {}
</script>

<style scoped lang="scss">

</style>
