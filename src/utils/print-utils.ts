export function prettyPrint(repeatChar: string, length: number,
    title: string,output: any) {
    console.log(repeatChar.repeat(length));
    const titleLength = title.length;
    if (titleLength < length) {
        const x = Math.floor((length-titleLength-2)/2);
        console.log(repeatChar.repeat(x),title,repeatChar.repeat(x));
    } else {
        console.log(title.toUpperCase());
    }
    console.log(repeatChar.repeat(length));
    console.log('Output : \n',output)
}