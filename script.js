// global scoped items

const books = [
    {
        title: 'The Unbearable Lightness of Being',
        author: 'Ismail Kadare',
        format: 'printed',
        rating: 'good'
    },
    {
        title: 'La Peste',
        author: 'Albert Camus',
        format: 'printed',
        rating: 'good'
    },
    {
        title: 'Le Camino Seule, enfin presque',
        author: 'Cam Dewoods',
        format: 'kindle',
        rating: 'good'
    },
    {
        title: 'Last Book to Woodstock',
        author: 'Colin Dexter',
        format: 'audible',
        rating: 'good'
    }
]

const screamBooks = () => {
    // global variable books available
    console.log(books);

    books.map((book) => {
        if (book.format === 'audible') {
            // block-scoped format
            let format = book.format;
            console.log(`'${book.title}', is an ${book.format} book!`);
        }
        if (book.format === 'kindle') {
            // block-scoped format
            let format = book.format;
            console.log(`'${book.title}', is a ${book.format} book!`);
        }

        // console.log(format);
    })
}
