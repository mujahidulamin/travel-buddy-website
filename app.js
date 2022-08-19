var carObject = {
  vehicle: "Car",
  imageUrl:
    "https://images.unsplash.com/photo-1494905998402-395d579af36f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2FyfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  farePerKilo: 3,
  capacity: 4,
  description:
    "This is a marvelous car",
};
var bikeObject = {
  vehicle: "Bike",
  imageUrl:
    "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmlrZXxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60",
  farePerKilo: 2,
  capacity: 2,
  description:
    "This is a well fashioned amazing bike",
};
var busObject = {
  vehicle: "Bus",
  imageUrl:
    "https://images.unsplash.com/photo-1464219789935-c2d9d9aba644?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YnVzfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  farePerKilo: 3,
  capacity: 30,
  description:
    "This is a well fashioned amazine american beautiful bus",
};

const servicesArray = [bikeObject, carObject, busObject]

function displayServices(service) {
  const mainSection = document.getElementById("main-section");
  const stringifiedObj = JSON.stringify(service);
  const div = document.createElement("div");

  div.innerHTML = `
     <div class="card mt-3  mx-auto" style="max-width: 800px;">
          <div class="row g-0">
            <div class="col-md-4">
              <img src=${service.imageUrl} class="img-fluid rounded-start h-100" alt="...">
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">Transport Mood ${service.vehicle}</h5>
                <p class="card-text">${service.description}</p>
                <p class="card-text"><small class="text-muted">Fare per kilo ${service.farePerKilo}</small> <small class="text-muted">Capacity ${service.capacity}</small></p>
                <!-- Button trigger modal -->
          <button type="button" class="btn btn-primary" data-bs-toggle="modal" onclick='handleBooking(${stringifiedObj})' data-bs-target="#exampleModal">
                Book Now
          </button>
              </div>
            </div>
          </div>
  </div>
  `
  mainSection.appendChild(div);
}
function displayAllArticles(arr) {
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    displayServices(element);
  }
}
displayAllArticles(servicesArray)

// handle booking info
function handleBooking(obj) {
  const modalBody = document.getElementById("modal-body");
  const stringifiedObj = JSON.stringify(obj);
  modalBody.innerHTML = `
      <div class="card mx-auto" style="width: 28rem;">
    <img src=${obj.imageUrl} class="card-img-topw " alt="...">
    <div class="card-body">
      <h5 class="card-title">Vehicle Mood : ${obj.vehicle}</h5>
      <p class="card-text">${obj.description}</p>
      <p class="card-text"><small class="text-muted">Fare per kilo ${obj.farePerKilo}</small> <small class="text-muted">Capacity ${obj.capacity}</small></p>
      <div class="d-flex flex-column" role="search">
       <p>Fare: <small class="text-muted" id="fare"></small > </p>
       <p>Tax: <small class="text-muted" id="tax"></small > </p>
       <p>Total-cost: <small class="text-muted" id="total-cost"></small > </p>
      <input class="form-control me-2 mb-2" id= "distance-input"  type="number" placeholder="How many kilometers to go" aria-label="Search"/>
      <input class="form-control me-2 mb-2" type="number" id= "quantity-input" placeholder="How much vehicle" aria-label="Search"/>
      <button class="btn btn-outline-success" id="search-btn" aria-label="type="submit" onclick='calculateCost(${stringifiedObj})'>submit</button>
    </div>
    </div>
  </div>
      
      `;
}

function calculateCost(obj) {
  console.log(obj);
  const quantity = document.getElementById("quantity-input").value;
  const distance = document.getElementById("distance-input").value;
  const fare = document.getElementById('fare');
  const tax = document.getElementById('tax');
  const totalCost = document.getElementById('total-cost');

  fare.innerHTML = distance * quantity * obj.farePerKilo;
  tax.innerHTML = (distance * quantity * obj.farePerKilo) / 10;
  totalCost.innerHTML = (distance * quantity * obj.farePerKilo) + (distance * quantity * obj.farePerKilo) / 10;
}




document.getElementById("search-btn").addEventListener("click", function () {
  const value = document.getElementById("search-value").value;

  for (let i = 0; i < servicesArray.length; i++) {
    const element = servicesArray[i];
    if (value.toLowerCase()
      == element.vehicle.toLowerCase()) {
      document.getElementById("main-section").innerHTML = ""
      displayServices(element)
      return;
    }

  }
  alert("nothing found with your input")

})


