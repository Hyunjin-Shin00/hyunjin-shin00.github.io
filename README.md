# hyunjin-shin00.github.io

신현진 개인 홈페이지 — 위성영상 분석 포트폴리오.
빌드 도구 없는 순수 HTML + CSS + JS라 GitHub Pages에 그대로 올라갑니다.

🔗 <https://hyunjin-shin00.github.io>

---

## 구조

```
index.html                 메인 — 소개 · 스킬 · 프로젝트 24개 · 제안/협업 · 연혁 · 연락
projects/<slug>.html       프로젝트 상세 24개 — 배경 · 방법 · 결과 그림 · 배운 점/한계 · 산출물
assets/css/style.css       단일 스타일시트 (라이트/다크 토큰)
assets/js/site.js          언어 토글 · 테마 토글 · 이미지 라이트박스
assets/img/<slug>/*.webp   결과 그림 204장
.nojekyll                  Jekyll 처리 비활성화
```

## 기능

- **한국어 / English 토글** — 본문을 `<… lang="ko">` / `<… lang="en">` 쌍으로 두고 CSS로 전환. JS가 꺼져 있어도 한국어는 보입니다. 선택은 `localStorage`에 남습니다.
- **라이트 / 다크** — `prefers-color-scheme` 기본값 + 수동 토글.
- **라이트박스** — 결과 그림 클릭 시 확대, 현재 언어의 캡션을 함께 표시.
- **반응형** — 860px 이하에서 내비 숨김, 520px 이하에서 단일 컬럼.

## 로컬 확인

```bash
python -m http.server 8000
# http://localhost:8000
```

## 배포

`main` 브랜치에 푸시하면 GitHub Pages가 자동 배포합니다.
Settings → Pages → Source: *Deploy from a branch* → `main` / `/ (root)`.

## 내용 수정

본문과 그림 캡션은 전부 생성 스크립트의 데이터에서 나옵니다.
HTML을 직접 고치는 대신 `_build/content.py`를 고치고 `_build/gen.py`를 다시 돌리는 쪽이 일관성이 유지됩니다.
k-water 팀서버에서 온 프로젝트는 `_build/content_kwater.py`(자동 생성)에 있고, 같은 slug 이면 그쪽이 우선합니다.
(생성 스크립트는 작업 폴더에 있고 이 저장소에는 포함하지 않았습니다.)

## 공개 범위 원칙

- 고객사 실명, 계약·견적 정보, 내부 수치는 **싣지 않습니다.**
- 기관은 업종·규모로만 표기합니다 (예: "국내 대형 손해보험사").
- 발표자료에 인용된 **타인의 논문 그림은 제외**했습니다. 게시된 그림은 전부 본인 분석 산출물입니다.
- 방송 화면 캡처, 언론 기사 이미지는 저작권 때문에 제외했습니다.
- 분석 코드는 이 사이트에 싣지 않고 [`sar-eo-analysis`](https://github.com/Hyunjin-Shin00/sar-eo-analysis) 저장소에 따로 정리했습니다.

## 라이선스

코드(HTML/CSS/JS)는 MIT. **결과 그림과 본문은 저작권 보유** — 무단 재사용 금지.
