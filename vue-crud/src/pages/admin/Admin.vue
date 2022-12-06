<template>
    <div class="div-adm">
        <Nav></Nav>
        <div class="content">
            <div class="left-content">
                <SideBar></SideBar>
            </div>
            <div class="right-content">
                <router-view/>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
import Nav from '@/components/Nav.vue';
import SideBar from '@/components/SideBar.vue'
import Footer from '@/components/Footer.vue';

export default {
    name: 'Admin',
    components: { Nav, SideBar, Footer }
}
</script>

<style>
    
</style>