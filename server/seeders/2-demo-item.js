'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('item', [
      {
        name: "제로콜라",
        price: 1900,
        img: "dummyImg",
        ranking_count: 0,
        category: "탄산음료",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: "보성녹차",
        price: 1200,
        img: "dummyImg",
        ranking_count: 0,
        category: "차",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: "칸타타",
        price: 900,
        img: "dummyImg",
        ranking_count: 0,
        category: "커피",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: "롯데)숙취해소깨수깡160ML",
        price: 5000,
        img: "http://gs25appimg.gsretail.com/imgsvr/item/GD_8801056104641_001.jpg",
        ranking_count: 0,
        category: "건강음료",
        created_at: new Date(),
        updated_at: new Date()
      },
			{
        name: "빙그레)우유얌초코300ML",
        price: 1500,
        img: "http://gs25appimg.gsretail.com/imgsvr/item/GD_8801104670449_001.jpg",
        ranking_count: 0,
        category: "유제품",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: "빙그레)커피얌300ML",
        price: 1500,
        img: "http://gs25appimg.gsretail.com/imgsvr/item/GD_8801104672269_001.jpg",
        ranking_count: 0,
        category: "유제품",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: "빙그레)우유얌딸기300ML",
        price: 1500,
        img: "http://gs25appimg.gsretail.com/imgsvr/item/GD_8801104670432_001.jpg",
        ranking_count: 0,
        category: "유제품",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: "조지아)크래프트밀크티라떼470ML",
        price: 2500,
        img: "http://gs25appimg.gsretail.com/imgsvr/item/GD_8801094522605_003.jpg",
        ranking_count: 0,
        category: "커피",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: "조지아)크래프트블랙470ML",
        price: 2500,
        img: "http://gs25appimg.gsretail.com/imgsvr/item/GD_8801094502669_005.jpg",
        ranking_count: 0,
        category: "커피",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: "조지아)크래프트스위트블랙470ML",
        price: 0,
        img: "http://gs25appimg.gsretail.com/imgsvr/item/GD_8801094542603_001.JPG",
        ranking_count: 0,
        category: "커피",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: "조지아)크래프트카페라떼470ML",
        price: 2500,
        img: "http://gs25appimg.gsretail.com/imgsvr/item/GD_8801094512668_005.jpg",
        ranking_count: 0,
        category: "커피",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: "미닛메이드)스파클링청포도350ML",
        price: 1200,
        img: "http://gs25appimg.gsretail.com/imgsvr/item/GD_8801094783105_002.jpg",
        ranking_count: 0,
        category: "탄산음료",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: "푸르밀)비피더스블루베리300ML",
        price: 1800,
        img: "http://gs25appimg.gsretail.com/imgsvr/item/GD_8806371305520_004.jpg",
        ranking_count: 0,
        category: "유제품",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: "푸르밀)비피더스사과300ML",
        price: 1800,
        img: "http://gs25appimg.gsretail.com/imgsvr/item/GD_8806371305513_001.jpg",
        ranking_count: 0,
        category: "유제품",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: "광동)경옥진100ML",
        price: 5000,
        img: "http://gs25appimg.gsretail.com/imgsvr/item/GD_8806002018201_001.jpg",
        ranking_count: 0,
        category: "건강음료",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: "광동)더진한헛개차골드라벨500ML",
        price: 3000,
        img: "http://gs25appimg.gsretail.com/imgsvr/item/GD_8806002020334_001.jpg",
        ranking_count: 0,
        category: "건강음료",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: "광동)헛개파워찐한포15ML",
        price: 2500,
        img: "http://gs25appimg.gsretail.com/imgsvr/item/GD_8806002018720_002.jpg",
        ranking_count: 0,
        category: "건강음료",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: "HK)헛개수EX500ML",
        price: 3000,
        img: "http://gs25appimg.gsretail.com/imgsvr/item/GD_8809422041729_002.jpg",
        ranking_count: 0,
        category: "건강음료",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: "동아)모닝케어D100ML",
        price: 5000,
        img: "http://gs25appimg.gsretail.com/imgsvr/item/GD_8806011416005_001.JPG",
        ranking_count: 0,
        category: "건강음료",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: "일화)천연사이다350ML",
        price: 1200,
        img: "http://gs25appimg.gsretail.com/imgsvr/item/GD_8801223007478_002.jpg",
        ranking_count: 0,
        category: "탄산음료",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: "일화)맥콜350ML",
        price: 1600,
        img: "http://gs25appimg.gsretail.com/imgsvr/item/GD_8801223100803_001.jpg",
        ranking_count: 0,
        category: "탄산음료",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: "링티)제로복숭아맛500ML",
        price: 2900,
        img: "http://gs25appimg.gsretail.com/imgsvr/item/GD_8809626920295_002.jpg",
        ranking_count: 0,
        category: "탄산음료",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: "칸타타)콜드브루블랙275ML(NB캔)",
        price: 2200,
        img: "http://gs25appimg.gsretail.com/imgsvr/item/GD_8801056032159_163.jpg",
        ranking_count: 0,
        category: "커피",
        created_at: new Date(),
        updated_at: new Date()
      },
      // ============== GS 1+1 끝
      {
        name: "유어스)삼립호호단팥두유190ML",
        price: 1500,
        img: "http://gs25appimg.gsretail.com/imgsvr/item/GD_8801068399547_001.JPG",
        ranking_count: 0,
        category: "유제품",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: "조지아)맥스커피240ML",
        price: 1100,
        img: "http://gs25appimg.gsretail.com/imgsvr/item/GD_8801094523206_207.jpg",
        ranking_count: 0,
        category: "커피",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: "조지아)카페라떼240ML",
        price: 1100,
        img: "http://gs25appimg.gsretail.com/imgsvr/item/GD_8801094513009_014.jpg",
        ranking_count: 0,
        category: "커피",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: "코카)흑당밀크티270ML",
        price: 2200,
        img: "http://gs25appimg.gsretail.com/imgsvr/item/GD_8801105915938_001.JPG",
        ranking_count: 0,
        category: "커피",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: "페이머스소다)블러드오렌지330ML",
        price: 3200,
        img: "http://gs25appimg.gsretail.com/imgsvr/item/GD_9369998310111_001.jpg",
        ranking_count: 0,
        category: "탄산음료",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: "페이머스소다)콜라330ML",
        price: 3200,
        img: "http://gs25appimg.gsretail.com/imgsvr/item/GD_9356745000081_001.jpg",
        ranking_count: 0,
        category: "탄산음료",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: "페이머스소다)패션후르츠330ML",
        price: 3200,
        img: "http://gs25appimg.gsretail.com/imgsvr/item/GD_9369998048618_001.jpg",
        ranking_count: 0,
        category: "탄산음료",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: "페이머스소다)핑크레몬에이드330",
        price: 3200,
        img: "http://gs25appimg.gsretail.com/imgsvr/item/GD_9369998111794_001.jpg",
        ranking_count: 0,
        category: "탄산음료",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: "코카)닥터페퍼500ML",
        price: 2000,
        img: "http://gs25appimg.gsretail.com/imgsvr/item/GD_8801094052607_001.jpg",
        ranking_count: 0,
        category: "탄산음료",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: "이디야)돌체콜드브루300ML",
        price: 2500,
        img: "http://gs25appimg.gsretail.com/imgsvr/item/GD_8809388463931_002.jpg",
        ranking_count: 0,
        category: "커피",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: "이디야)카페라떼300ML",
        price: 2500,
        img: "http://gs25appimg.gsretail.com/imgsvr/item/GD_8809388463917_002.jpg",
        ranking_count: 0,
        category: "커피",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: "담양올밀크)또요150G",
        price: 1800,
        img: "http://gs25appimg.gsretail.com/imgsvr/item/GD_8809638770116_001.jpg",
        ranking_count: 0,
        category: "유제품",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: "빙그레)스페셜티에티오피아460ML",
        price: 2500,
        img: "http://gs25appimg.gsretail.com/imgsvr/item/GD_8801104667043_002.jpg",
        ranking_count: 0,
        category: "커피",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: "조지아)콜드브루라떼370ML",
        price: 2500,
        img: "http://gs25appimg.gsretail.com/imgsvr/item/GD_8801094582302_001.jpg",
        ranking_count: 0,
        category: "커피",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: "조지아)콜드브루블랙370ML",
        price: 2500,
        img: "http://gs25appimg.gsretail.com/imgsvr/item/GD_8801094562601_001.jpg",
        ranking_count: 0,
        category: "커피",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: "콜드비타민플러스오렌지240ML",
        price: 1400,
        img: "http://gs25appimg.gsretail.com/imgsvr/item/GD_8801056054021_025.jpg",
        ranking_count: 0,
        category: "주스",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: "콜드비타민플러스포도240ML",
        price: 1400,
        img: "http://gs25appimg.gsretail.com/imgsvr/item/GD_8801056054069_003.jpg",
        ranking_count: 0,
        category: "주스",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: "푸르밀)웰치사과에이드250ML",
        price: 1500,
        img: "http://gs25appimg.gsretail.com/imgsvr/item/GD_8806371309818_001.jpg",
        ranking_count: 0,
        category: "주스",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: "푸르밀)웰치포도에이드250ML",
        price: 1500,
        img: "http://gs25appimg.gsretail.com/imgsvr/item/GD_8806371309771_001.jpg",
        ranking_count: 0,
        category: "주스",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: "푸르밀)칼로바이초코250ML",
        price: 2500,
        img: "http://gs25appimg.gsretail.com/imgsvr/item/GD_8806371309283_001.jpg",
        ranking_count: 0,
        category: "건강음료",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: "광동)헛개파워100ML",
        price: 5000,
        img: "http://gs25appimg.gsretail.com/imgsvr/item/GD_8806002010861_864.jpg",
        ranking_count: 0,
        category: "건강음료",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: "광동)비타민500콜라겐100ML",
        price: 1000,
        img: "http://gs25appimg.gsretail.com/imgsvr/item/GD_8806002020440_001.JPG",
        ranking_count: 0,
        category: "주스",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: "HK)컨디션CEO150ML",
        price: 10000,
        img: "http://gs25appimg.gsretail.com/imgsvr/item/GD_8809422040876_003.jpg",
        ranking_count: 0,
        category: "건강음료",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: "OKF)샤인머스켓스파클링500ML",
        price: 2000,
        img: "http://gs25appimg.gsretail.com/imgsvr/item/GD_8809713910567_001.jpg",
        ranking_count: 0,
        category: "주스",
        created_at: new Date(),
        updated_at: new Date()
      },
      // GS 2+1 끝
      
  ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('item', null, {});
  }
};
