<template>
    <EstatusMinuta :minuta="minuta" /> 
    <Fluid class="flex flex-col md:flex-row gap-4 mt-5">
        <div class="card flex flex-col gap-7 w-full"  >
            <div class="font-semibold text-xl mb-4">Minuta</div>
            <div class="flex flex-col md:flex-row gap-4">
                <FloatLabel class="w-full">
                    <DatePicker v-model="NuevaMinuta.fechaSolicitud" />
                    <label for="over_label">Fecha de solicitud <span class="text-red-500">*</span></label>
                </FloatLabel>
               <FloatLabel class="w-full">
                    <Select v-model="NuevaMinuta.sucursal" :options="sucursales" optionLabel="name" class="w-full md:w-56" />
                    <label for="over_label">Sucursal <span class="text-red-500">*</span></label>
                </FloatLabel>
            </div>
            <div class="flex flex-col md:flex-row gap-4">
                 <FloatLabel class="w-full">
                    <InputText v-model="NuevaMinuta.solicitante" type="text"/>
                    <label for="over_label">Solicitante <span class="text-red-500">*</span></label>
                </FloatLabel>
                
                <FloatLabel class="w-full">
                    <InputText v-model="NuevaMinuta.representante" disabled type="text"/>
                    <label for="over_label">Representante <span class="text-red-500">*</span></label>
                </FloatLabel>
            </div>
        </div>
    </Fluid>
    <Fluid class="flex flex-col md:flex-row gap-4 mt-5">
        <div class="md:w-1/2">
            <div class="card flex flex-col gap-10">
                <div class="font-semibold text-xl">Cirugia</div>
                <FloatLabel class="w-full">
                    <Select v-model="cirugia.evento" :options="eventos" optionLabel="name" class="w-full md:w-56" />
                    <label for="over_label">Tipo de evento <span class="text-red-500">*</span></label>
                </FloatLabel>
                <FloatLabel class="w-full">
                    <Select v-model="cirugia.contrato" :options="contratos" optionLabel="name" class="w-full md:w-56" />
                    <label for="over_label">Contrato <span class="text-red-500">*</span></label>
                </FloatLabel>
                <FloatLabel class="w-full">
                    <Select v-model="cirugia.hospital" :options="hospitales" optionLabel="name" class="w-full md:w-56" />
                    <label for="over_label">Hospital <span class="text-red-500">*</span></label>
                </FloatLabel>
                <div class="font-semibold text-xl">Institucion</div>
                <FloatLabel class="w-full">
                    <Select v-model="cirugia.horario" :options="horarios" optionLabel="name" class="w-full md:w-56" />
                    <label for="over_label">Horario <span class="text-red-500">*</span></label>
                </FloatLabel>
                <FloatLabel class="w-full">
                    <DatePicker id="datepicker-12h" v-model="cirugia.fechaHora" showTime hourFormat="12" fluid />
                    <label for="over_label">Fecha y hora <span class="text-red-500">*</span></label>
                </FloatLabel>
                <FloatLabel class="w-full">
                    <InputText v-model="cirugia.medico" type="text"/>
                    <label for="over_label">Medico <span class="text-red-500">*</span></label>
                </FloatLabel>
                <!-- <div class="flex flex-col md:flex-row gap-4">
                </div> -->
            </div>
        </div>
        <div class="md:w-1/2">
            <div class="card flex flex-col gap-7">
                <div class="font-semibold text-xl">Paciente</div>
                <FloatLabel class="w-full">
                    <Select v-model="paciente.instrumental" :options="instrumentales" optionLabel="name" class="w-full md:w-56" />
                    <label for="over_label">Instrumental <span class="text-red-500">*</span></label>
                </FloatLabel>
                <FloatLabel class="w-full">
                    <InputText v-model="paciente.nombres" type="text"/>
                    <label for="over_label">Nombres <span class="text-red-500">*</span></label>
                </FloatLabel>
                <FloatLabel class="w-full">
                    <InputText v-model="paciente.apellidoP" type="text"/>
                    <label for="over_label">Apellido Paterno <span class="text-red-500">*</span></label>
                </FloatLabel>
                <FloatLabel class="w-full">
                    <InputText v-model="paciente.apellidoM" type="text"/>
                    <label for="over_label">Apellido Materno <span class="text-red-500">*</span></label>
                </FloatLabel>
                <FloatLabel class="w-full">
                    <InputText v-model="paciente.nss" type="text"/>
                    <label for="over_label">NSS <span class="text-red-500">*</span></label>
                </FloatLabel>
                <FloatLabel class="w-full">
                    <InputText v-model="paciente.tda" type="text"/>
                    <label for="over_label">TDA ? <span class="text-red-500">*</span></label>
                </FloatLabel>
                <FloatLabel class="w-full">
                    <InputText v-model="paciente.edad" type="text"/>
                    <label for="over_label">Edad <span class="text-red-500">*</span></label>
                </FloatLabel>
                <FloatLabel class="w-full">
                    <Select v-model="paciente.sexo" :options="sexos" optionLabel="name" class="w-full md:w-56" />
                    <label for="over_label">Sexo <span class="text-red-500">*</span></label>
                </FloatLabel>
            </div>
        </div>
    </Fluid>
    <Fluid>
        <div class="card flex flex-col gap-7 mt-5">
            <div class="font-semibold text-xl">Requerimientos</div>
            <div>
                <FloatLabel class="w-full">
                    <InputGroup>
                        <Select v-model="requerimiento" editable :options="requerimientos" optionLabel="name"  class="w-full md:w-56" />
                        <Button icon="pi pi-plus" />
                    </InputGroup>
                    <label for="over_label">Categorias <span class="text-red-500">*</span></label>
                </FloatLabel>
                <DataTable :value="nuevosRequerimientos" tableStyle="min-width: 50rem">
                    <Column field="nuevosRequerimientos?.nombre" header="Nombre"></Column>
                    <Column header="Acciones"></Column>
                </DataTable>
            </div>
        </div>
    </Fluid>
</template>

<script setup>
import { CountryService } from '@/service/CountryService';
import { NodeService } from '@/service/NodeService';
import { onMounted, ref } from 'vue';
import EstatusMinuta from '../Minutas/estatusMinuta.vue'
import { reactive } from 'vue'

const requerimiento = ref();
const sucursales = ref([]);
const eventos = ref([]);
const contratos = ref([]);
const hospitales = ref([]);
const horarios = ref([]);
const instrumentales = ref([]);
const sexos = ref([]);
const requerimientos = ref([]);
const minuta = ref([]);

const NuevaMinuta = reactive({
  fechaSolicitud: null,
  solicitante: null,
  sucursal: null,
  representante: null
});

const cirugia = reactive({
    evento: null,
    contrato: null,
    hospital: null,
    horario: null,
    fechaHora: null,
    medico: null
});

const paciente = reactive({
    instrumental: null,
    nombres: null,
    apellidoP: null,
    apellidoM: null,
    nss: null,
    tda: null,
    edad: null,
    sexo: null
});

const nuevosRequerimientos = ref([]);

onMounted(() => {
   
});
</script>

