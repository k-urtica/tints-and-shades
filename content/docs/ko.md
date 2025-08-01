# Tints and Shades Generator 도구 가이드

## Tints and Shades Generator란?

**Tints and Shades Generator**는 하나의 기본 색상에서 '사람 눈에 자연스럽고 아름답게' 보이는 색상 변형을 만들어주는 웹 도구입니다.

**Tints(틴트)**는 기본 색상에 흰색을 섞어 만든 밝은 색상, **Shades(셰이드)**는 기본 색상에 검은색을 섞어 만든 어두운 색상입니다.

하지만 이 도구는 단순히 색을 섞는 것만 하지 않습니다. 색 변화가 '사람의 감각'에 더 가까워지도록 최신 **oklch 색상 공간** 기술을 사용합니다.

oklch는 '밝기', '색상', '채도'를 사람의 눈에 맞게 조절할 수 있는 색상 공간입니다. 그래서 어떤 색을 선택해도 '이상하지 않은 자연스러운 그라데이션'이 만들어집니다.

예를 들어, 파란색을 흰색 쪽으로 밝게 해도 '탁한 물빛'이 아니라 진짜 예쁜 연파랑이 남고, 검은색 쪽으로 어둡게 해도 '회색빛'이 아니라 깊이 있는 색이 유지됩니다.

이 덕분에 디자이너와 개발자가 색상을 하나씩 손으로 조정할 필요 없이, 통일감 있고 아름다운 컬러 팔레트를 즉시 만들 수 있습니다. 웹 디자인, UI, 브랜드 컬러 등 다양한 곳에서 실용적으로 쓸 수 있습니다.

## 왜 이 도구가 만들어졌나요?

"이 색상 너무 좋은데, 더 밝은 버전이 있었으면 좋겠다" "더 깊고 진한 색도 갖고 싶다" 이런 생각 해본 적 있으신가요?

그런데 색을 손으로 조정하면, 대체로 탁하거나 뭔가 어색해지기 쉽죠.

**Tints and Shades Generator**는 그런 색 고민을 해결하기 위해 만들어졌습니다. 하나의 색상에서 자연스럽고 아름다운 그라데이션 전체를 즉시 얻을 수 있습니다. 어떤 색이든 '색감이 살아있고', 밝기와 채도의 균형이 잘 맞는 팔레트를 만들 수 있습니다.

## 기술적 포인트

이 도구는 모든 색상 보간과 그라데이션에 **oklch 색상 공간**을 사용합니다.
oklch는 사람의 색상 인지에 맞춰 설계되어, 기존 RGB나 Lab 보간보다 훨씬 자연스러운 그라데이션을 만듭니다.

- 흰색(#fff)과 검은색(#000)과의 혼합도 oklch로 계산
- TailwindCSS 컬러 스케일도 oklch 기반으로 생성
- 어떤 색을 선택해도 부드럽고 감각적으로 맞는 그라데이션이 만들어짐

즉, 색이 깨지거나 이상해질 일이 거의 없고, 밝기와 채도의 균형도 항상 좋습니다.

## 언제 사용하나요?

### 웹사이트나 앱을 만들 때

"메인 컬러는 정했는데, 버튼 호버 색상, 배경 색상, 텍스트 색상... 다 고려하기 어려워"
→ 하나의 색상에서 통일감 있는 색상 세트 전체를 얻을 수 있습니다

### TailwindCSS를 사용할 때

"커스텀 컬러를 정의하고 싶은데, 50부터 950까지 다 생각해야 해?"
→ "✨Tailwind" 탭에서 바로 사용할 수 있는 컬러 스케일을 즉시 만들 수 있습니다

### 브랜드 컬러를 결정할 때

"로고 색상은 정했는데, 전체 사이트에 사용할 색상 변형이 필요해"
→ 브랜드 컬러 일관성을 유지하면서 풍부한 색상 선택지를 얻을 수 있습니다

## 사용 방법 (실제로 해보세요)

### 1단계: 색상 정하기

- 왼쪽 상단의 색상 입력 필드에 `#3b82f6`을 입력해보세요 (이것은 파란색입니다)
- 또는 옆의 컬러 피커(작은 정사각형 버튼)를 클릭해서 원하는 색상을 선택하세요
- ※현재는 HEX 형식(#으로 시작하는 6자리 색상 코드)만 지원합니다

### 2단계: 강도 조정

- 오른쪽의 "Weight" 슬라이더를 움직여보세요
- 숫자가 작으면 단계적으로, 크면 대담하게 변합니다
- 기본 설정 "5"도 충분히 예쁘지만, 취향에 맞게 조정하세요

### 3단계: 결과 보기 · 복사하기

화면 중앙에 컬러 팔레트가 표시됩니다:

- **밝은 색상 (Tints)**: 원래 색상에 흰색을 섞은 느낌
- **원본 색상 (Base)**: 입력한 색상 그 자체 (알림 아이콘 포함)
- **어두운 색상 (Shades)**: 원래 색상에 검은색을 섞은 느낌

마음에 드는 색상을 클릭하면 코드가 복사됩니다. 오른쪽 상단에 "Copied!"가 나타날 거예요.

### 4단계: 표시 조정 (선택사항)

오른쪽 설정에서 다음을 할 수 있습니다:

- **테마 전환**: 다크 모드에서도 색상 확인
- **표시 옵션**: 테두리 추가하거나 코드 숨기기
- **스텝 크기**: 0.1% 단위로 세밀한 조정 가능

## 탭 사용법

- **All**: 모든 색상 보기 (기본값)
- **Tints**: 밝은 색상만 보고 싶을 때
- **Shades**: 어두운 색상만 보고 싶을 때
- **✨Tailwind**: TailwindCSS 컬러 스케일 형식 (50-950)

## 유용한 팁

**색상 선택에 고민이 될 때**: 왼쪽 상단의 🔄 버튼을 누르면 랜덤 색상이 나옵니다. 의외의 발견이 있을지도.

**미세 조정이 필요할 때**: Weight 설정 아래의 "스텝 크기"를 0.1로 설정하면 매우 정밀하게 조정할 수 있습니다.

**작업 효율성을 높이려면**: 자주 사용하는 색상은 URL을 북마크해두면 편리합니다. `?color=` 매개변수로 색상이 저장됩니다.

---

이 도구는 "색상 결정 시간을 단축해서 더 많은 시간을 창작에 사용할 수 있도록"이라는 생각으로 만들어졌습니다. 멋진 작품 만들기에 도움이 되었으면 좋겠습니다.
