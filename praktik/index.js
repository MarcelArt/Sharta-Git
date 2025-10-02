const main = () => {
    const hello = "hello";
    console.log(`${hello} world`);

    const a = 5;
    const b = 10;
    console.log(a, b);
    [b, a] = [a, b];
    console.log(a, b);
}

main();