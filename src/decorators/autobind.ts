// 바인드 데코레이터
export function autobind(_: any, _2: string, descriptor: PropertyDescriptor) {
  const originmalMethod = descriptor.value;
  const adjDescriptor: PropertyDescriptor = {
    configurable: true,
    get() {
      const boundFn = originmalMethod.bind(this);
      return boundFn;
    },
  };
  return adjDescriptor;
}
