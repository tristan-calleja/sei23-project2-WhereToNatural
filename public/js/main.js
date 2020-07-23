// alert("Js here!");

function removePlaceFromDistrict (value) {
    let position = district.places.indexOf(value);
    let removedItem = district.places.splice(position, 1);
    console.log(removedItem);
};