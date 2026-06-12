# 배포 체크리스트

## 1. 로컬에서 확인

```bash
npm install
npm run check
npm run build
npm run dev
```

## 2. GitHub 저장소 생성

GitHub에서 `non-rocal-portfolio`라는 새 저장소를 만든 뒤 아래 명령을 실행합니다.

```bash
git init
git add .
git commit -m "Create non-rocal portfolio"
git branch -M main
git remote add origin https://github.com/YOUR_ID/non-rocal-portfolio.git
git push -u origin main
```

## 3. Vercel 연결

Vercel Dashboard → Add New Project → GitHub 저장소 Import → Deploy.

권장 설정:

- Framework Preset: Next.js
- Install Command: `npm install`
- Build Command: `npm run build`
- Output Directory: 비워두기

## 4. 배포 후 수정할 것

Vercel 배포 URL이 정해지면 `app/layout.tsx`의 메타데이터에 실제 URL을 추가하면 공유 미리보기가 더 안정적입니다.

## 공유 이미지 URL 설정

Vercel 배포 URL이 정해지면 환경 변수 `NEXT_PUBLIC_SITE_URL`에 실제 사이트 주소를 넣으면 Open Graph 이미지 경로가 정확해집니다. 예: `https://your-project.vercel.app`
