---
title: Unit Test Using Jest
slug: jest
coverImage: /images/posts/blog-posts.jpg
date: 2021-05-30T21:55:15.361Z
excerpt:
tags:
---
## Unit Test Using Jest

>Recently, I make a package about poker ruler logic from the project in the series articles which is writing. I need to check the correction of each poker rule when I change the code involved. So I add Jest to have a auto unit test.

1. Install packages, for js, only jest is nessary below.

<code>npm i -D jest ts-jest @types/jest</code>
2. Jest config in package.json

```
//package.json

"jest": {
    "moduleFileExtensions": [
      "ts","js"
    ],
    "transform": {
      "\\.(ts|tsx)$": "<rootDir>/node_modules/ts-jest/preprocessor.js"
    },
    "testRegex": "/__tests__/.*\\.(ts)$"
  }
```

3.Make a directory named "__test__", and make a file suffix with "_spec".
```
src
···
├── __tests__
│   └── ruler_spec.ts
···
```

4.Write test code in ruler_spec.ts

```
import { E_TYPE } from "../Config";
import {Ruler} from "../Ruler";

var ruler = new Ruler();

describe('type-check', () => {
    it('DOUBLE_JOKER', () => {
        expect(ruler.checkCardType([0x4e, 0x4f])).toBe(E_TYPE.DOUBLE_JOKER);
    })
    it('QUADRUPLE', () => {
        expect(ruler.checkCardType([0x02, 0x02, 0x02, 0x02])).toBe(E_TYPE.QUADRUPLE);
    })
    it('SINGLE', () => {
        expect(ruler.checkCardType([0x02])).toBe(E_TYPE.SINGLE);
    })
    it('QUADRUPLE_TAKE_TWO_DOUBLE', () => {
        expect(
            ruler.checkCardType([0x03, 0x03, 0x03, 0x03, 0x04, 0x04, 0x05, 0x05])
        ).toBe(E_TYPE.QUADRUPLE_TAKE_TWO_DOUBLE);
    });
    it('QUADRUPLE_TAKE_TWO_SINGLE', () => {
        expect(
            ruler.checkCardType([0x03, 0x03, 0x03, 0x03, 0x04, 0x05])
        ).toBe(E_TYPE.QUADRUPLE_TAKE_TWO_SINGLE);
    });
})

describe('can-defeat', () => {
    it('DOUBLE_JOKER vs SINGLE', () => {
        expect(ruler.canDefeat([0x4e, 0x4f], [0x01], E_TYPE.SINGLE).can).toBe(true);
    })
})

```

Code structure like below is nessary:

```
describe("desc-title",()=>{
      it("unit-desc-name",()=>{
          expect(function-you-want).toBe(res-you-want)
    })
})
```

If you get stuck, you can check [the repo](https://github.com/lizhiyu-me/chinese-poker) anytime.

Thanks for your reading.

Have a good day.




