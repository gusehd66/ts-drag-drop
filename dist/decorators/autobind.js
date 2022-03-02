export function autobind(_, _2, descriptor) {
    const originmalMethod = descriptor.value;
    const adjDescriptor = {
        configurable: true,
        get() {
            const boundFn = originmalMethod.bind(this);
            return boundFn;
        },
    };
    return adjDescriptor;
}
