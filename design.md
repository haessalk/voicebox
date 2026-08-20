---
name: 위스테이별내 목소리함
colors:
  primary: "#7A4FE0"
  primary-container: "#EDE5FF"
  on-primary: "#FFFFFF"
  on-primary-container: "#4A2E96"
  secondary: "#2FAE72"
  secondary-container: "#E1F5EA"
  on-secondary: "#FFFFFF"
  on-secondary-container: "#1C6B45"
  background: "#F8F5FF"
  surface: "#FFFFFF"
  text: "#241B3A"
  text-muted: "#6B5E8A"
  border: "#E4DAFB"
  shadow: "rgba(122, 79, 224, 0.18)"
  placeholder-bg: "#E7E2F2"
  placeholder-icon: "#B0A3D6"
  error: "#D6394A"
  error-container: "#FBE4E6"
  on-error-container: "#8C1F2C"
typography:
  display:
    fontFamily: Jua
    fontSize: 32px
    fontWeight: "400"
    lineHeight: 40px
    letterSpacing: -0.01em
    role: 큰 제목 (히어로 헤드라인)
  title-lg:
    fontFamily: Pretendard
    fontSize: 22px
    fontWeight: "700"
    lineHeight: 30px
    role: 제목 (섹션 타이틀)
  title-sm:
    fontFamily: Pretendard
    fontSize: 17px
    fontWeight: "700"
    lineHeight: 24px
    role: 제목 (카드·게이트 화면 타이틀)
  body:
    fontFamily: Pretendard
    fontSize: 16px
    fontWeight: "400"
    lineHeight: 26px
    role: 본문 (글 내용, textarea)
  body-sm:
    fontFamily: Pretendard
    fontSize: 14px
    fontWeight: "400"
    lineHeight: 22px
    role: 본문 (카드 요약, 보조 설명)
  meta:
    fontFamily: Pretendard
    fontSize: 13px
    fontWeight: "500"
    lineHeight: 18px
    letterSpacing: 0.01em
    color: "{colors.text-muted}"
    role: 메타 (작성자·작성시간)
  button:
    fontFamily: Pretendard
    fontSize: 15px
    fontWeight: "600"
    lineHeight: 20px
    letterSpacing: 0.01em
    role: 버튼·탭·칩 라벨
rounded:
  sm: 8px
  DEFAULT: 12px
  md: 14px
  lg: 20px
  full: 999px
spacing:
  base: 8px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 40px
  2xl: 64px
  gutter: 20px
shadow:
  sm: "0 1px 3px rgba(122, 79, 224, 0.10)"
  md: "0 6px 16px rgba(122, 79, 224, 0.14)"
  lg: "0 16px 32px rgba(122, 79, 224, 0.18)"
breakpoints:
  mobile: "< 768px"
  tablet: "768px – 1023px"
  desktop: ">= 1024px"
grid:
  mobile:
    columns: 1
    gutter: "{spacing.md}"
    margin: "{spacing.md}"
  tablet:
    columns: 2
    gutter: "{spacing.lg}"
    margin: "{spacing.lg}"
  desktop:
    columns: 3
    gutter: "{spacing.lg}"
    margin: "{spacing.xl}"
    maxWidth: 1120px
components:
  header:
    backgroundColor: "{colors.surface}"
    borderBottom: "1px solid {colors.border}"
    padding: "{spacing.sm} {spacing.md}"
    iconSize: 32px
    iconRounded: "{rounded.sm}"
    orgNameTypography: "{typography.title-sm}"
    profileIconSize: 32px
    profileIconRounded: "{rounded.full}"
  hero:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    padding: "{spacing.xl} {spacing.md}"
    headlineTypography: "{typography.display}"
    bodyTypography: "{typography.body-sm}"
    cta: button-inverse
  footer:
    borderTop: "1px solid {colors.border}"
    padding: "{spacing.xl} {spacing.md}"
    orgNameTypography: "{typography.title-sm}"
    descTypography: "{typography.body-sm}"
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: "{spacing.sm} {spacing.lg}"
    shadow: "{shadow.sm}"
  button-primary-hover:
    backgroundColor: "#6A3FD0"
    shadow: "{shadow.md}"
  button-secondary:
    backgroundColor: "{colors.surface}"
    border: "1px solid {colors.border}"
    textColor: "{colors.text}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: "{spacing.sm} {spacing.lg}"
    role: 취소 등 중립 보조 액션. 완료 상태(초록)와 겹치지 않도록 색을 쓰지 않는다.
  button-inverse:
    backgroundColor: "#FFFFFF"
    textColor: "{colors.primary}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: "{spacing.sm} {spacing.lg}"
    shadow: "{shadow.md}"
    role: 주색 배경(히어로) 위에서만 쓰는 반전 버튼
  button-google:
    backgroundColor: "#FFFFFF"
    textColor: "{colors.text}"
    border: "1px solid {colors.border}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: "{spacing.sm} {spacing.lg}"
    logo: 구글 공식 4색 G 로고 (원본 색 그대로, 변형 금지)
    role: 유일하게 주색을 쓰지 않는 버튼. 구글 브랜드 가이드 때문.
  button-status:
    rounded: "{rounded.DEFAULT}"
    typography: "{typography.button}"
    padding: "{spacing.sm} {spacing.md}"
    backgroundColor: "{colors.surface}"
    border: "1px solid {colors.border}"
    textColor: "{colors.text-muted}"
    role: 기본(비선택) 상태. 셋 중 하나를 누르면 아래 variant로 바뀐다.
  button-status-received:
    backgroundColor: "{colors.primary-container}"
    textColor: "{colors.on-primary-container}"
  button-status-progress:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
  button-status-done:
    backgroundColor: "{colors.secondary-container}"
    textColor: "{colors.on-secondary-container}"
  tab:
    typography: "{typography.button}"
    padding: "{spacing.sm} {spacing.md}"
    borderBottom: "1px solid {colors.border}"
    inactiveColor: "{colors.text-muted}"
    activeColor: "{colors.text}"
    activeIndicator: "2px solid {colors.primary}"
    layout: 2탭 균등폭 (50% / 50%)
  post-card:
    backgroundColor: "{colors.surface}"
    border: "1px solid {colors.border}"
    rounded: "{rounded.DEFAULT}"
    shadow: "{shadow.sm}"
    padding: "12px"
    layout: 가로형 (썸네일 60px + 본문)
    thumbSize: 60px
    thumbRounded: "{rounded.sm}"
    thumbBg: "{colors.placeholder-bg}"
    titleTypography: "{typography.title-sm}"
    excerptTypography: "{typography.body-sm}"
    excerptLines: 2
    metaTypography: "{typography.meta}"
  post-card-admin:
    statusRowGap: "{spacing.xs}"
    note: post-card 아래에 button-status 3개(접수·처리중·완료)를 한 줄 추가한 것 외엔 동일
  badge-received:
    backgroundColor: "{colors.primary-container}"
    textColor: "{colors.on-primary-container}"
    rounded: "{rounded.full}"
    padding: "{spacing.xs} {spacing.sm}"
    typography: "{typography.meta}"
  badge-progress:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.full}"
    padding: "{spacing.xs} {spacing.sm}"
    typography: "{typography.meta}"
  badge-done:
    backgroundColor: "{colors.secondary-container}"
    textColor: "{colors.on-secondary-container}"
    rounded: "{rounded.full}"
    padding: "{spacing.xs} {spacing.sm}"
    typography: "{typography.meta}"
  chip-category:
    backgroundColor: "{colors.surface}"
    border: "1px solid {colors.border}"
    textColor: "{colors.text-muted}"
    rounded: "{rounded.full}"
    padding: "{spacing.sm} {spacing.md}"
    typography: "{typography.meta}"
  chip-category-active:
    backgroundColor: "{colors.primary}"
    border: "1px solid {colors.primary}"
    textColor: "{colors.on-primary}"
  chip-category-removable:
    backgroundColor: "{colors.surface}"
    border: "1px solid {colors.border}"
    textColor: "{colors.text-muted}"
    rounded: "{rounded.full}"
    padding: "{spacing.sm} {spacing.md}"
    typography: "{typography.meta}"
    removeIcon: 우측 x, 클릭 시 분야 삭제 (분야 관리 탭 전용)
  input-field:
    backgroundColor: "{colors.surface}"
    border: "1px solid {colors.border}"
    textColor: "{colors.text}"
    typography: "{typography.body}"
    rounded: "{rounded.sm}"
    padding: "{spacing.sm} {spacing.md}"
    focusBorder: "1px solid {colors.primary}"
  input-field-error:
    border: "1px solid {colors.error}"
    helperTextColor: "{colors.error}"
    helperTypography: "{typography.meta}"
  textarea-field:
    backgroundColor: "{colors.surface}"
    border: "1px solid {colors.border}"
    textColor: "{colors.text}"
    typography: "{typography.body}"
    rounded: "{rounded.sm}"
    padding: "{spacing.sm} {spacing.md}"
    focusBorder: "1px solid {colors.primary}"
    minHeight: 160px
    resize: vertical
  photo-upload:
    backgroundColor: "{colors.background}"
    border: "2px dashed {colors.border}"
    rounded: "{rounded.md}"
    minHeight: 120px
    iconColor: "{colors.placeholder-icon}"
    labelTypography: "{typography.body-sm}"
    thumbSize: 72px
    thumbRounded: "{rounded.sm}"
  gate-card:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.lg}"
    shadow: "{shadow.md}"
    padding: "{spacing.xl}"
    maxWidth: 380px
    titleTypography: "{typography.title-lg}"
    bodyTypography: "{typography.body-sm}"
    cta: button-google
    errorTextColor: "{colors.error}"
---

## Brand & Style

위스테이별내사회적협동조합은 "입주자 모두가 조합원이 되어 마을의 살림을 직접 결정하는" 곳이다. 이 앱은 그 결정에 필요한 목소리(의견·제안)를 모으는 도구이므로, 딱딱한 행정 서비스가 아니라 **이웃과 마주 앉아 이야기하는 느낌**이어야 한다.

스타일은 **발랄하고 경쾌한 커뮤니티 톤**이다. 진한 원색 대비보다는 연보라 배경 위에 흰 카드를 띄우는 방식으로 부드럽게 쌓고, 각진 테두리보다 둥근 모서리와 옅은 그림자로 입체감을 준다. 아이콘([icon-src.svg](icon-src.svg))의 "여섯 집이 둘러앉은 마을" 모티프처럼, 화면 어디서든 "함께 모여 있다"는 인상을 준다.

이 문서의 컴포넌트 규격은 오늘 함께 만드는 4가지 공통기능 — **글 저장하기 · 사진 올리기 · 로그인&회원가입 · 처리상태&관리자 화면** — 을 기준으로 정한다. 페이지 골격(헤더·히어로·푸터)은 확정된 홈 화면 시안 **1안(리스트형)** 을 그대로 따른다.

## Colors

- **주색 `primary` #7A4FE0** — 메인 액션(등록 버튼, 활성 탭, 처리중 배지), 화면당 지배적으로 한 곳에서만 강하게 쓴다.
- **보조색 `secondary` #2FAE72** — **완료 상태에만** 쓴다. 다른 곳(취소 버튼 등)에 끌어다 쓰지 않는다 — 완료 배지와 헷갈리기 때문.
- **배경 `background` #F8F5FF** — 페이지 바탕. 그 위에 `surface`(흰색) 카드를 얹어 콘텐츠 영역을 구분한다.
- **글자 `text` #241B3A** — 본문 기본색. 메타 정보에는 파생색 `text-muted` #6B5E8A를 쓴다.
- **테두리 `border` #E4DAFB** — 주색을 아주 옅게 섞은 보라. 카드·입력창·구글 버튼의 1px 테두리에만 쓴다.
- **그림자 `shadow` rgba(122,79,224,0.18)** — 순수 검정 그림자 대신 주색을 옅게 섞어 자연스럽게 앉힌다.
- **오류 `error` #D6394A / `error-container` #FBE4E6** — 필수 입력 누락, 로그인 실패 등 폼 에러 전용. 다른 곳에는 쓰지 않는다.
- **예외 — 구글 버튼**: 구글 브랜드 가이드 때문에 배경은 흰색, 로고는 구글 공식 4색 그대로 쓴다. 이 컴포넌트 하나만 주색 규칙에서 벗어난다.

## Typography

본문은 **Pretendard**, 히어로 큰 제목에만 **Jua**를 포인트로 섞는다. Jua는 굵기가 한 가지뿐이라 본문·버튼·탭·칩에는 쓰지 않는다.

| 단계 | 용도 | 크기/굵기 |
|---|---|---|
| `display` | 히어로 헤드라인 | 32px / 400 (Jua) |
| `title-lg` / `title-sm` | 게이트 화면 타이틀 / 카드·헤더 타이틀 | 22px·700 / 17px·700 |
| `body` / `body-sm` | 글 내용(textarea) / 카드 요약 | 16px·400 / 14px·400 |
| `meta` | 작성자·작성시간·분야 칩 | 13px·500, `text-muted` |
| `button` | 버튼·탭·칩 라벨 | 15px·600, 자간 +0.01em |

## Layout & Spacing

간격은 8px 배수로만 쓴다 — `xs 4 / sm 8 / md 16 / lg 24 / xl 40 / 2xl 64`. 그 사이 임의의 값(예: 18px, 30px)은 만들지 않는다. 히어로·푸터처럼 큰 여백이 필요한 곳도 이 표에서 고른다(예: 히어로 상하 여백은 `xl` 40px).

### 반응형 3폭

| 폭 | 기준 | 열 수 | 여백(margin) | 간격(gutter) |
|---|---|---|---|---|
| 모바일 | < 768px | 1열 | 16px | 16px |
| 태블릿 | 768–1023px | 2열 | 24px | 24px |
| PC | ≥ 1024px | 3열 (최대폭 1120px, 중앙정렬) | 40px | 24px |

`post-card` 그리드(홈, 마이페이지, 관리자 의견 관리)는 이 3단을 그대로 따른다. `/login`·`/signup`처럼 카드 하나만 있는 화면은 모든 폭에서 중앙 1열을 유지한다.

## 페이지 골격 (홈 화면 1안 기준)

- **헤더**: 아이콘 32px + 단체명(`title-sm`), `surface` 배경 + 아래쪽 1px `border`. 로그인 전에는 오른쪽에 `button-secondary` 크기의 "로그인" 링크, 로그인 후에는 같은 자리에 32px 원형(`rounded.full`) 프로필 아이콘 — 누르면 마이페이지로 이동한다.
- **히어로**: 주색(`primary`) 배경 + 흰 글자. 큰 제목(`display`, Jua) 한 줄 + 설명 한두 줄(`body-sm`) + `button-inverse` "의견 남기기". 로그인하지 않은 상태에서 이 버튼을 누르면 글쓰기 화면 대신 `/login` 게이트 화면으로 보낸다.
- **필터**: 처리상태(고정 4버튼, 항상 한눈에) + 분야(가로 스크롤 칩, 늘어나도 안 깨짐) — 위 반응형 규칙과 별개로 필터 자체는 모든 폭에서 같은 구조를 쓴다.
- **목록**: `post-card` 그리드. 위 "반응형 3폭" 표를 그대로 따른다.
- **푸터**: 단체명 + 서비스 한 줄 설명 + 저작권 표기.

## Components

### 게시글 카드 (`post-card`)

글 저장하기 기능의 필드(제목·내용·작성자·작성시간)와 사진 올리기 기능을 그대로 반영한다.

- 가로형 리스트 카드: 왼쪽 60px 정사각 사진 썸네일(`placeholder-bg` + 회색 아이콘, 사진 없으면 첫 장 자리에 그대로 자리표시자) + 오른쪽 본문.
- 본문 구성 (위→아래): 상태 배지 + 분야 칩 → 제목(`title-sm`, 1줄) → 내용 앞부분(`body-sm`, 2줄에서 말줄임) → 작성자 · 작성시간(`meta`, 예: `3동 김OO · 2026.08.20 14:32`).
- 배경 `surface`, 테두리 `border` 1px, `rounded.DEFAULT`(12px), `shadow.sm`. hover 시 `shadow.md`.
- 카드 안의 분야 칩은 항상 `chip-category`의 **기본(비활성) 스타일**만 쓴다. 필터에서 선택했을 때 쓰는 진보라 `chip-category-active`는 카드 안에서는 쓰지 않는다 — 상태 배지(처리중, 진보라)와 겹쳐 보여 헷갈리기 때문.
- **관리자용 확장(`post-card-admin`)**: 같은 카드 아래에 처리상태 3버튼(`button-status`)을 한 줄 더 붙인다. 의견 관리 탭에서만 쓴다.

### 상태 배지 (`badge-received` / `badge-progress` / `badge-done`)

- 읽기 전용 표시. `rounded.full` 알약형, `meta` 타이포.
- 접수 = `primary-container` 배경(연보라) — 아직 옅게.
- 처리중 = `primary` 배경(진보라, 흰 글자) — 지금 눈에 띄어야 하는 상태라 가장 강하게.
- 완료 = `secondary-container` 배경(연두) — 긍정·종료의 느낌. **이 배색은 완료 배지 전용이다 — 다른 컴포넌트(버튼 등)에 재사용하지 않는다.**
- 세 색은 관리자 화면의 `button-status` 선택 상태와 완전히 같은 배색을 공유한다. 사용자는 배지로 보고, 관리자는 버튼으로 바꾸지만 색의 의미는 같다.

### 처리상태 변경 버튼 (`button-status`, 관리자 전용)

- 접수 / 처리중 / 완료 3개가 한 줄로 붙는다 (개수 고정, 늘어나지 않음).
- 비선택 상태는 모두 동일하게 `surface` 배경 + `border` 테두리 + `text-muted` 글자.
- 선택된 것만 `button-status-received` / `-progress` / `-done` 색으로 채워진다 — 배지와 같은 배색.
- 한 게시글에는 항상 하나만 선택된다 — 라디오처럼 동작, 체크박스처럼 다중 선택되지 않는다.
- 세로 패딩은 `{spacing.sm}`(8px) 이상으로 둔다 — 관리자가 모바일에서도 누르는 버튼이라 최소 36px 높이는 확보한다.

### 분야 칩 (`chip-category`)

- 필터·글쓰기 폼에서 공통으로 쓰는 기본형: `surface` 배경 + `border` 테두리, `rounded.full`, 가로 스크롤 목록(개수 제한 없음).
- 선택 시 `chip-category-active`: `primary` 배경 + 흰 글자로 바뀐다. 이 스타일은 필터 전용이며 카드 안에는 쓰지 않는다(위 "게시글 카드" 참고).
- 세로 패딩은 `{spacing.sm}`(8px)로, 상태 배지(4px)보다 여유를 둔다 — 칩은 누르는 대상이고 배지는 읽는 대상이기 때문.
- **분야 관리 탭 전용(`chip-category-removable`)**: 기본형에 오른쪽 x 아이콘만 추가. 누르면 그 분야를 삭제한다. 목록 끝에는 새 분야를 추가하는 `input-field` + `button-primary`("추가") 한 줄을 둔다.

### 탭 (`tab`)

마이페이지([내가 쓴 글] / [내 정보])와 관리자 화면([의견 관리] / [분야 관리])에서 동일한 규격을 쓴다.

- 2탭 균등폭(50%/50%), 탭 바 아래 1px `border`.
- 비활성: `text-muted`, 활성: `text` + 밑줄 2px `primary`.
- 탭 전환은 페이지 이동 없이 같은 화면 안에서 콘텐츠만 바뀐다.

### 버튼 (`button-primary` / `button-secondary` / `button-inverse` / `button-google` / `button-status`)

- **button-primary**: 등록·저장 같은 메인 액션. 주색 배경 + 흰 글자, hover 시 `#6A3FD0` + `shadow.md`.
- **button-secondary**: 취소 등 중립 보조 액션. 흰 배경 + `border` 테두리 + 기본 글자색 — **초록(완료색)을 쓰지 않는다.** 완료 배지와 같은 화면에 있어도 헷갈리지 않아야 하기 때문.
- **button-inverse**: 히어로(주색 배경) 위에서만 쓰는 흰 배경 + 보라 글자 버튼. 다른 곳에서는 쓰지 않는다.
- **button-google**: 로그인/회원가입 게이트 화면 전용. 흰 배경 + 옅은 보라 테두리 + 구글 공식 G 로고. 이 버튼만 주색을 쓰지 않는다.
- **button-status**: 위 "처리상태 변경 버튼" 참고.

### 입력 폼 (`input-field` / `textarea-field` / `photo-upload`)

글쓰기 폼 구성 순서: 제목(`input-field`, 한 줄) → 내용(`textarea-field`, 최소 높이 160px) → 사진 올리기(`photo-upload`) → 취소(`button-secondary`) · 등록(`button-primary`).

- **input-field / textarea-field**: 흰 배경, `border` 1px, `rounded.sm`, 포커스 시 테두리만 `primary`로 바뀌고 배경은 그대로.
- **에러 상태(`input-field-error`)**: 제목·내용을 비운 채 등록을 누르면 테두리가 `error` 색으로 바뀌고, 입력창 아래에 `error` 색 안내 문구가 뜬다(예: "제목을 입력해 주세요"). 로그인 실패 시에도 게이트 카드 안에 같은 색으로 안내한다.
- **photo-upload**: 점선 테두리(`border` 2px dashed) 박스, 최소 높이 120px, 가운데 사진 아이콘 + "사진 추가" 안내. 선택하면 72px 정사각 썸네일이 그리드로 쌓이고 각 썸네일 우상단에 삭제 x가 붙는다.
- 작성자·작성시간은 입력칸이 없다 — 로그인한 계정 정보와 서버 시각으로 자동 채워지고, 카드의 `meta` 자리에만 표시된다.

## 화면 구성

- **`/login`, `/signup`**: 배경 `background` 위에 `gate-card` 하나만 중앙 배치. 아이콘 + 안내 문구(`title-lg`/`body-sm`) + `button-google`. 구글 인증 하나로 로그인·가입이 같이 처리되므로 두 화면은 문구만 다르고 구조는 같다. 인증 실패 시 버튼 아래에 `error` 색 한 줄 안내가 뜬다.
- **마이페이지**: `tab` 2개 — [내가 쓴 글](`post-card` 그리드 재사용) / [내 정보](구글 계정 이름·이메일을 읽기 전용 줄로 표시).
- **관리자 화면**: `tab` 2개 — [의견 관리](`post-card-admin` 그리드) / [분야 관리](`chip-category-removable` 목록 + 분야 추가 폼).

## Elevation & Depth

그림자는 `sm / md / lg` 세 단만 쓴다.

- **`shadow.sm`** — 기본 카드, 입력창의 은은한 뜬 느낌.
- **`shadow.md`** — 카드·버튼 hover, 게이트 카드처럼 화면 중앙에 띄우는 요소.
- **`shadow.lg`** — 모달, 드롭다운처럼 화면 위에 떠 있는 레이어.

카드에 테두리(`border`)와 그림자를 **동시에 진하게** 쓰지 않는다.

## Shapes

- **`rounded.sm` 8px** — 입력창, 사진 썸네일.
- **`rounded.DEFAULT` 12px / `rounded.md` 14px** — 카드, 처리상태 버튼, 사진 업로드 박스.
- **`rounded.lg` 20px** — 게이트 카드.
- **`rounded.full`** — 상태 배지, 분야 칩, 프로필 아이콘.

## 하지 말 것

- 주색과 보조색을 한 화면에서 50:50 비율로 쓰지 않는다. 주색이 항상 주도하고, **보조색(초록)은 완료 상태에만** 쓴다 — 취소 버튼을 포함해 다른 어디에도 끌어다 쓰지 않는다.
- `text`(#241B3A) 대신 순수 검정(#000)이나 임의의 회색을 새로 쓰지 않는다.
- 배경(`background`) 위에 카드 없이 본문 텍스트를 바로 얹지 않는다.
- 카드에 진한 테두리와 그림자를 함께 쓰지 않는다.
- `rounded` 표에 없는 임의의 모서리 값을 새로 만들지 않는다.
- 간격에 `spacing` 표(4/8/16/24/40/64)에 없는 임의의 값을 새로 만들지 않는다.
- 주색 버튼 위에 흰색이 아닌 글자색을 쓰지 않는다 (`button-inverse`는 예외로 이미 별도 정의됨).
- 태블릿 2열 단계를 건너뛰고 PC용 3열 레이아웃을 모바일 폭에 그대로 욱여넣지 않는다.
- Jua 폰트를 본문·버튼·탭·칩 등 작은 글자에 쓰지 않는다. 히어로 큰 제목에만 쓴다.
- 구글 버튼의 배경색·로고 색을 브랜드 색으로 바꾸지 않는다.
- 처리상태 배지·버튼에 정의된 3색(접수/처리중/완료) 외의 새 상태 색을 임의로 추가하지 않는다 — 상태가 늘어나면 먼저 확인한다.
- 분야 칩 개수를 화면에 맞춰 임의로 줄이거나 잘라내지 않는다 — 항상 가로 스크롤로 전체를 보여준다.
- 칩·상태 버튼처럼 누르는 컴포넌트의 세로 패딩을 `xs`(4px)까지 줄이지 않는다 — 최소 `sm`(8px)로 탭 영역을 확보한다. (읽기 전용 배지는 예외)
- `error` 색을 폼 에러·인증 실패 안내 외의 용도로 쓰지 않는다.
