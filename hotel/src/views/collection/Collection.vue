<template>
    <div v-if="collection.length">
        <van-nav-bar
                title="我的收藏"
                left-text="返回"
                left-arrow
                @click-left="onClickLeft"
        />
        <div v-for="(item,index) in collection" :key="index" class="collect-item">
            <router-link :to="{name:'Detail',query:{sid:item.sid}}">
                <van-card
                        :price="item.sprice"
                        :desc="item.sdesc"
                        :title="item.sname"
                        :thumb="item.sthumb"

                >
                    <template #tags>
                        <van-tag plain type="danger" v-for="(item,index) in item.stag" :key="index">{{item}}</van-tag>
                    </template>
                </van-card>
            </router-link>
        </div>
    </div>
</template>

<script>
    import {getCollection} from "../../http/api";
    import {IMGURL} from "../../lib/base";

    export default {
        name: "Collection",
        data() {
            return {
                IMGURL,
                collection: []
            }
        },
        methods: {
            onClickLeft() {
                this.$router.back();
            },
            initCollection() {
                getCollection().then(res => {
                    let collection = res.data;
                    collection = collection.map(ele => {
                        ele.sthumb = IMGURL + ele.sthumb;
                        ele.stag = ele.stag.split(/,|，/);
                        return ele;
                    })
                    this.collection = collection;
                }).catch(error => {
                    console.log(error);
                });
            }
        },
        mounted() {
            this.initCollection();
        }
    }
</script>

<style>
    .van-card__content {
        text-align: left;
    }
    .collect-item{
        margin-bottom: 10px;
    }
</style>
<style scoped>

</style>