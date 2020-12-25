export { default as HomeCard } from '../../components/HomeCard.vue'

export const LazyHomeCard = import('../../components/HomeCard.vue' /* webpackChunkName: "components/HomeCard" */).then(c => c.default || c)
