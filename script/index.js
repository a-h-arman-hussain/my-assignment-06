// const plantsCategories = document.getElementById("categories");
// const fruitsCard = document.getElementById("fruitsCard");

// const loadAllTrees = () => {
//   const url = "https://openapi.programming-hero.com/api/plants";
//   fetch(url)
//     .then((res) => res.json())
//     .then((data) => {
//       displayAllTrees(data.plants);
//     })
//     .catch((err) => console.log(err));
// };

// const displayAllTrees = (allTrees) => {
//   allTrees.forEach((tree) => {
//     const activeTreeCard = "div";
//     activeTreeCard.innerHTML = `
//     <li><a
//         class="btn hover:text-white hover:bg-green-900 w-full"
//         href="#"
//       >${tree.plants}</a>
//     </li>
//     `;
//     plantsCategories.appendChild(activeTreeCard);
//   });
// };

// loadAllTrees();

// const loadCategories = () => {
//   const url = "https://openapi.programming-hero.com/api/categories";
//   fetch(url)
//     .then((res) => res.json())
//     .then((data) => {
//       displayCategories(data.categories);
//     })
//     .catch((err) => console.error(err));
// };

// const displayCategories = (categories) => {
//   plantsCategories.innerHTML = "";

//   categories.forEach((cat) => {
//     const newLi = document.createElement("li");
//     newLi.id = cat.id;
//     newLi.innerHTML = `
//       <a
//         class="btn hover:text-white hover:bg-green-900 w-full"
//         href="#"
//       >${cat.category_name}</a>
//     `;
//     plantsCategories.appendChild(newLi);
//   });
// };

// plantsCategories.addEventListener("click", (e) => {
//   e.preventDefault();
//   const clickedLink = e.target.closest("a");
//   loadFruitCategories(clickedLink.parentNode.id);

//   if (clickedLink) {
//     const allLinks = plantsCategories.querySelectorAll("a");
//     allLinks.forEach((link) => {
//       link.classList.remove("bg-green-600", "text-white");
//     });

//     clickedLink.classList.add("bg-green-600", "text-white");
//   }
// });

// const loadFruitCategories = (fruitId) => {
//   // console.log(fruitId);
//   fetch(`https://openapi.programming-hero.com/api/category/${fruitId}`)
//     .then((res) => res.json())
//     .then((data) => {
//       displayFruitCategories(data.plants);
//     })
//     .catch((err) => console.log(err));
// };

// // const displayFruitCategories = (cards) => {
// //   fruitsCard.innerHTML = "";
// //   cards.forEach((card) => {
// //     const newCard = document.createElement("div");
// //     newCard.innerHTML = `
// //     <div class="card bg-base-100 w-full h-[370px] shadow-md">
// //                 <figure>
// //                   <img src="${card.image}" />
// //                 </figure>
// //                 <div class="card-body">
// //                   <h2 class="card-title cursor-pointer">${card.name}</h2>
// //                   <p class="text-[12px] text-justify">${card.description}
// //                   </p>
// //                   <div class="flex justify-between items-center py-1 w-full">
// //                     <p
// //                       class="font-bold text-green-500 bg-green-500/30 px-2 rounded-full flex-grow-0"
// //                     >
// //                       ${card.category}
// //                     </p>
// //                     <p class="font-bold flex-grow-0">৳<span>${card.price}</span></p>
// //                   </div>
// //                   <div class="card-actions">
// //                     <button
// //                       class="btn text-white bg-[#15803d] hover:bg-green-900 w-full rounded-full"
// //                     >
// //                       Add to Cart
// //                     </button>
// //                   </div>
// //                 </div>
// //               </div>
// //     `;
// //     fruitsCard.appendChild(newCard);
// //   });
// // };

// const displayFruitCategories = (cards) => {
//   fruitsCard.innerHTML = "";
//   cards.forEach((card, index) => {
//     const modalId = `modal_${index}`;
//     const newCard = document.createElement("div");
//     newCard.innerHTML = `
//       <div class="card bg-base-100 w-full h-[370px] shadow-md">
//         <figure>
//           <img class="w-full h-full" src="${card.image}" />
//         </figure>
//         <div class="card-body">
//           <h2 
//             class="card-title cursor-pointer hover:underline open-modal" 
//             data-modal="${modalId}"
//           >
//             ${card.name}
//           </h2>
//           <p class="text-[12px] text-justify">${card.description}</p>
//           <div class="flex justify-between items-center py-1 w-full">
//             <p class="font-bold text-green-500 bg-green-500/30 px-2 rounded-full">
//               ${card.category}
//             </p>
//             <p class="font-bold">৳<span>${card.price}</span></p>
//           </div>
//           <div class="card-actions">
//             <button
//               class="btn text-white bg-[#15803d] hover:bg-green-900 w-full rounded-full"
//             >
//               Add to Cart
//             </button>
//           </div>
//         </div>
//       </div>
//       <dialog id="${modalId}" class="modal modal-bottom sm:modal-middle">
//         <div class="modal-box">
//           <h3 class="text-lg font-bold">${card.name}</h3>
//           <figure class="flex justify-center mt-5">
//           <img class="h-[250px] w-[300px] rounded-lg" src="${card.image}" />
//         </figure>
//           <p class="py-4 text-sm">${card.description}</p>
//           <div class="flex justify-between items-center py-1 w-full">
//             <p class="font-bold text-green-500 bg-green-500/30 px-2 rounded-full">
//               ${card.category}
//             </p>
//             <p class="font-bold">৳<span>${card.price}</span></p>
//           </div>
//           <div class="modal-action">
//             <form method="dialog">
//               <button class="btn bg-green-700 text-white">Close</button>
//             </form>
//           </div>
//         </div>
//       </dialog>
//     `;

//     fruitsCard.appendChild(newCard);
//   });
//   const modalTriggers = document.querySelectorAll(".open-modal");
//   modalTriggers.forEach((trigger) => {
//     trigger.addEventListener("click", () => {
//       const modalId = trigger.getAttribute("data-modal");
//       const modal = document.getElementById(modalId);
//       modal.showModal();
//     });
//   });
// };

// loadCategories();


// ---------------------------------------------

const plantsCategories = document.getElementById("categories");
const fruitsCard = document.getElementById("fruitsCard");

// Load All Trees by Default
const loadAllTrees = () => {
  const url = "https://openapi.programming-hero.com/api/plants";
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      displayFruitCategories(data.plants); // সরাসরি cards দেখাবে
    })
    .catch((err) => console.log(err));
};

// Load Categories for Sidebar
const loadCategories = () => {
  const url = "https://openapi.programming-hero.com/api/categories";
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      displayCategories(data.categories);
    })
    .catch((err) => console.error(err));
};

// Display Categories in Sidebar
const displayCategories = (categories) => {
  plantsCategories.innerHTML = "";

  categories.forEach((cat) => {
    const newLi = document.createElement("li");
    newLi.id = cat.id;
    newLi.innerHTML = `
      <a
        class="btn hover:text-white hover:bg-green-900 w-full"
        href="#"
      >${cat.category_name}</a>
    `;
    plantsCategories.appendChild(newLi);
  });
};

// Handle Category Click
plantsCategories.addEventListener("click", (e) => {
  e.preventDefault();
  const clickedLink = e.target.closest("a");
  if (!clickedLink) return;

  loadFruitCategories(clickedLink.parentNode.id);

  const allLinks = plantsCategories.querySelectorAll("a");
  allLinks.forEach((link) => {
    link.classList.remove("bg-green-600", "text-white");
  });

  clickedLink.classList.add("bg-green-600", "text-white");
});

// Load Fruits by Category
const loadFruitCategories = (fruitId) => {
  fetch(`https://openapi.programming-hero.com/api/category/${fruitId}`)
    .then((res) => res.json())
    .then((data) => {
      displayFruitCategories(data.plants);
    })
    .catch((err) => console.log(err));
};

// Display Fruits (Cards + Modal)
const displayFruitCategories = (cards) => {
  fruitsCard.innerHTML = "";
  cards.forEach((card, index) => {
    const modalId = `modal_${index}`;
    const newCard = document.createElement("div");
    newCard.innerHTML = `
      <div class="card bg-base-100 w-full h-[370px] shadow-md">
        <figure>
          <img src="${card.image}" />
        </figure>
        <div class="card-body">
          <h2 
            class="card-title cursor-pointer hover:underline open-modal" 
            data-modal="${modalId}"
          >
            ${card.name}
          </h2>
          <p class="text-[12px] text-justify">${card.description}</p>
          <div class="flex justify-between items-center py-1 w-full">
            <p class="font-bold text-green-500 bg-green-500/30 px-2 rounded-full">
              ${card.category}
            </p>
            <p class="font-bold">৳<span>${card.price}</span></p>
          </div>
          <div class="card-actions">
            <button
              class="btn text-white bg-[#15803d] hover:bg-green-900 w-full rounded-full"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <dialog id="${modalId}" class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <h3 class="text-lg font-bold">${card.name}</h3>
          <figure class="flex justify-center mt-5">
            <img class="h-[250px] w-[300px] rounded-lg" src="${card.image}" />
          </figure>
          <p class="py-4 text-sm">${card.description}</p>
          <div class="flex justify-between items-center py-1 w-full">
            <p class="font-bold text-green-500 bg-green-500/30 px-2 rounded-full">
              ${card.category}
            </p>
            <p class="font-bold">৳<span>${card.price}</span></p>
          </div>
          <div class="modal-action">
            <form method="dialog">
              <button class="btn bg-green-700 text-white">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    `;
    fruitsCard.appendChild(newCard);
  });

  // Modal Triggers
  const modalTriggers = document.querySelectorAll(".open-modal");
  modalTriggers.forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const modalId = trigger.getAttribute("data-modal");
      const modal = document.getElementById(modalId);
      modal.showModal();
    });
  });
};

// Call Functions
loadCategories();
loadAllTrees(); // ডিফল্টভাবে সব গাছ দেখাবে
