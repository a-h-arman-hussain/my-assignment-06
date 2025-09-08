const plantsCategories = document.getElementById("categories");
const fruitsCard = document.getElementById("fruitsCard");
const addToCard = document.getElementById("addToCard");
const totalPrice = document.getElementById("totalPrice");
const spinner = document.getElementById("spinner");

let total = 0;
const cartItems = new Map();

const showSpinner = () => {
  spinner.classList.remove("hidden");
  fruitsCard.classList.add("opacity-90");
};
const hideSpinner = () => {
  spinner.classList.add("hidden");
  fruitsCard.classList.remove("opacity-90");
};

const loadAllTrees = () => {
  showSpinner();
  fetch("https://openapi.programming-hero.com/api/plants")
    .then((res) => res.json())
    .then((data) => {
      displayFruitCategories(data.plants);
      hideSpinner();
    })
    .catch((err) => {
      console.error(err);
      hideSpinner();
    });
};

const loadCategories = () => {
  fetch("https://openapi.programming-hero.com/api/categories")
    .then((res) => res.json())
    .then((data) => displayCategories(data.categories))
    .catch((err) => console.error(err));
};

const displayCategories = (categories) => {
  categories.forEach((cat) => {
    const li = document.createElement("li");
    li.id = cat.id;
    li.innerHTML = `
    <a class="btn md:justify-start hover:text-white hover:bg-green-900 w-full" href="#">${cat.category_name}</a>
    `;
    plantsCategories.appendChild(li);
  });
};

plantsCategories.addEventListener("click", (e) => {
  e.preventDefault();
  const clickedLink = e.target.closest("a");
  if (!clickedLink) return;

  loadFruitCategories(clickedLink.parentNode.id);

  plantsCategories.querySelectorAll("a").forEach((link) => {
    link.classList.remove("bg-green-600", "text-white");
  });
  clickedLink.classList.add("bg-green-600", "text-white");
});

const loadFruitCategories = (fruitId) => {
  showSpinner();
  fetch(`https://openapi.programming-hero.com/api/category/${fruitId}`)
    .then((res) => res.json())
    .then((data) => {
      displayFruitCategories(data.plants);
      hideSpinner();
    })
    .catch((err) => {
      console.error(err);
      hideSpinner();
    });
};

const displayFruitCategories = (cards) => {
  fruitsCard.querySelectorAll(".card").forEach((card) => card.remove());

  cards.forEach((card, index) => {
    const modalId = `modal_${index}`;
    const newCard = document.createElement("div");
    newCard.classList.add("card");
    newCard.innerHTML = `
      <div class="card bg-base-100 w-full h-[370px] shadow-md">
        <figure class="h-full w-full overflow-hidden">
          <img class="h-full w-full object-cover" src="${card.image}" />
        </figure>
        <div class="card-body">
          <h2 class="card-title cursor-pointer hover:underline open-modal" data-modal="${modalId}">${card.name}</h2>
          <p class="text-[12px] text-justify overflow-hidden line-clamp-3">${card.description}</p>
          <div class="flex justify-between items-center py-1 w-full">
            <span class="font-bold text-green-500 bg-green-500/30 px-2 rounded-full">${card.category}</span>
            <span class="font-bold">৳<span>${card.price}</span></span>
          </div>
          <div class="card-actions">
            <button class="add-to-cart btn text-white bg-[#15803d] hover:bg-green-900 w-full rounded-full">Add to Cart</button>
          </div>
        </div>
      </div>

      <dialog id="${modalId}" class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <h3 class="text-lg font-bold">${card.name}</h3>
          <figure class="flex justify-center mt-5">
            <img class="h-[350px] w-[400px] rounded-lg" src="${card.image}" />
          </figure>
          <p class="py-4 text-sm">${card.description}</p>
          <div class="flex justify-between items-center py-1 w-full">
            <p class="font-bold text-green-500 bg-green-500/30 px-2 rounded-full">${card.category}</p>
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

    const addToCartBtn = newCard.querySelector(".add-to-cart");
    addToCartBtn.addEventListener("click", () => {
      if (!cartItems.has(card.name)) {
        const newList = document.createElement("div");
        newList.classList.add(
          "flex",
          "justify-between",
          "items-center",
          "py-2",
          "border-b",
          "border-green-700"
        );
        newList.innerHTML = `
          <div>
            <h1 class="font-bold">${card.name}</h1>
            <p class="text-gray-500">৳<span class="item-price">${card.price}</span> x <span class="item-quantity">1</span></p>
          </div>
          <button class="btn hover:bg-green-200 remove-btn">❌</button>
        `;
        addToCard.appendChild(newList);

        cartItems.set(card.name, {
          element: newList,
          price: parseFloat(card.price),
          quantity: 1,
        });

        total += parseFloat(card.price);
        totalPrice.innerText = total;

        const removeBtn = newList.querySelector(".remove-btn");
        removeBtn.addEventListener("click", () => {
          total -=
            cartItems.get(card.name).price * cartItems.get(card.name).quantity;
          totalPrice.innerText = total;
          cartItems.delete(card.name);
          newList.remove();
        });
      } else {
        const cartItem = cartItems.get(card.name);
        cartItem.quantity += 1;
        cartItem.element.querySelector(".item-quantity").innerText =
          cartItem.quantity;

        total += cartItem.price;
        totalPrice.innerText = total;
      }
    });
  });

  const modalTriggers = document.querySelectorAll(".open-modal");
  modalTriggers.forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const modalId = trigger.getAttribute("data-modal");
      const modal = document.getElementById(modalId);
      modal.showModal();
    });
  });
};

loadCategories();
loadAllTrees();
