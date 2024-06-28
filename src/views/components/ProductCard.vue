<template>
    <div class="rounded position-relative fruite-item" :to="slug ? '/product/' + slug : ''">
        <div class="fruite-img">
            <img src="/assets/img/fruite-item-5.jpg" class="img-fluid w-100 rounded-top" alt="">
        </div>
        <div class="text-white bg-secondary px-3 py-1 rounded position-absolute" style="top: 10px; left: 10px;">Fruits</div>
        <div class="p-4 border border-secondary border-top-0 rounded-bottom">
            <h4>Grapes</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
            <div class="d-flex justify-content-between flex-lg-wrap">
                <p class="text-dark fs-5 fw-bold mb-0">$4.99 / kg</p>
            </div>
        </div>
    </div>
</template>

<script lang="ts">

    export default {
        props: {
            slug: {
                type: String,
                required: false
            }
        }
    }

</script>