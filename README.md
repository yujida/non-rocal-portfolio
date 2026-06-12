# 〈非RO컬〉

사진·글 박상욱의 사진 포트폴리오 웹사이트입니다.  
서울 곳곳에서 발견한, 어느 동네인지 가늠되지 않는 풍경들을 한 장씩 집중해서 볼 수 있도록 구성했습니다.

## 디자인 방향

- 한 화면에 사진 한 장씩 배치하는 스크롤 전시형 구조
- 검정 배경과 작은 캡션으로 사진 집중도 유지
- 상단 고정 타이틀과 진행 번호
- 오른쪽 점 내비게이션으로 사진 위치 표시
- 사진 클릭 시 전체 화면 감상 모드
- 방향키 / PageUp / PageDown / Home / End 이동 지원
- 모바일에서는 세로 스크롤 중심으로 감상

## 실행 방법

```bash
npm install
npm run dev
```

브라우저에서 `http://localhost:3000`을 열면 됩니다.

## 배포 전 확인

```bash
npm run check
npm run build
```

## GitHub 업로드

```bash
git init
git add .
git commit -m "Create non-rocal portfolio"
git branch -M main
git remote add origin https://github.com/YOUR_ID/non-rocal-portfolio.git
git push -u origin main
```

`YOUR_ID`와 저장소 주소는 본인 GitHub 정보에 맞게 바꾸면 됩니다.

## Vercel 배포

1. Vercel에서 새 프로젝트를 만듭니다.
2. GitHub 저장소 `non-rocal-portfolio`를 Import합니다.
3. Framework Preset은 Next.js로 둡니다.
4. Build Command는 `npm run build`로 둡니다.
5. Deploy를 누릅니다.

CLI로 배포할 때는 다음처럼 진행할 수 있습니다.

```bash
npm install -g vercel
vercel
vercel --prod
```

## 사진/캡션 수정

사진 메타데이터와 캡션은 `data/photos.ts`에서 수정합니다.

사진 파일은 `public/photos` 안에 있습니다.

## 프로젝트 텍스트

인트로와 마지막 설명문은 `data/photos.ts`의 `projectNote`에서 수정합니다.

## 공유 이미지 URL 설정

Vercel 배포 URL이 정해지면 환경 변수 `NEXT_PUBLIC_SITE_URL`에 실제 사이트 주소를 넣으면 Open Graph 이미지 경로가 정확해집니다. 예: `https://your-project.vercel.app`
