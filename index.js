image_array = [
    '1.jpeg',
    '2.jpeg',
    '3.jpeg',
    '4.jpeg',
    '5.jpeg',
    '6.jpeg',
    '4.jpeg',
    '7.jpeg',
    '8.jpeg',
    '9.jpeg',
    '11.jpeg',
    '12.jpeg',
    '13.jpeg',
    '14.jpeg',
    '15.jpeg',
    '16.jpeg',
    '17.jpeg',
    '18.jpeg',
    '19.jpeg',
    '20.jpeg',
    '21.jpeg'
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