<script setup >
import {ref} from 'vue';
import WelcomeComponent from "@/components/WelcomeComponent.vue";
import CardComponent from "@/components/CardComponent.vue";
import MenuComponent from "@/components/MenuComponent.vue";
import LanguageComponent from "@/components/LanguageComponent.vue";
import FormationComponent from "@/components/FormationComponent.vue";
import ProjectComponent from "@/components/ProjectComponent.vue";

const languages = [
  {alt: "Logo html", image: "/assets/assets_index/HTML-removebg.webp", title: "HTML"},
  {alt: "Logo Tailwind", image: "/assets/assets_index/Tailwind-removebg.webp", title: "Tailwind CSS"},
  {alt: "Logo Python", image: "/assets/assets_index/Python-removebg.webp", title: "Python"},
  {alt: "Logo Symfony", image: "/assets/assets_index/Symfony.webp", title: "PHP Symfony"},
  {alt: "Logo JavaScript", image: "/assets/assets_index/JavaScript.webp", title: "JavaScript"},
  {alt: "Logo VueJS", image: "/assets/assets_index/VueJS.webp", title: "VueJS"},
  {alt: "Logo MySQL", image: "/assets/assets_index/MySQL-removebg.webp", title: "MySQL"},
  {alt: "Logo Webflow", image: "/assets/assets_index/Webflow.webp", title: "WebFlow CMS"},
  {alt: "Logo Wordpress", image: "/assets/assets_index/wordpress.webp", title: "Wordpress"}
];

const projects = [
  {
    alt: "Logo VueJS",
    image: "/assets/assets_index/VueJS.webp",
    date: "Décembre 2023",
    team: "Valentin Fiess",
    description: "Découverte de VueJS avec routage, connexion a un webhook et affichage d'une API",
    src: "https://github.com/ValMtp3/TD-Site",
    name: "TD Site",
  },
  {
    alt: "Logo HarmoniSound",
    image: "/assets/assets_index/HarmoniSound.webp",
    date: "Novembre 2023",
    team: "Valentin Fiess",
    description: "Découverte de PHP Symfony à travers la création d'une bibliothèque musicale intégrant des fonctionnalités d'utilisateur et une base de données",
    src: "https://github.com/ValMtp3/HarmoniSound",
    name: "HarmoniSound",
  },
  {
    alt: "Logo ProSwipe",
    image: "/assets/assets_index/ProSwipe.webp",
    date: "Septembre 2023",
    team: "Groupe de classe",
    description: "Projet de création d'entreprise fictive de mise en relation entre étudiant et professionnel avec fonctionnalité de swipe en PHP, HTML et CSS ",
    src: "https://github.com/ProSwipe/Application",
    name: "ProSwipe",
  },
  {
    alt: "Logo Pizza O'Plomo",
    image: "/assets/assets_index/pizzaoplomo.webp",
    date: "Février 2022",
    team: "Groupe de classe",
    description: " Création d'un projet complet avec site web, MCD, SEO, Emailing et SMO développé en HTML, CSS, JavaScript et PHP",
    src: "https://www.pizzaoplomo.gaetandev.fr",
    name: "Pizza O'Plomo",
  },
  {
    alt: "Logo Hotel Neptune",
    image: "/assets/assets_index/HotelNeptune.webp",
    date: "Novembre 2022",
    team: "Groupe de classe",
    description: "Refonte d'un site web d'hotel avec base de données intégrée, développé en HTML, CSS, JavaScript, PHP et MySQL",
    src: "https://github.com/HotelNeptune/Application/tree/dev",
    name: "Neptune",
  },
  {
    alt: "Damso",
    image: "/assets/assets_index/Ipseite1.webp",
    date: "Septembre 2022",
    team: "Valentin Fiess",
    description: "Premier projet html/css sur la page web d'un artiste ici Damso",
    src: "https://github.com/ValMtp3/Damso",
    name: "Damso",
  },

];

let showLanguages = ref(languages.slice(0, 6));
let isShowLanguage = false;

let showProjects = ref(projects.slice(0, 4));
let isShowProject = false;

const toggleDisplay = (type) => {
  switch (type) {
    case 'language':
      if (isShowLanguage) {
        showLanguages.value = languages.slice(0, 6);
        isShowLanguage = false;
      } else {
        showLanguages.value = languages;
        isShowLanguage = true;
      }
      break;
    case 'project':
      if (isShowProject) {
        showProjects.value = projects.slice(0, 4);
        isShowProject = false;
      } else {
        showProjects.value = projects;
        isShowProject = true;
      }
      break;
  }


}

</script >

<template >
  <WelcomeComponent />
  <div class="flex flex-col sm:flex-row justify-around items-center mt-10" >
    <CardComponent />
    <MenuComponent />
  </div >
  <p id="propos" class="ml-10 text-5xl font-medium mt-40 text-neutral-950" ><i class="fa-solid fa-code" ></i > A propos
  </p >
  <div class="grid grid-cols-1 md:grid-cols-3 font-['Roboto']" >
    <LanguageComponent v-for="language in showLanguages" :key="language.title" v-bind="language" />
  </div >
  <div class="flex justify-center" >
    <button class="border border-current p-2 mb-4 rounded-lg bg-gray-500 text-white hover:bg-gray-400"
            @click="toggleDisplay('language')" >Afficher plus
    </button >
  </div >
  <FormationComponent />
  <p id="Projet" class="ml-10 text-5xl font-medium mt-40 text-neutral-950" ><i class="fa-solid fa-code" ></i >Projets
  </p >
  <div class="grid grid-rows-1 md:grid-cols-2 font-['Roboto']" >
    <ProjectComponent v-for="project in showProjects" :key="project.name" v-bind="project" />
  </div >
  <div class="flex justify-center" >
    <button class="border border-current p-2 mb-4 rounded-lg bg-gray-500 text-white hover:bg-gray-400"
            @click="toggleDisplay('project')" >Afficher plus
    </button >
  </div >
</template >