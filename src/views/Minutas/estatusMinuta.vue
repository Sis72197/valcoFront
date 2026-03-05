<template>
<Fluid class="flex flex-col md:flex-row gap-4">
  <div class="card flex flex-col gap-7 w-full">
    <div class="flex items-center justify-between">

      <Button size="large" class="primary-valco">
        <i class="pi pi-file md:hidden"></i>
        <span class="hidden md:inline">Crear Minuta</span>
      </Button>

      <Divider class="hidden md:block w-8" />

      <Button size="large" class="primary-valco">
        <i class="pi pi-ticket md:hidden"></i>
        <span class="hidden md:inline">Vale Consumo</span>
      </Button>

      <Divider class="hidden md:block w-8" />

      <Button size="large" class="primary-valco">
        <i class="pi pi-plus md:hidden"></i>
        <span class="hidden md:inline">Alta Consumo</span>
      </Button>

      <Divider class="hidden md:block w-8" />

      <Button size="large" class="primary-valco">
        <i class="pi pi-send md:hidden"></i>
        <span class="hidden md:inline">Enviar a SAP</span>
      </Button>

    </div>
  </div>
</Fluid>
</template>

<script setup>
import { CountryService } from '@/service/CountryService';
import { NodeService } from '@/service/NodeService';
import { onMounted, ref } from 'vue';

const props = defineProps({
  minuta: {
    type: Object,
    required: true
  }
})

onMounted(() => {
   
});

</script>

