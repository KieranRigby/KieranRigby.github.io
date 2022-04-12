<template>
  <div>
    <Nuxt />
  </div>
</template>

<script>
    export default {
    data () {
        return {

        }
    },

    head () {
        return {
        title: 'Test Page - My awesome project',
        link: [
            { rel: 'stylesheet', href: '/bootstrap/bootstrap.min.css' }
        ],
        script: [
            { src: "/bootstrap/bootstrap.bundle.min.js", type: "text/javascript"},
            { src: "/js/main.js", type: "text/javascript"}
        ]

        }
    }


    }
</script>