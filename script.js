$(function () {
  $(".create-pet").click(addPet);

  // open modal
  $("#adopt-button").on("click", function () {
    $("#myModal").fadeIn(200);
  });

  // close modal (X button)
  $(".close").on("click", function () {
    $("#myModal").fadeOut(200);
    $("#modal-inner-content").empty();
  });
});

function Pet(petName) {
  this.name = petName;
  this.weight = 5;
  this.happiness = 5;

  this.clickedTreatButton = function () {
    // Increase pet happiness
    this.happiness += 1;
    // Increase pet weight
    this.weight += 1;
  };

  this.clickedPlayButton = function () {
    // Increase pet happiness
    this.happiness += 1;
    // Decrease pet weight
    this.weight -= 1;
  };

  this.clickedExerciseButton = function () {
    // Decrease pet happiness
    this.happiness -= 1;
    // Decrease pet weight
    this.weight -= 1;
  };
}

function renderPetCard(pet) {
  // HTMl for each pet card
  const card = $(`
    <div class="pet-card">
      <section class="pet-image-container">
        <img
          class="pet-image"
          src="https://cdn.glitch.com/3aa98e05-3216-497c-a251-210ae4713a83%2Fhound.jpg?1541715339220"
        />
      </section>
      <section class="dashboard">
        <div>
          Name: <strong><span class="name">${pet.name}</span></strong>
        </div>
        <div>
          Weight: <strong><span class="weight">${pet.weight}</span> pounds</strong>
        </div>
        <div>
          Happiness:
          <strong><span class="happiness">${pet.happiness}</span> tail wags (per min)</strong>
        </div>
        <div class="button-container">
          <button class="treat-button">Treat</button>
          <button class="play-button">Play</button>
          <button class="exercise-button">Exercise</button>
        </div>
      </section>
    </div>
  `);

  // Adds the pet object to the #pets section in the html
  $("#pets").append(card);

  // Event listener for when treat button is clicked
  card.find(".treat-button").on("click", function () {
    pet.clickedTreatButton();
    card.find(".weight").text(pet.weight);
    card.find(".happiness").text(pet.happiness);
  });

  // Event listener for when play button is clicked
  card.find(".play-button").on("click", function () {
    pet.clickedPlayButton();
    card.find(".weight").text(pet.weight);
    card.find(".happiness").text(pet.happiness);
  });

  // Event listener for when exercise button is clicked
  card.find(".exercise-button").on("click", function () {
    pet.clickedExerciseButton();
    card.find(".weight").text(pet.weight);
    card.find(".happiness").text(pet.happiness);
  });
}

function addPet() {
  var petName = null;
  var petType = null;

  const adoptionForm = $(`
    <form id="adoptionForm">
      <h2>Adoption Form</h2>
      
      <div class="form-name">
        <strong><label for="name">Name:</label></strong>
        <input type="text" id="name" name="name" required>
      </div>

      <div class="pet-choices">
        <button type="button" id="cat" class="pet-button">
          <img src="images/cat.png" alt="Button" style="height:120px;">
        </button>
        <button type="button" id="dog" class="pet-button">
          <img src="images/dog.png" alt="Button" style="height:120px;">
        </button>
        <button type="button" id="horse" class="pet-button">
          <img src="images/horse.png" alt="Button" style="height:120px;">
        </button>
        <button type="button" id="duck" class="pet-button">
          <img src="images/duck.png" alt="Button" style="height:120px;">
        </button>
      </div>
      <button type="submit" class="create-pet">Adopt</button>
    </form>
  `);

  $("#modal-inner-content").append(adoptionForm);

  adoptionForm.find("#cat").on("click", function () {
    petType = "cat";
  });

  adoptionForm.find("#dog").on("click", function () {
    petType = "dog";
  });

  adoptionForm.find("#horse").on("click", function () {
    petType = "horse";
  });

  adoptionForm.find("#duck").on("click", function () {
    petType = "duck";
  });

  adoptionForm.on("submit", function () {
    petName = $("#name").val();

    let pet = new Pet(petName);
    renderPetCard(pet);
    $("#myModal").fadeOut(200);
    $("#modal-inner-content").empty();
  });
}
