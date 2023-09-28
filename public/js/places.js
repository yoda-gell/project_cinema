window.alert('index.js')
const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const places = document.getElementById('places');
const payBtn = document.getElementById('payBtn')

let ticketPrice = 40;
const placesSelected = []


//Update total and count
function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll('.row .seat.selected');
  const selectedSeatsCount = selectedSeats.length;
  count.innerText = selectedSeatsCount;
  total.innerText = selectedSeatsCount * ticketPrice;
  places.innerText = placesSelected.length>0?"("+placesSelected+")":placesSelected
}


//Seat click event
container.addEventListener('click', event => {

  if (event.target.classList.contains('seat') &&
     !event.target.classList.contains('occupied')) {
    event.target.classList.toggle('selected');

    if (placesSelected.includes(event.target.id)) {
        const index = placesSelected.indexOf(event.target.id);
        placesSelected.splice(index, 1);
    }
    else{
        placesSelected.push(event.target.id)
    }
  }
  updateSelectedCount();
});


payBtn.addEventListener('click', event=>{
    alert('')
})
function payBtnClick(){
    alert("Thank you for your purchase")
}