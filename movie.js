const addToWatchlist = document.querySelectorAll(".icon-arrows-circle-plus");
const noOfMoviesInWatchlist = document.querySelector(".icon-2__text");
const popupPage = document.querySelector(".watchlist-popup");
const playIcon = document.querySelector(".icon");
const expandPopupPageIcon = document.querySelector(".watchlist-popup__expand");
const shrinkPopupPageIcon = document.querySelector(".watchlist-popup__shrink");

const showPopupPage = () => {
  popupPage.style.display = "block";
};
const cancelPopupPage = () => {
  popupPage.style.display = "none";
};
const expandPopupPage = () => {
  expandPopupPageIcon.style.display = "none";
  shrinkPopupPageIcon.style.display = "block";
  popupPage.style.width = "80%";
};
const shrinkPopupPage = () => {
  expandPopupPageIcon.style.display = "block";
  shrinkPopupPageIcon.style.display = "none";
  popupPage.style.width = "30%";
};
playIcon.addEventListener("click", showPopupPage);
let nums = [];
const watchlistAlert = () => {
  nums.push(1);
  const finalVal = nums.reduce((prevVal, curVal) => {
    return prevVal + curVal;
  }, 0);
  noOfMoviesInWatchlist.textContent = finalVal;
  // noOfMoviesInWatchlist.textContent += '+1'
  // eval(noOfMoviesInWatchlist.textContent)
};

const popupPageFunctionality = () => {
  const cancelPopupPageIcon = document.querySelector(
    ".watchlist-popup__cancel"
  );
  cancelPopupPageIcon.addEventListener("click", cancelPopupPage);
  expandPopupPageIcon.addEventListener("click", expandPopupPage);
  shrinkPopupPageIcon.addEventListener("click", shrinkPopupPage);
};


class MovieList {
  constructor(name, imgUrl) {
    this.name = name;
    this.imageUrl = imgUrl;
  }
}
const movieList = [
  new MovieList("Black mirror", "black_mirror.jpg"),
  new MovieList("Breakin Bad", "breaking_bad.jpg"),
  new MovieList("Daredevil", "dare_devil.jpg"),
  new MovieList("Game of thrones", "game_of_thrones.jpg"),
  new MovieList("Prison Break", "prison_break.jpg"),
  new MovieList("stranger things", "stranger_things.jpg"),
];
const cancellingPopupPgeFunctionality = () => {
  const cancelWatchlist = document.querySelectorAll(".watchlist-remove");
  console.log(cancelWatchlist);
  for (let i = 0; i < cancelWatchlist.length; i++) {
    cancelWatchlist[i].addEventListener("click", () => {
      const watchlistList = cancelWatchlist[i].parentNode;
      watchlistList.style.display = "none";
      console.log(nums);
      // noOfMoviesInWatchlist.textContent += "-1"
      eval(noOfMoviesInWatchlist.textContent)
    });
    
  }
};

const rendering = () => {
  for (let i = 0; i < addToWatchlist.length; i++) {
    addToWatchlist[i].addEventListener("click", () => {
      const list = document.querySelector(".list");
      const watchlist = document.createElement("li");
      watchlist.className = "watchlist-popup__list";
      watchlist.innerHTML = `
    <img class="watchlist-popup__images" src="img/${movieList[i].imageUrl}" alt="black_mirror">
    <p class="watchlist-popup__description">${movieList[i].name}</p>
    <a href="#" class="watchlist-remove">&times;</a>
    <div class="watchlist-popup__play-icon"></div>  
    `;
      list.append(watchlist);
      cancellingPopupPgeFunctionality()
    });
  }
};
console.log(movieList);
rendering();
const watchlistClick = () => {
  for (const adds of addToWatchlist) {
    adds.addEventListener("click", watchlistAlert);
  }
};
popupPageFunctionality();
watchlistClick();
