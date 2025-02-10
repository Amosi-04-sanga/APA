//import { slideshow1, slideshow2 } from "/images;

const posts = [
    {
       image: '/images/posts/post1.png',
       author: 'Neus njugunya',
       date: '24/01/2025',
       text: "Parenting in Africa is shaped by the continent's diverse cultures, traditions, and socioeconomic contexts. While practices vary widely across countries and ethnic group",
    },
    {
        image: '/images/posts/post2.png',
        author: 'Neus njugunya',
        date: '02/01/2025',
        text: "Parenting in Africa is shaped by the continent's diverse cultures, traditions, and socioeconomic contexts. While practices vary widely across countries and ethnic group",
     },
     {
        image: '/images/posts/post1.png',
        author: 'Neus njugunya',
        date: '24/01/2025',
        text: "Parenting in Africa is shaped by the continent's diverse cultures, traditions, and socioeconomic contexts. While practices vary widely across countries and ethnic group",
     },
]


const navLinks = [
    {
      route: "/",
      label: "Home",
    },
    {
      route: "/kidnames",
      label: "Names",
    },
    {
      route: "/kidtalents",
      label: "Talents",
    },
    {
      route: "/parenting",
      label: "Parenting",
    },
    {
      route: "/blog",
      label: "Blog",
    },
    {
      route: "/about",
      label: "About us",
    },
  ];


const HeroSlideshow = [
    {
        url : '/images/slideshow/slideshow1.jpg',
        text : 'African parenting and nurturing',
    },
    {
        url : '/images/slideshow/slideshow2.jpg',
        text : 'African parenting and nurturing'
    },
    {
        url : '/images/slideshow/slideshow3.jpg',
        text : 'African parenting and nurturing'
    },

]

const values = ['confidentiality', 'responsibility', 'time management', 'creativity', 'care']

const parentingValues = [
  'Emotional Security',
  'Moral and Ethical Development',
  'Academic success',
  'Social Skills and Relationships',
  'descpline and responsibility',
]

export {
    navLinks,
    HeroSlideshow,
    values,
    posts,
    parentingValues,
}