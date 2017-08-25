
//****** WORKS BUT MISSES THE POINT lol
    // let cheer = ['J', 'O', 'H', 'N', 'D', 'O', 'E'];
    // let [a, b, c, d, e, f, g] = cheer;

    // console.log('Give me a', a, '!');
    // console.log('Give me an', b, '!');
    // console.log('Give me an', c, '!');
    // console.log('Give me an', d, '!');
    // console.log('Give me a', e, '!');
    // console.log('Give me an', f, '!');
    // console.log('Give me an', g, '!');

    // let name = ['JOHNDOE!'];
    // console.log('What does that spell?');
    // console.log(name[0]);

// ***** FOR OF LOOP
    let cheer = 'JOHNDOE';

    for (let value of cheer) {
        if (value === 'J'){
            value += '!';
            console.log('Give me a', value);
        } else {
            value += '!';
            console.log('Give me an', value);
        };
    };

    console.log(`What does that spell? ${cheer}!`);

// ****** NOT EXERCISE JUST PLAYIN'
    // const name = {
    //     first: 'John',
    //     last: 'Doe'
    // };

    // let { first } = name;
    // let { last } = name;

    // let cheer = ( {first, last}) => {
    //     console.log(`Hi ${first} ${last}!`);
    // }

    // cheer(name);