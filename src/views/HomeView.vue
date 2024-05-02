<script setup >
import {ref} from 'vue';
import WelcomeComponent from "@/components/WelcomeComponent.vue";
import CardComponent from "@/components/CardComponent.vue";
import MenuComponent from "@/components/MenuComponent.vue";
import LanguageComponent from "@/components/LanguageComponent.vue";
import FormationComponent from "@/components/FormationComponent.vue";
import ProjectComponent from "@/components/ProjectComponent.vue";
import TechnoWatchComponent from "@/components/TechnoWatchComponent.vue";
import EpreuveComponent from "@/components/EpreuveComponent.vue";

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
const techwatch = [
  {
    alt: "Illustration Intelligence Artificielle",
    image: "/assets/assets_index/IA.jpg",
    description: "Veille technologique sur l'Intelligence Artificielle générative",
    src: "/assets/assets_index/Veille techno IA générative.pdf",
    name: "Intelligence Artificielle"
  },
  {
    alt: "Illustration Blockchain",
    image: "/assets/assets_index/blockchain.jpg",
    description: "Veille technologique sur la Blockchain",
    src: "/assets/assets_index/Veille techno Blockchain.pdf",
    name: "Blockchain"
  },
];
const EpreuveE5 = [
  {
    alt: "Logo HarmoniSound",
    image: "/assets/assets_index/HarmoniSound.webp",
    description: "Situation application web 1/2 : bibliothèque de gestion musicale en PHP Symfony",
    src: "",
    name: "HarmoniSound"
  },
  {
    alt: "Illustration Blockchain",
    image: "/assets/assets_index/InvestManagment.png",
    description: "Situation application lourde 2/2 : gestion d'investissement financiers en Python",
    src: "",
    name: "InvestManagment"
  },
];

let showLanguages = ref(languages.slice(0, 6));
let showProjects = ref(projects.slice(0, 4));
let showTechwatch = ref(techwatch.slice(0, 4));

const toggleDisplay = (type) => {
  switch (type) {
    case 'language':
      showLanguages.value.length === languages.length ? showLanguages.value = languages.slice(0, 6) : showLanguages.value = languages;
      break;
    case 'project':
      showProjects.value.length === projects.length ? showProjects.value = projects.slice(0, 4) : showProjects.value = projects;
      break;
    case 'techwatch':
      showTechwatch.value.length === techwatch.length ? showTechwatch.value = techwatch.slice(0, 4) : showTechwatch.value = techwatch;
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
  <p id="EpreuveE5" class="ml-10 text-5xl font-medium mt-40 text-neutral-950" ><i class="fa-solid fa-code" ></i >Epreuve
                                                                                                                 E5
  </p >
  <div class="grid grid-rows-1 md:grid-cols-2 font-['Roboto']" >
    <EpreuveComponent v-for="E5 in EpreuveE5" :key="E5.name" v-bind="E5" />
  </div >
  <div class=" justify-center grid " >
    <p class="text-2xl font-medium text-neutral-950 mb-4 justify-center text-center" >
      Tableau de syntheses E4
    </p >
    <div class="border border-current p-2 rounded-lg" >
      <a href="/assets/assets_index/Epreuve E4.pdf" target="_blank" >
        <img alt="tableau de sythese" class="w-96 " src="/assets/assets_index/Epreuve E4.webp" >
      </a >
    </div >
  </div >
  <p id="VeilleTechno" class="ml-10 text-5xl font-medium mt-40 text-neutral-950" ><i class="fa-solid fa-code" ></i >Veille
                                                                                                                    Technologique
  </p >
  <div class="grid grid-rows-1 md:grid-cols-2 font-['Roboto']" >
    <TechnoWatchComponent v-for="tech in techwatch" :key="tech.name" v-bind="tech" />
  </div >
</template >