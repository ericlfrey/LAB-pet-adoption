const pets = [
  {
    id: 1,
    name: "Dusty",
    color: "Green",
    specialSkill: "Gives sincere apologies.",
    type: "cat",
    imageUrl: "http://kittentoob.com/wp-content/uploads/2015/06/funny-cat-with-a-towel.jpg",
  },
  {
    id: 2,
    name: "Trouble",
    color: "Brown",
    specialSkill: "Just picks the tomatoes off of a sandwich instead of requesting a whole new sandwich.",
    type: "dino",
    imageUrl: "https://media.istockphoto.com/photos/stegosaurus-forest-scene-3d-illustration-picture-id1168444910?s=170667a",
  },
  {
    id: 3,
    name: "Whiskers",
    color: "Yellow",
    specialSkill: "Can prove he is a real man by drinking whiskey.",
    type: "dino",
    imageUrl: "https://mydinosaurs.com/wp-content/uploads/2017/02/2-3-600x400.jpg"
  },
  {
    id: 4,
    name: "Coco",
    color: "Black",
    specialSkill: "Burps minimally.",
    type: "dog",
    imageUrl: "http://cdn.akc.org/content/article-body-image/funny-pembroke_welsh_corgi.jpg"
  },
  {
    id: 5,
    name: "Spooky",
    color: "Brown",
    specialSkill: "Comfortable in the outdoors for up to eight hours.",
    type: "cat",
    imageUrl: "https://as1.ftcdn.net/v2/jpg/01/96/39/24/1000_F_196392453_iUZNmPtxsXPhojoKuehMcz4uF9GfbwgA.jpg"
  },
  {
    id: 6,
    name: "Tiger",
    color: "Black",
    specialSkill: "Can read (but cannot understand) Hebrew.",
    type: "dog",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Basset_Hound_600.jpg"
  },
  {
    id: 7,
    name: "Oreo",
    color: "Yellow",
    specialSkill: "Able to stop chewing ice or whistling on request.",
    type: "cat",
    imageUrl: "https://i.pinimg.com/originals/9d/da/3e/9dda3e5fd2b9886fc3d13ee47f52e8a0.jpg"
  },
  {
    id: 8,
    name: "Ginger",
    color: "Grey",
    specialSkill: "Comfortable in the outdoors for up to eight hours.",
    type: "dino",
    imageUrl: "https://media.istockphoto.com/photos/stegosaurus-forest-scene-3d-illustration-picture-id1168444910?s=170667a"
  },
  {
    id: 9,
    name: "Sassy",
    color: "Brown",
    specialSkill: "Adept at talking self and others out of fights.",
    type: "cat",
    imageUrl: "https://tailandfur.com/wp-content/uploads/2015/09/40-Amazing-Cat-Funny-Moment-Pictures-Feature-Image.jpg"
  },
  {
    id: 10,
    name: "Sammy",
    color: "Blue",
    specialSkill: "Listens attentively to boring stories.",
    type: "cat",
    imageUrl: "https://i.pinimg.com/originals/04/54/92/0454926d39eeb420f4f01948e94e9e41.jpg"
  },
  {
    id: 11,
    name: "Coco",
    color: "Orange",
    specialSkill: "Can be around food without staring creepily at it.",
    type: "dino",
    imageUrl: "https://media.istockphoto.com/photos/stegosaurus-forest-scene-3d-illustration-picture-id1168444910?s=170667a"
  },
  {
    id: 12,
    name: "Buster",
    color: "Green",
    specialSkill: "Does not use excessive acronyms.",
    type: "dog",
    imageUrl: "https://i.pinimg.com/originals/1f/30/8c/1f308c9c108a384b91b39430cc7312e9.jpg"
  },
  {
    id: 13,
    name: "Chester",
    color: "Red",
    specialSkill: "Expertly quotes and recognizes dialogue from early seasons of The Simpsons.",
    type: "dog",
    imageUrl: "http://1kjkdg1axrkd2g03cnboj761.wpengine.netdna-cdn.com/wp-content/uploads/2017/12/braydon-anderson-105552-e1512684107659.jpg"
  },
  {
    id: 14,
    name: "Samantha",
    color: "Brown",
    specialSkill: "Always up for dessert.",
    type: "cat",
    imageUrl: "http://3.bp.blogspot.com/-RzIFLsIO-XQ/UFoMLOT66JI/AAAAAAAAVps/JRF98hdA9S8/s640/funny-cat-pictures-016-027.jpg"
  },
  {
    id: 15,
    name: "Coco",
    color: "Red",
    specialSkill: "Burps minimally.",
    type: "cat",
    imageUrl: "http://cathumor.net/wp-content/uploads/2013/12/cat-humor-funny-karate-cat-2.jpg"
  },
  {
    id: 16,
    name: "Smokey",
    color: "Brown",
    specialSkill: "Drives at a safe rate of speed in snow or rain.",
    type: "dino",
    imageUrl: "https://media.istockphoto.com/photos/stegosaurus-forest-scene-3d-illustration-picture-id1168444910?s=170667a"
  },
  {
    id: 17,
    name: "Muffin",
    color: "Yellow",
    specialSkill: "Does not freak out if you haven???t seen his favorite movie (The Big Lebowski).",
    type: "cat",
    imageUrl: "https://as1.ftcdn.net/v2/jpg/01/96/39/24/1000_F_196392453_iUZNmPtxsXPhojoKuehMcz4uF9GfbwgA.jpg"
  },
  {
    id: 18,
    name: "Salem",
    color: "Brown",
    specialSkill: "Proficient in air guitar",
    type: "dino",
    imageUrl: "https://media.istockphoto.com/photos/stegosaurus-forest-scene-3d-illustration-picture-id1168444910?s=170667a"
  },
  {
    id: 19,
    name: "Callie",
    color: "Blue",
    specialSkill: "Listens attentively to boring stories.",
    type: "dog",
    imageUrl: "http://cdn.akc.org/content/article-body-image/funny-pembroke_welsh_corgi.jpg"
  },
  {
    id: 20,
    name: "Spooky",
    color: "Black",
    specialSkill: "Uses litter box at appropriate hours.",
    type: "cat",
    imageUrl: "https://as1.ftcdn.net/v2/jpg/01/96/39/24/1000_F_196392453_iUZNmPtxsXPhojoKuehMcz4uF9GfbwgA.jpg"
  },
  {
    id: 21,
    name: "Miss kitty",
    color: "Red",
    specialSkill: "Owns a Nintendo Power Glove.",
    type: "dino",
    imageUrl: "https://media.istockphoto.com/photos/stegosaurus-forest-scene-3d-illustration-picture-id1168444910?s=170667a"
  },
  {
    id: 22,
    name: "Snuggles",
    color: "Orange",
    specialSkill: "Is comfortable with jokes about his receding hairline.",
    type: "cat",
    imageUrl: "https://as1.ftcdn.net/v2/jpg/01/96/39/24/1000_F_196392453_iUZNmPtxsXPhojoKuehMcz4uF9GfbwgA.jpg"
  },
  {
    id: 23,
    name: "Buddy",
    color: "Red",
    specialSkill: "Enjoys fine wine.",
    type: "dog",
    imageUrl: "http://1.bp.blogspot.com/-VjM0CmtN-vU/T7YX-LXa09I/AAAAAAAADA0/Vt1oGWEG0lw/s1600/sheepdog+border+collie+shakes+off+water+funny+picture+photo+pulling+faces+raspberry+tongue.jpg"
  },
  {
    id: 24,
    name: "George",
    color: "Brown",
    specialSkill: "Participates in karaoke but does not force others to go out to karaoke.",
    type: "dog",
    imageUrl: "http://cdn.akc.org/content/article-body-image/funny-pembroke_welsh_corgi.jpg"
  },
  {
    id: 25,
    name: "Salem",
    color: "Red",
    specialSkill: "Knows the words to 4 rap songs.",
    type: "cat",
    imageUrl: "https://as1.ftcdn.net/v2/jpg/01/96/39/24/1000_F_196392453_iUZNmPtxsXPhojoKuehMcz4uF9GfbwgA.jpg"
  },
  {
    id: 26,
    name: "Bubba",
    color: "Yellow",
    specialSkill: "Cleans himself.",
    type: "dog",
    imageUrl: "https://www.thetrendywhippet.co.uk/wp-content/uploads/2016/11/IMG_1651-600x400.jpg"
  },
  {
    id: 27,
    name: "Chloe",
    color: "Green",
    specialSkill: "Admits he is wrong",
    type: "dino",
    imageUrl: "https://assets.creationmuseum.org/img/pages/1703-DinoDen-TwoCard.jpg"
  },
  {
    id: 28,
    name: "Nala",
    color: "Purple",
    specialSkill: "Dances when he has to.",
    type: "cat",
    imageUrl: "https://tailandfur.com/wp-content/uploads/2016/03/40-Scary-and-Funny-Cat-Pictures-8.jpg"
  },
  {
    id: 29,
    name: "Oscar",
    color: "Green",
    specialSkill: "Gives hugs with appropriate pressure and for the right length of time.",
    type: "cat",
    imageUrl: "http://img.izismile.com/img/img2/20090219/cats_02.jpg"
  },
  {
    id: 30,
    name: "Lucy",
    color: "Red",
    specialSkill: "Doesn???t get weirded out by the word ???moist.???",
    type: "dino",
    imageUrl: "https://media.istockphoto.com/photos/stegosaurus-forest-scene-3d-illustration-picture-id1168444910?s=170667a"
  }
];
// Element Queries:
const app = document.querySelector('#app');
const catBtn = document.querySelector('#btn-cat');
const dogBtn = document.querySelector('#btn-dog');
const dinoBtn = document.querySelector('#btn-dino');
const showAllBtn = document.querySelector('#btn-all');
const formBtn = document.querySelector('#btn-form');
const deleteBtn = document.querySelector('#btn-delete');
const form = document.querySelector('form');

// Function to render HTML on page- Called inside cardsOnDom
const renderToDom = (divId, htmlToRender) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = htmlToRender;
};
// Function to display the cards on the DOM
const cardsOnDom = (arr) => {
  let domString = "";
  for (const pet of arr) {
    domString += `<div class="card" style="width: 18rem;">
  <h5 class="card-title">${pet.name}</h5>
  <img src="${pet.imageUrl}" alt="Card image cap">
    <p class="pet-color">${pet.color}</p>
    <p class="pet-skill">${pet.specialSkill}</p>
    <div class="bottom-container">
    <button id="delete--${pet.id}" type="button" class="btn btn-danger">Delete</button>
    <p class="pet-type ${pet.type}">${pet.type}</p>
    </div>
</div>`
  }
  renderToDom("#app", domString);
}
// Function to display Form
const formOnDom = () => {
  const formStr = `<h6>Add a pet:</h6>
  <div class="form-group">
    <input id="name" class="input" type="text" placeholder="Name:" required autocomplete="off"
    >
  </div>
  <div class="form-group">
    <input id="color" class="input" type="text" placeholder="Color:" required autocomplete="off"
    >
  </div>
  <div class="form-group">
    <input id="specialSkill" class="input" type="text" placeholder="Special Skill:" required autocomplete="off"
    >
  </div>
  <div class="form-group">
    <input id="type" class="input" type="text" placeholder="Type:" required autocomplete="off"
    >
  </div>
  <div class="form-group">
    <input id="imageUrl" class="input" type="text" placeholder="Image URL:" required autocomplete="off"
    >
  </div>
  <button id="btn-submit" type="submit" class="btn">Add</button>`;
  renderToDom('#form', formStr);
}
// Function to filter pet by type
const petFilter = (arr, petType) => {
  const petArr = [];
  for (const pet of arr) {
    if (pet.type === petType)
      petArr.push(pet);
  }
  return petArr;
}
// Function to create a new Pet Card
const newPet = (event) => {
  event.preventDefault();
  const petObj = {
    id: pets.length + 1,
    name: document.querySelector("#name").value,
    color: document.querySelector("#color").value,
    specialSkill: document.querySelector("#specialSkill").value,
    type: document.querySelector("#type").value.toLowerCase(),
    imageUrl: document.querySelector("#imageUrl").value
  };
  console.log('wtf');
  pets.push(petObj);
  cardsOnDom(pets);
  form.reset();
}

// Calling the cardsOnDom function on Page Load
cardsOnDom(pets);

// Event Listeners for the Buttons
catBtn.addEventListener('click', () => {
  const catCards = petFilter(pets, 'cat');
  cardsOnDom(catCards);
})
dogBtn.addEventListener('click', () => {
  const dogCards = petFilter(pets, 'dog');
  cardsOnDom(dogCards);
})
dinoBtn.addEventListener('click', () => {
  const dinoCards = petFilter(pets, 'dino');
  cardsOnDom(dinoCards);
})
showAllBtn.addEventListener('click', () => {
  cardsOnDom(pets);
})

app.addEventListener('click', (e) => {
  if (e.target.id.includes('delete')) {
    const [, id] = e.target.id.split("--");
    const indexOfObj = pets.findIndex(obj => obj.id === Number(id));
    pets.splice(indexOfObj, 1);
    cardsOnDom(pets);
  }
});
form.addEventListener('submit', newPet);
formBtn.addEventListener('click', formOnDom);
