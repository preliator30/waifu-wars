image_array = [
    '1.jpg',
    '2.jpg',
    '3.jpg',
    '4.jpg'
]

images_array = [
    '1.png',
]

function get_random_image() {
    random_index = Math.floor(Math.random() * image_array.length);

    selected_image = image_array[random_index];

    document.getElementById('image_shower').src = `./images/jpeg/${selected_image}`
}

function get_image() {
    random_index = Math.floor(Math.random() * images_array.length);

    selected_image = images_array[random_index];

    document.getElementById('image_tap').src = `./images/png/${selected_image}`
}