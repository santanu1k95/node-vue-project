<template>
    <div class="greeting">
        <div class="sections">
            <Intro/>
            

        </div>
    </div>
</template>

<script>
import Intro from './Intro.vue'

export default {
    components: {
        Intro,
    },
}
</script>

<style scoped>
.greeting{
    height: 100vh;
    overflow-x: hidden;
    
}

.sections {
        width: 100%;
        height: calc(100vh - 70px);
        background-color: rgb(212, 180, 167);
        position: relative;
        top: 70px;
        scroll-behavior: smooth;
        overflow-y: scroll;
        overflow-x: hidden;
        scroll-snap-type: y mandatory;
        scrollbar-width: none;

        /* &::-webkit-scrollbar {
           display: none;
        } */
            

        
    }
.sections > *{
            width: 100vw;
            height: calc(100vh - 70px);
            scroll-snap-align: start;
        }
</style>