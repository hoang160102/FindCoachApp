<template>
    <section>
        <base-card>
            <span class="filer-option">
                <input type="checkbox" id="FrontEnd" checked />
                <label for="FrontEnd">FrontEnd</label>
            </span>
            <span class="filer-option">
                <input type="checkbox" id="Backend" checked />
                <label for="Backend">Backend</label>
            </span>
            <span class="filer-option">
                <input type="checkbox" id="Career" checked />
                <label for="Career">Career</label>
            </span>
        </base-card>
    </section>
</template>

<script>
export default {
    data() {
        return {
            filters: {
                frontend: true,
                backend: true,
                career: true
            }
        }
    }
}
</script>