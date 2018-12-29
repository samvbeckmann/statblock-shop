<template>
    <nav id="navbar" class="navbar navbar-expand-md navbar-dark bg-dark sticky-top">
        <a class="navbar-brand" href="/">Statblock Shop <span class="badge badge-warning badge-outline ml-1">Beta</span></a>
        <button class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#statblock-shop-navbar"
                aria-controls="statblock-shop-navbar"
                aria-expanded="false"
                aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
      
        <div class="collapse navbar-collapse" id="statblock-shop-navbar">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                    <a class="nav-link disabled" href="#">Docs</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="https://github.com/samvbeckmann/statblock-shop">GitHub</a>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
module.exports = {
    data(){
        return {}
    }
}
</script>


<style scoped>

</style>