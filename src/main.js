import { createApp } from 'vue';
import App from './App.vue';
import UIcomponents from '@/components/UI';


const app = createApp(App)

console.log(UIcomponents)

UIcomponents.forEach(UIitem=>{
    app.component(UIitem.name,UIitem)
})

app.mount('#app')
