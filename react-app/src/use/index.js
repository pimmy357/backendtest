import React, { useState, useEffect } from 'react';

const useRandom = (number) => {
    const [randomArr, setRandomArr] = useState([]);
    
    useEffect(() => {
        let arr = [];
        while(true) {
            let random = Math.floor((Math.random() * number) + 1);
            if (arr.length === 0) {
                arr.push(random);
            } else {
                if (arr.length < 3) {
                    let check = 0;
                    for (let i = 0; i < arr.length; i++) {
                        if (arr[i] === random) {
                            check += 1;
                        }
                    }

                    if (check === 0) {
                        arr.push(random);
                    }
                } else {
                    break;
                }
            }
        }

        setRandomArr(arr);
    }, [number]);

    return [randomArr];
}
const useRandomDrink = (number) => {
    const [randomArr, setRandomArr] = useState([]);
    
    useEffect(() => {
        let arr = [];
        while(true) {
            let random = Math.floor(((Math.random() * number) + 6) + 1);
            if (arr.length === 0) {
                arr.push(random);
            } else {
                if (arr.length < 3) {
                    let check = 0;
                    for (let i = 0; i < arr.length; i++) {
                        if (arr[i] === random) {
                            check += 1;
                        }
                    }

                    if (check === 0) {
                        arr.push(random);
                    }
                } else {
                    break;
                }
            }
        }

        setRandomArr(arr);
    }, [number]);

    return [randomArr];
}
const useRandomMenu = (number) => {
    const [randomArr, setRandomArr] = useState([]);
    
    useEffect(() => {
        let arr = [];
        while(true) {
            let random = Math.floor(((Math.random() * number) + 6) + 1);
            if (arr.length === 0) {
                arr.push(random);
            } else {
                if (arr.length < 3) {
                    let check = 0;
                    for (let i = 0; i < arr.length; i++) {
                        if (arr[i] === random) {
                            check += 1;
                        }
                    }

                    if (check === 0) {
                        arr.push(random);
                    }
                } else {
                    break;
                }
            }
        }

        setRandomArr(arr);
    }, [number]);

    return [randomArr];
}
export { useRandom,useRandomDrink,useRandomMenu };