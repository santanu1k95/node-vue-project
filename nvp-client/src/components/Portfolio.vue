<template>
    <div class="portfolio" id="portfolio">
        <div class="wrapper-container">
            <h1>Portfolio</h1>
            <div class="projects-containerr">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"Portfolio",
}
</script>

<style lang="scss" scoped>
.wrapper-container{
    margin: auto;
    display: flex;
    width: 70%;
    background-color: rgb(255, 255, 255);
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    .projects-container{
        background-color: whitesmoke;
        width: 100%;
        height:400px;

    }
}
</style>