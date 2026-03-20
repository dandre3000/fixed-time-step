# fixed-time-step

Call a function on a fixed interval over a variable timespan.

## Installation

npm i @dandre3000/fixed-time-step

## Usage

```js
import { FixedTimeStep } from '@dandre3000/fixed-time-step'

const fts = new FixedTimeStep(1000 / 60, (t, ...args) => {
    console.log(t, elapsedTime, i, ...args) // 1000 / 60, ...

    elapsedTime += t
    i++
})

let time = performance.now()
let elapsedTime = 0
let i = 0

setInterval(() => {
    const dt = performance.now() - time

    fts.step(dt, { args: ['YOOO'] })
    time = performance.now()
})
```

## Exports

<h4>
    interface StepOptions {<br/>
        &emsp;args: boolean<br/>
        &emsp;self: boolean<br/>
    }
</h4>

### Class FixedTimeStep

#### constructor (interval: number, callback: (...args: any[]) => void)

### Instance

#### interval: number

#### callback: (...args: any[]) => void

#### step (time: number, options?: StepOptions) => number

## License

[MIT](https://github.com/dandre3000/async-keyboard-pointer/blob/main/LICENSE)
