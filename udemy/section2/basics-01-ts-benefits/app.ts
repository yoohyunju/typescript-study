// 명시적인 타입 지정은 좋은 방식이 아니다.
// const person: {
//   name: string;
//   age: number;
// } 

const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
} = {
  name: "Maximilian",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  role: [2, "author"],
};

person.role.push('admin');
// person.role[1] = 10;

let favoriteActivities: string[];
favoriteActivities = ['Sports'];

console.log(person.name);

for(const hobby of person.hobbies) {
  console.log(hobby.toUpperCase()); // 문자열 타입을 추론하여 인식
  // console.log(hobby.map()); // 문자열 타입에는 map을 사용할 수 없어서 에러 발생
}