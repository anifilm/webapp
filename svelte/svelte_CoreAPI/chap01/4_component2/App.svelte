<script>
  import Fruits from './Fruits.svelte'

  let fruits = ['Apple', 'Banana', 'Cherry', 'Orange', 'Mango']
</script>

<!-- <Fruits f={fruits} /> f와 fruits의 이름이 같다면 {fruits}로 앞의 변수를 생략 가능 -->
<!-- 이것은 컴포넌트 객체이다. -->
<Fruits {fruits} />
<Fruits {fruits} reverse={true}/>
<Fruits {fruits} slice="-2" />   <!-- 배열 요소의 맨 뒤의 요소 2개를 출력 -->
<Fruits {fruits} slice="0, 3" /> <!-- 인덱스 0부터 3이전의 요소까지 출력 -->
