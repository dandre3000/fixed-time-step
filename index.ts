export interface StepOptions {
    args: any[]
    self: object
}

const stepOptions: StepOptions = {
    args: [],
    self: null
}

export class FixedTimeStep {
    #interval: number
    #elapsedTime = 0
    #callback: (interval: number, ...args) => any[]

    constructor (interval: number, callback: FixedTimeStep['callback']) {
        this.interval = interval
        this.callback = callback
    }

    get interval () { return this.#interval }
    set interval (ms: number) {
        ms = Number(ms)
        if (ms < 1) ms = 1

        this.#interval = ms
    }

    get callback () { return this.#callback }
    set callback (callback: (interval: number, ...args) => any[]) {
        if (typeof callback !== 'function')
            throw new TypeError(`callback argument (${Object.prototype.toString.call(callback)}) is not a function.`)

        this.#callback = callback
    }

    step (time: number, options: StepOptions = stepOptions) {
        const interval = this.#interval
        const callback = this.#callback

        this.#elapsedTime += time

        while (this.#elapsedTime > this.#interval) {
            this.#elapsedTime -= this.#interval

            callback.call(options.self, interval, ...(options.args || []))
        }

        return this.#elapsedTime
    }
}