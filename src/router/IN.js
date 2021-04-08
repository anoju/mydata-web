// 퍼블리싱 페이지 경로
export default [
  // 투자생활
  {
    path: '/IN',
    component: {
      render(c) { return c('router-view'); },
    },
    children: [
      {
        path: '03',
        component: {
          render(c) { return c('router-view'); },
        },
        children: [
          { path: 'IN03A001', component: () => import('@/views/IN/03/IN03A001.vue') }, // 포트폴리오 진단
        ],
      },
      {
        path: '04',
        component: {
          render(c) { return c('router-view'); },
        },
        children: [
          { path: 'IN04A001', component: () => import('@/views/IN/04/IN04A001.vue') }, // 주식종목 진단
        ],
      },
      {
        path: '06',
        component: {
          render(c) { return c('router-view'); },
        },
        children: [
          { path: 'IN06A001', component: () => import('@/views/IN/06/IN06A001.vue') }, // 투자/고수의Pick
          { path: 'IN06A002', component: () => import('@/views/IN/06/IN06A002.vue') }, // 고수의 pick 상세
        ],
      },
      {
        path: '07',
        component: {
          render(c) { return c('router-view'); },
        },
        children: [
          { path: 'IN07A001', component: () => import('@/views/IN/07/IN07A001.vue') }, // 가상투자 시작하기
          { path: 'IN07A002', component: () => import('@/views/IN/07/IN07A002.vue') }, // 가상투자 메인
          { path: 'IN07A005', component: () => import('@/views/IN/07/IN07A005.vue') }, // 비중변경 로딩페이지
          { path: 'IN07A006', component: () => import('@/views/IN/07/IN07A006.vue') }, // 가상투자 페이퍼
        ],
      },
      {
        path: '10',
        component: {
          render(c) { return c('router-view'); },
        },
        children: [
          { path: 'IN10A000', component: () => import('@/views/IN/10/IN10A000.vue') }, // 투자상상 퀴즈 (임시)
          { path: 'IN10A001', component: () => import('@/views/IN/10/IN10A001.vue') }, // 투자상상 퀴즈 상세
        ],
      },
    ],
  },

];
