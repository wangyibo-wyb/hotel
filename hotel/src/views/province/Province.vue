<template>
    <div>
        <van-index-bar>
        <div v-for="item in provincekeys" :key="item">
            <van-index-anchor>{{item}}</van-index-anchor>
            <ul>

                <li v-for="(city,index) in province[item]" :key="index" @click="handleProvince(city.province)">
                    <van-cell>{{city.province}}</van-cell>
                </li>
            </ul>
        </div>
        </van-index-bar>
    </div>
</template>

<script>
    import city from '../../lib/city.json';
    export default {
        name: "Province",
        data(){
            return{
                province:{}
            }
        },
        computed:{
            provincekeys(){
                let arr = [];
                if(JSON.stringify(this.province)!={}){
                    arr=Object.keys(this.province).sort();
                }
                return arr;
            }
        },
        methods:{
            initprovince(){
                city.province.forEach(ele=>{
                    let firstchar=ele.enp.charAt(0).toUpperCase();
                    if(!this.province[firstchar]){
                        this.$set(this.province,firstchar,[]);
                        // this.province[firstchar]=[];
                    }
                    this.province[firstchar].push(ele);
                })
            },
            handleProvince(province){
                this.$store.commit('setProvince',province);
                this.$router.back();
            }
        },
        mounted() {
            this.initprovince();
        }
    }
</script>

<style scoped>

</style>
