// Global Constant & Arrays of Objects (Unit IV)
const GALLERY_EMAIL = "snehaghosh3277@gmail.com";

let artworks = [
  {
    title: "The Starry Night",
    artist: "Vincent van Gogh",
    bio: "Dutch Post-Impressionist painter famous for expressive brushwork and bold night skies.",
    medium: "Oil on Canvas",
    price: " 1.1M",
    space: "Hall B - Modern Loft",
    exhibition: "Masters of Light & Emotion",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg?width=500"
  },
  {
    title: "The Last Supper",
    artist: "Leonardo da Vinci",
    bio: "Italian High Renaissance master known for lifelike perspective and storytelling.",
    medium: "Tempera & Mural",
    price: " 1.66M",
    space: "Hall A - Main Wing",
    exhibition: "Renaissance Classics 2026",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/The_Last_Supper_-_Leonardo_Da_Vinci_-_High_Resolution_32x16.jpg?width=500"
  },
  {
    title: "Mona Lisa",
    artist: "Leonardo da Vinci",
    bio: "Renowned Renaissance artist celebrated for subtle shading and realistic portraits.",
    medium: "Oil on Poplar Panel",
    price: "Price Less",
    space: "Hall A - Main Wing",
    exhibition: "Renaissance Classics 2026",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Mona_Lisa,_by_Leonardo_da_Vinci,_from_C2RMF_retouched.jpg?width=500"
  },
  {
    title: "Girl with a Pearl Earring",
    artist: "Johannes Vermeer",
    bio: "Dutch Golden Age painter admired for soft indoor lighting and calm portraits.",
    medium: "Oil on Canvas",
    price: "1.1M",
    space: "Hall C - Heritage Room",
    exhibition: "Timeless Portraits & Prints",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/1665_Girl_with_a_Pearl_Earring.jpg?width=500"
  },
  {
    title: "The Scream",
    artist: "Edvard Munch",
    bio: "Norwegian Expressionist artist exploring intense human emotion and color.",
    medium: "Tempera & Pastel",
    price: "2.7M",
    space: "Hall B - Modern Loft",
    exhibition: "Masters of Light & Emotion",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Edvard_Munch,_1893,_The_Scream,_oil,_tempera_and_pastel_on_cardboard,_91_x_73_cm,_National_Gallery_of_Norway.jpg?width=500"
  },
  {
    title: "The Great Wave off Kanagawa",
    artist: "Katsushika Hokusai",
    bio: "Japanese ukiyo-e master famous for dramatic ocean waves and Mount Fuji views.",
    medium: "Woodblock Print",
    price: "Price Less",
    space: "Hall C - Heritage Room",
    exhibition: "Timeless Portraits & Prints",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/The_Great_Wave_off_Kanagawa.jpg?width=500"
  }
];

let exhibitions = [
  { title: "Renaissance Classics 2026", space: "Hall A - Main Wing", date: "2026-12-01" },
  { title: "Masters of Light & Emotion", space: "Hall B - Modern Loft", date: "2026-12-10" },
  { title: "Timeless Portraits & Prints", space: "Hall C - Heritage Room", date: "2026-12-18" }
];

// 1. Display Exhibition Catalogue Cards
function displayArtworks(list) {
  let grid = document.getElementById("catalogueGrid");
  let html = "";

  if (list.length === 0) {
    grid.innerHTML = "<p>No artworks available.</p>";
    return;
  }

  for (let i = 0; i < list.length; i++) {
    let art = list[i];
    let fallback = "https://picsum.photos/seed/painting" + i + "/400/250";

    html += "<article class='art-card'>";
    html += "<img src='" + art.image + "' alt='" + art.title + "' onerror=\"this.src='" + fallback + "'\">";
    html += "<h3>" + art.title + "</h3>";
    html += "<p><strong>Artist:</strong> " + art.artist + "</p>";
    html += "<p><strong>Medium:</strong> " + art.medium + "</p>";
    html += "<p><strong>Space:</strong> " + art.space + "</p>";
    html += "<p class='price-tag'>Price: Rs. " + art.price + "</p>";
    html += "</article>";
  }
  grid.innerHTML = html;
}

// 2. Display Artist Records (with Remove Button) & Artist Assignments
function displayTables() {
  let recordBody = document.getElementById("artistRecordBody");
  let assignBody = document.getElementById("assignmentBody");
  let recordRows = "";
  let assignRows = "";

  if (artworks.length === 0) {
    recordBody.innerHTML = "<tr><td colspan='4'>No artist records available.</td></tr>";
    assignBody.innerHTML = "<tr><td colspan='4'>No artist assignments available.</td></tr>";
    return;
  }

  for (let i = 0; i < artworks.length; i++) {
    let item = artworks[i];
    recordRows += "<tr>";
    recordRows += "<td>" + item.artist + "</td>";
    recordRows += "<td>" + item.bio + "</td>";
    recordRows += "<td>" + item.title + "</td>";
    recordRows += "<td><button class='remove-btn' onclick='removeArtistRecord(" + i + ")'>Remove</button></td>";
    recordRows += "</tr>";

    assignRows += "<tr>";
    assignRows += "<td>" + item.artist + "</td>";
    assignRows += "<td>" + item.title + "</td>";
    assignRows += "<td>" + item.exhibition + "</td>";
    assignRows += "<td>" + item.space + "</td>";
    assignRows += "</tr>";
  }

  recordBody.innerHTML = recordRows;
  assignBody.innerHTML = assignRows;
}

// 3. Remove Artist Record using Array splice()
function removeArtistRecord(index) {
  artworks.splice(index, 1);
  displayArtworks(artworks);
  displayTables();
}

// 4. Display Scheduled Exhibitions (with Remove Button)
function displayExhibitions() {
  let listEl = document.getElementById("exhibitionList");
  let items = "";

  if (exhibitions.length === 0) {
    listEl.innerHTML = "<li>No scheduled exhibitions.</li>";
    return;
  }

  for (let i = 0; i < exhibitions.length; i++) {
    let ex = exhibitions[i];
    items += "<li><strong>" + ex.title + "</strong> — " + ex.space + " (Starts: " + ex.date + ") ";
    items += "<button class='remove-btn' onclick='removeExhibition(" + i + ")'>Remove</button></li>";
  }
  listEl.innerHTML = items;
}

// 5. Remove Scheduled Exhibition using Array splice()
function removeExhibition(index) {
  exhibitions.splice(index, 1);
  displayExhibitions();
}

// 6. Search Artwork (String Methods & Conditionals)
function searchArtwork() {
  let query = document.getElementById("searchInput").value.trim().toLowerCase();
  let filtered = [];

  for (let i = 0; i < artworks.length; i++) {
    let titleMatch = artworks[i].title.toLowerCase().includes(query);
    let artistMatch = artworks[i].artist.toLowerCase().includes(query);

    if (titleMatch || artistMatch) {
      filtered.push(artworks[i]);
    }
  }
  displayArtworks(filtered);
}

// 7. Add Artist Profile & New Painting
function addArtistArtwork(event) {
  event.preventDefault();

  let name = document.getElementById("artistName").value.trim();
  let bio = document.getElementById("artistBio").value.trim();
  let title = document.getElementById("artTitle").value.trim();
  let medium = document.getElementById("artMedium").value;
  let price = Number(document.getElementById("artPrice").value);
  let space = document.getElementById("artSpace").value;
  let imageUrl = document.getElementById("artImage").value.trim();

  if (imageUrl === "") {
    imageUrl = "https://picsum.photos/seed/newart" + (artworks.length + 1) + "/400/250";
  }

  let newArtwork = {
    title: title,
    artist: name,
    bio: bio,
    medium: medium,
    price: price,
    space: space,
    exhibition: "Open Gallery Showcase",
    image: imageUrl
  };

  artworks.push(newArtwork);
  displayArtworks(artworks);
  displayTables();

  document.getElementById("artworkMsg").innerHTML = "Painting '" + title + "' by " + name + " added successfully!";
  document.getElementById("artworkForm").reset();
}

// 8. Create New Exhibition
function createExhibition(event) {
  event.preventDefault();

  let title = document.getElementById("exhTitle").value.trim();
  let space = document.getElementById("exhSpace").value;
  let date = document.getElementById("exhDate").value;

  let newExh = { title: title, space: space, date: date };
  exhibitions.push(newExh);
  displayExhibitions();

  document.getElementById("exhMsg").innerHTML = "Exhibition '" + title + "' created for " + space + "!";
  document.getElementById("exhibitionForm").reset();
}

// 9. Submit Art Enquiry
function submitEnquiry(event) {
  event.preventDefault();

  let visitor = document.getElementById("enqName").value.trim();
  let email = document.getElementById("enqEmail").value.trim();
  let art = document.getElementById("enqArt").value.trim();

  if (email.includes("@")) {
    document.getElementById("enqMsg").innerHTML =
      "Thank you, " + visitor + "! Your enquiry for '" + art + "' has been noted for " + GALLERY_EMAIL + ".";
    document.getElementById("enquiryForm").reset();
  } else {
    document.getElementById("enqMsg").innerHTML = "Please enter a valid email address.";
  }
}

// Load initial data when page opens
displayArtworks(artworks);
displayTables();
displayExhibitions();