# 핑크톡 웹 사이트

![deploy](https://github.com/the1900/pinktalk.doowonee.com/workflows/deploy/badge.svg)

# GitHub Actoin으로 Hugo Deploy 자동화 할때 주의 할점

직접 `gh-pages` 브렌치를 만들거나 setting에서 먼저 github page를 활성화 하지말아야 한다. 안 그러면 `peaceiris/actions-gh-pages@v3` action이 실행 될때 이미 `gh-pages` 브렌치가 있으면 오류 난다.