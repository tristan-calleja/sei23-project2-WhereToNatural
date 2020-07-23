// alert("Js here!");

function removePlaceFromDistrict () {
    let value = document.getElementById('inputDistrictPlaces').value;
    let position = district.places.indexOf(value);
    let removedItem = district.places.splice(position, 1);
    console.log(removedItem);
};