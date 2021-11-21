import theme from "../../styles/theme";

const dummyPollMulti = [
    {
        numOfMembers: 5,
        keys: ["lee", "yoon", "sim", "ahn", "others"],
        names: ["이재명", "윤석열", "심상정", "안철수", "기타"],
        colors: [theme.colors.primary, theme.colors.danger, theme.colors.success, theme.colors.warning, theme.colors.boxShawdow],
        org: "리얼미터",
        term: "2021년 10월 1일~31일"
    },
    {
      name: '10월 1주차',
      lee: 34.0,
      yoon: 33.7,
      sim: 4.2,
      ahn: 4.0,
      others: 24.1,
    },
    {
      name: '10월 2주차',
      lee: 32.0,
      yoon: 32.9,
      sim: 3.5,
      ahn: 3.2,
      others: 28.5,
    },
    {
      name: '10월 3주차',
      lee: 35.5,
      yoon: 33.5,
      sim: 8.5,
      ahn: 5.0,
      others: 16.5,
    },
    {
      name: '10월 4주차',
      lee: 33.6,
      yoon: 30.0,
      sim: 3.4,
      ahn: 2.8,
      others: 30.2,
    },
    {
      name: '10월 5주차',
      lee: 30.5,
      yoon: 32.9,
      sim: 6.4,
      ahn: 6.1,
      others: 24.1,
    },
];

const dummyPollDualOne = [
    {
        numOfMembers: 2,
        keys: ["lee", "yoon"],
        names: ["이재명", "윤석열"],
        colors: [theme.colors.primary, theme.colors.danger],
        org: "한국리서치",
        term: "2021년 10월 1일~31일"
    },
    {
        name: '10월 1주차',
        "lee": 40.0,
        "yoon": 45.3,
        "others": 14.7,
    },
    {
        name: '10월 2주차',
        "lee": 35.8,
        "yoon": 33.2,
        "others": 30.9,
    },
    {
        name: '10월 3주차',
        "lee": 43.0,
        "yoon": 40.4,
        "others": 16.6,
    },
    {
        name: '10월 4주차',
        "lee": 34.8,
        "yoon": 34.5,
        "others": 30.7,
    },
    {
        name: '10월 5주차',
        "lee": 37.5,
        "yoon": 35.4,
        "others": 27.1,
    },
]

const dummyPollDualTwo = [
    {
        numOfMembers: 2,
        keys: ["lee", "hong"],
        names: ["이재명", "홍준표"],
        colors: [theme.colors.primary, theme.colors.danger],
        org: "한국리서치",
        term: "2021년 10월 1일~31일"
    },
    {
        name: '10월 1주차',
        "lee": 33.3,
        "hong": 34.0,
        "others": 32.7,
    },
    {
        name: '10월 2주차',
        "lee": 35.2,
        "hong": 33.0,
        "others": 31.9,
    },
    {
        name: '10월 3주차',
        "lee": 31.2,
        "hong": 42.3,
        "others": 26.5,
    },
    {
        name: '10월 4주차',
        "lee": 36.7,
        "hong": 34.8,
        "others": 28.5,
    },
    {
        name: '10월 5주차',
        "lee": 35.6,
        "hong": 41.9,
        "others": 22.5,
    },
]

const dummyPollAges = [
    {
        numOfMembers: 5,
        keys: ["lee", "yoon", "sim", "ahn", "others"],
        names: ["이재명", "윤석열", "심상정", "안철수", "기타"],
        colors: [theme.colors.primary, theme.colors.danger, theme.colors.success, theme.colors.warning, theme.colors.boxShawdow],
        org: "코리아리서치",
        term: "2021년 10월 17일~19일"
    },
    {
        name: '20대',
        lee: 34.0,
        yoon: 33.7,
        sim: 4.2,
        ahn: 4.0,
        others: 24.1,
      },
      {
        name: '30대',
        lee: 32.0,
        yoon: 32.9,
        sim: 3.5,
        ahn: 3.2,
        others: 28.5,
      },
      {
        name: '40대',
        lee: 35.5,
        yoon: 33.5,
        sim: 8.5,
        ahn: 8.0,
        others: 14.5,
      },
      {
        name: '50대',
        lee: 33.6,
        yoon: 30.0,
        sim: 3.4,
        ahn: 2.8,
        others: 30.2,
      },
      {
        name: '60대이상',
        lee: 30.5,
        yoon: 32.9,
        sim: 6.4,
        ahn: 6.1,
        others: 24.1,
      },
]

const dummyPollRegion = [
    {
        numOfMembers: 5,
        keys: ["lee", "yoon", "sim", "ahn", "others"],
        names: ["이재명", "윤석열", "심상정", "안철수", "기타"],
        colors: [theme.colors.primary, theme.colors.danger, theme.colors.success, theme.colors.warning, theme.colors.boxShawdow],
        org: "데일리안",
        term: "2021년 10월 11일~14일"
    },
    {
        name: "서울/경기/인천",
        lee: 24.0,
        yoon: 33.7,
        sim: 14.2,
        ahn: 4.0,
        others: 24.1,
      },
      {
        name: '부산/울산/경남',
        lee: 32.0,
        yoon: 32.9,
        sim: 3.5,
        ahn: 3.2,
        others: 28.5,
      },
      {
        name: '대구/경북',
        lee: 25.5,
        yoon: 43.5,
        sim: 6.5,
        ahn: 11.0,
        others: 13.5,
      },
      {
        name: '광주/전라',
        lee: 33.6,
        yoon: 30.0,
        sim: 3.4,
        ahn: 2.8,
        others: 30.2,
      },
      {
        name: '대전/충청',
        lee: 30.5,
        yoon: 32.9,
        sim: 6.4,
        ahn: 6.1,
        others: 24.1,
      },
      {
        name: '제주',
        lee: 25.5,
        yoon: 23.5,
        sim: 28.5,
        ahn: 15.0,
        others: 7.5,
      },
]

const PollChartDummyData = [dummyPollMulti, [dummyPollDualOne, dummyPollDualTwo], dummyPollRegion, dummyPollAges];
//const PollChartDummyData = [dummyPollMulti, dummyPollDualTwo, dummyPollAges, dummyPollRegion];

export default PollChartDummyData;