export type Photo = {
  id: string;
  src: string;
  width: number;
  height: number;
  title: string;
  description: string;
  alt: string;
};

export const photos: Photo[] = [
  {
    id: '01',
    src: '/photos/photo-01.jpg',
    width: 1536,
    height: 1152,
    title: '재고의 풍경',
    description: '브랜드와 크기가 뒤섞인 선반에서 장소보다 소비의 패턴이 먼저 보인다.',
    alt: '붉은 선반 위 신발 상자들이 줄지어 놓인 장면'
  },
  {
    id: '02',
    src: '/photos/photo-02.jpg',
    width: 1152,
    height: 1536,
    title: '무표정한 실내',
    description: '조명과 동선이 먼저 보이는 실내에서 동네의 표정은 희미해진다.',
    alt: '쇼핑몰 복도와 상점, 천장의 곡선형 개구부가 보이는 장면'
  },
  {
    id: '03',
    src: '/photos/photo-03.jpg',
    width: 1152,
    height: 1536,
    title: '같은 노을',
    description: '노을은 빌딩의 표면을 같은 금빛으로 덮으며 도시의 차이를 줄인다.',
    alt: '노을빛이 유리와 금속 외벽의 고층 건물에 반사되는 도시 거리'
  },
  {
    id: '04',
    src: '/photos/photo-04.jpg',
    width: 1152,
    height: 1536,
    title: '반사된 동선',
    description: '유리 외피는 사람과 거리의 방향을 접어 익명의 표면으로 만든다.',
    alt: '곡면 유리 외벽에 사람과 건물이 반사되어 왜곡된 장면'
  },
  {
    id: '05',
    src: '/photos/photo-05.jpg',
    width: 1536,
    height: 1152,
    title: '흐르는 통로',
    description: '얼굴과 목적지는 흐려지고 이동의 속도만 남는다.',
    alt: '밝은 지하 통로를 사람들이 흐릿하게 지나가는 장면'
  },
  {
    id: '06',
    src: '/photos/photo-06.jpg',
    width: 1152,
    height: 1536,
    title: '속도 없는 질주',
    description: '이동은 실내의 게임 속에서 다시 연출되고, 도시는 화면 안으로 들어간다.',
    alt: '분홍빛과 파란빛 아래 오락실 바이크 레이싱 게임기가 놓인 장면'
  },
  {
    id: '07',
    src: '/photos/photo-07.jpg',
    width: 1536,
    height: 1152,
    title: '네온 뽑기 기계',
    description: '같은 표정의 기계들이 네온 색으로 장소의 차이를 지운다.',
    alt: '분홍 네온 조명의 크레인 게임기가 줄지어 놓인 장면'
  },
  {
    id: '08',
    src: '/photos/photo-08.jpg',
    width: 1152,
    height: 1536,
    title: '가챠의 방',
    description: '작은 화면과 기계들이 취향을 무균적인 진열장처럼 배열한다.',
    alt: '파란빛이 감도는 실내에 캡슐 뽑기 기계들이 벽처럼 늘어선 장면'
  },
  {
    id: '09',
    src: '/photos/photo-09.jpg',
    width: 1536,
    height: 1152,
    title: '야장풍경',
    description: '불빛과 천막이 모여 주소보다 먼저 밤의 리듬을 만든다.',
    alt: '밤에 여러 포장마차와 손님들이 밝은 조명 아래 모여 있는 장면'
  },
  {
    id: '10',
    src: '/photos/photo-10.jpg',
    width: 1152,
    height: 1536,
    title: '젊은 여름의 표면',
    description: '광고의 계절과 길 위의 이동수단이 얇은 유리 위에서 겹친다.',
    alt: '형광색 광고 창문 앞에 전동 킥보드가 세워져 있는 장면'
  }
];

export const projectNote =
  '서울 곳곳을 걸으며, 지금까지 카메라에 담아왔던 지역의 특징과는 반대되는 장면을 찾아보려 했습니다. 대도시 어느 동네인지 가늠되지 않는, 그런 풍경을 담아보고 싶었습니다.';
