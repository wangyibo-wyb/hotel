<template>

    <div>
        <van-calendar v-model="show" type="range" @confirm="onConfirm" />
    </div>
</template>
<script>
    export default {
        name: "Calendar",
        data() {
            return {
                date: '',
                show:true
            }
        },
        methods: {
            onConfirm(date) {
                let [startTime,endTime] = date;
                let start = startTime.getMonth()+1+'.'+startTime.getDate();
                let end = endTime.getMonth()+1+'.'+endTime.getDate();
                let startDay = startTime.getDay();
                let endDay = endTime.getDay();
                this.$store.commit('setTime',{start,end,startDay,endDay});
                this.$router.back();
            },
        }
    }
</script>

<style scoped>

</style>