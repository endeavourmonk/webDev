const movies = [
  "gadar2.jpeg",
  "omg2.jpeg",
  "thePlaylist.jpeg",
  "MiddleClassMelody.jpg",
  "extraction2.jpeg",
];

const image = document.getElementById("source-image");
const contentContainer = document.querySelector(".content-container");

// Create a canvas element to work with
const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");

// Load the image and extract colors
image.onload = () => {
  canvas.width = image.width;
  canvas.height = image.height;
  ctx.drawImage(image, 0, 0, image.width, image.height);

  // Get color data from a specific pixel (e.g., top-left corner)
  const pixelData = ctx.getImageData(0, 0, 1, 1).data;

  // Extract RGB values from the pixel data
  const [r, g, b] = pixelData;

  // Set the background color of the content container using the extracted color
  contentContainer.style.backgroundColor = `rgb(${r},${g},${b})`;
};

// Load the image
image.src = "myimg.png";

const movieSelect = document.getElementById("movie-select");

const options = movies.map(
  (movie) => `<option value=${movie}>${movie.split(".")[0]}</option>`
);
console.log(options);
movieSelect.innerHTML = options;

movieSelect.addEventListener("change", () => {
  const selectedMovie = movieSelect.value;
  console.log("selected: ", selectedMovie);
  if (selectedMovie !== "") {
    image.src = `Images/${selectedMovie}`;
  }
});
