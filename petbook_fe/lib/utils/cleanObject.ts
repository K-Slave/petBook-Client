export default function cleanObject(obj: any) {
  // 입력 받은 객체를 변경시키기 않기 위해 새 객체로 복사
  const getNewObj = { ...obj };

  // 객체의 키값을 배열로 모두 획득
  const propNames = Object.keys(obj);

  // 획득한 키값을 순회하며 객체에 조회 시켜, value 가 falsy 한 값일 경우 그 프로퍼티를 삭제함
  for (const prop of propNames) {
    if (!getNewObj[prop]) {
      delete getNewObj[prop];
    }
  }

  // 삭제한 새 객체를 리턴
  return getNewObj;
}
