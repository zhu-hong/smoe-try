// type A = Record<>
// type A = Partial<> // 部分类型
// type A = Required<>
// type A = Readonly<>
// type A = Pick<> // 挑选一些key
// type A = Omit<> // 忽略一些key
// Exclude // 基本类型
// Extract // 基本类型
// ReturnType

// type User = {
//   name?: string,
//   age?: number,
//   gender?: '男' | '女',
// }

// type A = Omit<Required<User>, 'name'>