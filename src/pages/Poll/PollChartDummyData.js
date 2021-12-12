import theme from "../../styles/theme";

const dummyPollMulti = [
    {
        numOfMembers: 5,
        keys: ["lee", "yoon", "sim", "ahn", "others"],
        names: ["이재명", "윤석열", "심상정", "안철수", "기타"],
        colors: ["#004EA2", "#E61E2B", "#FFCC00", "#EA5504", theme.colors.boxShawdow],
        org: "리얼미터",
        term: "2021년 10월 25일 ~ 12월 3일"
    },
    {
      name: '10월 4주차',
      lee: 34.6,
      yoon: 34.4,
      sim: 4.4,
      ahn: 4.0,
      others: 22.6,
    },
    {
      name: '11월 2주차',
      lee: 34.2,
      yoon: 46.2,
      sim: 3.7,
      ahn: 4.3,
      others: 11.6,
    },
    {
      name: '11월 4주차',
      lee: 36.9,
      yoon: 46.3,
      sim: 3.7,
      ahn: 3.3,
      others: 9.8,
    },
    {
      name: '12월 1주차',
      lee: 37.5,
      yoon: 44.0,
      sim: 3.2,
      ahn: 3.8,
      others: 11.4,
    },
];

const dummyPollDualOne = [
    {
        numOfMembers: 2,
        keys: ["lee", "yoon"],
        names: ["이재명", "윤석열"],
        colors: ["#004EA2", "#E61E2B"],
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
        colors: ["#004EA2", "#E61E2B"],
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
        colors: ["#004EA2", "#E61E2B", "#FFCC00", "#EA5504", theme.colors.boxShawdow],
        org: "리얼미터",
        term: "2021년 11월 29일 ~ 12월 3일"
    },
    {
        name: '18~29세',
        lee: 25.4,
        yoon: 37.8,
        sim: 6.5,
        ahn: 7.9,
        others: 22.4,
      },
      {
        name: '30대',
        lee: 39.4,
        yoon: 38.1,
        sim: 3.1,
        ahn: 5.6,
        others: 13.8,
      },
      {
        name: '40대',
        lee: 53.4,
        yoon: 33.9,
        sim: 1.3,
        ahn: 1.8,
        others: 9.5,
      },
      {
        name: '50대',
        lee: 46.7,
        yoon: 40.8,
        sim: 2.3,
        ahn: 2.8,
        others: 7.4,
      },
      {
        name: '60대',
        lee: 28.2,
        yoon: 59.1,
        sim: 2.9,
        ahn: 2.0,
        others: 7.8,
      },
      {
        name: '70대이상',
        lee: 26.7,
        yoon: 59.3,
        sim: 3.5,
        ahn: 3.1,
        others: 7.4,
      },
]

const dummyPollRegion = [
    {
        numOfMembers: 5,
        keys: ["lee", "yoon", "sim", "ahn", "others"],
        names: ["이재명", "윤석열", "심상정", "안철수", "기타"],
        colors: ["#004EA2", "#E61E2B", "#FFCC00", "#EA5504", theme.colors.boxShawdow],
        org: "데일리안",
        term: "2021년 11월 29일 ~ 12월 3일"
    },
      {
        name: "서울",
        lee: 33.3,
        yoon: 47.6,
        sim: 3.8,
        ahn: 4.7,
        others: 10.6,
      },
      {
        name: "인천/경기",
        lee: 39.6,
        yoon: 41.6,
        sim: 3.5,
        ahn: 3.4,
        others: 11.9,
      },
      {
        name: '대전/세종/충청',
        lee: 36.7,
        yoon: 45.6,
        sim: 2.3,
        ahn: 4.0,
        others: 11.5,
      },
      {
        name: '강원',
        lee: 28.8,
        yoon: 53.9,
        sim: 2.5,
        ahn: 3.5,
        others: 11.3,
      },
      {
        name: '부산/울산/경남',
        lee: 32.6,
        yoon: 49.0,
        sim: 2.3,
        ahn: 3.1,
        others: 13.0,
      },
      {
        name: '대구/경북',
        lee: 22.6,
        yoon: 59.7,
        sim: 1.9,
        ahn: 5.9,
        others: 10.0,
      },
      {
        name: '광주/전라',
        lee: 64.9,
        yoon: 16.8,
        sim: 5.4,
        ahn: 2.6,
        others: 10.3,
      },
      {
        name: '제주',
        lee: 37.6,
        yoon: 41.1,
        sim: 1.8,
        ahn: 2.6,
        others: 17.0,
      },
]

const PollChartDummyData = [dummyPollMulti, [dummyPollDualOne, dummyPollDualTwo], dummyPollRegion, dummyPollAges];
//const PollChartDummyData = [dummyPollMulti, dummyPollDualTwo, dummyPollAges, dummyPollRegion];

export default PollChartDummyData;