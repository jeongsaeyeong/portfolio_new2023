# 개요 
 두 번째로 만든 포트폴리오이다. 기존 GSAP만 사용하여 움직임을 줬으나 이번에는 motion을 사용하여 보다 부드러운 움직임을 주었다.
 Next.js 예제를 React로 바꾸는 과정에서 motion의 기초적인 운용을 배웠다. 

# 본론

## 한 페이지에서 해결하기 
 보통 포트폴리오 하면, GSAP의 ScrollTrigger을 사용해 동적인 효과를 주거나 페이지를 이동해 다른 내용을 담아낸다. 
 다만 나는 변칙구를 주어 페이지 이동 없이 section을 보여주고 감추기로 했다. 
 그렇다면 무엇을 바꿀 것인가? 아마 포트폴리오를 들어가보았다면 알겠지만 구조가 이렇다. 

 1. 각기 다른 다섯 개의 메인 페이지를 만든다.
 2. 한 가지 포트폴리오에 들어가면, 다섯 개 중 번호에 배정된 메인 페이지 컨셉으로 포트폴리오를 보여준다.
 3. 뒤로 가기를 누르면 메인 페이지가 바뀐다.

 하나를 선택했을 때 그 반응이 연쇄적으로 일어나 마치 연결된 애니메이션을 보는 듯한 효과를 주고 싶었다. 

## 어떻게 구현했나 

<details>
  <summary>useState</summary>
  각 애니메이션을 제어할 useState를 만들었다. 

 1. currentSection은 section1의 메인페이지 위치를 관리한다.
 2. currentPort는 section2의 포트폴리오 위치를 관리한다.
 3. color, textcolor,chatcolor 는 각각 변화하는 backGorund나 color을 포트폴리오에 맞게 변경한다.

 특정 이미지나 nav를 눌렀을 때 useState를 사용하여 계속 새로 색 코드를 바꾸고, 메인페이지와 포트폴리오의 className을 넣어줄 수 있다. 
  
</details>

<details>
  <summary>gsap</summary>
 
  1. gsap.set()을 사용하여 기본 상태를 세팅한다. useEffect를 사용해 color가 변경될 때마다 기본 세팅이 된다.
  2. showPort와 showPort01을 분리한 건 애니메이션이 끝나는 걸 확인한 뒤, Port를 보여주기 위해서이다.  
  
</details>


