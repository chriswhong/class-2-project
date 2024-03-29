$('.card').on('click', function () {
    var position = parseInt($(this).data('position'))

    // log the data-position attribute of the card that was clicked.
    console.log(position)


    $('#column-right').empty()

    var artistData = [
      'https://people.com/thmb/FM0c0-njIY8t6hF8V4YmbW8b-o0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(749x0:751x2)/nirvana-660-0269944e1daa401199afb0b9b4a8706e.jpg',

      'https://upload.wikimedia.org/wikipedia/en/2/21/Blink-182_-_Dude_Ranch_cover.jpg',

      "https://upload.wikimedia.org/wikipedia/en/b/ba/Radioheadokcomputer.png",

      "https://t2.genius.com/unsafe/600x600/https%3A%2F%2Fimages.genius.com%2Fc807961087256ae01fa1005527394ec2.1000x1000x1.jpg"
    ]

    // log the image url to sanity check that we are grabbing the correct one based on the card that was clicked.
    console.log(artistData[position])

    $('#column-right').css('background-image', `url('${artistData[position]}')`)

})




