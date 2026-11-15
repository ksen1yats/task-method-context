import { EventEmitter } from './EventEmitter';

export const obj = {
    count: 0,

    subscribe() {
        this.callback = () => {
            this.count += 1;
        };

        EventEmitter.on('click', this.callback);
    },

    unsubscribe() {
        EventEmitter.off('click', this.callback);
    },
};

export const obj1 = {
    first(...args) {
        this.second(...args.reverse());
    },

    second() {},
};
