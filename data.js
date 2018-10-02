var fs=require('fs');
var  data = 
[
  {
    stat: {
      ilkSure: "10",
      CevapSuresi: "45",
      dogrucevap: "4",
      soruNo: "1",
      sinavno: "1"
    },
    resource: [
      "+++require(../../assets/bilsemData/1_1__1.jpeg)+++",
      null,
      "+++require(../../assets/bilsemData/1_1__3.jpeg)+++",
      "+++require(../../assets/bilsemData/1_1__4.jpeg)+++",
      "+++require(../../assets/bilsemData/1_1__5.jpeg)+++",
      "+++require(../../assets/bilsemData/1_1__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "15",
      CevapSuresi: "45",
      dogrucevap: "2",
      soruNo: "2",
      sinavno: "1"
    },
    resource: [
      "+++require(../../assets/bilsemData/1_2__1.jpeg)+++",
      null,
      "+++require(../../assets/bilsemData/1_2__3.jpeg)+++",
      "+++require(../../assets/bilsemData/1_2__4.jpeg)+++",
      "+++require(../../assets/bilsemData/1_2__5.jpeg)+++",
      "+++require(../../assets/bilsemData/1_2__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "15",
      CevapSuresi: "45",
      dogrucevap: "3",
      soruNo: "3",
      sinavno: "1"
    },
    resource: [
      "+++require(../../assets/bilsemData/1_3__1.jpeg)+++",
      "+++require(../../assets/bilsemData/1_3__2.jpeg)+++",
      "+++require(../../assets/bilsemData/1_3__3.jpeg)+++",
      "+++require(../../assets/bilsemData/1_3__4.jpeg)+++",
      "+++require(../../assets/bilsemData/1_3__5.jpeg)+++",
      "+++require(../../assets/bilsemData/1_3__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "25",
      CevapSuresi: "45",
      dogrucevap: "3",
      soruNo: "4",
      sinavno: "1"
    },
    resource: [
      "+++require(../../assets/bilsemData/1_4__1.jpeg)+++",
      "+++require(../../assets/bilsemData/1_4__2.jpeg)+++",
      "+++require(../../assets/bilsemData/1_4__3.jpeg)+++",
      "+++require(../../assets/bilsemData/1_4__4.jpeg)+++",
      "+++require(../../assets/bilsemData/1_4__5.jpeg)+++",
      "+++require(../../assets/bilsemData/1_4__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "20",
      CevapSuresi: "45",
      dogrucevap: "2",
      soruNo: "5",
      sinavno: "1"
    },
    resource: [
      "+++require(../../assets/bilsemData/1_5__1.jpeg)+++",
      "+++require(../../assets/bilsemData/1_5__2.jpeg)+++",
      "+++require(../../assets/bilsemData/1_5__3.jpeg)+++",
      "+++require(../../assets/bilsemData/1_5__4.jpeg)+++",
      "+++require(../../assets/bilsemData/1_5__5.jpeg)+++",
      "+++require(../../assets/bilsemData/1_5__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "25",
      CevapSuresi: "45",
      dogrucevap: "1",
      soruNo: "6",
      sinavno: "1"
    },
    resource: [
      "+++require(../../assets/bilsemData/1_6__1.jpeg)+++",
      "+++require(../../assets/bilsemData/1_6__2.jpeg)+++",
      "+++require(../../assets/bilsemData/1_6__3.jpeg)+++",
      "+++require(../../assets/bilsemData/1_6__4.jpeg)+++",
      "+++require(../../assets/bilsemData/1_6__5.jpeg)+++",
      "+++require(../../assets/bilsemData/1_6__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "25",
      CevapSuresi: "45",
      dogrucevap: "1",
      soruNo: "7",
      sinavno: "1"
    },
    resource: [
      "+++require(../../assets/bilsemData/1_7__1.jpeg)+++",
      "+++require(../../assets/bilsemData/1_7__2.jpeg)+++",
      "+++require(../../assets/bilsemData/1_7__3.jpeg)+++",
      "+++require(../../assets/bilsemData/1_7__4.jpeg)+++",
      "+++require(../../assets/bilsemData/1_7__5.jpeg)+++",
      "+++require(../../assets/bilsemData/1_7__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "25",
      CevapSuresi: "45",
      dogrucevap: "3",
      soruNo: "8",
      sinavno: "1"
    },
    resource: [
      "+++require(../../assets/bilsemData/1_8__1.jpeg)+++",
      "+++require(../../assets/bilsemData/1_8__2.jpeg)+++",
      "+++require(../../assets/bilsemData/1_8__3.jpeg)+++",
      "+++require(../../assets/bilsemData/1_8__4.jpeg)+++",
      "+++require(../../assets/bilsemData/1_8__5.jpeg)+++",
      "+++require(../../assets/bilsemData/1_8__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "25",
      CevapSuresi: "45",
      dogrucevap: "2",
      soruNo: "9",
      sinavno: "1"
    },
    resource: [
      "+++require(../../assets/bilsemData/1_9__1.jpeg)+++",
      "+++require(../../assets/bilsemData/1_9__2.jpeg)+++",
      "+++require(../../assets/bilsemData/1_9__3.jpeg)+++",
      "+++require(../../assets/bilsemData/1_9__4.jpeg)+++",
      "+++require(../../assets/bilsemData/1_9__5.jpeg)+++",
      "+++require(../../assets/bilsemData/1_9__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "25",
      CevapSuresi: "45",
      dogrucevap: "1",
      soruNo: "10",
      sinavno: "1"
    },
    resource: [
      "+++require(../../assets/bilsemData/1_10__1.jpeg)+++",
      null,
      "+++require(../../assets/bilsemData/1_10__3.jpeg)+++",
      "+++require(../../assets/bilsemData/1_10__4.jpeg)+++",
      "+++require(../../assets/bilsemData/1_10__5.jpeg)+++",
      "+++require(../../assets/bilsemData/1_10__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "10",
      CevapSuresi: "35",
      dogrucevap: "3",
      soruNo: "11",
      sinavno: "1"
    },
    resource: [
      "+++require(../../assets/bilsemData/1_11__1.jpeg)+++",
      null,
      "+++require(../../assets/bilsemData/1_11__3.jpeg)+++",
      "+++require(../../assets/bilsemData/1_11__4.jpeg)+++",
      "+++require(../../assets/bilsemData/1_11__5.jpeg)+++",
      "+++require(../../assets/bilsemData/1_11__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "15",
      CevapSuresi: "35",
      dogrucevap: "4",
      soruNo: "12",
      sinavno: "1"
    },
    resource: [
      "+++require(../../assets/bilsemData/1_12__1.jpeg)+++",
      null,
      "+++require(../../assets/bilsemData/1_12__3.jpeg)+++",
      "+++require(../../assets/bilsemData/1_12__4.jpeg)+++",
      "+++require(../../assets/bilsemData/1_12__5.jpeg)+++",
      "+++require(../../assets/bilsemData/1_12__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "20",
      CevapSuresi: "45",
      dogrucevap: "2",
      soruNo: "13",
      sinavno: "1"
    },
    resource: [
      "+++require(../../assets/bilsemData/1_13__1.jpeg)+++",
      null,
      "+++require(../../assets/bilsemData/1_13__3.jpeg)+++",
      "+++require(../../assets/bilsemData/1_13__4.jpeg)+++",
      "+++require(../../assets/bilsemData/1_13__5.jpeg)+++",
      "+++require(../../assets/bilsemData/1_13__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "15",
      CevapSuresi: "45",
      dogrucevap: "4",
      soruNo: "14",
      sinavno: "1"
    },
    resource: [
      "+++require(../../assets/bilsemData/1_14__1.jpeg)+++",
      "+++require(../../assets/bilsemData/1_14__2.jpeg)+++",
      "+++require(../../assets/bilsemData/1_14__3.jpeg)+++",
      "+++require(../../assets/bilsemData/1_14__4.jpeg)+++",
      "+++require(../../assets/bilsemData/1_14__5.jpeg)+++",
      "+++require(../../assets/bilsemData/1_14__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "15",
      CevapSuresi: "45",
      dogrucevap: "3",
      soruNo: "15",
      sinavno: "1"
    },
    resource: [
      "+++require(../../assets/bilsemData/1_15__1.jpeg)+++",
      "+++require(../../assets/bilsemData/1_15__2.jpeg)+++",
      "+++require(../../assets/bilsemData/1_15__3.jpeg)+++",
      "+++require(../../assets/bilsemData/1_15__4.jpeg)+++",
      "+++require(../../assets/bilsemData/1_15__5.jpeg)+++",
      "+++require(../../assets/bilsemData/1_15__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "20",
      CevapSuresi: "45",
      dogrucevap: "1",
      soruNo: "16",
      sinavno: "1"
    },
    resource: [
      "+++require(../../assets/bilsemData/1_16__1.jpeg)+++",
      "+++require(../../assets/bilsemData/1_16__2.jpeg)+++",
      "+++require(../../assets/bilsemData/1_16__3.jpeg)+++",
      "+++require(../../assets/bilsemData/1_16__4.jpeg)+++",
      "+++require(../../assets/bilsemData/1_16__5.jpeg)+++",
      "+++require(../../assets/bilsemData/1_16__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "20",
      CevapSuresi: "45",
      dogrucevap: "3",
      soruNo: "17",
      sinavno: "1"
    },
    resource: [
      "+++require(../../assets/bilsemData/1_17__1.jpeg)+++",
      "+++require(../../assets/bilsemData/1_17__2.jpeg)+++",
      "+++require(../../assets/bilsemData/1_17__3.jpeg)+++",
      "+++require(../../assets/bilsemData/1_17__4.jpeg)+++",
      "+++require(../../assets/bilsemData/1_17__5.jpeg)+++",
      "+++require(../../assets/bilsemData/1_17__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "20",
      CevapSuresi: "45",
      dogrucevap: "2",
      soruNo: "18",
      sinavno: "1"
    },
    resource: [
      "+++require(../../assets/bilsemData/1_18__1.jpeg)+++",
      "+++require(../../assets/bilsemData/1_18__2.jpeg)+++",
      "+++require(../../assets/bilsemData/1_18__3.jpeg)+++",
      "+++require(../../assets/bilsemData/1_18__4.jpeg)+++",
      "+++require(../../assets/bilsemData/1_18__5.jpeg)+++",
      "+++require(../../assets/bilsemData/1_18__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "",
      CevapSuresi: "60",
      dogrucevap: "3",
      soruNo: "19",
      sinavno: "1"
    },
    resource: [
      null,
      "+++require(../../assets/bilsemData/1_19__2.jpeg)+++",
      "+++require(../../assets/bilsemData/1_19__3.jpeg)+++",
      "+++require(../../assets/bilsemData/1_19__4.jpeg)+++",
      "+++require(../../assets/bilsemData/1_19__5.jpeg)+++",
      "+++require(../../assets/bilsemData/1_19__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "",
      CevapSuresi: "60",
      dogrucevap: "3",
      soruNo: "20",
      sinavno: "1"
    },
    resource: [
      null,
      "+++require(../../assets/bilsemData/1_20__2.jpeg)+++",
      "+++require(../../assets/bilsemData/1_20__3.jpeg)+++",
      "+++require(../../assets/bilsemData/1_20__4.jpeg)+++",
      "+++require(../../assets/bilsemData/1_20__5.jpeg)+++",
      "+++require(../../assets/bilsemData/1_20__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "",
      CevapSuresi: "60",
      dogrucevap: "4",
      soruNo: "21",
      sinavno: "1"
    },
    resource: [
      null,
      "+++require(../../assets/bilsemData/1_21__2.jpeg)+++",
      "+++require(../../assets/bilsemData/1_21__3.jpeg)+++",
      "+++require(../../assets/bilsemData/1_21__4.jpeg)+++",
      "+++require(../../assets/bilsemData/1_21__5.jpeg)+++",
      "+++require(../../assets/bilsemData/1_21__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "",
      CevapSuresi: "120",
      dogrucevap: "1",
      soruNo: "22",
      sinavno: "1"
    },
    resource: [
      null,
      "+++require(../../assets/bilsemData/1_22__2.jpeg)+++",
      "+++require(../../assets/bilsemData/1_22__3.jpeg)+++",
      "+++require(../../assets/bilsemData/1_22__4.jpeg)+++",
      "+++require(../../assets/bilsemData/1_22__5.jpeg)+++",
      "+++require(../../assets/bilsemData/1_22__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "",
      CevapSuresi: "120",
      dogrucevap: "4",
      soruNo: "23",
      sinavno: "1"
    },
    resource: [
      null,
      "+++require(../../assets/bilsemData/1_23__2.jpeg)+++",
      "+++require(../../assets/bilsemData/1_23__3.jpeg)+++",
      "+++require(../../assets/bilsemData/1_23__4.jpeg)+++",
      "+++require(../../assets/bilsemData/1_23__5.jpeg)+++",
      "+++require(../../assets/bilsemData/1_23__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "",
      CevapSuresi: "60",
      dogrucevap: "1",
      soruNo: "24",
      sinavno: "1"
    },
    resource: [
      null,
      "+++require(../../assets/bilsemData/1_24__2.jpeg)+++",
      "+++require(../../assets/bilsemData/1_24__3.jpeg)+++",
      "+++require(../../assets/bilsemData/1_24__4.jpeg)+++",
      "+++require(../../assets/bilsemData/1_24__5.jpeg)+++",
      "+++require(../../assets/bilsemData/1_24__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "",
      CevapSuresi: "60",
      dogrucevap: "3",
      soruNo: "25",
      sinavno: "1"
    },
    resource: [
      null,
      "+++require(../../assets/bilsemData/1_25__2.jpeg)+++",
      "+++require(../../assets/bilsemData/1_25__3.jpeg)+++",
      "+++require(../../assets/bilsemData/1_25__4.jpeg)+++",
      "+++require(../../assets/bilsemData/1_25__5.jpeg)+++",
      "+++require(../../assets/bilsemData/1_25__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "",
      CevapSuresi: "60",
      dogrucevap: "2",
      soruNo: "26",
      sinavno: "1"
    },
    resource: [
      null,
      "+++require(../../assets/bilsemData/1_26__2.jpeg)+++",
      "+++require(../../assets/bilsemData/1_26__3.jpeg)+++",
      "+++require(../../assets/bilsemData/1_26__4.jpeg)+++",
      "+++require(../../assets/bilsemData/1_26__5.jpeg)+++",
      "+++require(../../assets/bilsemData/1_26__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "",
      CevapSuresi: "60",
      dogrucevap: "1",
      soruNo: "27",
      sinavno: "1"
    },
    resource: [
      null,
      "+++require(../../assets/bilsemData/1_27__2.jpeg)+++",
      "+++require(../../assets/bilsemData/1_27__3.jpeg)+++",
      "+++require(../../assets/bilsemData/1_27__4.jpeg)+++",
      "+++require(../../assets/bilsemData/1_27__5.jpeg)+++",
      "+++require(../../assets/bilsemData/1_27__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "",
      CevapSuresi: "60",
      dogrucevap: "1",
      soruNo: "28",
      sinavno: "1"
    },
    resource: [
      null,
      "+++require(../../assets/bilsemData/1_28__2.jpeg)+++",
      "+++require(../../assets/bilsemData/1_28__3.jpeg)+++",
      "+++require(../../assets/bilsemData/1_28__4.jpeg)+++",
      "+++require(../../assets/bilsemData/1_28__5.jpeg)+++",
      "+++require(../../assets/bilsemData/1_28__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "",
      CevapSuresi: "60",
      dogrucevap: "1",
      soruNo: "29",
      sinavno: "1"
    },
    resource: [
      null,
      "+++require(../../assets/bilsemData/1_29__2.jpeg)+++",
      "+++require(../../assets/bilsemData/1_29__3.jpeg)+++",
      "+++require(../../assets/bilsemData/1_29__4.jpeg)+++",
      "+++require(../../assets/bilsemData/1_29__5.jpeg)+++",
      "+++require(../../assets/bilsemData/1_29__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "",
      CevapSuresi: "60",
      dogrucevap: "2",
      soruNo: "30",
      sinavno: "1"
    },
    resource: [
      null,
      "+++require(../../assets/bilsemData/1_30__2.jpeg)+++",
      "+++require(../../assets/bilsemData/1_30__3.jpeg)+++",
      "+++require(../../assets/bilsemData/1_30__4.jpeg)+++",
      "+++require(../../assets/bilsemData/1_30__5.jpeg)+++",
      "+++require(../../assets/bilsemData/1_30__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "",
      CevapSuresi: "60",
      dogrucevap: "4",
      soruNo: "31",
      sinavno: "1"
    },
    resource: [
      null,
      "+++require(../../assets/bilsemData/1_31__2.jpeg)+++",
      "+++require(../../assets/bilsemData/1_31__3.jpeg)+++",
      "+++require(../../assets/bilsemData/1_31__4.jpeg)+++",
      "+++require(../../assets/bilsemData/1_31__5.jpeg)+++",
      "+++require(../../assets/bilsemData/1_31__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "",
      CevapSuresi: "60",
      dogrucevap: "2",
      soruNo: "32",
      sinavno: "1"
    },
    resource: [
      null,
      "+++require(../../assets/bilsemData/1_32__2.jpeg)+++",
      "+++require(../../assets/bilsemData/1_32__3.jpeg)+++",
      "+++require(../../assets/bilsemData/1_32__4.jpeg)+++",
      "+++require(../../assets/bilsemData/1_32__5.jpeg)+++",
      "+++require(../../assets/bilsemData/1_32__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "",
      CevapSuresi: "60",
      dogrucevap: "3",
      soruNo: "33",
      sinavno: "1"
    },
    resource: [
      null,
      "+++require(../../assets/bilsemData/1_33__2.jpeg)+++",
      "+++require(../../assets/bilsemData/1_33__3.jpeg)+++",
      "+++require(../../assets/bilsemData/1_33__4.jpeg)+++",
      "+++require(../../assets/bilsemData/1_33__5.jpeg)+++",
      "+++require(../../assets/bilsemData/1_33__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "",
      CevapSuresi: "60",
      dogrucevap: "1",
      soruNo: "34",
      sinavno: "1"
    },
    resource: [
      null,
      "+++require(../../assets/bilsemData/1_34__2.jpeg)+++",
      "+++require(../../assets/bilsemData/1_34__3.jpeg)+++",
      "+++require(../../assets/bilsemData/1_34__4.jpeg)+++",
      "+++require(../../assets/bilsemData/1_34__5.jpeg)+++",
      "+++require(../../assets/bilsemData/1_34__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "",
      CevapSuresi: "60",
      dogrucevap: "2",
      soruNo: "35",
      sinavno: "1"
    },
    resource: [
      null,
      "+++require(../../assets/bilsemData/1_35__2.jpeg)+++",
      "+++require(../../assets/bilsemData/1_35__3.jpeg)+++",
      "+++require(../../assets/bilsemData/1_35__4.jpeg)+++",
      "+++require(../../assets/bilsemData/1_35__5.jpeg)+++",
      "+++require(../../assets/bilsemData/1_35__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "",
      CevapSuresi: "60",
      dogrucevap: "2",
      soruNo: "36",
      sinavno: "1"
    },
    resource: [
      null,
      "+++require(../../assets/bilsemData/1_36__2.jpeg)+++",
      "+++require(../../assets/bilsemData/1_36__3.jpeg)+++",
      "+++require(../../assets/bilsemData/1_36__4.jpeg)+++",
      "+++require(../../assets/bilsemData/1_36__5.jpeg)+++",
      "+++require(../../assets/bilsemData/1_36__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "",
      CevapSuresi: "90",
      dogrucevap: "2",
      soruNo: "37",
      sinavno: "1"
    },
    resource: [
      null,
      "+++require(../../assets/bilsemData/1_37__2.jpeg)+++",
      "+++require(../../assets/bilsemData/1_37__3.jpeg)+++",
      "+++require(../../assets/bilsemData/1_37__4.jpeg)+++",
      "+++require(../../assets/bilsemData/1_37__5.jpeg)+++",
      "+++require(../../assets/bilsemData/1_37__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "",
      CevapSuresi: "90",
      dogrucevap: "1",
      soruNo: "38",
      sinavno: "1"
    },
    resource: [
      null,
      "+++require(../../assets/bilsemData/1_38__2.jpeg)+++",
      "+++require(../../assets/bilsemData/1_38__3.jpeg)+++",
      "+++require(../../assets/bilsemData/1_38__4.jpeg)+++",
      "+++require(../../assets/bilsemData/1_38__5.jpeg)+++",
      "+++require(../../assets/bilsemData/1_38__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "",
      CevapSuresi: "90",
      dogrucevap: "3",
      soruNo: "39",
      sinavno: "1"
    },
    resource: [
      null,
      "+++require(../../assets/bilsemData/1_39__2.jpeg)+++",
      "+++require(../../assets/bilsemData/1_39__3.jpeg)+++",
      "+++require(../../assets/bilsemData/1_39__4.jpeg)+++",
      "+++require(../../assets/bilsemData/1_39__5.jpeg)+++",
      "+++require(../../assets/bilsemData/1_39__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "",
      CevapSuresi: "90",
      dogrucevap: "1",
      soruNo: "40",
      sinavno: "1"
    },
    resource: [
      null,
      "+++require(../../assets/bilsemData/1_40__2.jpeg)+++",
      "+++require(../../assets/bilsemData/1_40__3.jpeg)+++",
      "+++require(../../assets/bilsemData/1_40__4.jpeg)+++",
      "+++require(../../assets/bilsemData/1_40__5.jpeg)+++",
      "+++require(../../assets/bilsemData/1_40__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "",
      CevapSuresi: "90",
      dogrucevap: "1",
      soruNo: "41",
      sinavno: "1"
    },
    resource: [
      null,
      "+++require(../../assets/bilsemData/1_41__2.jpeg)+++",
      "+++require(../../assets/bilsemData/1_41__3.jpeg)+++",
      "+++require(../../assets/bilsemData/1_41__4.jpeg)+++",
      "+++require(../../assets/bilsemData/1_41__5.jpeg)+++",
      "+++require(../../assets/bilsemData/1_41__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "",
      CevapSuresi: "90",
      dogrucevap: "2",
      soruNo: "42",
      sinavno: "1"
    },
    resource: [
      null,
      "+++require(../../assets/bilsemData/1_42__2.jpeg)+++",
      "+++require(../../assets/bilsemData/1_42__3.jpeg)+++",
      "+++require(../../assets/bilsemData/1_42__4.jpeg)+++",
      "+++require(../../assets/bilsemData/1_42__5.jpeg)+++",
      "+++require(../../assets/bilsemData/1_42__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "",
      CevapSuresi: "90",
      dogrucevap: "4",
      soruNo: "43",
      sinavno: "1"
    },
    resource: [
      null,
      "+++require(../../assets/bilsemData/1_43__2.jpeg)+++",
      "+++require(../../assets/bilsemData/1_43__3.jpeg)+++",
      "+++require(../../assets/bilsemData/1_43__4.jpeg)+++",
      "+++require(../../assets/bilsemData/1_43__5.jpeg)+++",
      "+++require(../../assets/bilsemData/1_43__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "",
      CevapSuresi: "90",
      dogrucevap: "1",
      soruNo: "44",
      sinavno: "1"
    },
    resource: [
      null,
      "+++require(../../assets/bilsemData/1_44__2.jpeg)+++",
      "+++require(../../assets/bilsemData/1_44__3.jpeg)+++",
      "+++require(../../assets/bilsemData/1_44__4.jpeg)+++",
      "+++require(../../assets/bilsemData/1_44__5.jpeg)+++",
      "+++require(../../assets/bilsemData/1_44__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "",
      CevapSuresi: "90",
      dogrucevap: "1",
      soruNo: "45",
      sinavno: "1"
    },
    resource: [
      null,
      "+++require(../../assets/bilsemData/1_45__2.jpeg)+++",
      "+++require(../../assets/bilsemData/1_45__3.jpeg)+++",
      "+++require(../../assets/bilsemData/1_45__4.jpeg)+++",
      "+++require(../../assets/bilsemData/1_45__5.jpeg)+++",
      "+++require(../../assets/bilsemData/1_45__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "",
      CevapSuresi: "90",
      dogrucevap: "1",
      soruNo: "46",
      sinavno: "1"
    },
    resource: [
      null,
      "+++require(../../assets/bilsemData/1_46__2.jpeg)+++",
      "+++require(../../assets/bilsemData/1_46__3.jpeg)+++",
      "+++require(../../assets/bilsemData/1_46__4.jpeg)+++",
      "+++require(../../assets/bilsemData/1_46__5.jpeg)+++",
      "+++require(../../assets/bilsemData/1_46__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "",
      CevapSuresi: "90",
      dogrucevap: "2",
      soruNo: "47",
      sinavno: "1"
    },
    resource: [
      null,
      "+++require(../../assets/bilsemData/1_47__2.jpeg)+++",
      "+++require(../../assets/bilsemData/1_47__3.jpeg)+++",
      "+++require(../../assets/bilsemData/1_47__4.jpeg)+++",
      "+++require(../../assets/bilsemData/1_47__5.jpeg)+++",
      "+++require(../../assets/bilsemData/1_47__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "",
      CevapSuresi: "90",
      dogrucevap: "3",
      soruNo: "48",
      sinavno: "1"
    },
    resource: [
      null,
      "+++require(../../assets/bilsemData/1_48__2.jpeg)+++",
      "+++require(../../assets/bilsemData/1_48__3.jpeg)+++",
      "+++require(../../assets/bilsemData/1_48__4.jpeg)+++",
      "+++require(../../assets/bilsemData/1_48__5.jpeg)+++",
      "+++require(../../assets/bilsemData/1_48__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "",
      CevapSuresi: "90",
      dogrucevap: "4",
      soruNo: "49",
      sinavno: "1"
    },
    resource: [
      null,
      "+++require(../../assets/bilsemData/1_49__2.jpeg)+++",
      "+++require(../../assets/bilsemData/1_49__3.jpeg)+++",
      "+++require(../../assets/bilsemData/1_49__4.jpeg)+++",
      "+++require(../../assets/bilsemData/1_49__5.jpeg)+++",
      "+++require(../../assets/bilsemData/1_49__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "",
      CevapSuresi: "90",
      dogrucevap: "1",
      soruNo: "50",
      sinavno: "1"
    },
    resource: [
      null,
      "+++require(../../assets/bilsemData/1_50__2.jpeg)+++",
      "+++require(../../assets/bilsemData/1_50__3.jpeg)+++",
      "+++require(../../assets/bilsemData/1_50__4.jpeg)+++",
      "+++require(../../assets/bilsemData/1_50__5.jpeg)+++",
      "+++require(../../assets/bilsemData/1_50__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "",
      CevapSuresi: "90",
      dogrucevap: "2",
      soruNo: "51",
      sinavno: "1"
    },
    resource: [
      null,
      "+++require(../../assets/bilsemData/1_51__2.jpeg)+++",
      "+++require(../../assets/bilsemData/1_51__3.jpeg)+++",
      "+++require(../../assets/bilsemData/1_51__4.jpeg)+++",
      "+++require(../../assets/bilsemData/1_51__5.jpeg)+++",
      "+++require(../../assets/bilsemData/1_51__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "",
      CevapSuresi: "90",
      dogrucevap: "2",
      soruNo: "52",
      sinavno: "1"
    },
    resource: [
      null,
      "+++require(../../assets/bilsemData/1_52__2.jpeg)+++",
      "+++require(../../assets/bilsemData/1_52__3.jpeg)+++",
      "+++require(../../assets/bilsemData/1_52__4.jpeg)+++",
      "+++require(../../assets/bilsemData/1_52__5.jpeg)+++",
      "+++require(../../assets/bilsemData/1_52__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "",
      CevapSuresi: "90",
      dogrucevap: "1",
      soruNo: "53",
      sinavno: "1"
    },
    resource: [
      null,
      "+++require(../../assets/bilsemData/1_53__2.jpeg)+++",
      "+++require(../../assets/bilsemData/1_53__3.jpeg)+++",
      "+++require(../../assets/bilsemData/1_53__4.jpeg)+++",
      "+++require(../../assets/bilsemData/1_53__5.jpeg)+++",
      "+++require(../../assets/bilsemData/1_53__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "",
      CevapSuresi: "90",
      dogrucevap: "4",
      soruNo: "54",
      sinavno: "1"
    },
    resource: [
      null,
      "+++require(../../assets/bilsemData/1_54__2.jpeg)+++",
      "+++require(../../assets/bilsemData/1_54__3.jpeg)+++",
      "+++require(../../assets/bilsemData/1_54__4.jpeg)+++",
      "+++require(../../assets/bilsemData/1_54__5.jpeg)+++",
      "+++require(../../assets/bilsemData/1_54__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "",
      CevapSuresi: "120",
      dogrucevap: "3",
      soruNo: "55",
      sinavno: "1"
    },
    resource: [
      null,
      "+++require(../../assets/bilsemData/1_55__2.jpeg)+++",
      "+++require(../../assets/bilsemData/1_55__3.jpeg)+++",
      "+++require(../../assets/bilsemData/1_55__4.jpeg)+++",
      "+++require(../../assets/bilsemData/1_55__5.jpeg)+++",
      "+++require(../../assets/bilsemData/1_55__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "",
      CevapSuresi: "120",
      dogrucevap: "1",
      soruNo: "56",
      sinavno: "1"
    },
    resource: [
      null,
      "+++require(../../assets/bilsemData/1_56__2.jpeg)+++",
      "+++require(../../assets/bilsemData/1_56__3.jpeg)+++",
      "+++require(../../assets/bilsemData/1_56__4.jpeg)+++",
      "+++require(../../assets/bilsemData/1_56__5.jpeg)+++",
      "+++require(../../assets/bilsemData/1_56__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "",
      CevapSuresi: "120",
      dogrucevap: "3",
      soruNo: "57",
      sinavno: "1"
    },
    resource: [
      null,
      "+++require(../../assets/bilsemData/1_57__2.jpeg)+++",
      "+++require(../../assets/bilsemData/1_57__3.jpeg)+++",
      "+++require(../../assets/bilsemData/1_57__4.jpeg)+++",
      "+++require(../../assets/bilsemData/1_57__5.jpeg)+++",
      "+++require(../../assets/bilsemData/1_57__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "120",
      CevapSuresi: "45",
      dogrucevap: "2",
      soruNo: "58",
      sinavno: "1"
    },
    resource: [
      "+++require(../../assets/bilsemData/1_58__1.jpeg)+++",
      "+++require(../../assets/bilsemData/1_58__2.jpeg)+++",
      "+++require(../../assets/bilsemData/1_58__3.jpeg)+++",
      "+++require(../../assets/bilsemData/1_58__4.jpeg)+++",
      "+++require(../../assets/bilsemData/1_58__5.jpeg)+++",
      "+++require(../../assets/bilsemData/1_58__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "",
      CevapSuresi: "45",
      dogrucevap: "3",
      soruNo: "59",
      sinavno: "1"
    },
    resource: [
      null,
      "+++require(../../assets/bilsemData/1_59__2.jpeg)+++",
      "+++require(../../assets/bilsemData/1_59__3.jpeg)+++",
      "+++require(../../assets/bilsemData/1_59__4.jpeg)+++",
      "+++require(../../assets/bilsemData/1_59__5.jpeg)+++",
      "+++require(../../assets/bilsemData/1_59__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "",
      CevapSuresi: "45",
      dogrucevap: "4",
      soruNo: "60",
      sinavno: "1"
    },
    resource: [
      null,
      "+++require(../../assets/bilsemData/1_60__2.jpeg)+++",
      "+++require(../../assets/bilsemData/1_60__3.jpeg)+++",
      "+++require(../../assets/bilsemData/1_60__4.jpeg)+++",
      "+++require(../../assets/bilsemData/1_60__5.jpeg)+++",
      "+++require(../../assets/bilsemData/1_60__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "10",
      CevapSuresi: "45",
      dogrucevap: "3",
      soruNo: "1",
      sinavno: "2"
    },
    resource: [
      "+++require(../../assets/bilsemData/2_1__1.jpeg)+++",
      null,
      "+++require(../../assets/bilsemData/2_1__3.jpeg)+++",
      "+++require(../../assets/bilsemData/2_1__4.jpeg)+++",
      "+++require(../../assets/bilsemData/2_1__5.jpeg)+++",
      "+++require(../../assets/bilsemData/2_1__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "15",
      CevapSuresi: "45",
      dogrucevap: "4",
      soruNo: "2",
      sinavno: "2"
    },
    resource: [
      "+++require(../../assets/bilsemData/2_2__1.jpeg)+++",
      null,
      "+++require(../../assets/bilsemData/2_2__3.jpeg)+++",
      "+++require(../../assets/bilsemData/2_2__4.jpeg)+++",
      "+++require(../../assets/bilsemData/2_2__5.jpeg)+++",
      "+++require(../../assets/bilsemData/2_2__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "15",
      CevapSuresi: "45",
      dogrucevap: "3",
      soruNo: "3",
      sinavno: "2"
    },
    resource: [
      "+++require(../../assets/bilsemData/2_3__1.jpeg)+++",
      "+++require(../../assets/bilsemData/2_3__2.jpeg)+++",
      null,
      "+++require(../../assets/bilsemData/2_3__4.jpeg)+++",
      "+++require(../../assets/bilsemData/2_3__5.jpeg)+++",
      "+++require(../../assets/bilsemData/2_3__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "25",
      CevapSuresi: "45",
      dogrucevap: "1",
      soruNo: "4",
      sinavno: "2"
    },
    resource: [
      "+++require(../../assets/bilsemData/2_4__1.jpeg)+++",
      "+++require(../../assets/bilsemData/2_4__2.jpeg)+++",
      "+++require(../../assets/bilsemData/2_4__3.jpeg)+++",
      "+++require(../../assets/bilsemData/2_4__4.jpeg)+++",
      "+++require(../../assets/bilsemData/2_4__5.jpeg)+++",
      "+++require(../../assets/bilsemData/2_4__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "20",
      CevapSuresi: "45",
      dogrucevap: "4",
      soruNo: "5",
      sinavno: "2"
    },
    resource: [
      "+++require(../../assets/bilsemData/2_5__1.jpeg)+++",
      "+++require(../../assets/bilsemData/2_5__2.jpeg)+++",
      "+++require(../../assets/bilsemData/2_5__3.jpeg)+++",
      "+++require(../../assets/bilsemData/2_5__4.jpeg)+++",
      "+++require(../../assets/bilsemData/2_5__5.jpeg)+++",
      "+++require(../../assets/bilsemData/2_5__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "25",
      CevapSuresi: "45",
      dogrucevap: "4",
      soruNo: "6",
      sinavno: "2"
    },
    resource: [
      "+++require(../../assets/bilsemData/2_6__1.jpeg)+++",
      "+++require(../../assets/bilsemData/2_6__2.jpeg)+++",
      "+++require(../../assets/bilsemData/2_6__3.jpeg)+++",
      "+++require(../../assets/bilsemData/2_6__4.jpeg)+++",
      "+++require(../../assets/bilsemData/2_6__5.jpeg)+++",
      "+++require(../../assets/bilsemData/2_6__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "25",
      CevapSuresi: "45",
      dogrucevap: "3",
      soruNo: "7",
      sinavno: "2"
    },
    resource: [
      "+++require(../../assets/bilsemData/2_7__1.jpeg)+++",
      "+++require(../../assets/bilsemData/2_7__2.jpeg)+++",
      "+++require(../../assets/bilsemData/2_7__3.jpeg)+++",
      "+++require(../../assets/bilsemData/2_7__4.jpeg)+++",
      "+++require(../../assets/bilsemData/2_7__5.jpeg)+++",
      "+++require(../../assets/bilsemData/2_7__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "25",
      CevapSuresi: "45",
      dogrucevap: "1",
      soruNo: "8",
      sinavno: "2"
    },
    resource: [
      "+++require(../../assets/bilsemData/2_8__1.jpeg)+++",
      "+++require(../../assets/bilsemData/2_8__2.jpeg)+++",
      "+++require(../../assets/bilsemData/2_8__3.jpeg)+++",
      "+++require(../../assets/bilsemData/2_8__4.jpeg)+++",
      "+++require(../../assets/bilsemData/2_8__5.jpeg)+++",
      "+++require(../../assets/bilsemData/2_8__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "25",
      CevapSuresi: "45",
      dogrucevap: "4",
      soruNo: "9",
      sinavno: "2"
    },
    resource: [
      "+++require(../../assets/bilsemData/2_9__1.jpeg)+++",
      "+++require(../../assets/bilsemData/2_9__2.jpeg)+++",
      "+++require(../../assets/bilsemData/2_9__3.jpeg)+++",
      "+++require(../../assets/bilsemData/2_9__4.jpeg)+++",
      "+++require(../../assets/bilsemData/2_9__5.jpeg)+++",
      "+++require(../../assets/bilsemData/2_9__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "25",
      CevapSuresi: "45",
      dogrucevap: "2",
      soruNo: "10",
      sinavno: "2"
    },
    resource: [
      "+++require(../../assets/bilsemData/2_10__1.jpeg)+++",
      null,
      "+++require(../../assets/bilsemData/2_10__3.jpeg)+++",
      "+++require(../../assets/bilsemData/2_10__4.jpeg)+++",
      "+++require(../../assets/bilsemData/2_10__5.jpeg)+++",
      "+++require(../../assets/bilsemData/2_10__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "10",
      CevapSuresi: "35",
      dogrucevap: "2",
      soruNo: "11",
      sinavno: "2"
    },
    resource: [
      "+++require(../../assets/bilsemData/2_11__1.jpeg)+++",
      null,
      "+++require(../../assets/bilsemData/2_11__3.jpeg)+++",
      "+++require(../../assets/bilsemData/2_11__4.jpeg)+++",
      "+++require(../../assets/bilsemData/2_11__5.jpeg)+++",
      "+++require(../../assets/bilsemData/2_11__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "15",
      CevapSuresi: "35",
      dogrucevap: "2",
      soruNo: "12",
      sinavno: "2"
    },
    resource: [
      "+++require(../../assets/bilsemData/2_12__1.jpeg)+++",
      null,
      "+++require(../../assets/bilsemData/2_12__3.jpeg)+++",
      "+++require(../../assets/bilsemData/2_12__4.jpeg)+++",
      "+++require(../../assets/bilsemData/2_12__5.jpeg)+++",
      "+++require(../../assets/bilsemData/2_12__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "20",
      CevapSuresi: "45",
      dogrucevap: "4",
      soruNo: "13",
      sinavno: "2"
    },
    resource: [
      "+++require(../../assets/bilsemData/2_13__1.jpeg)+++",
      null,
      "+++require(../../assets/bilsemData/2_13__3.jpeg)+++",
      "+++require(../../assets/bilsemData/2_13__4.jpeg)+++",
      "+++require(../../assets/bilsemData/2_13__5.jpeg)+++",
      "+++require(../../assets/bilsemData/2_13__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "15",
      CevapSuresi: "45",
      dogrucevap: "1",
      soruNo: "14",
      sinavno: "2"
    },
    resource: [
      "+++require(../../assets/bilsemData/2_14__1.jpeg)+++",
      "+++require(../../assets/bilsemData/2_14__2.jpeg)+++",
      "+++require(../../assets/bilsemData/2_14__3.jpeg)+++",
      "+++require(../../assets/bilsemData/2_14__4.jpeg)+++",
      "+++require(../../assets/bilsemData/2_14__5.jpeg)+++",
      "+++require(../../assets/bilsemData/2_14__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "15",
      CevapSuresi: "45",
      dogrucevap: "3",
      soruNo: "15",
      sinavno: "2"
    },
    resource: [
      "+++require(../../assets/bilsemData/2_15__1.jpeg)+++",
      "+++require(../../assets/bilsemData/2_15__2.jpeg)+++",
      "+++require(../../assets/bilsemData/2_15__3.jpeg)+++",
      "+++require(../../assets/bilsemData/2_15__4.jpeg)+++",
      "+++require(../../assets/bilsemData/2_15__5.jpeg)+++",
      "+++require(../../assets/bilsemData/2_15__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "20",
      CevapSuresi: "45",
      dogrucevap: "2",
      soruNo: "16",
      sinavno: "2"
    },
    resource: [
      "+++require(../../assets/bilsemData/2_16__1.jpeg)+++",
      "+++require(../../assets/bilsemData/2_16__2.jpeg)+++",
      "+++require(../../assets/bilsemData/2_16__3.jpeg)+++",
      "+++require(../../assets/bilsemData/2_16__4.jpeg)+++",
      "+++require(../../assets/bilsemData/2_16__5.jpeg)+++",
      "+++require(../../assets/bilsemData/2_16__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "25",
      CevapSuresi: "45",
      dogrucevap: "1",
      soruNo: "17",
      sinavno: "2"
    },
    resource: [
      "+++require(../../assets/bilsemData/2_17__1.jpeg)+++",
      "+++require(../../assets/bilsemData/2_17__2.jpeg)+++",
      "+++require(../../assets/bilsemData/2_17__3.jpeg)+++",
      "+++require(../../assets/bilsemData/2_17__4.jpeg)+++",
      "+++require(../../assets/bilsemData/2_17__5.jpeg)+++",
      "+++require(../../assets/bilsemData/2_17__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "20",
      CevapSuresi: "45",
      dogrucevap: "4",
      soruNo: "18",
      sinavno: "2"
    },
    resource: [
      "+++require(../../assets/bilsemData/2_18__1.jpeg)+++",
      "+++require(../../assets/bilsemData/2_18__2.jpeg)+++",
      "+++require(../../assets/bilsemData/2_18__3.jpeg)+++",
      "+++require(../../assets/bilsemData/2_18__4.jpeg)+++",
      "+++require(../../assets/bilsemData/2_18__5.jpeg)+++",
      "+++require(../../assets/bilsemData/2_18__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "",
      CevapSuresi: "60",
      dogrucevap: "3",
      soruNo: "19",
      sinavno: "2"
    },
    resource: [
      null,
      "+++require(../../assets/bilsemData/2_19__2.jpeg)+++",
      "+++require(../../assets/bilsemData/2_19__3.jpeg)+++",
      "+++require(../../assets/bilsemData/2_19__4.jpeg)+++",
      "+++require(../../assets/bilsemData/2_19__5.jpeg)+++",
      "+++require(../../assets/bilsemData/2_19__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "",
      CevapSuresi: "60",
      dogrucevap: "1",
      soruNo: "20",
      sinavno: "2"
    },
    resource: [
      null,
      "+++require(../../assets/bilsemData/2_20__2.jpeg)+++",
      "+++require(../../assets/bilsemData/2_20__3.jpeg)+++",
      "+++require(../../assets/bilsemData/2_20__4.jpeg)+++",
      "+++require(../../assets/bilsemData/2_20__5.jpeg)+++",
      "+++require(../../assets/bilsemData/2_20__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "",
      CevapSuresi: "60",
      dogrucevap: "3",
      soruNo: "21",
      sinavno: "2"
    },
    resource: [
      null,
      "+++require(../../assets/bilsemData/2_21__2.jpeg)+++",
      "+++require(../../assets/bilsemData/2_21__3.jpeg)+++",
      "+++require(../../assets/bilsemData/2_21__4.jpeg)+++",
      "+++require(../../assets/bilsemData/2_21__5.jpeg)+++",
      "+++require(../../assets/bilsemData/2_21__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "",
      CevapSuresi: "120",
      dogrucevap: "4",
      soruNo: "22",
      sinavno: "2"
    },
    resource: [
      null,
      "+++require(../../assets/bilsemData/2_22__2.jpeg)+++",
      "+++require(../../assets/bilsemData/2_22__3.jpeg)+++",
      "+++require(../../assets/bilsemData/2_22__4.jpeg)+++",
      "+++require(../../assets/bilsemData/2_22__5.jpeg)+++",
      "+++require(../../assets/bilsemData/2_22__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "",
      CevapSuresi: "120",
      dogrucevap: "1",
      soruNo: "23",
      sinavno: "2"
    },
    resource: [
      null,
      "+++require(../../assets/bilsemData/2_23__2.jpeg)+++",
      "+++require(../../assets/bilsemData/2_23__3.jpeg)+++",
      "+++require(../../assets/bilsemData/2_23__4.jpeg)+++",
      "+++require(../../assets/bilsemData/2_23__5.jpeg)+++",
      "+++require(../../assets/bilsemData/2_23__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "",
      CevapSuresi: "60",
      dogrucevap: "3",
      soruNo: "24",
      sinavno: "2"
    },
    resource: [
      null,
      "+++require(../../assets/bilsemData/2_24__2.jpeg)+++",
      "+++require(../../assets/bilsemData/2_24__3.jpeg)+++",
      "+++require(../../assets/bilsemData/2_24__4.jpeg)+++",
      "+++require(../../assets/bilsemData/2_24__5.jpeg)+++",
      "+++require(../../assets/bilsemData/2_24__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "",
      CevapSuresi: "60",
      dogrucevap: "2",
      soruNo: "25",
      sinavno: "2"
    },
    resource: [
      null,
      "+++require(../../assets/bilsemData/2_25__2.jpeg)+++",
      "+++require(../../assets/bilsemData/2_25__3.jpeg)+++",
      "+++require(../../assets/bilsemData/2_25__4.jpeg)+++",
      "+++require(../../assets/bilsemData/2_25__5.jpeg)+++",
      "+++require(../../assets/bilsemData/2_25__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "",
      CevapSuresi: "60",
      dogrucevap: "4",
      soruNo: "26",
      sinavno: "2"
    },
    resource: [
      null,
      "+++require(../../assets/bilsemData/2_26__2.jpeg)+++",
      "+++require(../../assets/bilsemData/2_26__3.jpeg)+++",
      "+++require(../../assets/bilsemData/2_26__4.jpeg)+++",
      "+++require(../../assets/bilsemData/2_26__5.jpeg)+++",
      "+++require(../../assets/bilsemData/2_26__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "",
      CevapSuresi: "60",
      dogrucevap: "2",
      soruNo: "27",
      sinavno: "2"
    },
    resource: [
      null,
      "+++require(../../assets/bilsemData/2_27__2.jpeg)+++",
      "+++require(../../assets/bilsemData/2_27__3.jpeg)+++",
      "+++require(../../assets/bilsemData/2_27__4.jpeg)+++",
      "+++require(../../assets/bilsemData/2_27__5.jpeg)+++",
      "+++require(../../assets/bilsemData/2_27__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "",
      CevapSuresi: "60",
      dogrucevap: "3",
      soruNo: "28",
      sinavno: "2"
    },
    resource: [
      null,
      "+++require(../../assets/bilsemData/2_28__2.jpeg)+++",
      "+++require(../../assets/bilsemData/2_28__3.jpeg)+++",
      "+++require(../../assets/bilsemData/2_28__4.jpeg)+++",
      "+++require(../../assets/bilsemData/2_28__5.jpeg)+++",
      "+++require(../../assets/bilsemData/2_28__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "",
      CevapSuresi: "60",
      dogrucevap: "2",
      soruNo: "29",
      sinavno: "2"
    },
    resource: [
      null,
      "+++require(../../assets/bilsemData/2_29__2.jpeg)+++",
      "+++require(../../assets/bilsemData/2_29__3.jpeg)+++",
      "+++require(../../assets/bilsemData/2_29__4.jpeg)+++",
      "+++require(../../assets/bilsemData/2_29__5.jpeg)+++",
      "+++require(../../assets/bilsemData/2_29__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "",
      CevapSuresi: "60",
      dogrucevap: "3",
      soruNo: "30",
      sinavno: "2"
    },
    resource: [
      null,
      "+++require(../../assets/bilsemData/2_30__2.jpeg)+++",
      "+++require(../../assets/bilsemData/2_30__3.jpeg)+++",
      "+++require(../../assets/bilsemData/2_30__4.jpeg)+++",
      "+++require(../../assets/bilsemData/2_30__5.jpeg)+++",
      "+++require(../../assets/bilsemData/2_30__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "",
      CevapSuresi: "60",
      dogrucevap: "3",
      soruNo: "31",
      sinavno: "2"
    },
    resource: [
      null,
      "+++require(../../assets/bilsemData/2_31__2.jpeg)+++",
      "+++require(../../assets/bilsemData/2_31__3.jpeg)+++",
      "+++require(../../assets/bilsemData/2_31__4.jpeg)+++",
      "+++require(../../assets/bilsemData/2_31__5.jpeg)+++",
      "+++require(../../assets/bilsemData/2_31__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "",
      CevapSuresi: "60",
      dogrucevap: "3",
      soruNo: "32",
      sinavno: "2"
    },
    resource: [
      null,
      "+++require(../../assets/bilsemData/2_32__2.jpeg)+++",
      "+++require(../../assets/bilsemData/2_32__3.jpeg)+++",
      "+++require(../../assets/bilsemData/2_32__4.jpeg)+++",
      "+++require(../../assets/bilsemData/2_32__5.jpeg)+++",
      "+++require(../../assets/bilsemData/2_32__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "",
      CevapSuresi: "60",
      dogrucevap: "4",
      soruNo: "33",
      sinavno: "2"
    },
    resource: [
      null,
      "+++require(../../assets/bilsemData/2_33__2.jpeg)+++",
      "+++require(../../assets/bilsemData/2_33__3.jpeg)+++",
      "+++require(../../assets/bilsemData/2_33__4.jpeg)+++",
      "+++require(../../assets/bilsemData/2_33__5.jpeg)+++",
      "+++require(../../assets/bilsemData/2_33__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "",
      CevapSuresi: "60",
      dogrucevap: "2",
      soruNo: "34",
      sinavno: "2"
    },
    resource: [
      null,
      "+++require(../../assets/bilsemData/2_34__2.jpeg)+++",
      "+++require(../../assets/bilsemData/2_34__3.jpeg)+++",
      "+++require(../../assets/bilsemData/2_34__4.jpeg)+++",
      "+++require(../../assets/bilsemData/2_34__5.jpeg)+++",
      "+++require(../../assets/bilsemData/2_34__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "",
      CevapSuresi: "60",
      dogrucevap: "3",
      soruNo: "35",
      sinavno: "2"
    },
    resource: [
      null,
      "+++require(../../assets/bilsemData/2_35__2.jpeg)+++",
      "+++require(../../assets/bilsemData/2_35__3.jpeg)+++",
      "+++require(../../assets/bilsemData/2_35__4.jpeg)+++",
      "+++require(../../assets/bilsemData/2_35__5.jpeg)+++",
      "+++require(../../assets/bilsemData/2_35__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "",
      CevapSuresi: "60",
      dogrucevap: "3",
      soruNo: "36",
      sinavno: "2"
    },
    resource: [
      null,
      "+++require(../../assets/bilsemData/2_36__2.jpeg)+++",
      "+++require(../../assets/bilsemData/2_36__3.jpeg)+++",
      "+++require(../../assets/bilsemData/2_36__4.jpeg)+++",
      "+++require(../../assets/bilsemData/2_36__5.jpeg)+++",
      "+++require(../../assets/bilsemData/2_36__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "",
      CevapSuresi: "90",
      dogrucevap: "3",
      soruNo: "37",
      sinavno: "2"
    },
    resource: [
      null,
      "+++require(../../assets/bilsemData/2_37__2.jpeg)+++",
      "+++require(../../assets/bilsemData/2_37__3.jpeg)+++",
      "+++require(../../assets/bilsemData/2_37__4.jpeg)+++",
      "+++require(../../assets/bilsemData/2_37__5.jpeg)+++",
      "+++require(../../assets/bilsemData/2_37__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "",
      CevapSuresi: "90",
      dogrucevap: "2",
      soruNo: "38",
      sinavno: "2"
    },
    resource: [
      null,
      "+++require(../../assets/bilsemData/2_38__2.jpeg)+++",
      "+++require(../../assets/bilsemData/2_38__3.jpeg)+++",
      "+++require(../../assets/bilsemData/2_38__4.jpeg)+++",
      "+++require(../../assets/bilsemData/2_38__5.jpeg)+++",
      "+++require(../../assets/bilsemData/2_38__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "",
      CevapSuresi: "90",
      dogrucevap: "4",
      soruNo: "39",
      sinavno: "2"
    },
    resource: [
      null,
      "+++require(../../assets/bilsemData/2_39__2.jpeg)+++",
      "+++require(../../assets/bilsemData/2_39__3.jpeg)+++",
      "+++require(../../assets/bilsemData/2_39__4.jpeg)+++",
      "+++require(../../assets/bilsemData/2_39__5.jpeg)+++",
      "+++require(../../assets/bilsemData/2_39__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "",
      CevapSuresi: "90",
      dogrucevap: "2",
      soruNo: "40",
      sinavno: "2"
    },
    resource: [
      null,
      "+++require(../../assets/bilsemData/2_40__2.jpeg)+++",
      "+++require(../../assets/bilsemData/2_40__3.jpeg)+++",
      "+++require(../../assets/bilsemData/2_40__4.jpeg)+++",
      "+++require(../../assets/bilsemData/2_40__5.jpeg)+++",
      "+++require(../../assets/bilsemData/2_40__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "",
      CevapSuresi: "90",
      dogrucevap: "3",
      soruNo: "41",
      sinavno: "2"
    },
    resource: [
      null,
      "+++require(../../assets/bilsemData/2_41__2.jpeg)+++",
      "+++require(../../assets/bilsemData/2_41__3.jpeg)+++",
      "+++require(../../assets/bilsemData/2_41__4.jpeg)+++",
      "+++require(../../assets/bilsemData/2_41__5.jpeg)+++",
      "+++require(../../assets/bilsemData/2_41__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "",
      CevapSuresi: "90",
      dogrucevap: "3",
      soruNo: "42",
      sinavno: "2"
    },
    resource: [
      null,
      "+++require(../../assets/bilsemData/2_42__2.jpeg)+++",
      "+++require(../../assets/bilsemData/2_42__3.jpeg)+++",
      "+++require(../../assets/bilsemData/2_42__4.jpeg)+++",
      "+++require(../../assets/bilsemData/2_42__5.jpeg)+++",
      "+++require(../../assets/bilsemData/2_42__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "",
      CevapSuresi: "90",
      dogrucevap: "1",
      soruNo: "43",
      sinavno: "2"
    },
    resource: [
      null,
      "+++require(../../assets/bilsemData/2_43__2.jpeg)+++",
      "+++require(../../assets/bilsemData/2_43__3.jpeg)+++",
      "+++require(../../assets/bilsemData/2_43__4.jpeg)+++",
      "+++require(../../assets/bilsemData/2_43__5.jpeg)+++",
      "+++require(../../assets/bilsemData/2_43__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "",
      CevapSuresi: "90",
      dogrucevap: "3",
      soruNo: "44",
      sinavno: "2"
    },
    resource: [
      null,
      "+++require(../../assets/bilsemData/2_44__2.jpeg)+++",
      "+++require(../../assets/bilsemData/2_44__3.jpeg)+++",
      "+++require(../../assets/bilsemData/2_44__4.jpeg)+++",
      "+++require(../../assets/bilsemData/2_44__5.jpeg)+++",
      "+++require(../../assets/bilsemData/2_44__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "",
      CevapSuresi: "90",
      dogrucevap: "2",
      soruNo: "45",
      sinavno: "2"
    },
    resource: [
      null,
      "+++require(../../assets/bilsemData/2_45__2.jpeg)+++",
      "+++require(../../assets/bilsemData/2_45__3.jpeg)+++",
      "+++require(../../assets/bilsemData/2_45__4.jpeg)+++",
      "+++require(../../assets/bilsemData/2_45__5.jpeg)+++",
      "+++require(../../assets/bilsemData/2_45__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "",
      CevapSuresi: "90",
      dogrucevap: "4",
      soruNo: "46",
      sinavno: "2"
    },
    resource: [
      null,
      "+++require(../../assets/bilsemData/2_46__2.jpeg)+++",
      "+++require(../../assets/bilsemData/2_46__3.jpeg)+++",
      "+++require(../../assets/bilsemData/2_46__4.jpeg)+++",
      "+++require(../../assets/bilsemData/2_46__5.jpeg)+++",
      "+++require(../../assets/bilsemData/2_46__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "",
      CevapSuresi: "90",
      dogrucevap: "3",
      soruNo: "47",
      sinavno: "2"
    },
    resource: [
      null,
      "+++require(../../assets/bilsemData/2_47__2.jpeg)+++",
      "+++require(../../assets/bilsemData/2_47__3.jpeg)+++",
      "+++require(../../assets/bilsemData/2_47__4.jpeg)+++",
      "+++require(../../assets/bilsemData/2_47__5.jpeg)+++",
      "+++require(../../assets/bilsemData/2_47__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "",
      CevapSuresi: "90",
      dogrucevap: "4",
      soruNo: "48",
      sinavno: "2"
    },
    resource: [
      null,
      "+++require(../../assets/bilsemData/2_48__2.jpeg)+++",
      "+++require(../../assets/bilsemData/2_48__3.jpeg)+++",
      "+++require(../../assets/bilsemData/2_48__4.jpeg)+++",
      "+++require(../../assets/bilsemData/2_48__5.jpeg)+++",
      "+++require(../../assets/bilsemData/2_48__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "",
      CevapSuresi: "90",
      dogrucevap: "3",
      soruNo: "49",
      sinavno: "2"
    },
    resource: [
      null,
      "+++require(../../assets/bilsemData/2_49__2.jpeg)+++",
      "+++require(../../assets/bilsemData/2_49__3.jpeg)+++",
      "+++require(../../assets/bilsemData/2_49__4.jpeg)+++",
      "+++require(../../assets/bilsemData/2_49__5.jpeg)+++",
      "+++require(../../assets/bilsemData/2_49__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "",
      CevapSuresi: "90",
      dogrucevap: "3",
      soruNo: "50",
      sinavno: "2"
    },
    resource: [
      null,
      "+++require(../../assets/bilsemData/2_50__2.jpeg)+++",
      "+++require(../../assets/bilsemData/2_50__3.jpeg)+++",
      "+++require(../../assets/bilsemData/2_50__4.jpeg)+++",
      "+++require(../../assets/bilsemData/2_50__5.jpeg)+++",
      "+++require(../../assets/bilsemData/2_50__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "",
      CevapSuresi: "90",
      dogrucevap: "1",
      soruNo: "51",
      sinavno: "2"
    },
    resource: [
      null,
      "+++require(../../assets/bilsemData/2_51__2.jpeg)+++",
      "+++require(../../assets/bilsemData/2_51__3.jpeg)+++",
      "+++require(../../assets/bilsemData/2_51__4.jpeg)+++",
      "+++require(../../assets/bilsemData/2_51__5.jpeg)+++",
      "+++require(../../assets/bilsemData/2_51__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "",
      CevapSuresi: "90",
      dogrucevap: "1",
      soruNo: "52",
      sinavno: "2"
    },
    resource: [
      null,
      "+++require(../../assets/bilsemData/2_52__2.jpeg)+++",
      "+++require(../../assets/bilsemData/2_52__3.jpeg)+++",
      "+++require(../../assets/bilsemData/2_52__4.jpeg)+++",
      "+++require(../../assets/bilsemData/2_52__5.jpeg)+++",
      "+++require(../../assets/bilsemData/2_52__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "",
      CevapSuresi: "90",
      dogrucevap: "3",
      soruNo: "53",
      sinavno: "2"
    },
    resource: [
      null,
      "+++require(../../assets/bilsemData/2_53__2.jpeg)+++",
      "+++require(../../assets/bilsemData/2_53__3.jpeg)+++",
      "+++require(../../assets/bilsemData/2_53__4.jpeg)+++",
      "+++require(../../assets/bilsemData/2_53__5.jpeg)+++",
      "+++require(../../assets/bilsemData/2_53__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "",
      CevapSuresi: "90",
      dogrucevap: "3",
      soruNo: "54",
      sinavno: "2"
    },
    resource: [
      null,
      "+++require(../../assets/bilsemData/2_54__2.jpeg)+++",
      "+++require(../../assets/bilsemData/2_54__3.jpeg)+++",
      "+++require(../../assets/bilsemData/2_54__4.jpeg)+++",
      "+++require(../../assets/bilsemData/2_54__5.jpeg)+++",
      "+++require(../../assets/bilsemData/2_54__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "",
      CevapSuresi: "120",
      dogrucevap: "2",
      soruNo: "55",
      sinavno: "2"
    },
    resource: [
      null,
      "+++require(../../assets/bilsemData/2_55__2.jpeg)+++",
      "+++require(../../assets/bilsemData/2_55__3.jpeg)+++",
      "+++require(../../assets/bilsemData/2_55__4.jpeg)+++",
      "+++require(../../assets/bilsemData/2_55__5.jpeg)+++",
      "+++require(../../assets/bilsemData/2_55__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "",
      CevapSuresi: "120",
      dogrucevap: "2",
      soruNo: "56",
      sinavno: "2"
    },
    resource: [
      null,
      "+++require(../../assets/bilsemData/2_56__2.jpeg)+++",
      "+++require(../../assets/bilsemData/2_56__3.jpeg)+++",
      "+++require(../../assets/bilsemData/2_56__4.jpeg)+++",
      "+++require(../../assets/bilsemData/2_56__5.jpeg)+++",
      "+++require(../../assets/bilsemData/2_56__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "",
      CevapSuresi: "120",
      dogrucevap: "4",
      soruNo: "57",
      sinavno: "2"
    },
    resource: [
      null,
      "+++require(../../assets/bilsemData/2_57__2.jpeg)+++",
      "+++require(../../assets/bilsemData/2_57__3.jpeg)+++",
      "+++require(../../assets/bilsemData/2_57__4.jpeg)+++",
      "+++require(../../assets/bilsemData/2_57__5.jpeg)+++",
      "+++require(../../assets/bilsemData/2_57__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "90",
      CevapSuresi: "45",
      dogrucevap: "1",
      soruNo: "58",
      sinavno: "2"
    },
    resource: [
      "+++require(../../assets/bilsemData/2_58__1.jpeg)+++",
      "+++require(../../assets/bilsemData/2_58__2.jpeg)+++",
      "+++require(../../assets/bilsemData/2_58__3.jpeg)+++",
      "+++require(../../assets/bilsemData/2_58__4.jpeg)+++",
      "+++require(../../assets/bilsemData/2_58__5.jpeg)+++",
      "+++require(../../assets/bilsemData/2_58__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "",
      CevapSuresi: "45",
      dogrucevap: "1",
      soruNo: "59",
      sinavno: "2"
    },
    resource: [
      null,
      "+++require(../../assets/bilsemData/2_59__2.jpeg)+++",
      "+++require(../../assets/bilsemData/2_59__3.jpeg)+++",
      "+++require(../../assets/bilsemData/2_59__4.jpeg)+++",
      "+++require(../../assets/bilsemData/2_59__5.jpeg)+++",
      "+++require(../../assets/bilsemData/2_59__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "",
      CevapSuresi: "45",
      dogrucevap: "3",
      soruNo: "60",
      sinavno: "2"
    },
    resource: [
      null,
      "+++require(../../assets/bilsemData/2_60__2.jpeg)+++",
      "+++require(../../assets/bilsemData/2_60__3.jpeg)+++",
      "+++require(../../assets/bilsemData/2_60__4.jpeg)+++",
      "+++require(../../assets/bilsemData/2_60__5.jpeg)+++",
      "+++require(../../assets/bilsemData/2_60__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "10",
      CevapSuresi: "45",
      dogrucevap: "1",
      soruNo: "1",
      sinavno: "3"
    },
    resource: [
      "+++require(../../assets/bilsemData/3_1__1.jpeg)+++",
      null,
      "+++require(../../assets/bilsemData/3_1__3.jpeg)+++",
      "+++require(../../assets/bilsemData/3_1__4.jpeg)+++",
      "+++require(../../assets/bilsemData/3_1__5.jpeg)+++",
      "+++require(../../assets/bilsemData/3_1__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "15",
      CevapSuresi: "45",
      dogrucevap: "1",
      soruNo: "2",
      sinavno: "3"
    },
    resource: [
      "+++require(../../assets/bilsemData/3_2__1.jpeg)+++",
      null,
      "+++require(../../assets/bilsemData/3_2__3.jpeg)+++",
      "+++require(../../assets/bilsemData/3_2__4.jpeg)+++",
      "+++require(../../assets/bilsemData/3_2__5.jpeg)+++",
      "+++require(../../assets/bilsemData/3_2__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "15",
      CevapSuresi: "45",
      dogrucevap: "3",
      soruNo: "3",
      sinavno: "3"
    },
    resource: [
      "+++require(../../assets/bilsemData/3_3__1.jpeg)+++",
      "+++require(../../assets/bilsemData/3_3__2.jpeg)+++",
      "+++require(../../assets/bilsemData/3_3__3.jpeg)+++",
      "+++require(../../assets/bilsemData/3_3__4.jpeg)+++",
      "+++require(../../assets/bilsemData/3_3__5.jpeg)+++",
      "+++require(../../assets/bilsemData/3_3__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "25",
      CevapSuresi: "45",
      dogrucevap: "4",
      soruNo: "4",
      sinavno: "3"
    },
    resource: [
      "+++require(../../assets/bilsemData/3_4__1.jpeg)+++",
      "+++require(../../assets/bilsemData/3_4__2.jpeg)+++",
      "+++require(../../assets/bilsemData/3_4__3.jpeg)+++",
      "+++require(../../assets/bilsemData/3_4__4.jpeg)+++",
      "+++require(../../assets/bilsemData/3_4__5.jpeg)+++",
      "+++require(../../assets/bilsemData/3_4__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "20",
      CevapSuresi: "45",
      dogrucevap: "2",
      soruNo: "5",
      sinavno: "3"
    },
    resource: [
      "+++require(../../assets/bilsemData/3_5__1.jpeg)+++",
      "+++require(../../assets/bilsemData/3_5__2.jpeg)+++",
      "+++require(../../assets/bilsemData/3_5__3.jpeg)+++",
      "+++require(../../assets/bilsemData/3_5__4.jpeg)+++",
      "+++require(../../assets/bilsemData/3_5__5.jpeg)+++",
      "+++require(../../assets/bilsemData/3_5__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "25",
      CevapSuresi: "45",
      dogrucevap: "3",
      soruNo: "6",
      sinavno: "3"
    },
    resource: [
      "+++require(../../assets/bilsemData/3_6__1.jpeg)+++",
      "+++require(../../assets/bilsemData/3_6__2.jpeg)+++",
      "+++require(../../assets/bilsemData/3_6__3.jpeg)+++",
      "+++require(../../assets/bilsemData/3_6__4.jpeg)+++",
      "+++require(../../assets/bilsemData/3_6__5.jpeg)+++",
      "+++require(../../assets/bilsemData/3_6__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "25",
      CevapSuresi: "45",
      dogrucevap: "4",
      soruNo: "7",
      sinavno: "3"
    },
    resource: [
      "+++require(../../assets/bilsemData/3_7__1.jpeg)+++",
      "+++require(../../assets/bilsemData/3_7__2.jpeg)+++",
      "+++require(../../assets/bilsemData/3_7__3.jpeg)+++",
      "+++require(../../assets/bilsemData/3_7__4.jpeg)+++",
      "+++require(../../assets/bilsemData/3_7__5.jpeg)+++",
      "+++require(../../assets/bilsemData/3_7__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "25",
      CevapSuresi: "45",
      dogrucevap: "2",
      soruNo: "8",
      sinavno: "3"
    },
    resource: [
      "+++require(../../assets/bilsemData/3_8__1.jpeg)+++",
      "+++require(../../assets/bilsemData/3_8__2.jpeg)+++",
      "+++require(../../assets/bilsemData/3_8__3.jpeg)+++",
      "+++require(../../assets/bilsemData/3_8__4.jpeg)+++",
      "+++require(../../assets/bilsemData/3_8__5.jpeg)+++",
      "+++require(../../assets/bilsemData/3_8__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "25",
      CevapSuresi: "45",
      dogrucevap: "1",
      soruNo: "9",
      sinavno: "3"
    },
    resource: [
      "+++require(../../assets/bilsemData/3_9__1.jpeg)+++",
      "+++require(../../assets/bilsemData/3_9__2.jpeg)+++",
      "+++require(../../assets/bilsemData/3_9__3.jpeg)+++",
      "+++require(../../assets/bilsemData/3_9__4.jpeg)+++",
      "+++require(../../assets/bilsemData/3_9__5.jpeg)+++",
      "+++require(../../assets/bilsemData/3_9__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "25",
      CevapSuresi: "45",
      dogrucevap: "4",
      soruNo: "10",
      sinavno: "3"
    },
    resource: [
      "+++require(../../assets/bilsemData/3_10__1.jpeg)+++",
      null,
      "+++require(../../assets/bilsemData/3_10__3.jpeg)+++",
      "+++require(../../assets/bilsemData/3_10__4.jpeg)+++",
      "+++require(../../assets/bilsemData/3_10__5.jpeg)+++",
      "+++require(../../assets/bilsemData/3_10__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "10",
      CevapSuresi: "35",
      dogrucevap: "4",
      soruNo: "11",
      sinavno: "3"
    },
    resource: [
      "+++require(../../assets/bilsemData/3_11__1.jpeg)+++",
      null,
      "+++require(../../assets/bilsemData/3_11__3.jpeg)+++",
      "+++require(../../assets/bilsemData/3_11__4.jpeg)+++",
      "+++require(../../assets/bilsemData/3_11__5.jpeg)+++",
      "+++require(../../assets/bilsemData/3_11__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "15",
      CevapSuresi: "35",
      dogrucevap: "3",
      soruNo: "12",
      sinavno: "3"
    },
    resource: [
      "+++require(../../assets/bilsemData/3_12__1.jpeg)+++",
      null,
      "+++require(../../assets/bilsemData/3_12__3.jpeg)+++",
      "+++require(../../assets/bilsemData/3_12__4.jpeg)+++",
      "+++require(../../assets/bilsemData/3_12__5.jpeg)+++",
      "+++require(../../assets/bilsemData/3_12__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "20",
      CevapSuresi: "45",
      dogrucevap: "1",
      soruNo: "13",
      sinavno: "3"
    },
    resource: [
      "+++require(../../assets/bilsemData/3_13__1.jpeg)+++",
      null,
      "+++require(../../assets/bilsemData/3_13__3.jpeg)+++",
      "+++require(../../assets/bilsemData/3_13__4.jpeg)+++",
      "+++require(../../assets/bilsemData/3_13__5.jpeg)+++",
      "+++require(../../assets/bilsemData/3_13__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "15",
      CevapSuresi: "45",
      dogrucevap: "1",
      soruNo: "14",
      sinavno: "3"
    },
    resource: [
      "+++require(../../assets/bilsemData/3_14__1.jpeg)+++",
      "+++require(../../assets/bilsemData/3_14__2.jpeg)+++",
      "+++require(../../assets/bilsemData/3_14__3.jpeg)+++",
      "+++require(../../assets/bilsemData/3_14__4.jpeg)+++",
      "+++require(../../assets/bilsemData/3_14__5.jpeg)+++",
      "+++require(../../assets/bilsemData/3_14__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "15",
      CevapSuresi: "45",
      dogrucevap: "2",
      soruNo: "15",
      sinavno: "3"
    },
    resource: [
      "+++require(../../assets/bilsemData/3_15__1.jpeg)+++",
      "+++require(../../assets/bilsemData/3_15__2.jpeg)+++",
      "+++require(../../assets/bilsemData/3_15__3.jpeg)+++",
      "+++require(../../assets/bilsemData/3_15__4.jpeg)+++",
      "+++require(../../assets/bilsemData/3_15__5.jpeg)+++",
      "+++require(../../assets/bilsemData/3_15__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "20",
      CevapSuresi: "45",
      dogrucevap: "4",
      soruNo: "16",
      sinavno: "3"
    },
    resource: [
      "+++require(../../assets/bilsemData/3_16__1.jpeg)+++",
      "+++require(../../assets/bilsemData/3_16__2.jpeg)+++",
      "+++require(../../assets/bilsemData/3_16__3.jpeg)+++",
      "+++require(../../assets/bilsemData/3_16__4.jpeg)+++",
      "+++require(../../assets/bilsemData/3_16__5.jpeg)+++",
      "+++require(../../assets/bilsemData/3_16__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "20",
      CevapSuresi: "45",
      dogrucevap: "1",
      soruNo: "17",
      sinavno: "3"
    },
    resource: [
      "+++require(../../assets/bilsemData/3_17__1.jpeg)+++",
      "+++require(../../assets/bilsemData/3_17__2.jpeg)+++",
      "+++require(../../assets/bilsemData/3_17__3.jpeg)+++",
      "+++require(../../assets/bilsemData/3_17__4.jpeg)+++",
      "+++require(../../assets/bilsemData/3_17__5.jpeg)+++",
      "+++require(../../assets/bilsemData/3_17__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "20",
      CevapSuresi: "45",
      dogrucevap: "2",
      soruNo: "18",
      sinavno: "3"
    },
    resource: [
      "+++require(../../assets/bilsemData/3_18__1.jpeg)+++",
      "+++require(../../assets/bilsemData/3_18__2.jpeg)+++",
      "+++require(../../assets/bilsemData/3_18__3.jpeg)+++",
      "+++require(../../assets/bilsemData/3_18__4.jpeg)+++",
      "+++require(../../assets/bilsemData/3_18__5.jpeg)+++",
      "+++require(../../assets/bilsemData/3_18__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "",
      CevapSuresi: "60",
      dogrucevap: "3",
      soruNo: "19",
      sinavno: "3"
    },
    resource: [
      null,
      "+++require(../../assets/bilsemData/3_19__2.jpeg)+++",
      "+++require(../../assets/bilsemData/3_19__3.jpeg)+++",
      "+++require(../../assets/bilsemData/3_19__4.jpeg)+++",
      "+++require(../../assets/bilsemData/3_19__5.jpeg)+++",
      "+++require(../../assets/bilsemData/3_19__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "",
      CevapSuresi: "60",
      dogrucevap: "1",
      soruNo: "20",
      sinavno: "3"
    },
    resource: [
      null,
      "+++require(../../assets/bilsemData/3_20__2.jpeg)+++",
      "+++require(../../assets/bilsemData/3_20__3.jpeg)+++",
      "+++require(../../assets/bilsemData/3_20__4.jpeg)+++",
      "+++require(../../assets/bilsemData/3_20__5.jpeg)+++",
      "+++require(../../assets/bilsemData/3_20__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "",
      CevapSuresi: "60",
      dogrucevap: "2",
      soruNo: "21",
      sinavno: "3"
    },
    resource: [
      null,
      "+++require(../../assets/bilsemData/3_21__2.jpeg)+++",
      "+++require(../../assets/bilsemData/3_21__3.jpeg)+++",
      "+++require(../../assets/bilsemData/3_21__4.jpeg)+++",
      "+++require(../../assets/bilsemData/3_21__5.jpeg)+++",
      "+++require(../../assets/bilsemData/3_21__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "",
      CevapSuresi: "120",
      dogrucevap: "2",
      soruNo: "22",
      sinavno: "3"
    },
    resource: [
      null,
      "+++require(../../assets/bilsemData/3_22__2.jpeg)+++",
      "+++require(../../assets/bilsemData/3_22__3.jpeg)+++",
      "+++require(../../assets/bilsemData/3_22__4.jpeg)+++",
      "+++require(../../assets/bilsemData/3_22__5.jpeg)+++",
      "+++require(../../assets/bilsemData/3_22__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "",
      CevapSuresi: "120",
      dogrucevap: "2",
      soruNo: "23",
      sinavno: "3"
    },
    resource: [
      null,
      "+++require(../../assets/bilsemData/3_23__2.jpeg)+++",
      "+++require(../../assets/bilsemData/3_23__3.jpeg)+++",
      "+++require(../../assets/bilsemData/3_23__4.jpeg)+++",
      "+++require(../../assets/bilsemData/3_23__5.jpeg)+++",
      "+++require(../../assets/bilsemData/3_23__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "",
      CevapSuresi: "60",
      dogrucevap: "4",
      soruNo: "24",
      sinavno: "3"
    },
    resource: [
      null,
      "+++require(../../assets/bilsemData/3_24__2.jpeg)+++",
      "+++require(../../assets/bilsemData/3_24__3.jpeg)+++",
      "+++require(../../assets/bilsemData/3_24__4.jpeg)+++",
      "+++require(../../assets/bilsemData/3_24__5.jpeg)+++",
      "+++require(../../assets/bilsemData/3_24__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "",
      CevapSuresi: "60",
      dogrucevap: "1",
      soruNo: "25",
      sinavno: "3"
    },
    resource: [
      null,
      "+++require(../../assets/bilsemData/3_25__2.jpeg)+++",
      "+++require(../../assets/bilsemData/3_25__3.jpeg)+++",
      "+++require(../../assets/bilsemData/3_25__4.jpeg)+++",
      "+++require(../../assets/bilsemData/3_25__5.jpeg)+++",
      "+++require(../../assets/bilsemData/3_25__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "",
      CevapSuresi: "60",
      dogrucevap: "2",
      soruNo: "26",
      sinavno: "3"
    },
    resource: [
      null,
      "+++require(../../assets/bilsemData/3_26__2.jpeg)+++",
      "+++require(../../assets/bilsemData/3_26__3.jpeg)+++",
      "+++require(../../assets/bilsemData/3_26__4.jpeg)+++",
      "+++require(../../assets/bilsemData/3_26__5.jpeg)+++",
      "+++require(../../assets/bilsemData/3_26__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "",
      CevapSuresi: "60",
      dogrucevap: "2",
      soruNo: "27",
      sinavno: "3"
    },
    resource: [
      null,
      "+++require(../../assets/bilsemData/3_27__2.jpeg)+++",
      "+++require(../../assets/bilsemData/3_27__3.jpeg)+++",
      "+++require(../../assets/bilsemData/3_27__4.jpeg)+++",
      "+++require(../../assets/bilsemData/3_27__5.jpeg)+++",
      "+++require(../../assets/bilsemData/3_27__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "",
      CevapSuresi: "60",
      dogrucevap: "4",
      soruNo: "28",
      sinavno: "3"
    },
    resource: [
      null,
      "+++require(../../assets/bilsemData/3_28__2.jpeg)+++",
      "+++require(../../assets/bilsemData/3_28__3.jpeg)+++",
      "+++require(../../assets/bilsemData/3_28__4.jpeg)+++",
      "+++require(../../assets/bilsemData/3_28__5.jpeg)+++",
      "+++require(../../assets/bilsemData/3_28__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "",
      CevapSuresi: "60",
      dogrucevap: "3",
      soruNo: "29",
      sinavno: "3"
    },
    resource: [
      null,
      "+++require(../../assets/bilsemData/3_29__2.jpeg)+++",
      "+++require(../../assets/bilsemData/3_29__3.jpeg)+++",
      "+++require(../../assets/bilsemData/3_29__4.jpeg)+++",
      "+++require(../../assets/bilsemData/3_29__5.jpeg)+++",
      "+++require(../../assets/bilsemData/3_29__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "",
      CevapSuresi: "60",
      dogrucevap: "4",
      soruNo: "30",
      sinavno: "3"
    },
    resource: [
      null,
      "+++require(../../assets/bilsemData/3_30__2.jpeg)+++",
      "+++require(../../assets/bilsemData/3_30__3.jpeg)+++",
      "+++require(../../assets/bilsemData/3_30__4.jpeg)+++",
      "+++require(../../assets/bilsemData/3_30__5.jpeg)+++",
      "+++require(../../assets/bilsemData/3_30__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "",
      CevapSuresi: "60",
      dogrucevap: "2",
      soruNo: "31",
      sinavno: "3"
    },
    resource: [
      null,
      "+++require(../../assets/bilsemData/3_31__2.jpeg)+++",
      "+++require(../../assets/bilsemData/3_31__3.jpeg)+++",
      "+++require(../../assets/bilsemData/3_31__4.jpeg)+++",
      "+++require(../../assets/bilsemData/3_31__5.jpeg)+++",
      "+++require(../../assets/bilsemData/3_31__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "",
      CevapSuresi: "60",
      dogrucevap: "4",
      soruNo: "32",
      sinavno: "3"
    },
    resource: [
      null,
      "+++require(../../assets/bilsemData/3_32__2.jpeg)+++",
      "+++require(../../assets/bilsemData/3_32__3.jpeg)+++",
      "+++require(../../assets/bilsemData/3_32__4.jpeg)+++",
      "+++require(../../assets/bilsemData/3_32__5.jpeg)+++",
      "+++require(../../assets/bilsemData/3_32__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "",
      CevapSuresi: "60",
      dogrucevap: "1",
      soruNo: "33",
      sinavno: "3"
    },
    resource: [
      null,
      "+++require(../../assets/bilsemData/3_33__2.jpeg)+++",
      "+++require(../../assets/bilsemData/3_33__3.jpeg)+++",
      "+++require(../../assets/bilsemData/3_33__4.jpeg)+++",
      "+++require(../../assets/bilsemData/3_33__5.jpeg)+++",
      "+++require(../../assets/bilsemData/3_33__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "",
      CevapSuresi: "60",
      dogrucevap: "3",
      soruNo: "34",
      sinavno: "3"
    },
    resource: [
      null,
      "+++require(../../assets/bilsemData/3_34__2.jpeg)+++",
      "+++require(../../assets/bilsemData/3_34__3.jpeg)+++",
      "+++require(../../assets/bilsemData/3_34__4.jpeg)+++",
      "+++require(../../assets/bilsemData/3_34__5.jpeg)+++",
      "+++require(../../assets/bilsemData/3_34__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "",
      CevapSuresi: "60",
      dogrucevap: "4",
      soruNo: "35",
      sinavno: "3"
    },
    resource: [
      null,
      "+++require(../../assets/bilsemData/3_35__2.jpeg)+++",
      "+++require(../../assets/bilsemData/3_35__3.jpeg)+++",
      "+++require(../../assets/bilsemData/3_35__4.jpeg)+++",
      "+++require(../../assets/bilsemData/3_35__5.jpeg)+++",
      "+++require(../../assets/bilsemData/3_35__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "",
      CevapSuresi: "60",
      dogrucevap: "4",
      soruNo: "36",
      sinavno: "3"
    },
    resource: [
      null,
      "+++require(../../assets/bilsemData/3_36__2.jpeg)+++",
      "+++require(../../assets/bilsemData/3_36__3.jpeg)+++",
      "+++require(../../assets/bilsemData/3_36__4.jpeg)+++",
      "+++require(../../assets/bilsemData/3_36__5.jpeg)+++",
      "+++require(../../assets/bilsemData/3_36__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "",
      CevapSuresi: "90",
      dogrucevap: "4",
      soruNo: "37",
      sinavno: "3"
    },
    resource: [
      null,
      "+++require(../../assets/bilsemData/3_37__2.jpeg)+++",
      "+++require(../../assets/bilsemData/3_37__3.jpeg)+++",
      "+++require(../../assets/bilsemData/3_37__4.jpeg)+++",
      "+++require(../../assets/bilsemData/3_37__5.jpeg)+++",
      "+++require(../../assets/bilsemData/3_37__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "",
      CevapSuresi: "90",
      dogrucevap: "3",
      soruNo: "38",
      sinavno: "3"
    },
    resource: [
      null,
      "+++require(../../assets/bilsemData/3_38__2.jpeg)+++",
      "+++require(../../assets/bilsemData/3_38__3.jpeg)+++",
      "+++require(../../assets/bilsemData/3_38__4.jpeg)+++",
      "+++require(../../assets/bilsemData/3_38__5.jpeg)+++",
      "+++require(../../assets/bilsemData/3_38__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "",
      CevapSuresi: "90",
      dogrucevap: "1",
      soruNo: "39",
      sinavno: "3"
    },
    resource: [
      null,
      "+++require(../../assets/bilsemData/3_39__2.jpeg)+++",
      "+++require(../../assets/bilsemData/3_39__3.jpeg)+++",
      "+++require(../../assets/bilsemData/3_39__4.jpeg)+++",
      "+++require(../../assets/bilsemData/3_39__5.jpeg)+++",
      "+++require(../../assets/bilsemData/3_39__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "",
      CevapSuresi: "90",
      dogrucevap: "3",
      soruNo: "40",
      sinavno: "3"
    },
    resource: [
      null,
      "+++require(../../assets/bilsemData/3_40__2.jpeg)+++",
      "+++require(../../assets/bilsemData/3_40__3.jpeg)+++",
      "+++require(../../assets/bilsemData/3_40__4.jpeg)+++",
      "+++require(../../assets/bilsemData/3_40__5.jpeg)+++",
      "+++require(../../assets/bilsemData/3_40__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "",
      CevapSuresi: "90",
      dogrucevap: "2",
      soruNo: "41",
      sinavno: "3"
    },
    resource: [
      null,
      "+++require(../../assets/bilsemData/3_41__2.jpeg)+++",
      "+++require(../../assets/bilsemData/3_41__3.jpeg)+++",
      "+++require(../../assets/bilsemData/3_41__4.jpeg)+++",
      "+++require(../../assets/bilsemData/3_41__5.jpeg)+++",
      "+++require(../../assets/bilsemData/3_41__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "",
      CevapSuresi: "90",
      dogrucevap: "4",
      soruNo: "42",
      sinavno: "3"
    },
    resource: [
      null,
      "+++require(../../assets/bilsemData/3_42__2.jpeg)+++",
      "+++require(../../assets/bilsemData/3_42__3.jpeg)+++",
      "+++require(../../assets/bilsemData/3_42__4.jpeg)+++",
      "+++require(../../assets/bilsemData/3_42__5.jpeg)+++",
      "+++require(../../assets/bilsemData/3_42__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "",
      CevapSuresi: "90",
      dogrucevap: "1",
      soruNo: "43",
      sinavno: "3"
    },
    resource: [
      null,
      "+++require(../../assets/bilsemData/3_43__2.jpeg)+++",
      "+++require(../../assets/bilsemData/3_43__3.jpeg)+++",
      "+++require(../../assets/bilsemData/3_43__4.jpeg)+++",
      "+++require(../../assets/bilsemData/3_43__5.jpeg)+++",
      "+++require(../../assets/bilsemData/3_43__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "",
      CevapSuresi: "90",
      dogrucevap: "2",
      soruNo: "44",
      sinavno: "3"
    },
    resource: [
      null,
      "+++require(../../assets/bilsemData/3_44__2.jpeg)+++",
      "+++require(../../assets/bilsemData/3_44__3.jpeg)+++",
      "+++require(../../assets/bilsemData/3_44__4.jpeg)+++",
      "+++require(../../assets/bilsemData/3_44__5.jpeg)+++",
      "+++require(../../assets/bilsemData/3_44__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "",
      CevapSuresi: "90",
      dogrucevap: "4",
      soruNo: "45",
      sinavno: "3"
    },
    resource: [
      null,
      "+++require(../../assets/bilsemData/3_45__2.jpeg)+++",
      "+++require(../../assets/bilsemData/3_45__3.jpeg)+++",
      "+++require(../../assets/bilsemData/3_45__4.jpeg)+++",
      "+++require(../../assets/bilsemData/3_45__5.jpeg)+++",
      "+++require(../../assets/bilsemData/3_45__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "",
      CevapSuresi: "90",
      dogrucevap: "3",
      soruNo: "46",
      sinavno: "3"
    },
    resource: [
      null,
      "+++require(../../assets/bilsemData/3_46__2.jpeg)+++",
      "+++require(../../assets/bilsemData/3_46__3.jpeg)+++",
      "+++require(../../assets/bilsemData/3_46__4.jpeg)+++",
      "+++require(../../assets/bilsemData/3_46__5.jpeg)+++",
      "+++require(../../assets/bilsemData/3_46__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "",
      CevapSuresi: "90",
      dogrucevap: "4",
      soruNo: "47",
      sinavno: "3"
    },
    resource: [
      null,
      "+++require(../../assets/bilsemData/3_47__2.jpeg)+++",
      "+++require(../../assets/bilsemData/3_47__3.jpeg)+++",
      "+++require(../../assets/bilsemData/3_47__4.jpeg)+++",
      "+++require(../../assets/bilsemData/3_47__5.jpeg)+++",
      "+++require(../../assets/bilsemData/3_47__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "",
      CevapSuresi: "90",
      dogrucevap: "1",
      soruNo: "48",
      sinavno: "3"
    },
    resource: [
      null,
      "+++require(../../assets/bilsemData/3_48__2.jpeg)+++",
      "+++require(../../assets/bilsemData/3_48__3.jpeg)+++",
      "+++require(../../assets/bilsemData/3_48__4.jpeg)+++",
      "+++require(../../assets/bilsemData/3_48__5.jpeg)+++",
      "+++require(../../assets/bilsemData/3_48__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "",
      CevapSuresi: "90",
      dogrucevap: "4",
      soruNo: "49",
      sinavno: "3"
    },
    resource: [
      null,
      "+++require(../../assets/bilsemData/3_49__2.jpeg)+++",
      "+++require(../../assets/bilsemData/3_49__3.jpeg)+++",
      "+++require(../../assets/bilsemData/3_49__4.jpeg)+++",
      "+++require(../../assets/bilsemData/3_49__5.jpeg)+++",
      "+++require(../../assets/bilsemData/3_49__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "",
      CevapSuresi: "90",
      dogrucevap: "2",
      soruNo: "50",
      sinavno: "3"
    },
    resource: [
      null,
      "+++require(../../assets/bilsemData/3_50__2.jpeg)+++",
      "+++require(../../assets/bilsemData/3_50__3.jpeg)+++",
      "+++require(../../assets/bilsemData/3_50__4.jpeg)+++",
      "+++require(../../assets/bilsemData/3_50__5.jpeg)+++",
      "+++require(../../assets/bilsemData/3_50__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "",
      CevapSuresi: "90",
      dogrucevap: "4",
      soruNo: "51",
      sinavno: "3"
    },
    resource: [
      null,
      "+++require(../../assets/bilsemData/3_51__2.jpeg)+++",
      "+++require(../../assets/bilsemData/3_51__3.jpeg)+++",
      "+++require(../../assets/bilsemData/3_51__4.jpeg)+++",
      "+++require(../../assets/bilsemData/3_51__5.jpeg)+++",
      "+++require(../../assets/bilsemData/3_51__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "",
      CevapSuresi: "90",
      dogrucevap: "2",
      soruNo: "52",
      sinavno: "3"
    },
    resource: [
      null,
      "+++require(../../assets/bilsemData/3_52__2.jpeg)+++",
      "+++require(../../assets/bilsemData/3_52__3.jpeg)+++",
      "+++require(../../assets/bilsemData/3_52__4.jpeg)+++",
      "+++require(../../assets/bilsemData/3_52__5.jpeg)+++",
      "+++require(../../assets/bilsemData/3_52__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "",
      CevapSuresi: "90",
      dogrucevap: "2",
      soruNo: "53",
      sinavno: "3"
    },
    resource: [
      null,
      "+++require(../../assets/bilsemData/3_53__2.jpeg)+++",
      "+++require(../../assets/bilsemData/3_53__3.jpeg)+++",
      "+++require(../../assets/bilsemData/3_53__4.jpeg)+++",
      "+++require(../../assets/bilsemData/3_53__5.jpeg)+++",
      "+++require(../../assets/bilsemData/3_53__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "",
      CevapSuresi: "90",
      dogrucevap: "1",
      soruNo: "54",
      sinavno: "3"
    },
    resource: [
      null,
      "+++require(../../assets/bilsemData/3_54__2.jpeg)+++",
      "+++require(../../assets/bilsemData/3_54__3.jpeg)+++",
      "+++require(../../assets/bilsemData/3_54__4.jpeg)+++",
      "+++require(../../assets/bilsemData/3_54__5.jpeg)+++",
      "+++require(../../assets/bilsemData/3_54__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "",
      CevapSuresi: "120",
      dogrucevap: "1",
      soruNo: "55",
      sinavno: "3"
    },
    resource: [
      null,
      "+++require(../../assets/bilsemData/3_55__2.jpeg)+++",
      "+++require(../../assets/bilsemData/3_55__3.jpeg)+++",
      "+++require(../../assets/bilsemData/3_55__4.jpeg)+++",
      "+++require(../../assets/bilsemData/3_55__5.jpeg)+++",
      "+++require(../../assets/bilsemData/3_55__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "",
      CevapSuresi: "120",
      dogrucevap: "3",
      soruNo: "56",
      sinavno: "3"
    },
    resource: [
      null,
      "+++require(../../assets/bilsemData/3_56__2.jpeg)+++",
      "+++require(../../assets/bilsemData/3_56__3.jpeg)+++",
      "+++require(../../assets/bilsemData/3_56__4.jpeg)+++",
      "+++require(../../assets/bilsemData/3_56__5.jpeg)+++",
      "+++require(../../assets/bilsemData/3_56__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "",
      CevapSuresi: "120",
      dogrucevap: "2",
      soruNo: "57",
      sinavno: "3"
    },
    resource: [
      null,
      "+++require(../../assets/bilsemData/3_57__2.jpeg)+++",
      "+++require(../../assets/bilsemData/3_57__3.jpeg)+++",
      "+++require(../../assets/bilsemData/3_57__4.jpeg)+++",
      "+++require(../../assets/bilsemData/3_57__5.jpeg)+++",
      "+++require(../../assets/bilsemData/3_57__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "120",
      CevapSuresi: "45",
      dogrucevap: "1",
      soruNo: "58",
      sinavno: "3"
    },
    resource: [
      "+++require(../../assets/bilsemData/3_58__1.jpeg)+++",
      "+++require(../../assets/bilsemData/3_58__2.jpeg)+++",
      "+++require(../../assets/bilsemData/3_58__3.jpeg)+++",
      "+++require(../../assets/bilsemData/3_58__4.jpeg)+++",
      "+++require(../../assets/bilsemData/3_58__5.jpeg)+++",
      "+++require(../../assets/bilsemData/3_58__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "",
      CevapSuresi: "45",
      dogrucevap: "2",
      soruNo: "59",
      sinavno: "3"
    },
    resource: [
      null,
      "+++require(../../assets/bilsemData/3_59__2.jpeg)+++",
      "+++require(../../assets/bilsemData/3_59__3.jpeg)+++",
      "+++require(../../assets/bilsemData/3_59__4.jpeg)+++",
      "+++require(../../assets/bilsemData/3_59__5.jpeg)+++",
      "+++require(../../assets/bilsemData/3_59__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "",
      CevapSuresi: "45",
      dogrucevap: "2",
      soruNo: "60",
      sinavno: "3"
    },
    resource: [
      null,
      "+++require(../../assets/bilsemData/3_60__2.jpeg)+++",
      "+++require(../../assets/bilsemData/3_60__3.jpeg)+++",
      "+++require(../../assets/bilsemData/3_60__4.jpeg)+++",
      "+++require(../../assets/bilsemData/3_60__5.jpeg)+++",
      "+++require(../../assets/bilsemData/3_60__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "10",
      CevapSuresi: "45",
      dogrucevap: "2",
      soruNo: "1",
      sinavno: "4"
    },
    resource: [
      "+++require(../../assets/bilsemData/4_1__1.jpeg)+++",
      null,
      "+++require(../../assets/bilsemData/4_1__3.jpeg)+++",
      "+++require(../../assets/bilsemData/4_1__4.jpeg)+++",
      "+++require(../../assets/bilsemData/4_1__5.jpeg)+++",
      "+++require(../../assets/bilsemData/4_1__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "15",
      CevapSuresi: "45",
      dogrucevap: "4",
      soruNo: "2",
      sinavno: "4"
    },
    resource: [
      "+++require(../../assets/bilsemData/4_2__1.jpeg)+++",
      null,
      "+++require(../../assets/bilsemData/4_2__3.jpeg)+++",
      "+++require(../../assets/bilsemData/4_2__4.jpeg)+++",
      "+++require(../../assets/bilsemData/4_2__5.jpeg)+++",
      "+++require(../../assets/bilsemData/4_2__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "15",
      CevapSuresi: "45",
      dogrucevap: "1",
      soruNo: "3",
      sinavno: "4"
    },
    resource: [
      "+++require(../../assets/bilsemData/4_3__1.jpeg)+++",
      "+++require(../../assets/bilsemData/4_3__2.jpeg)+++",
      "+++require(../../assets/bilsemData/4_3__3.jpeg)+++",
      "+++require(../../assets/bilsemData/4_3__4.jpeg)+++",
      "+++require(../../assets/bilsemData/4_3__5.jpeg)+++",
      "+++require(../../assets/bilsemData/4_3__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "25",
      CevapSuresi: "45",
      dogrucevap: "2",
      soruNo: "4",
      sinavno: "4"
    },
    resource: [
      "+++require(../../assets/bilsemData/4_4__1.jpeg)+++",
      "+++require(../../assets/bilsemData/4_4__2.jpeg)+++",
      "+++require(../../assets/bilsemData/4_4__3.jpeg)+++",
      "+++require(../../assets/bilsemData/4_4__4.jpeg)+++",
      "+++require(../../assets/bilsemData/4_4__5.jpeg)+++",
      "+++require(../../assets/bilsemData/4_4__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "20",
      CevapSuresi: "45",
      dogrucevap: "1",
      soruNo: "5",
      sinavno: "4"
    },
    resource: [
      "+++require(../../assets/bilsemData/4_5__1.jpeg)+++",
      "+++require(../../assets/bilsemData/4_5__2.jpeg)+++",
      "+++require(../../assets/bilsemData/4_5__3.jpeg)+++",
      "+++require(../../assets/bilsemData/4_5__4.jpeg)+++",
      "+++require(../../assets/bilsemData/4_5__5.jpeg)+++",
      "+++require(../../assets/bilsemData/4_5__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "25",
      CevapSuresi: "45",
      dogrucevap: "1",
      soruNo: "6",
      sinavno: "4"
    },
    resource: [
      "+++require(../../assets/bilsemData/4_6__1.jpeg)+++",
      "+++require(../../assets/bilsemData/4_6__2.jpeg)+++",
      "+++require(../../assets/bilsemData/4_6__3.jpeg)+++",
      "+++require(../../assets/bilsemData/4_6__4.jpeg)+++",
      "+++require(../../assets/bilsemData/4_6__5.jpeg)+++",
      "+++require(../../assets/bilsemData/4_6__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "25",
      CevapSuresi: "45",
      dogrucevap: "2",
      soruNo: "7",
      sinavno: "4"
    },
    resource: [
      "+++require(../../assets/bilsemData/4_7__1.jpeg)+++",
      "+++require(../../assets/bilsemData/4_7__2.jpeg)+++",
      "+++require(../../assets/bilsemData/4_7__3.jpeg)+++",
      "+++require(../../assets/bilsemData/4_7__4.jpeg)+++",
      "+++require(../../assets/bilsemData/4_7__5.jpeg)+++",
      "+++require(../../assets/bilsemData/4_7__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "25",
      CevapSuresi: "45",
      dogrucevap: "1",
      soruNo: "8",
      sinavno: "4"
    },
    resource: [
      "+++require(../../assets/bilsemData/4_8__1.jpeg)+++",
      "+++require(../../assets/bilsemData/4_8__2.jpeg)+++",
      "+++require(../../assets/bilsemData/4_8__3.jpeg)+++",
      "+++require(../../assets/bilsemData/4_8__4.jpeg)+++",
      "+++require(../../assets/bilsemData/4_8__5.jpeg)+++",
      "+++require(../../assets/bilsemData/4_8__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "25",
      CevapSuresi: "45",
      dogrucevap: "1",
      soruNo: "9",
      sinavno: "4"
    },
    resource: [
      "+++require(../../assets/bilsemData/4_9__1.jpeg)+++",
      "+++require(../../assets/bilsemData/4_9__2.jpeg)+++",
      "+++require(../../assets/bilsemData/4_9__3.jpeg)+++",
      "+++require(../../assets/bilsemData/4_9__4.jpeg)+++",
      "+++require(../../assets/bilsemData/4_9__5.jpeg)+++",
      "+++require(../../assets/bilsemData/4_9__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "25",
      CevapSuresi: "45",
      dogrucevap: "2",
      soruNo: "10",
      sinavno: "4"
    },
    resource: [
      "+++require(../../assets/bilsemData/4_10__1.jpeg)+++",
      null,
      "+++require(../../assets/bilsemData/4_10__3.jpeg)+++",
      "+++require(../../assets/bilsemData/4_10__4.jpeg)+++",
      "+++require(../../assets/bilsemData/4_10__5.jpeg)+++",
      "+++require(../../assets/bilsemData/4_10__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "10",
      CevapSuresi: "35",
      dogrucevap: "1",
      soruNo: "11",
      sinavno: "4"
    },
    resource: [
      "+++require(../../assets/bilsemData/4_11__1.jpeg)+++",
      null,
      "+++require(../../assets/bilsemData/4_11__3.jpeg)+++",
      "+++require(../../assets/bilsemData/4_11__4.jpeg)+++",
      "+++require(../../assets/bilsemData/4_11__5.jpeg)+++",
      "+++require(../../assets/bilsemData/4_11__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "15",
      CevapSuresi: "35",
      dogrucevap: "1",
      soruNo: "12",
      sinavno: "4"
    },
    resource: [
      "+++require(../../assets/bilsemData/4_12__1.jpeg)+++",
      null,
      "+++require(../../assets/bilsemData/4_12__3.jpeg)+++",
      "+++require(../../assets/bilsemData/4_12__4.jpeg)+++",
      "+++require(../../assets/bilsemData/4_12__5.jpeg)+++",
      "+++require(../../assets/bilsemData/4_12__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "20",
      CevapSuresi: "45",
      dogrucevap: "3",
      soruNo: "13",
      sinavno: "4"
    },
    resource: [
      "+++require(../../assets/bilsemData/4_13__1.jpeg)+++",
      null,
      "+++require(../../assets/bilsemData/4_13__3.jpeg)+++",
      "+++require(../../assets/bilsemData/4_13__4.jpeg)+++",
      "+++require(../../assets/bilsemData/4_13__5.jpeg)+++",
      "+++require(../../assets/bilsemData/4_13__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "15",
      CevapSuresi: "45",
      dogrucevap: "4",
      soruNo: "14",
      sinavno: "4"
    },
    resource: [
      "+++require(../../assets/bilsemData/4_14__1.jpeg)+++",
      "+++require(../../assets/bilsemData/4_14__2.jpeg)+++",
      "+++require(../../assets/bilsemData/4_14__3.jpeg)+++",
      "+++require(../../assets/bilsemData/4_14__4.jpeg)+++",
      "+++require(../../assets/bilsemData/4_14__5.jpeg)+++",
      "+++require(../../assets/bilsemData/4_14__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "15",
      CevapSuresi: "45",
      dogrucevap: "1",
      soruNo: "15",
      sinavno: "4"
    },
    resource: [
      "+++require(../../assets/bilsemData/4_15__1.jpeg)+++",
      "+++require(../../assets/bilsemData/4_15__2.jpeg)+++",
      "+++require(../../assets/bilsemData/4_15__3.jpeg)+++",
      "+++require(../../assets/bilsemData/4_15__4.jpeg)+++",
      "+++require(../../assets/bilsemData/4_15__5.jpeg)+++",
      "+++require(../../assets/bilsemData/4_15__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "20",
      CevapSuresi: "45",
      dogrucevap: "1",
      soruNo: "16",
      sinavno: "4"
    },
    resource: [
      "+++require(../../assets/bilsemData/4_16__1.jpeg)+++",
      "+++require(../../assets/bilsemData/4_16__2.jpeg)+++",
      "+++require(../../assets/bilsemData/4_16__3.jpeg)+++",
      "+++require(../../assets/bilsemData/4_16__4.jpeg)+++",
      "+++require(../../assets/bilsemData/4_16__5.jpeg)+++",
      "+++require(../../assets/bilsemData/4_16__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "20",
      CevapSuresi: "45",
      dogrucevap: "4",
      soruNo: "17",
      sinavno: "4"
    },
    resource: [
      "+++require(../../assets/bilsemData/4_17__1.jpeg)+++",
      "+++require(../../assets/bilsemData/4_17__2.jpeg)+++",
      "+++require(../../assets/bilsemData/4_17__3.jpeg)+++",
      "+++require(../../assets/bilsemData/4_17__4.jpeg)+++",
      "+++require(../../assets/bilsemData/4_17__5.jpeg)+++",
      "+++require(../../assets/bilsemData/4_17__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "20",
      CevapSuresi: "45",
      dogrucevap: "1",
      soruNo: "18",
      sinavno: "4"
    },
    resource: [
      "+++require(../../assets/bilsemData/4_18__1.jpeg)+++",
      "+++require(../../assets/bilsemData/4_18__2.jpeg)+++",
      "+++require(../../assets/bilsemData/4_18__3.jpeg)+++",
      "+++require(../../assets/bilsemData/4_18__4.jpeg)+++",
      "+++require(../../assets/bilsemData/4_18__5.jpeg)+++",
      "+++require(../../assets/bilsemData/4_18__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "",
      CevapSuresi: "60",
      dogrucevap: "2",
      soruNo: "19",
      sinavno: "4"
    },
    resource: [
      null,
      "+++require(../../assets/bilsemData/4_19__2.jpeg)+++",
      "+++require(../../assets/bilsemData/4_19__3.jpeg)+++",
      "+++require(../../assets/bilsemData/4_19__4.jpeg)+++",
      "+++require(../../assets/bilsemData/4_19__5.jpeg)+++",
      "+++require(../../assets/bilsemData/4_19__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "",
      CevapSuresi: "60",
      dogrucevap: "2",
      soruNo: "20",
      sinavno: "4"
    },
    resource: [
      null,
      "+++require(../../assets/bilsemData/4_20__2.jpeg)+++",
      "+++require(../../assets/bilsemData/4_20__3.jpeg)+++",
      "+++require(../../assets/bilsemData/4_20__4.jpeg)+++",
      "+++require(../../assets/bilsemData/4_20__5.jpeg)+++",
      "+++require(../../assets/bilsemData/4_20__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "",
      CevapSuresi: "60",
      dogrucevap: "1",
      soruNo: "21",
      sinavno: "4"
    },
    resource: [
      null,
      "+++require(../../assets/bilsemData/4_21__2.jpeg)+++",
      "+++require(../../assets/bilsemData/4_21__3.jpeg)+++",
      "+++require(../../assets/bilsemData/4_21__4.jpeg)+++",
      "+++require(../../assets/bilsemData/4_21__5.jpeg)+++",
      "+++require(../../assets/bilsemData/4_21__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "",
      CevapSuresi: "120",
      dogrucevap: "2",
      soruNo: "22",
      sinavno: "4"
    },
    resource: [
      null,
      "+++require(../../assets/bilsemData/4_22__2.jpeg)+++",
      "+++require(../../assets/bilsemData/4_22__3.jpeg)+++",
      "+++require(../../assets/bilsemData/4_22__4.jpeg)+++",
      "+++require(../../assets/bilsemData/4_22__5.jpeg)+++",
      "+++require(../../assets/bilsemData/4_22__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "",
      CevapSuresi: "120",
      dogrucevap: "1",
      soruNo: "23",
      sinavno: "4"
    },
    resource: [
      null,
      "+++require(../../assets/bilsemData/4_23__2.jpeg)+++",
      "+++require(../../assets/bilsemData/4_23__3.jpeg)+++",
      "+++require(../../assets/bilsemData/4_23__4.jpeg)+++",
      "+++require(../../assets/bilsemData/4_23__5.jpeg)+++",
      "+++require(../../assets/bilsemData/4_23__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "",
      CevapSuresi: "60",
      dogrucevap: "2",
      soruNo: "24",
      sinavno: "4"
    },
    resource: [
      null,
      "+++require(../../assets/bilsemData/4_24__2.jpeg)+++",
      "+++require(../../assets/bilsemData/4_24__3.jpeg)+++",
      "+++require(../../assets/bilsemData/4_24__4.jpeg)+++",
      "+++require(../../assets/bilsemData/4_24__5.jpeg)+++",
      "+++require(../../assets/bilsemData/4_24__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "",
      CevapSuresi: "60",
      dogrucevap: "3",
      soruNo: "25",
      sinavno: "4"
    },
    resource: [
      null,
      "+++require(../../assets/bilsemData/4_25__2.jpeg)+++",
      "+++require(../../assets/bilsemData/4_25__3.jpeg)+++",
      "+++require(../../assets/bilsemData/4_25__4.jpeg)+++",
      "+++require(../../assets/bilsemData/4_25__5.jpeg)+++",
      "+++require(../../assets/bilsemData/4_25__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "",
      CevapSuresi: "60",
      dogrucevap: "4",
      soruNo: "26",
      sinavno: "4"
    },
    resource: [
      null,
      "+++require(../../assets/bilsemData/4_26__2.jpeg)+++",
      "+++require(../../assets/bilsemData/4_26__3.jpeg)+++",
      "+++require(../../assets/bilsemData/4_26__4.jpeg)+++",
      "+++require(../../assets/bilsemData/4_26__5.jpeg)+++",
      "+++require(../../assets/bilsemData/4_26__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "",
      CevapSuresi: "60",
      dogrucevap: "3",
      soruNo: "27",
      sinavno: "4"
    },
    resource: [
      null,
      "+++require(../../assets/bilsemData/4_27__2.jpeg)+++",
      "+++require(../../assets/bilsemData/4_27__3.jpeg)+++",
      "+++require(../../assets/bilsemData/4_27__4.jpeg)+++",
      "+++require(../../assets/bilsemData/4_27__5.jpeg)+++",
      "+++require(../../assets/bilsemData/4_27__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "",
      CevapSuresi: "60",
      dogrucevap: "2",
      soruNo: "28",
      sinavno: "4"
    },
    resource: [
      null,
      "+++require(../../assets/bilsemData/4_28__2.jpeg)+++",
      "+++require(../../assets/bilsemData/4_28__3.jpeg)+++",
      "+++require(../../assets/bilsemData/4_28__4.jpeg)+++",
      "+++require(../../assets/bilsemData/4_28__5.jpeg)+++",
      "+++require(../../assets/bilsemData/4_28__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "",
      CevapSuresi: "60",
      dogrucevap: "4",
      soruNo: "29",
      sinavno: "4"
    },
    resource: [
      null,
      "+++require(../../assets/bilsemData/4_29__2.jpeg)+++",
      "+++require(../../assets/bilsemData/4_29__3.jpeg)+++",
      "+++require(../../assets/bilsemData/4_29__4.jpeg)+++",
      "+++require(../../assets/bilsemData/4_29__5.jpeg)+++",
      "+++require(../../assets/bilsemData/4_29__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "",
      CevapSuresi: "60",
      dogrucevap: "1",
      soruNo: "30",
      sinavno: "4"
    },
    resource: [
      null,
      "+++require(../../assets/bilsemData/4_30__2.jpeg)+++",
      "+++require(../../assets/bilsemData/4_30__3.jpeg)+++",
      "+++require(../../assets/bilsemData/4_30__4.jpeg)+++",
      "+++require(../../assets/bilsemData/4_30__5.jpeg)+++",
      "+++require(../../assets/bilsemData/4_30__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "",
      CevapSuresi: "60",
      dogrucevap: "1",
      soruNo: "31",
      sinavno: "4"
    },
    resource: [
      null,
      "+++require(../../assets/bilsemData/4_31__2.jpeg)+++",
      "+++require(../../assets/bilsemData/4_31__3.jpeg)+++",
      "+++require(../../assets/bilsemData/4_31__4.jpeg)+++",
      "+++require(../../assets/bilsemData/4_31__5.jpeg)+++",
      "+++require(../../assets/bilsemData/4_31__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "",
      CevapSuresi: "60",
      dogrucevap: "1",
      soruNo: "32",
      sinavno: "4"
    },
    resource: [
      null,
      "+++require(../../assets/bilsemData/4_32__2.jpeg)+++",
      "+++require(../../assets/bilsemData/4_32__3.jpeg)+++",
      "+++require(../../assets/bilsemData/4_32__4.jpeg)+++",
      "+++require(../../assets/bilsemData/4_32__5.jpeg)+++",
      "+++require(../../assets/bilsemData/4_32__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "",
      CevapSuresi: "60",
      dogrucevap: "2",
      soruNo: "33",
      sinavno: "4"
    },
    resource: [
      null,
      "+++require(../../assets/bilsemData/4_33__2.jpeg)+++",
      "+++require(../../assets/bilsemData/4_33__3.jpeg)+++",
      "+++require(../../assets/bilsemData/4_33__4.jpeg)+++",
      "+++require(../../assets/bilsemData/4_33__5.jpeg)+++",
      "+++require(../../assets/bilsemData/4_33__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "",
      CevapSuresi: "60",
      dogrucevap: "4",
      soruNo: "34",
      sinavno: "4"
    },
    resource: [
      null,
      "+++require(../../assets/bilsemData/4_34__2.jpeg)+++",
      "+++require(../../assets/bilsemData/4_34__3.jpeg)+++",
      "+++require(../../assets/bilsemData/4_34__4.jpeg)+++",
      "+++require(../../assets/bilsemData/4_34__5.jpeg)+++",
      "+++require(../../assets/bilsemData/4_34__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "",
      CevapSuresi: "60",
      dogrucevap: "1",
      soruNo: "35",
      sinavno: "4"
    },
    resource: [
      null,
      "+++require(../../assets/bilsemData/4_35__2.jpeg)+++",
      "+++require(../../assets/bilsemData/4_35__3.jpeg)+++",
      "+++require(../../assets/bilsemData/4_35__4.jpeg)+++",
      "+++require(../../assets/bilsemData/4_35__5.jpeg)+++",
      "+++require(../../assets/bilsemData/4_35__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "",
      CevapSuresi: "60",
      dogrucevap: "1",
      soruNo: "36",
      sinavno: "4"
    },
    resource: [
      null,
      "+++require(../../assets/bilsemData/4_36__2.jpeg)+++",
      "+++require(../../assets/bilsemData/4_36__3.jpeg)+++",
      "+++require(../../assets/bilsemData/4_36__4.jpeg)+++",
      "+++require(../../assets/bilsemData/4_36__5.jpeg)+++",
      "+++require(../../assets/bilsemData/4_36__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "",
      CevapSuresi: "90",
      dogrucevap: "3",
      soruNo: "37",
      sinavno: "4"
    },
    resource: [
      null,
      "+++require(../../assets/bilsemData/4_37__2.jpeg)+++",
      "+++require(../../assets/bilsemData/4_37__3.jpeg)+++",
      "+++require(../../assets/bilsemData/4_37__4.jpeg)+++",
      "+++require(../../assets/bilsemData/4_37__5.jpeg)+++",
      "+++require(../../assets/bilsemData/4_37__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "",
      CevapSuresi: "90",
      dogrucevap: "3",
      soruNo: "38",
      sinavno: "4"
    },
    resource: [
      null,
      "+++require(../../assets/bilsemData/4_38__2.jpeg)+++",
      "+++require(../../assets/bilsemData/4_38__3.jpeg)+++",
      "+++require(../../assets/bilsemData/4_38__4.jpeg)+++",
      "+++require(../../assets/bilsemData/4_38__5.jpeg)+++",
      "+++require(../../assets/bilsemData/4_38__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "",
      CevapSuresi: "90",
      dogrucevap: "2",
      soruNo: "39",
      sinavno: "4"
    },
    resource: [
      null,
      "+++require(../../assets/bilsemData/4_39__2.jpeg)+++",
      "+++require(../../assets/bilsemData/4_39__3.jpeg)+++",
      "+++require(../../assets/bilsemData/4_39__4.jpeg)+++",
      "+++require(../../assets/bilsemData/4_39__5.jpeg)+++",
      "+++require(../../assets/bilsemData/4_39__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "",
      CevapSuresi: "90",
      dogrucevap: "4",
      soruNo: "40",
      sinavno: "4"
    },
    resource: [
      null,
      "+++require(../../assets/bilsemData/4_40__2.jpeg)+++",
      "+++require(../../assets/bilsemData/4_40__3.jpeg)+++",
      "+++require(../../assets/bilsemData/4_40__4.jpeg)+++",
      "+++require(../../assets/bilsemData/4_40__5.jpeg)+++",
      "+++require(../../assets/bilsemData/4_40__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "",
      CevapSuresi: "90",
      dogrucevap: "3",
      soruNo: "41",
      sinavno: "4"
    },
    resource: [
      null,
      "+++require(../../assets/bilsemData/4_41__2.jpeg)+++",
      "+++require(../../assets/bilsemData/4_41__3.jpeg)+++",
      "+++require(../../assets/bilsemData/4_41__4.jpeg)+++",
      "+++require(../../assets/bilsemData/4_41__5.jpeg)+++",
      "+++require(../../assets/bilsemData/4_41__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "",
      CevapSuresi: "90",
      dogrucevap: "1",
      soruNo: "42",
      sinavno: "4"
    },
    resource: [
      null,
      "+++require(../../assets/bilsemData/4_42__2.jpeg)+++",
      "+++require(../../assets/bilsemData/4_42__3.jpeg)+++",
      "+++require(../../assets/bilsemData/4_42__4.jpeg)+++",
      "+++require(../../assets/bilsemData/4_42__5.jpeg)+++",
      "+++require(../../assets/bilsemData/4_42__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "",
      CevapSuresi: "90",
      dogrucevap: "2",
      soruNo: "43",
      sinavno: "4"
    },
    resource: [
      null,
      "+++require(../../assets/bilsemData/4_43__2.jpeg)+++",
      "+++require(../../assets/bilsemData/4_43__3.jpeg)+++",
      "+++require(../../assets/bilsemData/4_43__4.jpeg)+++",
      "+++require(../../assets/bilsemData/4_43__5.jpeg)+++",
      "+++require(../../assets/bilsemData/4_43__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "",
      CevapSuresi: "90",
      dogrucevap: "4",
      soruNo: "44",
      sinavno: "4"
    },
    resource: [
      null,
      "+++require(../../assets/bilsemData/4_44__2.jpeg)+++",
      "+++require(../../assets/bilsemData/4_44__3.jpeg)+++",
      "+++require(../../assets/bilsemData/4_44__4.jpeg)+++",
      "+++require(../../assets/bilsemData/4_44__5.jpeg)+++",
      "+++require(../../assets/bilsemData/4_44__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "",
      CevapSuresi: "90",
      dogrucevap: "3",
      soruNo: "45",
      sinavno: "4"
    },
    resource: [
      null,
      "+++require(../../assets/bilsemData/4_45__2.jpeg)+++",
      "+++require(../../assets/bilsemData/4_45__3.jpeg)+++",
      "+++require(../../assets/bilsemData/4_45__4.jpeg)+++",
      "+++require(../../assets/bilsemData/4_45__5.jpeg)+++",
      "+++require(../../assets/bilsemData/4_45__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "",
      CevapSuresi: "90",
      dogrucevap: "2",
      soruNo: "46",
      sinavno: "4"
    },
    resource: [
      null,
      "+++require(../../assets/bilsemData/4_46__2.jpeg)+++",
      "+++require(../../assets/bilsemData/4_46__3.jpeg)+++",
      "+++require(../../assets/bilsemData/4_46__4.jpeg)+++",
      "+++require(../../assets/bilsemData/4_46__5.jpeg)+++",
      "+++require(../../assets/bilsemData/4_46__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "",
      CevapSuresi: "90",
      dogrucevap: "1",
      soruNo: "47",
      sinavno: "4"
    },
    resource: [
      null,
      "+++require(../../assets/bilsemData/4_47__2.jpeg)+++",
      "+++require(../../assets/bilsemData/4_47__3.jpeg)+++",
      "+++require(../../assets/bilsemData/4_47__4.jpeg)+++",
      "+++require(../../assets/bilsemData/4_47__5.jpeg)+++",
      "+++require(../../assets/bilsemData/4_47__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "",
      CevapSuresi: "90",
      dogrucevap: "2",
      soruNo: "48",
      sinavno: "4"
    },
    resource: [
      null,
      "+++require(../../assets/bilsemData/4_48__2.jpeg)+++",
      "+++require(../../assets/bilsemData/4_48__3.jpeg)+++",
      "+++require(../../assets/bilsemData/4_48__4.jpeg)+++",
      "+++require(../../assets/bilsemData/4_48__5.jpeg)+++",
      "+++require(../../assets/bilsemData/4_48__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "",
      CevapSuresi: "90",
      dogrucevap: "4",
      soruNo: "49",
      sinavno: "4"
    },
    resource: [
      null,
      "+++require(../../assets/bilsemData/4_49__2.jpeg)+++",
      "+++require(../../assets/bilsemData/4_49__3.jpeg)+++",
      "+++require(../../assets/bilsemData/4_49__4.jpeg)+++",
      "+++require(../../assets/bilsemData/4_49__5.jpeg)+++",
      "+++require(../../assets/bilsemData/4_49__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "",
      CevapSuresi: "90",
      dogrucevap: "1",
      soruNo: "50",
      sinavno: "4"
    },
    resource: [
      null,
      "+++require(../../assets/bilsemData/4_50__2.jpeg)+++",
      "+++require(../../assets/bilsemData/4_50__3.jpeg)+++",
      "+++require(../../assets/bilsemData/4_50__4.jpeg)+++",
      "+++require(../../assets/bilsemData/4_50__5.jpeg)+++",
      "+++require(../../assets/bilsemData/4_50__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "",
      CevapSuresi: "90",
      dogrucevap: "3",
      soruNo: "51",
      sinavno: "4"
    },
    resource: [
      null,
      "+++require(../../assets/bilsemData/4_51__2.jpeg)+++",
      "+++require(../../assets/bilsemData/4_51__3.jpeg)+++",
      "+++require(../../assets/bilsemData/4_51__4.jpeg)+++",
      "+++require(../../assets/bilsemData/4_51__5.jpeg)+++",
      "+++require(../../assets/bilsemData/4_51__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "",
      CevapSuresi: "90",
      dogrucevap: "4",
      soruNo: "52",
      sinavno: "4"
    },
    resource: [
      null,
      "+++require(../../assets/bilsemData/4_52__2.jpeg)+++",
      "+++require(../../assets/bilsemData/4_52__3.jpeg)+++",
      "+++require(../../assets/bilsemData/4_52__4.jpeg)+++",
      "+++require(../../assets/bilsemData/4_52__5.jpeg)+++",
      "+++require(../../assets/bilsemData/4_52__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "",
      CevapSuresi: "90",
      dogrucevap: "3",
      soruNo: "53",
      sinavno: "4"
    },
    resource: [
      null,
      "+++require(../../assets/bilsemData/4_53__2.jpeg)+++",
      "+++require(../../assets/bilsemData/4_53__3.jpeg)+++",
      "+++require(../../assets/bilsemData/4_53__4.jpeg)+++",
      "+++require(../../assets/bilsemData/4_53__5.jpeg)+++",
      "+++require(../../assets/bilsemData/4_53__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "",
      CevapSuresi: "90",
      dogrucevap: "2",
      soruNo: "54",
      sinavno: "4"
    },
    resource: [
      null,
      "+++require(../../assets/bilsemData/4_54__2.jpeg)+++",
      "+++require(../../assets/bilsemData/4_54__3.jpeg)+++",
      "+++require(../../assets/bilsemData/4_54__4.jpeg)+++",
      "+++require(../../assets/bilsemData/4_54__5.jpeg)+++",
      "+++require(../../assets/bilsemData/4_54__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "",
      CevapSuresi: "120",
      dogrucevap: "1",
      soruNo: "55",
      sinavno: "4"
    },
    resource: [
      null,
      "+++require(../../assets/bilsemData/4_55__2.jpeg)+++",
      "+++require(../../assets/bilsemData/4_55__3.jpeg)+++",
      "+++require(../../assets/bilsemData/4_55__4.jpeg)+++",
      "+++require(../../assets/bilsemData/4_55__5.jpeg)+++",
      "+++require(../../assets/bilsemData/4_55__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "",
      CevapSuresi: "120",
      dogrucevap: "3",
      soruNo: "56",
      sinavno: "4"
    },
    resource: [
      null,
      "+++require(../../assets/bilsemData/4_56__2.jpeg)+++",
      "+++require(../../assets/bilsemData/4_56__3.jpeg)+++",
      "+++require(../../assets/bilsemData/4_56__4.jpeg)+++",
      "+++require(../../assets/bilsemData/4_56__5.jpeg)+++",
      "+++require(../../assets/bilsemData/4_56__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "",
      CevapSuresi: "120",
      dogrucevap: "3",
      soruNo: "57",
      sinavno: "4"
    },
    resource: [
      null,
      "+++require(../../assets/bilsemData/4_57__2.jpeg)+++",
      "+++require(../../assets/bilsemData/4_57__3.jpeg)+++",
      "+++require(../../assets/bilsemData/4_57__4.jpeg)+++",
      "+++require(../../assets/bilsemData/4_57__5.jpeg)+++",
      "+++require(../../assets/bilsemData/4_57__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "120",
      CevapSuresi: "45",
      dogrucevap: "3",
      soruNo: "58",
      sinavno: "4"
    },
    resource: [
      "+++require(../../assets/bilsemData/4_58__1.jpeg)+++",
      "+++require(../../assets/bilsemData/4_58__2.jpeg)+++",
      "+++require(../../assets/bilsemData/4_58__3.jpeg)+++",
      "+++require(../../assets/bilsemData/4_58__4.jpeg)+++",
      "+++require(../../assets/bilsemData/4_58__5.jpeg)+++",
      "+++require(../../assets/bilsemData/4_58__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "",
      CevapSuresi: "45",
      dogrucevap: "3",
      soruNo: "59",
      sinavno: "4"
    },
    resource: [
      null,
      "+++require(../../assets/bilsemData/4_59__2.jpeg)+++",
      "+++require(../../assets/bilsemData/4_59__3.jpeg)+++",
      "+++require(../../assets/bilsemData/4_59__4.jpeg)+++",
      "+++require(../../assets/bilsemData/4_59__5.jpeg)+++",
      "+++require(../../assets/bilsemData/4_59__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "",
      CevapSuresi: "45",
      dogrucevap: "1",
      soruNo: "60",
      sinavno: "4"
    },
    resource: [
      null,
      "+++require(../../assets/bilsemData/4_60__2.jpeg)+++",
      "+++require(../../assets/bilsemData/4_60__3.jpeg)+++",
      "+++require(../../assets/bilsemData/4_60__4.jpeg)+++",
      "+++require(../../assets/bilsemData/4_60__5.jpeg)+++",
      "+++require(../../assets/bilsemData/4_60__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "10",
      CevapSuresi: "45",
      dogrucevap: "4",
      soruNo: "1",
      sinavno: "5"
    },
    resource: [
      "+++require(../../assets/bilsemData/5_1__1.jpeg)+++",
      null,
      "+++require(../../assets/bilsemData/5_1__3.jpeg)+++",
      "+++require(../../assets/bilsemData/5_1__4.jpeg)+++",
      "+++require(../../assets/bilsemData/5_1__5.jpeg)+++",
      "+++require(../../assets/bilsemData/5_1__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "15",
      CevapSuresi: "45",
      dogrucevap: "4",
      soruNo: "2",
      sinavno: "5"
    },
    resource: [
      "+++require(../../assets/bilsemData/5_2__1.jpeg)+++",
      null,
      "+++require(../../assets/bilsemData/5_2__3.jpeg)+++",
      "+++require(../../assets/bilsemData/5_2__4.jpeg)+++",
      "+++require(../../assets/bilsemData/5_2__5.jpeg)+++",
      "+++require(../../assets/bilsemData/5_2__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "15",
      CevapSuresi: "45",
      dogrucevap: "4",
      soruNo: "3",
      sinavno: "5"
    },
    resource: [
      "+++require(../../assets/bilsemData/5_3__1.jpeg)+++",
      "+++require(../../assets/bilsemData/5_3__2.jpeg)+++",
      "+++require(../../assets/bilsemData/5_3__3.jpeg)+++",
      "+++require(../../assets/bilsemData/5_3__4.jpeg)+++",
      "+++require(../../assets/bilsemData/5_3__5.jpeg)+++",
      "+++require(../../assets/bilsemData/5_3__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "20",
      CevapSuresi: "45",
      dogrucevap: "3",
      soruNo: "4",
      sinavno: "5"
    },
    resource: [
      "+++require(../../assets/bilsemData/5_4__1.jpeg)+++",
      "+++require(../../assets/bilsemData/5_4__2.jpeg)+++",
      "+++require(../../assets/bilsemData/5_4__3.jpeg)+++",
      "+++require(../../assets/bilsemData/5_4__4.jpeg)+++",
      "+++require(../../assets/bilsemData/5_4__5.jpeg)+++",
      "+++require(../../assets/bilsemData/5_4__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "20",
      CevapSuresi: "45",
      dogrucevap: "2",
      soruNo: "5",
      sinavno: "5"
    },
    resource: [
      "+++require(../../assets/bilsemData/5_5__1.jpeg)+++",
      "+++require(../../assets/bilsemData/5_5__2.jpeg)+++",
      "+++require(../../assets/bilsemData/5_5__3.jpeg)+++",
      "+++require(../../assets/bilsemData/5_5__4.jpeg)+++",
      "+++require(../../assets/bilsemData/5_5__5.jpeg)+++",
      "+++require(../../assets/bilsemData/5_5__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "25",
      CevapSuresi: "45",
      dogrucevap: "1",
      soruNo: "6",
      sinavno: "5"
    },
    resource: [
      "+++require(../../assets/bilsemData/5_6__1.jpeg)+++",
      "+++require(../../assets/bilsemData/5_6__2.jpeg)+++",
      "+++require(../../assets/bilsemData/5_6__3.jpeg)+++",
      "+++require(../../assets/bilsemData/5_6__4.jpeg)+++",
      "+++require(../../assets/bilsemData/5_6__5.jpeg)+++",
      "+++require(../../assets/bilsemData/5_6__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "25",
      CevapSuresi: "45",
      dogrucevap: "4",
      soruNo: "7",
      sinavno: "5"
    },
    resource: [
      "+++require(../../assets/bilsemData/5_7__1.jpeg)+++",
      "+++require(../../assets/bilsemData/5_7__2.jpeg)+++",
      "+++require(../../assets/bilsemData/5_7__3.jpeg)+++",
      "+++require(../../assets/bilsemData/5_7__4.jpeg)+++",
      "+++require(../../assets/bilsemData/5_7__5.jpeg)+++",
      "+++require(../../assets/bilsemData/5_7__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "25",
      CevapSuresi: "45",
      dogrucevap: "1",
      soruNo: "8",
      sinavno: "5"
    },
    resource: [
      "+++require(../../assets/bilsemData/5_8__1.jpeg)+++",
      "+++require(../../assets/bilsemData/5_8__2.jpeg)+++",
      "+++require(../../assets/bilsemData/5_8__3.jpeg)+++",
      "+++require(../../assets/bilsemData/5_8__4.jpeg)+++",
      "+++require(../../assets/bilsemData/5_8__5.jpeg)+++",
      "+++require(../../assets/bilsemData/5_8__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "25",
      CevapSuresi: "45",
      dogrucevap: "3",
      soruNo: "9",
      sinavno: "5"
    },
    resource: [
      "+++require(../../assets/bilsemData/5_9__1.jpeg)+++",
      "+++require(../../assets/bilsemData/5_9__2.jpeg)+++",
      "+++require(../../assets/bilsemData/5_9__3.jpeg)+++",
      "+++require(../../assets/bilsemData/5_9__4.jpeg)+++",
      "+++require(../../assets/bilsemData/5_9__5.jpeg)+++",
      "+++require(../../assets/bilsemData/5_9__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "25",
      CevapSuresi: "45",
      dogrucevap: "4",
      soruNo: "10",
      sinavno: "5"
    },
    resource: [
      "+++require(../../assets/bilsemData/5_10__1.jpeg)+++",
      null,
      "+++require(../../assets/bilsemData/5_10__3.jpeg)+++",
      "+++require(../../assets/bilsemData/5_10__4.jpeg)+++",
      "+++require(../../assets/bilsemData/5_10__5.jpeg)+++",
      "+++require(../../assets/bilsemData/5_10__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "10",
      CevapSuresi: "35",
      dogrucevap: "1",
      soruNo: "11",
      sinavno: "5"
    },
    resource: [
      "+++require(../../assets/bilsemData/5_11__1.jpeg)+++",
      null,
      "+++require(../../assets/bilsemData/5_11__3.jpeg)+++",
      "+++require(../../assets/bilsemData/5_11__4.jpeg)+++",
      "+++require(../../assets/bilsemData/5_11__5.jpeg)+++",
      "+++require(../../assets/bilsemData/5_11__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "15",
      CevapSuresi: "35",
      dogrucevap: "3",
      soruNo: "12",
      sinavno: "5"
    },
    resource: [
      "+++require(../../assets/bilsemData/5_12__1.jpeg)+++",
      null,
      "+++require(../../assets/bilsemData/5_12__3.jpeg)+++",
      "+++require(../../assets/bilsemData/5_12__4.jpeg)+++",
      "+++require(../../assets/bilsemData/5_12__5.jpeg)+++",
      "+++require(../../assets/bilsemData/5_12__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "20",
      CevapSuresi: "45",
      dogrucevap: "2",
      soruNo: "13",
      sinavno: "5"
    },
    resource: [
      "+++require(../../assets/bilsemData/5_13__1.jpeg)+++",
      null,
      "+++require(../../assets/bilsemData/5_13__3.jpeg)+++",
      "+++require(../../assets/bilsemData/5_13__4.jpeg)+++",
      "+++require(../../assets/bilsemData/5_13__5.jpeg)+++",
      "+++require(../../assets/bilsemData/5_13__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "15",
      CevapSuresi: "45",
      dogrucevap: "2",
      soruNo: "14",
      sinavno: "5"
    },
    resource: [
      "+++require(../../assets/bilsemData/5_14__1.jpeg)+++",
      "+++require(../../assets/bilsemData/5_14__2.jpeg)+++",
      "+++require(../../assets/bilsemData/5_14__3.jpeg)+++",
      "+++require(../../assets/bilsemData/5_14__4.jpeg)+++",
      "+++require(../../assets/bilsemData/5_14__5.jpeg)+++",
      "+++require(../../assets/bilsemData/5_14__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "15",
      CevapSuresi: "45",
      dogrucevap: "4",
      soruNo: "15",
      sinavno: "5"
    },
    resource: [
      "+++require(../../assets/bilsemData/5_15__1.jpeg)+++",
      "+++require(../../assets/bilsemData/5_15__2.jpeg)+++",
      "+++require(../../assets/bilsemData/5_15__3.jpeg)+++",
      "+++require(../../assets/bilsemData/5_15__4.jpeg)+++",
      "+++require(../../assets/bilsemData/5_15__5.jpeg)+++",
      "+++require(../../assets/bilsemData/5_15__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "20",
      CevapSuresi: "45",
      dogrucevap: "3",
      soruNo: "16",
      sinavno: "5"
    },
    resource: [
      "+++require(../../assets/bilsemData/5_16__1.jpeg)+++",
      "+++require(../../assets/bilsemData/5_16__2.jpeg)+++",
      "+++require(../../assets/bilsemData/5_16__3.jpeg)+++",
      "+++require(../../assets/bilsemData/5_16__4.jpeg)+++",
      "+++require(../../assets/bilsemData/5_16__5.jpeg)+++",
      "+++require(../../assets/bilsemData/5_16__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "20",
      CevapSuresi: "45",
      dogrucevap: "3",
      soruNo: "17",
      sinavno: "5"
    },
    resource: [
      "+++require(../../assets/bilsemData/5_17__1.jpeg)+++",
      "+++require(../../assets/bilsemData/5_17__2.jpeg)+++",
      "+++require(../../assets/bilsemData/5_17__3.jpeg)+++",
      "+++require(../../assets/bilsemData/5_17__4.jpeg)+++",
      "+++require(../../assets/bilsemData/5_17__5.jpeg)+++",
      "+++require(../../assets/bilsemData/5_17__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "20",
      CevapSuresi: "45",
      dogrucevap: "4",
      soruNo: "18",
      sinavno: "5"
    },
    resource: [
      "+++require(../../assets/bilsemData/5_18__1.jpeg)+++",
      "+++require(../../assets/bilsemData/5_18__2.jpeg)+++",
      "+++require(../../assets/bilsemData/5_18__3.jpeg)+++",
      "+++require(../../assets/bilsemData/5_18__4.jpeg)+++",
      "+++require(../../assets/bilsemData/5_18__5.jpeg)+++",
      "+++require(../../assets/bilsemData/5_18__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "",
      CevapSuresi: "60",
      dogrucevap: "3",
      soruNo: "19",
      sinavno: "5"
    },
    resource: [
      null,
      "+++require(../../assets/bilsemData/5_19__2.jpeg)+++",
      "+++require(../../assets/bilsemData/5_19__3.jpeg)+++",
      "+++require(../../assets/bilsemData/5_19__4.jpeg)+++",
      "+++require(../../assets/bilsemData/5_19__5.jpeg)+++",
      "+++require(../../assets/bilsemData/5_19__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "",
      CevapSuresi: "60",
      dogrucevap: "3",
      soruNo: "20",
      sinavno: "5"
    },
    resource: [
      null,
      "+++require(../../assets/bilsemData/5_20__2.jpeg)+++",
      "+++require(../../assets/bilsemData/5_20__3.jpeg)+++",
      "+++require(../../assets/bilsemData/5_20__4.jpeg)+++",
      "+++require(../../assets/bilsemData/5_20__5.jpeg)+++",
      "+++require(../../assets/bilsemData/5_20__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "",
      CevapSuresi: "60",
      dogrucevap: "2",
      soruNo: "21",
      sinavno: "5"
    },
    resource: [
      null,
      "+++require(../../assets/bilsemData/5_21__2.jpeg)+++",
      "+++require(../../assets/bilsemData/5_21__3.jpeg)+++",
      "+++require(../../assets/bilsemData/5_21__4.jpeg)+++",
      "+++require(../../assets/bilsemData/5_21__5.jpeg)+++",
      "+++require(../../assets/bilsemData/5_21__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "",
      CevapSuresi: "120",
      dogrucevap: "2",
      soruNo: "22",
      sinavno: "5"
    },
    resource: [
      null,
      "+++require(../../assets/bilsemData/5_22__2.jpeg)+++",
      "+++require(../../assets/bilsemData/5_22__3.jpeg)+++",
      "+++require(../../assets/bilsemData/5_22__4.jpeg)+++",
      "+++require(../../assets/bilsemData/5_22__5.jpeg)+++",
      "+++require(../../assets/bilsemData/5_22__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "",
      CevapSuresi: "120",
      dogrucevap: "1",
      soruNo: "23",
      sinavno: "5"
    },
    resource: [
      null,
      "+++require(../../assets/bilsemData/5_23__2.jpeg)+++",
      "+++require(../../assets/bilsemData/5_23__3.jpeg)+++",
      "+++require(../../assets/bilsemData/5_23__4.jpeg)+++",
      "+++require(../../assets/bilsemData/5_23__5.jpeg)+++",
      "+++require(../../assets/bilsemData/5_23__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "",
      CevapSuresi: "60",
      dogrucevap: "4",
      soruNo: "24",
      sinavno: "5"
    },
    resource: [
      null,
      "+++require(../../assets/bilsemData/5_24__2.jpeg)+++",
      "+++require(../../assets/bilsemData/5_24__3.jpeg)+++",
      "+++require(../../assets/bilsemData/5_24__4.jpeg)+++",
      "+++require(../../assets/bilsemData/5_24__5.jpeg)+++",
      "+++require(../../assets/bilsemData/5_24__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "",
      CevapSuresi: "60",
      dogrucevap: "1",
      soruNo: "25",
      sinavno: "5"
    },
    resource: [
      null,
      "+++require(../../assets/bilsemData/5_25__2.jpeg)+++",
      "+++require(../../assets/bilsemData/5_25__3.jpeg)+++",
      "+++require(../../assets/bilsemData/5_25__4.jpeg)+++",
      "+++require(../../assets/bilsemData/5_25__5.jpeg)+++",
      "+++require(../../assets/bilsemData/5_25__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "",
      CevapSuresi: "60",
      dogrucevap: "1",
      soruNo: "26",
      sinavno: "5"
    },
    resource: [
      null,
      "+++require(../../assets/bilsemData/5_26__2.jpeg)+++",
      "+++require(../../assets/bilsemData/5_26__3.jpeg)+++",
      "+++require(../../assets/bilsemData/5_26__4.jpeg)+++",
      "+++require(../../assets/bilsemData/5_26__5.jpeg)+++",
      "+++require(../../assets/bilsemData/5_26__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "",
      CevapSuresi: "60",
      dogrucevap: "4",
      soruNo: "27",
      sinavno: "5"
    },
    resource: [
      null,
      "+++require(../../assets/bilsemData/5_27__2.jpeg)+++",
      "+++require(../../assets/bilsemData/5_27__3.jpeg)+++",
      "+++require(../../assets/bilsemData/5_27__4.jpeg)+++",
      "+++require(../../assets/bilsemData/5_27__5.jpeg)+++",
      "+++require(../../assets/bilsemData/5_27__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "",
      CevapSuresi: "60",
      dogrucevap: "1",
      soruNo: "28",
      sinavno: "5"
    },
    resource: [
      null,
      "+++require(../../assets/bilsemData/5_28__2.jpeg)+++",
      "+++require(../../assets/bilsemData/5_28__3.jpeg)+++",
      "+++require(../../assets/bilsemData/5_28__4.jpeg)+++",
      "+++require(../../assets/bilsemData/5_28__5.jpeg)+++",
      "+++require(../../assets/bilsemData/5_28__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "",
      CevapSuresi: "60",
      dogrucevap: "1",
      soruNo: "29",
      sinavno: "5"
    },
    resource: [
      null,
      "+++require(../../assets/bilsemData/5_29__2.jpeg)+++",
      "+++require(../../assets/bilsemData/5_29__3.jpeg)+++",
      "+++require(../../assets/bilsemData/5_29__4.jpeg)+++",
      "+++require(../../assets/bilsemData/5_29__5.jpeg)+++",
      "+++require(../../assets/bilsemData/5_29__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "",
      CevapSuresi: "60",
      dogrucevap: "2",
      soruNo: "30",
      sinavno: "5"
    },
    resource: [
      null,
      "+++require(../../assets/bilsemData/5_30__2.jpeg)+++",
      "+++require(../../assets/bilsemData/5_30__3.jpeg)+++",
      "+++require(../../assets/bilsemData/5_30__4.jpeg)+++",
      "+++require(../../assets/bilsemData/5_30__5.jpeg)+++",
      "+++require(../../assets/bilsemData/5_30__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "",
      CevapSuresi: "60",
      dogrucevap: "2",
      soruNo: "31",
      sinavno: "5"
    },
    resource: [
      null,
      "+++require(../../assets/bilsemData/5_31__2.jpeg)+++",
      "+++require(../../assets/bilsemData/5_31__3.jpeg)+++",
      "+++require(../../assets/bilsemData/5_31__4.jpeg)+++",
      "+++require(../../assets/bilsemData/5_31__5.jpeg)+++",
      "+++require(../../assets/bilsemData/5_31__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "",
      CevapSuresi: "60",
      dogrucevap: "2",
      soruNo: "32",
      sinavno: "5"
    },
    resource: [
      null,
      "+++require(../../assets/bilsemData/5_32__2.jpeg)+++",
      "+++require(../../assets/bilsemData/5_32__3.jpeg)+++",
      "+++require(../../assets/bilsemData/5_32__4.jpeg)+++",
      "+++require(../../assets/bilsemData/5_32__5.jpeg)+++",
      "+++require(../../assets/bilsemData/5_32__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "",
      CevapSuresi: "60",
      dogrucevap: "2",
      soruNo: "33",
      sinavno: "5"
    },
    resource: [
      null,
      "+++require(../../assets/bilsemData/5_33__2.jpeg)+++",
      "+++require(../../assets/bilsemData/5_33__3.jpeg)+++",
      "+++require(../../assets/bilsemData/5_33__4.jpeg)+++",
      "+++require(../../assets/bilsemData/5_33__5.jpeg)+++",
      "+++require(../../assets/bilsemData/5_33__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "",
      CevapSuresi: "60",
      dogrucevap: "2",
      soruNo: "34",
      sinavno: "5"
    },
    resource: [
      null,
      "+++require(../../assets/bilsemData/5_34__2.jpeg)+++",
      "+++require(../../assets/bilsemData/5_34__3.jpeg)+++",
      "+++require(../../assets/bilsemData/5_34__4.jpeg)+++",
      "+++require(../../assets/bilsemData/5_34__5.jpeg)+++",
      "+++require(../../assets/bilsemData/5_34__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "",
      CevapSuresi: "60",
      dogrucevap: "2",
      soruNo: "35",
      sinavno: "5"
    },
    resource: [
      null,
      "+++require(../../assets/bilsemData/5_35__2.jpeg)+++",
      "+++require(../../assets/bilsemData/5_35__3.jpeg)+++",
      "+++require(../../assets/bilsemData/5_35__4.jpeg)+++",
      "+++require(../../assets/bilsemData/5_35__5.jpeg)+++",
      "+++require(../../assets/bilsemData/5_35__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "",
      CevapSuresi: "60",
      dogrucevap: "1",
      soruNo: "36",
      sinavno: "5"
    },
    resource: [
      null,
      "+++require(../../assets/bilsemData/5_36__2.jpeg)+++",
      "+++require(../../assets/bilsemData/5_36__3.jpeg)+++",
      "+++require(../../assets/bilsemData/5_36__4.jpeg)+++",
      "+++require(../../assets/bilsemData/5_36__5.jpeg)+++",
      "+++require(../../assets/bilsemData/5_36__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "",
      CevapSuresi: "90",
      dogrucevap: "1",
      soruNo: "37",
      sinavno: "5"
    },
    resource: [
      null,
      "+++require(../../assets/bilsemData/5_37__2.jpeg)+++",
      "+++require(../../assets/bilsemData/5_37__3.jpeg)+++",
      "+++require(../../assets/bilsemData/5_37__4.jpeg)+++",
      "+++require(../../assets/bilsemData/5_37__5.jpeg)+++",
      "+++require(../../assets/bilsemData/5_37__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "",
      CevapSuresi: "90",
      dogrucevap: "1",
      soruNo: "38",
      sinavno: "5"
    },
    resource: [
      null,
      "+++require(../../assets/bilsemData/5_38__2.jpeg)+++",
      "+++require(../../assets/bilsemData/5_38__3.jpeg)+++",
      "+++require(../../assets/bilsemData/5_38__4.jpeg)+++",
      "+++require(../../assets/bilsemData/5_38__5.jpeg)+++",
      "+++require(../../assets/bilsemData/5_38__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "",
      CevapSuresi: "90",
      dogrucevap: "3",
      soruNo: "39",
      sinavno: "5"
    },
    resource: [
      null,
      "+++require(../../assets/bilsemData/5_39__2.jpeg)+++",
      "+++require(../../assets/bilsemData/5_39__3.jpeg)+++",
      "+++require(../../assets/bilsemData/5_39__4.jpeg)+++",
      "+++require(../../assets/bilsemData/5_39__5.jpeg)+++",
      "+++require(../../assets/bilsemData/5_39__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "",
      CevapSuresi: "90",
      dogrucevap: "1",
      soruNo: "40",
      sinavno: "5"
    },
    resource: [
      null,
      "+++require(../../assets/bilsemData/5_40__2.jpeg)+++",
      "+++require(../../assets/bilsemData/5_40__3.jpeg)+++",
      "+++require(../../assets/bilsemData/5_40__4.jpeg)+++",
      "+++require(../../assets/bilsemData/5_40__5.jpeg)+++",
      "+++require(../../assets/bilsemData/5_40__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "",
      CevapSuresi: "90",
      dogrucevap: "2",
      soruNo: "41",
      sinavno: "5"
    },
    resource: [
      null,
      "+++require(../../assets/bilsemData/5_41__2.jpeg)+++",
      "+++require(../../assets/bilsemData/5_41__3.jpeg)+++",
      "+++require(../../assets/bilsemData/5_41__4.jpeg)+++",
      "+++require(../../assets/bilsemData/5_41__5.jpeg)+++",
      "+++require(../../assets/bilsemData/5_41__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "",
      CevapSuresi: "90",
      dogrucevap: "2",
      soruNo: "42",
      sinavno: "5"
    },
    resource: [
      null,
      "+++require(../../assets/bilsemData/5_42__2.jpeg)+++",
      "+++require(../../assets/bilsemData/5_42__3.jpeg)+++",
      "+++require(../../assets/bilsemData/5_42__4.jpeg)+++",
      "+++require(../../assets/bilsemData/5_42__5.jpeg)+++",
      "+++require(../../assets/bilsemData/5_42__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "",
      CevapSuresi: "90",
      dogrucevap: "4",
      soruNo: "43",
      sinavno: "5"
    },
    resource: [
      null,
      "+++require(../../assets/bilsemData/5_43__2.jpeg)+++",
      "+++require(../../assets/bilsemData/5_43__3.jpeg)+++",
      "+++require(../../assets/bilsemData/5_43__4.jpeg)+++",
      "+++require(../../assets/bilsemData/5_43__5.jpeg)+++",
      "+++require(../../assets/bilsemData/5_43__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "",
      CevapSuresi: "90",
      dogrucevap: "1",
      soruNo: "44",
      sinavno: "5"
    },
    resource: [
      null,
      "+++require(../../assets/bilsemData/5_44__2.jpeg)+++",
      "+++require(../../assets/bilsemData/5_44__3.jpeg)+++",
      "+++require(../../assets/bilsemData/5_44__4.jpeg)+++",
      "+++require(../../assets/bilsemData/5_44__5.jpeg)+++",
      "+++require(../../assets/bilsemData/5_44__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "",
      CevapSuresi: "90",
      dogrucevap: "1",
      soruNo: "45",
      sinavno: "5"
    },
    resource: [
      null,
      "+++require(../../assets/bilsemData/5_45__2.jpeg)+++",
      "+++require(../../assets/bilsemData/5_45__3.jpeg)+++",
      "+++require(../../assets/bilsemData/5_45__4.jpeg)+++",
      "+++require(../../assets/bilsemData/5_45__5.jpeg)+++",
      "+++require(../../assets/bilsemData/5_45__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "",
      CevapSuresi: "90",
      dogrucevap: "1",
      soruNo: "46",
      sinavno: "5"
    },
    resource: [
      null,
      "+++require(../../assets/bilsemData/5_46__2.jpeg)+++",
      "+++require(../../assets/bilsemData/5_46__3.jpeg)+++",
      "+++require(../../assets/bilsemData/5_46__4.jpeg)+++",
      "+++require(../../assets/bilsemData/5_46__5.jpeg)+++",
      "+++require(../../assets/bilsemData/5_46__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "",
      CevapSuresi: "90",
      dogrucevap: "2",
      soruNo: "47",
      sinavno: "5"
    },
    resource: [
      null,
      "+++require(../../assets/bilsemData/5_47__2.jpeg)+++",
      "+++require(../../assets/bilsemData/5_47__3.jpeg)+++",
      "+++require(../../assets/bilsemData/5_47__4.jpeg)+++",
      "+++require(../../assets/bilsemData/5_47__5.jpeg)+++",
      "+++require(../../assets/bilsemData/5_47__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "",
      CevapSuresi: "90",
      dogrucevap: "4",
      soruNo: "48",
      sinavno: "5"
    },
    resource: [
      null,
      "+++require(../../assets/bilsemData/5_48__2.jpeg)+++",
      "+++require(../../assets/bilsemData/5_48__3.jpeg)+++",
      "+++require(../../assets/bilsemData/5_48__4.jpeg)+++",
      "+++require(../../assets/bilsemData/5_48__5.jpeg)+++",
      "+++require(../../assets/bilsemData/5_48__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "",
      CevapSuresi: "90",
      dogrucevap: "2",
      soruNo: "49",
      sinavno: "5"
    },
    resource: [
      null,
      "+++require(../../assets/bilsemData/5_49__2.jpeg)+++",
      "+++require(../../assets/bilsemData/5_49__3.jpeg)+++",
      "+++require(../../assets/bilsemData/5_49__4.jpeg)+++",
      "+++require(../../assets/bilsemData/5_49__5.jpeg)+++",
      "+++require(../../assets/bilsemData/5_49__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "",
      CevapSuresi: "90",
      dogrucevap: "1",
      soruNo: "50",
      sinavno: "5"
    },
    resource: [
      null,
      "+++require(../../assets/bilsemData/5_50__2.jpeg)+++",
      "+++require(../../assets/bilsemData/5_50__3.jpeg)+++",
      "+++require(../../assets/bilsemData/5_50__4.jpeg)+++",
      "+++require(../../assets/bilsemData/5_50__5.jpeg)+++",
      "+++require(../../assets/bilsemData/5_50__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "",
      CevapSuresi: "90",
      dogrucevap: "2",
      soruNo: "51",
      sinavno: "5"
    },
    resource: [
      null,
      "+++require(../../assets/bilsemData/5_51__2.jpeg)+++",
      "+++require(../../assets/bilsemData/5_51__3.jpeg)+++",
      "+++require(../../assets/bilsemData/5_51__4.jpeg)+++",
      "+++require(../../assets/bilsemData/5_51__5.jpeg)+++",
      "+++require(../../assets/bilsemData/5_51__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "",
      CevapSuresi: "90",
      dogrucevap: "4",
      soruNo: "52",
      sinavno: "5"
    },
    resource: [
      null,
      "+++require(../../assets/bilsemData/5_52__2.jpeg)+++",
      "+++require(../../assets/bilsemData/5_52__3.jpeg)+++",
      "+++require(../../assets/bilsemData/5_52__4.jpeg)+++",
      "+++require(../../assets/bilsemData/5_52__5.jpeg)+++",
      "+++require(../../assets/bilsemData/5_52__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "",
      CevapSuresi: "90",
      dogrucevap: "4",
      soruNo: "53",
      sinavno: "5"
    },
    resource: [
      null,
      "+++require(../../assets/bilsemData/5_53__2.jpeg)+++",
      "+++require(../../assets/bilsemData/5_53__3.jpeg)+++",
      "+++require(../../assets/bilsemData/5_53__4.jpeg)+++",
      "+++require(../../assets/bilsemData/5_53__5.jpeg)+++",
      "+++require(../../assets/bilsemData/5_53__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "",
      CevapSuresi: "90",
      dogrucevap: "2",
      soruNo: "54",
      sinavno: "5"
    },
    resource: [
      null,
      "+++require(../../assets/bilsemData/5_54__2.jpeg)+++",
      "+++require(../../assets/bilsemData/5_54__3.jpeg)+++",
      "+++require(../../assets/bilsemData/5_54__4.jpeg)+++",
      "+++require(../../assets/bilsemData/5_54__5.jpeg)+++",
      "+++require(../../assets/bilsemData/5_54__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "",
      CevapSuresi: "120",
      dogrucevap: "2",
      soruNo: "55",
      sinavno: "5"
    },
    resource: [
      null,
      "+++require(../../assets/bilsemData/5_55__2.jpeg)+++",
      "+++require(../../assets/bilsemData/5_55__3.jpeg)+++",
      "+++require(../../assets/bilsemData/5_55__4.jpeg)+++",
      "+++require(../../assets/bilsemData/5_55__5.jpeg)+++",
      "+++require(../../assets/bilsemData/5_55__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "",
      CevapSuresi: "120",
      dogrucevap: "1",
      soruNo: "56",
      sinavno: "5"
    },
    resource: [
      null,
      "+++require(../../assets/bilsemData/5_56__2.jpeg)+++",
      "+++require(../../assets/bilsemData/5_56__3.jpeg)+++",
      "+++require(../../assets/bilsemData/5_56__4.jpeg)+++",
      "+++require(../../assets/bilsemData/5_56__5.jpeg)+++",
      "+++require(../../assets/bilsemData/5_56__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "",
      CevapSuresi: "120",
      dogrucevap: "1",
      soruNo: "57",
      sinavno: "5"
    },
    resource: [
      null,
      "+++require(../../assets/bilsemData/5_57__2.jpeg)+++",
      "+++require(../../assets/bilsemData/5_57__3.jpeg)+++",
      "+++require(../../assets/bilsemData/5_57__4.jpeg)+++",
      "+++require(../../assets/bilsemData/5_57__5.jpeg)+++",
      "+++require(../../assets/bilsemData/5_57__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "120",
      CevapSuresi: "45",
      dogrucevap: "2",
      soruNo: "58",
      sinavno: "5"
    },
    resource: [
      "+++require(../../assets/bilsemData/5_58__1.jpeg)+++",
      "+++require(../../assets/bilsemData/5_58__2.jpeg)+++",
      "+++require(../../assets/bilsemData/5_58__3.jpeg)+++",
      "+++require(../../assets/bilsemData/5_58__4.jpeg)+++",
      "+++require(../../assets/bilsemData/5_58__5.jpeg)+++",
      "+++require(../../assets/bilsemData/5_58__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "",
      CevapSuresi: "45",
      dogrucevap: "2",
      soruNo: "59",
      sinavno: "5"
    },
    resource: [
      null,
      "+++require(../../assets/bilsemData/5_59__2.jpeg)+++",
      "+++require(../../assets/bilsemData/5_59__3.jpeg)+++",
      "+++require(../../assets/bilsemData/5_59__4.jpeg)+++",
      "+++require(../../assets/bilsemData/5_59__5.jpeg)+++",
      "+++require(../../assets/bilsemData/5_59__6.jpeg)+++"
    ]
  },
  {
    stat: {
      ilkSure: "",
      CevapSuresi: "45",
      dogrucevap: "3",
      soruNo: "60",
      sinavno: "5"
    },
    resource: [
      null,
      "+++require(../../assets/bilsemData/5_60__2.jpeg)+++",
      "+++require(../../assets/bilsemData/5_60__3.jpeg)+++",
      "+++require(../../assets/bilsemData/5_60__4.jpeg)+++",
      "+++require(../../assets/bilsemData/5_60__5.jpeg)+++",
      "+++require(../../assets/bilsemData/5_60__6.jpeg)+++"
    ]
  }
];

let dataSS=[];
cevap={"4":"D","3":"C","2":"B","1":"A"}
for (let i = 0; i < data.length; i++) {
  const element = data[i];
  var e={};
  e.answer=cevap[element.stat.dogrucevap];
  e.singlePage=element.resource[0]==null;
  e.test=parseInt(element.stat.sinavno)+15;
  e.soru=parseInt(element.stat.soruNo);
  var answerImgs=[];
  var questionImgs=[];
  if(element.resource[0]!=null) questionImgs.push(element.resource[0]);
  else questionImgs=null;
  if(element.resource[1]!=null) answerImgs.push(element.resource[1]);
  answerImgs.push(element.resource[2]);
  answerImgs.push(element.resource[3]);
  answerImgs.push(element.resource[4]);
  answerImgs.push(element.resource[5]);
  e.answerImgs=answerImgs;
  e.questionImgs=questionImgs;
  dataSS.push(e);


}

fs.writeFileSync('./old_sorular.js', JSON.stringify(dataSS).replace(/\"\+\+\+/g,"").replace(/\+\+\+\"/g,""));