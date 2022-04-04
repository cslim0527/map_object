console.log('<-- Object -->')

/*
*  선언 방식과 속성 접근
*/

let userObj = {}
userObj.name = 'LIMCHANSOO';
userObj.email = 'cslim0527@gmail.com';
userObj.phone = '01012341234';

console.log('기존의 Object 객체: ', userObj)
console.log('Object 객체 속성 접근: ', userObj.name)

console.log('<-- Map -->')

let userMap = new Map();
userMap.set('name', 'LIMCHANSOO')
userMap.set('email', 'cslim0527@gmail.com')
userMap.set('phone', '01012341234')

console.log('Map 객체: ', userMap)
console.log('Map 객체 속성 접근: ', userMap.get('name'))

/*
* 기존 Object와 Map의 차이점
*
* Object
* 1. key값으로 숫자나 계산된 값을 넣어야 할때 대괄호를 사용해야 한다.
* 2. iterable 하지 않다.
*
* Map
* 1. [key, value] 쌍으로 이루어진 요소들의 집합이다.
* 2. set 메서드를 통해 모든 데이터 값을 key값으로 사용 할 수 있으며, 같은 문법으로 일관성있는 코드 작성이 가능하다.
* 3. key값을 문자열로 취급하지 않는다.
* 3. iterable 하다.
*/

// Object
userObj[1] = 'key;'

const computedKey = keyGen();
userObj[computedKey] = 'key';

// Map
userMap.set(1, 'key');

const computedKey = keyGen();
userMap.set(computedKey, 'key');

/*
*  데이터 다루기
*/

const guestArr = [
  { name: 'A', city: 'Seoul' },
  { name: 'B', city: 'Jeju' },
  { name: 'C', city: 'Busan' },
  { name: 'D', city: 'Daegu' },
  { name: 'E', city: 'Seoul' },
  { name: 'F', city: 'Busan' },
  { name: 'G', city: 'Busan' },
  { name: 'H', city: 'Seoul' },
  { name: 'I', city: 'Jeju' },
  { name: 'J', city: 'Seoul' },
  { name: 'K', city: 'Daegu' },
]

// 지역별로 데이터 가공하기

// Object
const objGuest = {};
guestArr.forEach(item => {
  if (!objGuest[item.city]) {
    // 속성이 존재하는지 여부를 묻는 조건문에서 명확하지 않은 결과를 얻을 수 있다. => 0 이 value로 나왔을 경우.. 등등
    objGuest[item.city] = [];
  }

  objGuest[item.city].push(item)
})

console.log(objGuest)

// Map
const mapGuest = new Map();
guestArr.forEach(item => {
  if (!mapGuest.has(item.city)) {
    // 속성이 존재하는지 true/false로 명확하게 조건을 탐색하여 훨씬 안전하다.
    mapGuest.set(item.city, []);
  }

  mapGuest.get(item.city).push(item)
})

console.log([...mapGuest][0])


/*
* 실제 속도면에서도 Object를 다루는 연산보다 Map을 다루는 연산이 빠르다.
* */
