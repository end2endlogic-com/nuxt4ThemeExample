<script setup lang="ts">
import { useToast } from "primevue/usetoast";

const toast = useToast();
const data = reactive({});
const signIn = async () => {
  console.log("signing in ..");
}
</script>

<template>
  <div>test</div>
  <FormKit type="text" label="regular input box" help="help text" placeholder="placeholder"/>
  <Divider />
  <div v-focustrap>
    <FormKit type="primeInputText" label="Prime input box" help="help text" placeholder="placeholder"  validation="min:2 | max:9" />
  </div>
</template>
