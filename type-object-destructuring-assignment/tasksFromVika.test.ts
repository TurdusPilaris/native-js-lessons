test("prime number", () => {

    const isPrime = ((number:number) => {
        for(let i=2; i<number; i++){
            if(number%i===0){return false}
        }
        return number===1?true:number>1
    })
    expect(isPrime(1)).toBe(true);
    expect(isPrime(0)).toBe(false);
    expect(isPrime(17)).toBe(true);
    expect(isPrime(100)).toBe(false);
})

test("factorial", () => {

    const factorial = ((number:number) => {
        let counter = 1;
        for(let i=1; i<=number; i++){
            counter = counter * i
        }
        return number===0?1:counter
    })
    expect(factorial(1)).toBe(1);
    expect(factorial(0)).toBe(1);
    expect(factorial(6)).toBe(720);

})

test("fibonachy", () => {


    const fib = ((course:number) => {
        let arrFib:number[] = [];
         for(let i=0; i<=course; i++){
             if(i ===0){
                 arrFib.push(0);
             }else if(i===1){
                 arrFib.push(1);
             } else {
                 arrFib.push(arrFib[i-1]+arrFib[i-2])

             }
         }

        return arrFib[course]
    })
    expect(fib(0)).toBe(0);
    expect(fib(1)).toBe(1);
    expect(fib(10)).toBe(55);
    expect(fib(20)).toBe(6765);

})

test("is sorted", () => {


    const isSorted = (array: number[]) => {

        return array.toString() === [...array].sort((a,b) => a -b).toString()

    }
     expect(isSorted([])).toBe(true);
     expect(isSorted([-Infinity, -5, 0, 3, 9])).toBe(true);
     expect(isSorted([3, 9, -3, 10])).toBe(false);

})

test("reverse without reverse()", () => {


    const reverseString = (stringForReverse:string) => {

        let arrayString = stringForReverse.split('');
        let newArr:string[] = []
        for (let i = arrayString.length; i != 0; i--) {
            newArr.push(arrayString[i-1]);
        }
        return newArr.join("")

    }
    expect(reverseString('')).toBe('');
    expect(reverseString('abcdef')).toBe('fedcba');


})

test("is Palindrome", () => {


    const isPalindrome = (stringForReverse:string) => {

        let reverseStr = stringForReverse.toLocaleLowerCase().split('').reverse().join("");

        return reverseStr.replace(/\s/g, '')===stringForReverse.replace(/\s/g, '').toLocaleLowerCase()

    }
    expect(isPalindrome('')).toBe(true);
    expect(isPalindrome('abcdcba')).toBe(true);
    expect(isPalindrome('abcd')).toBe(false);
    expect(isPalindrome('A man a plan a canal Panama')).toBe(true);


})

test("is Palindrome", () => {


    const isPalindrome = (stringForReverse:string) => {

        let reverseStr = stringForReverse.toLocaleLowerCase().split('').reverse().join("");

        return reverseStr.replace(/\s/g, '')===stringForReverse.replace(/\s/g, '').toLocaleLowerCase()

    }
    expect(isPalindrome('')).toBe(true);
    expect(isPalindrome('abcdcba')).toBe(true);
    expect(isPalindrome('abcd')).toBe(false);
    expect(isPalindrome('A man a plan a canal Panama')).toBe(true);


})