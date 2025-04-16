# React 프론트엔드 템플릿 (Vite + TypeScript)

이 디렉토리는 React + Vite + TypeScript 기반의 프론트엔드 템플릿 프로젝트입니다. 빠른 SPA 개발과 확장성을 위해 기본적인 환경설정과 폴더 구조를 제공합니다.

---

## 환경 및 기술 스택

- **프레임워크/라이브러리:** React
- **빌드 도구:** Vite
- **언어:** TypeScript
- **스타일링:** Tailwind CSS, shadcn/ui
- **데이터 패칭:** React Query, Axios 등
- **상태 관리:** (필요 시 추가)
- **패키지 매니저:** yarn
- **테스트:** Vitest
- **린트/포맷터:** ESLint, Prettier

---

## 주요 폴더 및 파일

- `src/` : 주요 소스코드(컴포넌트, 페이지, 훅, 유틸 등)
- `public/` : 정적 에셋(이미지, 폰트 등)
- `index.html` : 진입점 HTML 파일
- `vite.config.ts` : Vite 설정
- `tailwind.config.js`, `postcss.config.js`, `src/index.css` : Tailwind CSS 설정
- `tsconfig.json` : TypeScript 설정
- `eslint.config.js` : ESLint 설정
- `package.json` : 의존성 및 스크립트 관리
- `.env*` : 환경 변수 파일

---

## 빠른 시작

1. **의존성 설치**
   ```bash
   yarn install
   ```

2. **개발 서버 실행**
   ```bash
   yarn dev
   ```
   # 기본적으로 http://localhost:5173 에서 실행

3. **프로덕션 빌드**
   ```bash
   yarn build
   ```
   # 빌드 결과는 `dist/` 또는 `_output/` 디렉토리에 생성

4. **린트 실행**
   ```bash
   yarn lint
   # 자동 수정을 원할 경우
   yarn lint:fix
   ```

5. **테스트 실행**
   ```bash
   yarn test
   ```

---

## 참고
- 상세 라우팅, API 연동, 환경변수 등은 `src/` 및 설정 파일 참고
- 템플릿을 기반으로 자유롭게 구조 확장 및 커스터마이징 가능
