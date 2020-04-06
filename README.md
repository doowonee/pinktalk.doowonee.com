# 핑크톡 웹 사이트

![deploy](https://github.com/the1900/pinktalk.doowonee.com/workflows/deploy/badge.svg)

# GitHub Actoin으로 Hugo Deploy 자동화 할때 주의 할점

직접 `gh-pages` 브렌치를 만들거나 setting에서 먼저 github page를 활성화 하지말아야 한다. 안 그러면 `peaceiris/actions-gh-pages@v3` action이 실행 될때 이미 `gh-pages` 브렌치가 있으면 오류 난다.

setting에서 직접 커스텀 도메인을 지정하면 GitHub는 `gh-pages`에 자동으로 `CNAME` 파일을 추가하고 Commit 한다. 하지만 `peaceiris/actions-gh-pages@v3` 이 실행되면 CNAME이 사라지므로 그냥 master 브렌치에 `static` 폴더에 `CNAME`을 넣어두자

https://github.com/peaceiris/actions-gh-pages/blob/master/src/main.ts 보면 cname 관련 파라미터를 받는거 같은데 그냥 master static 폴더에 넣어두면 알아서 최상위 폴더에 CNAME 파일이 위치 되니 ㄱㅊ

# 개발 방식

Hugo는 `src` 폴더를 무시하고 Webpack은 `src` 폴더 안에 주어진 css와 ts들을 각각 컴파일 뭐 트랜스파일링 하고 `static` 폴더에 위치시킨다. 그럼 Hugo는 그냥 그대로 이걸 사용하면 됌

https://github.com/material-components/material-components-web/blob/master/docs/getting-started.md 를 사용할것이며 Sass와 Typescript를 사용한다.