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
    '21.jpeg',
    '22.jpeg',
    '23.jpeg',
    '24.jpeg',
    '25.jpeg',
    '26.jpeg',
    '27.jpeg',
    '28.jpeg',
    '29.jpeg',
    '30.jpeg',
    '31.jpeg',
    '32.jpeg',
    '33.jpeg',
    '34.jpeg',
    '35.jpeg',
    '36.jpeg',
    '37.jpeg',
    '38.jpeg',
    '39.jpeg',
    '40.jpeg',
]

images_array = [
    '1.png',
    '2.png',
    '3.png',
    '4.png',
    '5.png',
    '6.png',
    '4.png',
    '7.png',
    '8.png',
    '9.png',
    '11.png',
    '12.png',
    '13.png',
    '14.png',
    '15.png',
    '16.png',
    '17.png',
    '18.png',
    '19.png',
    '20.png',
    '21.png',
    '22.png',
    '23.png',
    '24.png',
    '25.png',
    '26.png',
    '27.png',
    '28.png',
    '29.png',
    '30.png',
    '31.png',
    '32.png',
    '33.png',
    '34.png',
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