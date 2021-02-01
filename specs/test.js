describe('shuffleTest', () => {
    it('shouldn\'t change the array length', () => {
        let a = [1, 2, 3, 4, 5];
        shuffle2(a);
        expect(a.length).toEqual(5);
    })
});

describe('rangeTest', () => {
    it('should return [1, 2, 3] for 1 to 4 range', () => {
        expect(range(1, 4)).toEqual([1, 2, 3]);
    })
});

describe('factorialByRangeTest', () => {
    it('should should return 120 for 5', () => {
        expect(factorialByRange(5)).toEqual(120);
    })
});

describe('myMapTest', () => {
    it('shouldn\'t change the array length', () => {
        let arr = [1, 2, 3];
        myMap(dupArr, (x) => x * 2);
        expect(arr.length).toEqual(3);
    });
});

describe('uniqueInOrderTest', () => {
    it("should return ['A','B','C','D','A','B'] for AAAABBBCCDAABBB", () => {
        expect(uniqueInOrder('AAAABBBCCDAABBB')).toEqual(['A', 'B', 'C', 'D', 'A', 'B']);
    });

    it("should return ['A', 'B', 'C', 'c', 'A', 'D'] for ABBCcAD", () => {
        expect(uniqueInOrder('ABBCcAD')).toEqual(['A', 'B', 'C', 'c', 'A', 'D']);
    });

    it("should return [1,2,3] for [1,2,2,3,3]", () => {
        expect(uniqueInOrder([1, 2, 2, 3, 3])).toEqual([1, 2, 3]);
    });
});

describe('persistenceTest', () => {
    it("should return 3 for 39", () => {
        expect(persistence(39)).toEqual(3);
    });

    it("should return 4 for 999", () => {
        expect(persistence(999)).toEqual(4);
    });

    it("should return 0 for 4", () => {
        expect(persistence(4)).toEqual(0);
    });

    it("should return 1 for 22", () => {
        expect(persistence(22)).toEqual(1);
    });
});

describe('countTest', () => {
    it("should return {'a': 2, 'b': 1} for 'aba'", () => {
        expect(count('aba')).toEqual({ 'a': 2, 'b': 1 });
    });

    it("should return {} for ' '", () => {
        expect(count('')).toEqual({});
    });
});

describe('nbMonthsTest', () => {
    it("should return [6, 766] for '2000, 8000, 1000, 1.5", () => {
        expect(nbMonths(2000, 8000, 1000, 1.5)).toEqual([6, 766]);
    });

    it("should return [0, 4000] for '12000, 8000, 1000, 1.5'", () => {
        expect(nbMonths(12000, 8000, 1000, 1.5)).toEqual([0, 4000]);
    });
});

describe('sumDigPow', () => {
    it("should return [1, 2, 3, 4, 5, 6, 7, 8, 9] for (1, 10)", () => {
        expect(sumDigPow(1, 10)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });

    it("should return [1, 2, 3, 4, 5, 6, 7, 8, 9, 89] for (1, 100)", () => {
        expect(sumDigPow(1, 100)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 89]);
    });
});

describe('multiplicationTableTest', () => {
    it('should return [[1,2],[2,4]] for (2,2)', () => {
        expect(multiplicationTable(2, 2)).toEqual([[1, 2], [2, 4]]);
    });

    it('should return [[1,2,3],[2,4,6],[3,6,9]] for (3,3)', () => {
        expect(multiplicationTable(3, 3)).toEqual([[1, 2, 3], [2, 4, 6], [3, 6, 9]]);
    });
});

describe('dirReducTest', () => {
    it('should return ["WEST"] for ["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]', () => {
        expect(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"])).toEqual(["WEST"]);
    });

    it('should return ["NORTH", "WEST", "SOUTH", "EAST"] for ["NORTH", "WEST", "SOUTH", "EAST"]', () => {
        expect(dirReduc(["NORTH", "WEST", "SOUTH", "EAST"])).toEqual(["NORTH", "WEST", "SOUTH", "EAST"]);
    });
});

describe('iqTestTest', () => {
    it('should return 3 for "2 4 7 8 10"', () => {
        expect(iqTest('2 4 7 8 10')).toEqual(3);
    });

    it('should return 2 for "1 2 1 1"', () => {
        expect(iqTest('1 2 1 1')).toEqual(2);
    });
});

// describe('thirtTest', () => {
//     it('should return 79 for 8529', () => {
//         expect(thirt(8529)).toEqual(79);
//     });

//     it('should return 31 for 85299258', () => {
//         expect(thirt(85299258)).toEqual(31);
//     });
// });

// describe("sumPairsTest", () => {
//     it('should return [1, 7] for "[1, 4, 8, 7, 3, 15], 8"', () => {
//         expect(sumPairs([1, 4, 8, 7, 3, 15], 8)).toEqual([1, 7]);
//     });    
// });

describe('stockListTest', () => {
    b = ["ABAR 200", "CDXE 500", "BKWR 250", "BTSQ 890", "DRTY 600"]
    c = ["A", "B"]
    res = "(A : 200) - (B : 1140)"
    it(`should return ${res} for ${b} and ${c}`, () => {
        expect(stockList(b, c)).toEqual(res);
    });
});

describe('waveTest', () => {
    const result = ["Hello", "hEllo", "heLlo", "helLo", "hellO"];
    it('should return ["Hello", "hEllo", "heLlo", "helLo", "hellO"] for "hello"', () => {
        expect(wave('hello')).toEqual(result);
    })
});