<script setup>
import AppConfigurator from './AppConfigurator.vue';
import Menu from 'primevue/menu'
import { useLayout } from '@/layout/composables/layout';
import { ref, onMounted} from 'vue';
import { useRouter } from 'vue-router';
import api from '@/service/api';
const router = useRouter();
const user = ref(null);

onMounted(() => {

    const storedUser = localStorage.getItem('user')

    if (storedUser) {
        user.value = JSON.parse(storedUser)
    }

})
const menu = ref()
const items = ref([
    {
        label: 'Perfil',
        icon: 'pi pi-user'
    },
    {
        separator: true
    },
    {
        label: 'Cerrar sesión',
        icon: 'pi pi-sign-out',
        command: () => {
            logout()
        }
    }
])

const toggleMenus = (event) => {
    menu.value.toggle(event)
}

const logout = async () => {
    try {
        await api.post('/logout')
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        router.push('/login')
    } catch (error) {
        console.error(error)
    }
}

const { toggleMenu, toggleDarkMode, isDarkTheme } = useLayout();
</script>

<template>
    <div class="layout-topbar">
        <div class="layout-topbar-logo-container">
            <button class="layout-menu-button layout-topbar-action" @click="toggleMenu">
                <i class="pi pi-bars"></i>
            </button>
            <router-link to="/" class="layout-topbar-logo">
                <img src="/img/Valco_icon.png" alt="VALCO" class="w-10 mx-auto" />
                <span>VALCO</span>
            </router-link>
        </div>

        <div class="layout-topbar-actions">
            <!-- <div class="layout-config-menu">
                <button type="button" class="layout-topbar-action" @click="toggleDarkMode">
                    <i :class="['pi', { 'pi-moon': isDarkTheme, 'pi-sun': !isDarkTheme }]"></i>
                </button>
                <div class="relative">
                    <button
                        v-styleclass="{ selector: '@next', enterFromClass: 'hidden', enterActiveClass: 'p-anchored-overlay-enter-active', leaveToClass: 'hidden', leaveActiveClass: 'p-anchored-overlay-leave-active', hideOnOutsideClick: true }"
                        type="button"
                        class="layout-topbar-action layout-topbar-action-highlight"
                    >
                        <i class="pi pi-palette"></i>
                    </button>
                    <AppConfigurator />
                </div>
            </div> -->

            <button
                class="layout-topbar-menu-button layout-topbar-action"
                v-styleclass="{ selector: '@next', enterFromClass: 'hidden', enterActiveClass: 'p-anchored-overlay-enter-active', leaveToClass: 'hidden', leaveActiveClass: 'p-anchored-overlay-leave-active', hideOnOutsideClick: true }"
            >
                <i class="pi pi-ellipsis-v"></i>
            </button>
            <div class="layout-topbar-menu hidden lg:block">
                <div class="layout-topbar-menu-content">
                    <!-- <button type="button" class="layout-topbar-action">
                        <i class="pi pi-calendar"></i>
                        <span>Calendar</span>
                    </button>
                    <button type="button" class="layout-topbar-action">
                        <i class="pi pi-inbox"></i>
                        <span>Messages</span>
                    </button> -->
                    <button type="button" class="layout-topbar-action" @click="toggleMenus">
                        <i class="pi pi-user"></i>
                        <span>Profile</span>
                    </button>
                    <div class="flex items-center justify-center gap-2" >
                        <span class="" >{{user?.name}}</span>
                    </div>
                     <Menu ref="menu" :model="items" popup />
                </div>
            </div>
        </div>
    </div>
</template>
