export const heroList = [
  {
    id: 'hero-1',
    imgUrl: '/images/render/Arcadia_Hilton_redering_(front.jpg',
    title: 'hero_1_title',
    desc: 'hero_1_desc',
    list: ['hero_list_1', 'hero_list_2', 'hero_list_3', 'hero_list_4'],
  },
  {
    id: 'hero-2',
    imgUrl: '/images/render/Arcadia_Hilton_redering_side.jpg',
    title: 'hero_2_title',
    list: ['hero_list_1', 'hero_list_2', 'hero_list_3', 'hero_list_4'],
    desc: 'hero_2_desc',
  },
  {
    id: 'hero-3',
    imgUrl: '/images/render/Arrival_2.jpg',
    title: 'hero_3_title',
    list: ['hero_list_1', 'hero_list_2', 'hero_list_3', 'hero_list_4'],
    desc: 'hero_3_desc',
  },
]

export const strengthBlockList = [
  {
    id: 'sb-1',
    stat: '57%',
    desc: 'strength_block_1_desc',
    icon: '/images/common/crowdsource.png',
  },
  {
    id: 'sb-2',
    stat: '35+',
    desc: 'strength_block_2_desc',
    icon: '/images/common/hourglass_disabled.png',
  },
  {
    id: 'sb-3',
    stat: '99k+',
    desc: 'strength_block_3_desc',
    icon: '/images/common/avg_time.png',
  },
  {
    id: 'sb-4',
    stat: '99k+',
    desc: 'strength_block_4_desc',
    icon: '/images/common/calendar_month.png',
  },
]

export const strengthSectList = [
  {
    id: 'ss-1',
    title: 'strength_sect_1_title',
    desc: 'strength_sect_1_desc',
    // text: {
    //   intro: 'strength_sect_1_intro',
    //   title: 'strength_sect_1_title',
    //   desc: 'strength_sect_1_desc',
    // },
    // imgUrl:
    //   'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2970&q=80',
  },
  {
    id: 'ss-2',
    title: 'strength_sect_2_title',
    desc: 'strength_sect_2_desc',
    // text: {
    //   intro: 'strength_sect_2_intro',
    //   title: 'strength_sect_2_title',
    //   desc: 'strength_sect_2_desc',
    // },
    // imgUrl:
    //   'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2970&q=80',
  },
  {
    id: 'ss-3',
    title: 'strength_sect_3_title',
    desc: 'strength_sect_3_desc',
    hasChart: true,
    chartData: {
      labels: ['EB5_loan', 'developer_avenue'],
      datasets: [
        {
          label: '# percentage',
          data: [35, 65],
          backgroundColor: ['rgba(10, 49, 97, 0.35)', '#0A3161'],
          borderColor: ['rgba(10, 49, 97, 0.35)', '#0A3161'],
          borderWidth: 1,
        },
      ],
    },
  },
  {
    id: 'ss-4',
    title: 'strength_sect_4_title',
    desc: 'strength_sect_4_desc',
    hasChart: true,
    chartData: {
      labels: ['job_needed', 'exceed_num'],
      datasets: [
        {
          // label: '# percentage',
          data: [350, 590],
          backgroundColor: ['rgba(10, 49, 97, 0.35)', '#0A3161'],
          borderColor: ['rgba(10, 49, 97, 0.35)', '#0A3161'],
          borderWidth: 1,
        },
      ],
    },
  },
  {
    id: 'ss-5',
    title: 'strength_sect_5_title',
    desc: 'strength_sect_5_desc',
    // text: {
    //   intro: 'strength_sect_2_intro',
    //   title: 'strength_sect_2_title',
    //   desc: 'strength_sect_2_desc',
    // },
    // imgUrl:
    //   'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2970&q=80',
  },
]

export const projectionData = {
  text: {
    // intro: 'projection_intro',
    title: 'projection_title',
    // desc: 'projection_desc',
  },
}

export const locationData = {
  text: {
    title: 'location_title',
    // desc: 'location_desc',
  },
  list: [
    {
      id: 'loc_1',
      cover: '/images/common/Arcadia-ca.jpg',
      title: 'great_location',
      desc: 'loc_1_desc',
      content: [
        'loc_1_li_1',
        'loc_1_li_2',
        'loc_1_li_3',
        'loc_1_li_4',
        'loc_1_li_5',
      ],
    },
    {
      id: 'loc_2',
      cover: '/images/common/maxresdefault.jpg',
      title: 'nice_school',
      desc: 'loc_2_desc',
      content: [
        'loc_2_li_1',
        'loc_2_li_2',
        'loc_2_li_3',
        'loc_2_li_4',
        'loc_2_li_5',
      ],
    },
    {
      id: 'loc_3',
      cover:
        'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2970&q=80',
      title: 'housing',
      desc: 'loc_3_desc',
      content: ['loc_3_li_1', 'loc_3_li_2', 'loc_3_li_3', 'loc_3_li_4'],
    },
    {
      id: 'loc_4',
      cover:
        'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2970&q=80',
      title: 'nature',
      desc: 'loc_4_desc',
      content: [
        'loc_4_li_1',
        'loc_4_li_2',
        'loc_4_li_3',
        'loc_4_li_4',
        'loc_4_li_5',
        'loc_4_li_6',
      ],
    },
    {
      id: 'loc_5',
      cover:
        'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2970&q=80',
      title: 'attraction',
      desc: 'loc_5_desc',
      content: ['loc_5_li_1', 'loc_5_li_2', 'loc_5_li_3', 'loc_5_li_4'],
    },
    {
      id: 'loc_6',
      cover:
        'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2970&q=80',
      title: 'mall',
      desc: 'loc_6_desc',
      content: [
        'loc_6_li_1',
        'loc_6_li_2',
        'loc_6_li_3',
        'loc_6_li_4',
        'loc_6_li_5',
        'loc_6_li_6',
        'loc_6_li_7',
        'loc_6_li_8',
        'loc_6_li_9',
      ],
    },
  ],
}

export const noticeData = {
  text: {
    title: 'notice_title',
    desc: 'notice_desc',
  },
  list: [
    {
      id: 'notice_1',
      cover: '/images/common/IMG_3821.jpg',
      title: 'notice_1_title',
      desc: 'notice_1_desc',
      content: ['notice_1_li_1_a'],
    },
  ],
}

export const costData = {
  text: {
    title: 'cost_title',
  },
}

export const hiltonImgList = [
  {
    id: 'h_img_1',
    imgUrl: '/images/render/Arcadia_Hilton_redering_(front.jpg',
    title: 'front',
  },
  {
    id: 'h_img_2',
    imgUrl: '/images/render/Arcadia_Hilton_redering_side.jpg',
    title: 'side',
  },
  {
    id: 'h_img_3',
    imgUrl: '/images/render/Arrival_2.jpg',
    title: 'arrival',
  },
]

export const developerList = [
  {
    id: 'dev_1',
    imgUrl: '/images/developer/Arcadia–Multispecialty-Clinic-km.jpg',
    title: 'developer_1_title',
    list: ['developer_1_li_1', 'developer_1_li_2', 'developer_1_li_3'],
  },
  {
    id: 'dev_2',
    imgUrl: '/images/developer/baldwin_duarte.png',
    title: 'developer_2_title',
    list: ['developer_2_li_1', 'developer_2_li_2'],
  },
]
