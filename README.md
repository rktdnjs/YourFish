# React 앱 시작하는 법
- yarn
- node.js(정확하지 않음)

위 조건이 전부 주어져 있다면,

`git clone -b react --single-branch https://github.com/rktdnjs/YourFish.git`을 통해 불러옵니다.

이후 받은 파일에서는 노드 모듈이 존재하지 않기 때문에,

`yarn add react-scripts`를 통해 노드 모듈을 설치해주면, 준비 끝!

실행은 `yarn start`를 통해 할 수 있습니다 :)

---------------

실행하고 나서 무수히 많은 에러들이 반겨줄 때가 있는데,

보통은 연결시켜놨던 페이지들의 이름이 왠지는 모르겠지만 소문자로 모두 바뀌어 있어서 그렇습니다!

### components 폴더 & pages 폴더의 모든 파일들의 이름을 맨 앞글자 대문자 & 중간중간 단어가 바뀌는 부분 대문자로 해주면 됩니다!

ex)

qa -> QA(qa는 예외로, 전부 대문자 처리 해주세요!)

boarddropdown -> BoardDropDown

servicenavcon -> ServiceNavCon

userfeed -> UserFeed

writeuserfeed -> WriteUserFeed
