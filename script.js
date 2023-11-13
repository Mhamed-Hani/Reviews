const reviews = [
    {
      id: 1,
      name: 'susan smith',
      job: 'web developer',
      img: 'https://www.course-api.com/images/people/person-1.jpeg',
      text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: 'anna johnson',
      job: 'web designer',
      img: 'https://www.course-api.com/images/people/person-2.jpeg',
      text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
    },
    {
      id: 3,
      name: 'peter jones',
      job: 'intern',
      img: 'https://www.course-api.com/images/people/person-4.jpeg',
      text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
    },
    {
      id: 4,
      name: 'bill anderson',
      job: 'the boss',
      img: 'https://www.course-api.com/images/people/person-3.jpeg',
      text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
    },
];

let img = document.querySelector(".img img")
let author = document.querySelector("h3")
let title = document.querySelector("h2")
let des = document.querySelector("p")
let prevPer = document.querySelector(".prev-btn")
let nexPer = document.querySelector(".next-btn")
let box = document.querySelector(".box")
let currentPerson = 0

window.addEventListener("DOMContentLoaded", function() {
    const item = reviews[currentPerson]
    img.src = item.img;
    author.textContent = item.name;
    title.textContent = item.job;
    des.textContent = item.text;
})
function showPerson (person) {
    const item = person
    img.src = item.img;
    author.textContent = item.name;
    title.textContent = item.job;
    des.textContent = item.text;
    
}
function randomPerson() {
    currentPerson = Math.floor(Math.random() * reviews.length)
    showPerson(reviews[currentPerson])
}
randomPerson()
nexPer.addEventListener('click', function () {
    if (currentPerson !== reviews.length - 1) {
      showPerson(reviews[currentPerson + 1])
      currentPerson++
    } else {
      currentPerson = 0;
      showPerson(reviews[currentPerson])
    }
  })

  prevPer.addEventListener('click', function () {
    if (currentPerson !== 0) {
      showPerson(reviews[currentPerson - 1])
      currentPerson--
    } else {
      currentPerson = reviews.length - 1
      showPerson(reviews[currentPerson])
    }
  })

