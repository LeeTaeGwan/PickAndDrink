"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("item", [
      {
        name: "광동)헛개차골드라벨500ml",
        price: 3000,
        img: "http://bgf-cu.xcache.kinxcdn.com/product/8806002020334.jpg",
        ranking_count: 0,
        category: "건강음료",
        created_at: new Date(),
        updated_at: new Date(),
        store_id: 2,
        event_id: 1,
      },
      {
        name: "동아)모닝케어D",
        price: 5000,
        img: "http://bgf-cu.xcache.kinxcdn.com/product/8806011416005.jpg",
        ranking_count: 0,
        category: "건강음료",
        created_at: new Date(),
        updated_at: new Date(),
        store_id: 2,
        event_id: 1,
      },

      {
        name: "동아)모닝케어H",
        price: 5000,
        img: "http://bgf-cu.xcache.kinxcdn.com/product/8806011415992.jpg",
        ranking_count: 0,
        category: "건강음료",
        created_at: new Date(),
        updated_at: new Date(),
        store_id: 2,
        event_id: 1,
      },

      {
        name: "동원)밀크T요구복숭아",
        price: 1000,
        img: "http://bgf-cu.xcache.kinxcdn.com/product/8801155745981.jpg",
        ranking_count: 0,
        category: "유제품",
        created_at: new Date(),
        updated_at: new Date(),
        store_id: 2,
        event_id: 1,
      },

      {
        name: "동원)밀크T요구사과",
        price: 1000,
        img: "http://bgf-cu.xcache.kinxcdn.com/product/8801155745974.jpg",
        ranking_count: 0,
        category: "유제품",
        created_at: new Date(),
        updated_at: new Date(),
        store_id: 2,
        event_id: 1,
      },

      {
        name: "동원)얼라이브망고P500ml",
        price: 2500,
        img: "http://bgf-cu.xcache.kinxcdn.com/product/8801155740061.jpg",
        ranking_count: 5,
        category: "과채음료",
        created_at: new Date(),
        updated_at: new Date(),
        store_id: 2,
        event_id: 1,
      },

      {
        name: "동원)얼라이브자몽P500ml",
        price: 2500,
        img: "http://bgf-cu.xcache.kinxcdn.com/product/8801155740054.jpg",
        ranking_count: 0,
        category: "과채음료",
        created_at: new Date(),
        updated_at: new Date(),
        store_id: 2,
        event_id: 1,
      },

      {
        name: "롯)칠성사이다복숭아P500",
        price: 2100,
        img: "http://bgf-cu.xcache.kinxcdn.com/product/8801056170059.jpg",
        ranking_count: 0,
        category: "탄산음료",
        created_at: new Date(),
        updated_at: new Date(),
        store_id: 2,
        event_id: 1,
      },
      {
        name: "롯)칠성사이다포도P500",
        price: 2100,
        img: "http://bgf-cu.xcache.kinxcdn.com/product/8801056180102.jpg",
        ranking_count: 7,
        category: "탄산음료",
        created_at: new Date(),
        updated_at: new Date(),
        store_id: 2,
        event_id: 1,
      },

      {
        name: "롯데)칠성사이다제로P500",
        price: 2100,
        img: "http://bgf-cu.xcache.kinxcdn.com/product/8801056177584.jpg",
        ranking_count: 0,
        category: "탄산음료",
        created_at: new Date(),
        updated_at: new Date(),
        store_id: 2,
        event_id: 1,
      },

      {
        name: "링티)링티제로복숭아500ml",
        price: 2900,
        img: "http://bgf-cu.xcache.kinxcdn.com/product/8809626920295.jpg",
        ranking_count: 0,
        category: "건강음료",
        created_at: new Date(),
        updated_at: new Date(),
        store_id: 2,
        event_id: 1,
      },
      {
        name: "빙그레)우유얌딸기300ml",
        price: 1500,
        img: "http://bgf-cu.xcache.kinxcdn.com/product/8801104670432.jpg",
        ranking_count: 6,
        category: "유제품",
        created_at: new Date(),
        updated_at: new Date(),
        store_id: 2,
        event_id: 1,
      },

      {
        name: "빙그레)우유얌초코300ml",
        price: 1500,
        img: "http://bgf-cu.xcache.kinxcdn.com/product/8801104670449.jpg",
        ranking_count: 0,
        category: "유제품",
        created_at: new Date(),
        updated_at: new Date(),
        store_id: 2,
        event_id: 1,
      },

      {
        name: "서울)과즙이풍부딸기",
        price: 2000,
        img: "http://bgf-cu.xcache.kinxcdn.com/product/8801115137726.jpg",
        ranking_count: 0,
        category: "유제품",
        created_at: new Date(),
        updated_at: new Date(),
        store_id: 2,
        event_id: 1,
      },

      {
        name: "종근당)산에는삼병100ml",
        price: 3000,
        img: "http://bgf-cu.xcache.kinxcdn.com/product/8806023014787.jpg",
        ranking_count: 0,
        category: "건강음료",
        created_at: new Date(),
        updated_at: new Date(),
        store_id: 2,
        event_id: 1,
      },

      {
        name: "종근당)헛개땡큐골드100ml",
        price: 5000,
        img: "http://bgf-cu.xcache.kinxcdn.com/product/8809125061857.jpg",
        ranking_count: 0,
        category: "건강음료",
        created_at: new Date(),
        updated_at: new Date(),
        store_id: 2,
        event_id: 1,
      },

      {
        name: "진진)강릉커피라떼8T",
        price: 4800,
        img: "http://bgf-cu.xcache.kinxcdn.com/product/8801115139874.jpg",
        ranking_count: 5,
        category: "커피",
        created_at: new Date(),
        updated_at: new Date(),
        store_id: 2,
        event_id: 1,
      },

      {
        name: "진진)강릉커피블랙8T",
        price: 4800,
        img: "http://bgf-cu.xcache.kinxcdn.com/product/8801115139867.jpg",
        ranking_count: 0,
        category: "커피",
        created_at: new Date(),
        updated_at: new Date(),
        store_id: 2,
        event_id: 1,
      },

      {
        name: "코카)스프라이트캔355ml",
        price: 1700,
        img: "http://bgf-cu.xcache.kinxcdn.com/product/8801094203207.jpg",
        ranking_count: 0,
        category: "탄산음료",
        created_at: new Date(),
        updated_at: new Date(),
        store_id: 2,
        event_id: 1,
      },

      {
        name: "코카)크래프트콜드라떼370",
        price: 2500,
        img: "http://bgf-cu.xcache.kinxcdn.com/product/8801094582302.jpg",
        ranking_count: 0,
        category: "커피",
        created_at: new Date(),
        updated_at: new Date(),
        store_id: 2,
        event_id: 1,
      },

      {
        name: "코카)크래프트콜드블랙370",
        price: 2500,
        img: "http://bgf-cu.xcache.kinxcdn.com/product/8801094562601.jpg",
        ranking_count: 0,
        category: "커피",
        created_at: new Date(),
        updated_at: new Date(),
        store_id: 2,
        event_id: 1,
      },

      {
        name: "코카)태양의마테차P500ml",
        price: 1400,
        img: "http://bgf-cu.xcache.kinxcdn.com/product/8801094342609.jpg",
        ranking_count: 0,
        category: "전통음료",
        created_at: new Date(),
        updated_at: new Date(),
        store_id: 2,
        event_id: 1,
      },

      {
        name: "한독)레디큐캔120ml",
        price: 5000,
        img: "http://bgf-cu.xcache.kinxcdn.com/product/8806107612052.jpg",
        ranking_count: 0,
        category: "건강음료",
        created_at: new Date(),
        updated_at: new Date(),
        store_id: 2,
        event_id: 1,
      },
      {
        name: "HK)컨디션CEO병150ml",
        price: 10000,
        img: "http://bgf-cu.xcache.kinxcdn.com/product/8809422040876.jpg",
        ranking_count: 0,
        category: "건강음료",
        created_at: new Date(),
        updated_at: new Date(),
        store_id: 2,
        event_id: 2,
      },
      {
        name: "HK)컨디션레이디병",
        price: 5000,
        img: "http://bgf-cu.xcache.kinxcdn.com/product/8801007178233.jpg",
        ranking_count: 0,
        category: "건강음료",
        created_at: new Date(),
        updated_at: new Date(),
        store_id: 2,
        event_id: 2,
      },

      {
        name: "HK)컨디션헛개병",
        price: 5000,
        img: "http://bgf-cu.xcache.kinxcdn.com/product/8801007071046.jpg",
        ranking_count: 0,
        category: "건강음료",
        created_at: new Date(),
        updated_at: new Date(),
        store_id: 2,
        event_id: 2,
      },

      {
        name: "HK)헛개수1.5L",
        price: 3000,
        img: "http://bgf-cu.xcache.kinxcdn.com/product/8801007223742.jpg",
        ranking_count: 0,
        category: "전통음료",
        created_at: new Date(),
        updated_at: new Date(),
        store_id: 2,
        event_id: 2,
      },

      {
        name: "OKF)샤인머스켓500ml",
        price: 2000,
        img: "http://bgf-cu.xcache.kinxcdn.com/product/8809713910185.jpg",
        ranking_count: 0,
        category: "과채음료",
        created_at: new Date(),
        updated_at: new Date(),
        store_id: 2,
        event_id: 2,
      },

      {
        name: "OKF)알로에베라킹500ml",
        price: 1900,
        img: "http://bgf-cu.xcache.kinxcdn.com/product/8809041427065.jpg",
        ranking_count: 0,
        category: "과채음료",
        created_at: new Date(),
        updated_at: new Date(),
        store_id: 2,
        event_id: 2,
      },

      {
        name: "OKF)요구르트스파클링500",
        price: 2000,
        img: "http://bgf-cu.xcache.kinxcdn.com/product/8809713911328.jpg",
        ranking_count: 0,
        category: "탄산음료",
        created_at: new Date(),
        updated_at: new Date(),
        store_id: 2,
        event_id: 2,
      },

      {
        name: "OKF)워터멜론500ml",
        price: 2000,
        img: "http://bgf-cu.xcache.kinxcdn.com/product/8809041429649.jpg",
        ranking_count: 0,
        category: "과채음료",
        created_at: new Date(),
        updated_at: new Date(),
        store_id: 2,
        event_id: 2,
      },

      {
        name: "●hy)오늘의야채사과당근",
        price: 2000,
        img: "http://bgf-cu.xcache.kinxcdn.com/product/8801128281263.jpg",
        ranking_count: 0,
        category: "과채음료",
        created_at: new Date(),
        updated_at: new Date(),
        store_id: 2,
        event_id: 2,
      },

      {
        name: "●hy)오늘의야채포도",
        price: 2000,
        img: "http://bgf-cu.xcache.kinxcdn.com/product/8801128281270.jpg",
        ranking_count: 0,
        category: "과채음료",
        created_at: new Date(),
        updated_at: new Date(),
        store_id: 2,
        event_id: 2,
      },

      {
        name: "●파스퇴)쾌변사과요구",
        price: 1700,
        img: "http://bgf-cu.xcache.kinxcdn.com/product/8801207050117.jpg",
        ranking_count: 0,
        category: "유제품",
        created_at: new Date(),
        updated_at: new Date(),
        store_id: 2,
        event_id: 2,
      },

      {
        name: "●파스퇴)쾌변키위요구",
        price: 1700,
        img: "http://bgf-cu.xcache.kinxcdn.com/product/8801207050742.jpg",
        ranking_count: 0,
        category: "유제품",
        created_at: new Date(),
        updated_at: new Date(),
        store_id: 2,
        event_id: 2,
      },

      {
        name: "●파스퇴)쾌변포도요구",
        price: 1700,
        img: "http://bgf-cu.xcache.kinxcdn.com/product/8801207060918.jpg",
        ranking_count: 0,
        category: "유제품",
        created_at: new Date(),
        updated_at: new Date(),
        store_id: 2,
        event_id: 2,
      },

      {
        name: "광동)대추쌍화병150ml",
        price: 1500,
        img: "http://bgf-cu.xcache.kinxcdn.com/product/8806002011967.jpg",
        ranking_count: 5,
        category: "건강음료",
        created_at: new Date(),
        updated_at: new Date(),
        store_id: 2,
        event_id: 2,
      },

      {
        name: "광동)비타500로열병120ml",
        price: 1500,
        img: "http://bgf-cu.xcache.kinxcdn.com/product/8806002017990.jpg",
        ranking_count: 5,
        category: "건강음료",
        created_at: new Date(),
        updated_at: new Date(),
        store_id: 2,
        event_id: 2,
      },

      {
        name: "광동)옥수수수염차1.5L",
        price: 3000,
        img: "http://bgf-cu.xcache.kinxcdn.com/product/8806002005805.jpg",
        ranking_count: 5,
        category: "전통음료",
        created_at: new Date(),
        updated_at: new Date(),
        store_id: 2,
        event_id: 2,
      },

      {
        name: "광동)헛개파워병",
        price: 5000,
        img: "http://bgf-cu.xcache.kinxcdn.com/product/8806002010861.png",
        ranking_count: 0,
        category: "건강음료",
        created_at: new Date(),
        updated_at: new Date(),
        store_id: 2,
        event_id: 2,
      },

      {
        name: "남양)로스터리아몬드라떼",
        price: 2500,
        img: "http://bgf-cu.xcache.kinxcdn.com/product/8801069404400.jpg",
        ranking_count: 0,
        category: "커피",
        created_at: new Date(),
        updated_at: new Date(),
        store_id: 2,
        event_id: 2,
      },

      {
        name: "남양)로스터리흑임자라떼",
        price: 2500,
        img: "http://bgf-cu.xcache.kinxcdn.com/product/8801069404394.jpg",
        ranking_count: 0,
        category: "커피",
        created_at: new Date(),
        updated_at: new Date(),
        store_id: 2,
        event_id: 2,
      },

      {
        name: "남양)맛있는우유딸기300ml",
        price: 1600,
        img: "http://bgf-cu.xcache.kinxcdn.com/product/8801069411774.jpg",
        ranking_count: 0,
        category: "유제품",
        created_at: new Date(),
        updated_at: new Date(),
        store_id: 2,
        event_id: 2,
      },

      {
        name: "남양)맛있는우유초코300ml",
        price: 1600,
        img: "http://bgf-cu.xcache.kinxcdn.com/product/8801069411798.jpg",
        ranking_count: 0,
        category: "유제품",
        created_at: new Date(),
        updated_at: new Date(),
        store_id: 2,
        event_id: 2,
      },

      {
        name: "남양)불가리스자연딸기",
        price: 1600,
        img: "http://bgf-cu.xcache.kinxcdn.com/product/8801069175959.jpg",
        ranking_count: 0,
        category: "유제품",
        created_at: new Date(),
        updated_at: new Date(),
        store_id: 2,
        event_id: 2,
      },

      {
        name: "남양)불가리스자연사과",
        price: 1600,
        img: "http://bgf-cu.xcache.kinxcdn.com/product/8801069175942.jpg",
        ranking_count: 0,
        category: "유제품",
        created_at: new Date(),
        updated_at: new Date(),
        store_id: 2,
        event_id: 2,
      },

      {
        name: "남양)프렌치돌체라떼컵250",
        price: 2000,
        img: "http://bgf-cu.xcache.kinxcdn.com/product/8801069185286.jpg",
        ranking_count: 0,
        category: "커피",
        created_at: new Date(),
        updated_at: new Date(),
        store_id: 2,
        event_id: 2,
      },

      {
        name: "남양)프렌치블랙글레이즈",
        price: 2000,
        img: "http://bgf-cu.xcache.kinxcdn.com/product/8801069411859.jpg",
        ranking_count: 0,
        category: "커피",
        created_at: new Date(),
        updated_at: new Date(),
        store_id: 2,
        event_id: 2,
      },

      {
        name: "남양)프렌치에스프레소250",
        price: 2000,
        img: "http://bgf-cu.xcache.kinxcdn.com/product/8801069184289.jpg",
        ranking_count: 0,
        category: "커피",
        created_at: new Date(),
        updated_at: new Date(),
        store_id: 2,
        event_id: 2,
      },

      {
        name: "남양)프렌치카라멜컵",
        price: 1600,
        img: "http://bgf-cu.xcache.kinxcdn.com/product/8801069175621.jpg",
        ranking_count: 0,
        category: "커피",
        created_at: new Date(),
        updated_at: new Date(),
        store_id: 2,
        event_id: 2,
      },

      {
        name: "남양)프렌치킬링샷아메500",
        price: 2500,
        img: "http://bgf-cu.xcache.kinxcdn.com/product/8801069410791.jpg",
        ranking_count: 0,
        category: "커피",
        created_at: new Date(),
        updated_at: new Date(),
        store_id: 2,
        event_id: 2,
      },

      {
        name: "다논)액티비아업딸기210ml",
        price: 1900,
        img: "http://bgf-cu.xcache.kinxcdn.com/product/8809274510893.jpg",
        ranking_count: 0,
        category: "유제품",
        created_at: new Date(),
        updated_at: new Date(),
        store_id: 2,
        event_id: 2,
      },
      {
        name: "다논)액티비아업플레인210",
        price: 1900,
        img: "http://bgf-cu.xcache.kinxcdn.com/product/8809274510916.jpg",
        ranking_count: 0,
        category: "유제품",
        created_at: new Date(),
        updated_at: new Date(),
        store_id: 2,
        event_id: 2,
      },
      {
        name: "동서)레드불캔355ml",
        price: 2900,
        img: "http://bgf-cu.xcache.kinxcdn.com/product/9002490232887.jpg",
        ranking_count: 0,
        category: "건강음료",
        created_at: new Date(),
        updated_at: new Date(),
        store_id: 2,
        event_id: 2,
      },
      {
        name: "동서)심플리플라워라떼360",
        price: 2400,
        img: "http://bgf-cu.xcache.kinxcdn.com/product/8801037094886.jpg",
        ranking_count: 0,
        category: "커피",
        created_at: new Date(),
        updated_at: new Date(),
        store_id: 2,
        event_id: 2,
      },
      {
        name: "동서)티오피더블랙275ml",
        price: 2200,
        img: "http://bgf-cu.xcache.kinxcdn.com/product/8801037087741.jpg",
        ranking_count: 4,
        category: "커피",
        created_at: new Date(),
        updated_at: new Date(),
        store_id: 2,
        event_id: 2,
      },
      {
        name: "동서)티오피마일드에스프",
        price: 2200,
        img: "http://bgf-cu.xcache.kinxcdn.com/product/8801115381754.jpg",
        ranking_count: 0,
        category: "커피",
        created_at: new Date(),
        updated_at: new Date(),
        store_id: 2,
        event_id: 2,
      },
      {
        name: "동아)나랑드사이다P500ml",
        price: 2000,
        img: "http://bgf-cu.xcache.kinxcdn.com/product/8801097235014.jpg",
        ranking_count: 6,
        category: "탄산음료",
        created_at: new Date(),
        updated_at: new Date(),
        store_id: 2,
        event_id: 2,
      },
      {
        name: "동아)오로나민C병120ml",
        price: 1200,
        img: "http://cdn2.bgfretail.com/bgfbrand/files/product/EB25B5B9D10D4E6C93F04924E536D0EA.jpg",
        ranking_count: 4,
        category: "건강음료",
        created_at: new Date(),
        updated_at: new Date(),
        store_id: 2,
        event_id: 2,
      },
      {
        name: "동원)네스퀵초코드링크",
        price: 1200,
        img: "http://bgf-cu.xcache.kinxcdn.com/product/8801155208011.jpg",
        ranking_count: 0,
        category: "유제품",
        created_at: new Date(),
        updated_at: new Date(),
        store_id: 2,
        event_id: 2,
      },
      {
        name: "동원)덴마크딸기딸기",
        price: 1650,
        img: "http://bgf-cu.xcache.kinxcdn.com/product/8801155731632.jpg",
        ranking_count: 0,
        category: "유제품",
        created_at: new Date(),
        updated_at: new Date(),
        store_id: 2,
        event_id: 2,
      },
      {
        name: "동원)보성아이스티레몬",
        price: 2200,
        img: "http://bgf-cu.xcache.kinxcdn.com/product/8801047284499.jpg",
        ranking_count: 0,
        category: "과채음료",
        created_at: new Date(),
        updated_at: new Date(),
        store_id: 2,
        event_id: 2,
      },
      {
        name: "동원)보성아이스티복숭아",
        price: 2200,
        img: "http://bgf-cu.xcache.kinxcdn.com/product/8801047284482.jpg",
        ranking_count: 0,
        category: "과채음료",
        created_at: new Date(),
        updated_at: new Date(),
        store_id: 2,
        event_id: 2,
      },
      {
        name: "동원)정식혜캔238ml",
        price: 1000,
        img: "http://bgf-cu.xcache.kinxcdn.com/product/8801047281337.jpg",
        ranking_count: 0,
        category: "전통음료",
        created_at: new Date(),
        updated_at: new Date(),
        store_id: 2,
        event_id: 2,
      },
      {
        name: "동화)부채표미인활75ml",
        price: 1000,
        img: "http://bgf-cu.xcache.kinxcdn.com/product/8806016311015.jpg",
        ranking_count: 0,
        category: "건강음료",
        created_at: new Date(),
        updated_at: new Date(),
        store_id: 2,
        event_id: 2,
      },
      {
        name: "랩노쉬)프로틴24g라떼",
        price: 2900,
        img: "http://bgf-cu.xcache.kinxcdn.com/product/8809495072293_W.jpg",
        ranking_count: 0,
        category: "건강음료",
        created_at: new Date(),
        updated_at: new Date(),
        store_id: 2,
        event_id: 2,
      },
      {
        name: "롯데)깨수깡캔160ml",
        price: 5000,
        img: "http://bgf-cu.xcache.kinxcdn.com/product/8801056104641.jpg",
        ranking_count: 0,
        category: "건강음료",
        created_at: new Date(),
        updated_at: new Date(),
        store_id: 2,
        event_id: 2,
      },
      {
        name: "롯데)립톤복숭아P500ml",
        price: 1700,
        img: "http://bgf-cu.xcache.kinxcdn.com/product/8801056044534.jpg",
        ranking_count: 0,
        category: "과채음료",
        created_at: new Date(),
        updated_at: new Date(),
        store_id: 2,
        event_id: 2,
      },
      {
        name: "롯데)밀키스P500ml",
        price: 2100,
        img: "http://bgf-cu.xcache.kinxcdn.com/product/8801056755010.jpg",
        ranking_count: 5,
        category: "탄산음료",
        created_at: new Date(),
        updated_at: new Date(),
        store_id: 2,
        event_id: 2,
      },
      {
        name: "롯데)에비앙P500ml",
        price: 1900,
        img: "http://bgf-cu.xcache.kinxcdn.com/product/3068320024400.jpg",
        ranking_count: 0,
        category: "탄산음료",
        created_at: new Date(),
        updated_at: new Date(),
        store_id: 2,
        event_id: 2,
      },
      {
        name: "롯데)제주감귤P500ml",
        price: 1900,
        img: "http://bgf-cu.xcache.kinxcdn.com/product/8801056009274.jpg",
        ranking_count: 0,
        category: "과채음료",
        created_at: new Date(),
        updated_at: new Date(),
        store_id: 2,
        event_id: 2,
      },
      {
        name: "롯데)초가을우엉차P500ml",
        price: 1500,
        img: "http://bgf-cu.xcache.kinxcdn.com/product/8801056076542.jpg",
        ranking_count: 0,
        category: "전통음료",
        created_at: new Date(),
        updated_at: new Date(),
        store_id: 2,
        event_id: 2,
      },
      {
        name: "롯데)칸타타아메리카노390",
        price: 2900,
        img: "http://bgf-cu.xcache.kinxcdn.com/product/8801056080457.jpg",
        ranking_count: 0,
        category: "커피",
        created_at: new Date(),
        updated_at: new Date(),
        store_id: 2,
        event_id: 2,
      },
      {
        name: "롯데)콜드오렌지250ml",
        price: 1400,
        img: "http://bgf-cu.xcache.kinxcdn.com/product/8801056623012.jpg",
        ranking_count: 0,
        category: "과채음료",
        created_at: new Date(),
        updated_at: new Date(),
        store_id: 2,
        event_id: 2,
      },
      {
        name: "롯데)콜드포도250ml",
        price: 1400,
        img: "http://bgf-cu.xcache.kinxcdn.com/product/8801056624019.jpg",
        ranking_count: 4,
        category: "과채음료",
        created_at: new Date(),
        updated_at: new Date(),
        store_id: 2,
        event_id: 2,
      },
      {
        name: "롯데)핑크퐁오렌망고235ml",
        price: 1200,
        img: "http://bgf-cu.xcache.kinxcdn.com/product/8801056088156.jpg",
        ranking_count: 0,
        category: "과채음료",
        created_at: new Date(),
        updated_at: new Date(),
        store_id: 2,
        event_id: 2,
      },
      {
        name: "롯데)핫식스무브업500ml",
        price: 2500,
        img: "http://bgf-cu.xcache.kinxcdn.com/product/8801056178116.jpg",
        ranking_count: 0,
        category: "건강음료",
        created_at: new Date(),
        updated_at: new Date(),
        store_id: 2,
        event_id: 2,
      },
      {
        name: "바이)여우티500ml",
        price: 2000,
        img: "http://bgf-cu.xcache.kinxcdn.com/product/8809684500224.jpg",
        ranking_count: 0,
        category: "전통음료",
        created_at: new Date(),
        updated_at: new Date(),
        store_id: 2,
        event_id: 2,
      },
      {
        name: "빙)쥬시쿨청포도에이드",
        price: 1500,
        img: "http://bgf-cu.xcache.kinxcdn.com/product/8801104666527.jpg",
        ranking_count: 0,
        category: "과채음료",
        created_at: new Date(),
        updated_at: new Date(),
        store_id: 2,
        event_id: 2,
      },
      {
        name: "빙그레)쥬시쿨감귤에이드",
        price: 1500,
        img: "http://bgf-cu.xcache.kinxcdn.com/product/8801104308489.jpg",
        ranking_count: 0,
        category: "과채음료",
        created_at: new Date(),
        updated_at: new Date(),
        store_id: 2,
        event_id: 2,
      },
      {
        name: "서울)강릉커피라떼250ml",
        price: 2300,
        img: "http://bgf-cu.xcache.kinxcdn.com/product/8801115139836.jpg",
        ranking_count: 0,
        category: "커피",
        created_at: new Date(),
        updated_at: new Date(),
        store_id: 2,
        event_id: 2,
      },
      {
        name: "서울)강릉커피블랙250ml",
        price: 2300,
        img: "http://bgf-cu.xcache.kinxcdn.com/product/8801115139805.jpg",
        ranking_count: 0,
        category: "커피",
        created_at: new Date(),
        updated_at: new Date(),
        store_id: 2,
        event_id: 2,
      },
      // CU 2+1 6페이지까지 진행함
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("item", null, {});
  },
};
