<template>
    <section>
        <page-header />

        <div v-if="isReady" class="mt-5">
            <div class="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1 col-md-12 mt-3">
                <h1 class="font-serif">Canvas</h1>
                <p class="lead text-secondary">A Laravel Publishing Platform</p>

                <main role="main" class="mt-5">
                    <div>
                        <h4 class="my-4 border-bottom mt-5 pb-2">
                            <span class="border-bottom border-dark pb-2">Topics</span>
                        </h4>

                        <div v-if="topics.length > 0">
                            <div class="row row-cols-1 row-cols-md-3 row-cols-sm-2">
                                <div :key="topic.id" v-for="topic in topics">
                                    <router-link
                                        :to="{ name: 'show-topic', params: { slug: topic.slug } }"
                                        class="text-decoration-none"
                                    >
                                        <div class="col mb-4">
                                            <div class="card mb-4 shadow-sm">
                                                <div class="card-body">
                                                    <p class="card-text">{{ topic.name }}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </router-link>
                                </div>
                            </div>
                        </div>

                        <div v-else class="my-5">
                            <p class="lead text-center text-muted mt-5">You have no topics</p>
                            <p class="lead text-center text-muted mt-1">Write on the go with our mobile-ready app!</p>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    </section>
</template>

<script>
import NProgress from 'nprogress';
import PageHeader from '../components/PageHeaderComponent';

export default {
    name: 'all-topics',

    components: {
        PageHeader,
    },

    metaInfo() {
        return {
            title: 'Canvas',
        };
    },

    data() {
        return {
            topics: [],
            isReady: false,
        };
    },

    async created() {
        await Promise.all([this.fetchTopics()]);
        this.isReady = true;
        NProgress.done();
    },

    methods: {
        fetchTopics() {
            return this.request()
                .get('/api/topics')
                .then(({ data }) => {
                    this.topics = data;
                    NProgress.inc();
                })
                .catch(() => {
                    NProgress.done();
                });
        },
    },
};
</script>
