import { SchemaOrgArticle } from "#build/components"
import {resolve} from "path"
export default defineNuxtConfig({
         
          alias:{
            '@':resolve(__dirname,'/')
          },
       
     
          devtools: {
          enabled: true,
          timeline: {
          enabled: true
          }
          },
          gtm: {
            id: 'GTM-N6CKBRT', 
            defer: false, 
            compatibility: false, // Will add `async` and `defer` to the script tag to not block requests for old browsers that do not support `async`
            nonce: '2726c7f26c', // Will add `nonce` to the script tag
            enabled: true, // defaults to true. Plugin can be disabled by setting this to false for Ex: enabled: !!GDPR_Cookie (optional)
            debug: true, // Whether or not display console logs debugs (optional)
            enableRouterSync: true, // Pass the router instance of your app to automatically sync with router (optional)
            devtools: true, // (optional)
          },

          css:[ 
            "~/assets/css/flaticon.css",
            "~/assets/css/owl.css",
            "~/assets/css/bootstrap.min.css",
            "~/assets/css/animate.css",
            "~/assets/css/color.css",
            "~/assets/css/global.css",
            "~/assets/css/style.css",
            "~/assets/css/elpath.css",
            "~/assets/css/responsive.css",
            "~/assets/css/owl.carousel.min.css"
          ],
          modules: [
          
            "@nuxtjs/i18n",
            "@nuxt/devtools",
            "@nuxt/image",
            'nuxt-swiper',
            'nuxt-simple-sitemap'
        
          ],

          // 🦄🦄🦄🦄🦄🦄// To set up the  Schema.org 👌👌👌👌 

          site: {
            url: 'https://agency.iterates.be/',
            name: 'iterates agency website consulting brussels',
            description: 'Welcome to my awesome site!',
            defaultLocale: 'en',
            identity: {
              type: 'Organization',
            },
            twitter: '@harlan-zw',
          },

          // end of configuration SEO 
       
          buildModules: [
            ['@averjs/nuxt-compression'],
            ['@nuxt-modules/compression',
            ,
             {
              algorithm: 'brotliCompress'
            }],
          ],
       
          build: {
          
          loaders: {
            js: 'esbuild-wasm'
          }
          },
          
          app:{
          pageTransition: { name: 'page', mode: 'out-in' },
          head:{
          title: "iterates agency - Consulting agency service in Brussels website ",

          //stylesheets
          link:[
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
            { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css', defer: true },
            { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css', defer: true },
          ],
          
          // meta

          meta: [
            { charset: "utf-8" },
            { name: "viewport", content: "width=device-width, initial-scale=1,maximum-scale=1.0, user-scalable=0" },
            { hid: "description", name: "description", content: "" },
            { name:"google-site-verification", content:"4hxkTqh-RyZyeVrwbZdqquMgyLRZQ4P9AyMy39TizD8" },
            
            //additional meta tags
            { name: 'description', content: "iterates is an IT agency that can develop the perfect IT project for your business. We work with highly skilled developers with over 10 years' experience." },
            { name: 'keywords', content: 'IT agency Brussels, software development, SaaS, applications development Belgium' },
            { name: 'author', content: 'iterates SRL Rodolphe BALAY' },
    
            { property: 'og:title', content: 'iterates agency' },
            { property: 'og:image', content: 'https://agency.iterates.be/assets/images/resource/iterates_screenshot.png' },
            { property: 'og:url', content: 'https://agency.iterates.be/' },
            { property: 'og:site_name', content: 'iterates IT services & consulting' },
            { property: 'og:description', content: 'iterates IT services & consulting services website .net developers' },
    
            // Canonical link
            { rel: 'canonical', href: 'https://test.agency.iterates.be/en/' },

            ],
                  
            script: [

              { src: '/js/cal.js', async: false },
              { src: '/js/cal.client.js', async: false },
              { src: 'https://cmp.osano.com/16CPRSTdNy1vH1Ry/38304deb-6c96-4412-8239-f4943ebd4a76/osano.js'},
              { 
                src: 'https://web-component.chatbot.iterates.be/scripts/chatbot.min.js',
                'api-key': '1c0e69a3-ade6-4457-938d-59e6a8fac10a', 
                'primary-color': '#8482bde6', 
                body: true,
                mode: 'client', 
              },
              ],  
            },
            },
         
        
            i18n: {
              strategy: 'prefix',
              langDir: 'locales/',
              defaultLocale: 'en',
              
              locales: [
                {
                  code: 'en',
                  name: 'English',
                  file: 'en.json',
                  nativeName: 'EN',
                  dir: 'ltr',
                },
                {
                  code: 'fr',
                  name: 'Français',
                  file: 'fr.json',
                  nativeName: 'FR',
                  dir: 'ltr',
                },
              ],
              },
              nitro: {
                compressPublicAssets: {
                  brotli: true,
                  compressPublicAssets: true,
                }
              }
 })