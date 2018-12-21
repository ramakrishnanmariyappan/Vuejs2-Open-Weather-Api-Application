<template>
    <div>
        <h2>Contact Form Data</h2>
        <p>{{contactMsg}}</p>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class ContactForm extends Vue {
  @Prop() private contactMsg!: string;
}
</script>
<style scoped lang="scss">

</style>
