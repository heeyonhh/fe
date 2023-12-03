import projectimg1 from "../img/project1.png";
import projectimg2 from "../img/project2.jpg";
import projectimg3 from "../img/project3.jpg";
import projectimg4 from "../img/project4.png";
import projectimg5 from "../img/project5.png";
import projectimg6 from "../img/project6.png";

export const Nav = [
    {
        id: "intro",
        title: "Home"
    },
    {
        id: "about",
        title: "About"
    },
    {
        id: "project",
        title: "Project",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

export const aboutData = [
    {
        title: 'About',
        content: [
            'Name / 김 희 연 Heeyon Kim',
            'Date Of Birth / 1992 08 27',
            'Professional Certificates /',
            'NCS UI&UX 디자인 프론트엔드 개발자 양성 심사과정 수료',
            'Phone / 010 7271 6432'
        ],
    },
    {
        title: 'Skill',
        content: [
            '웹디자인 기능사 (HTML CSS JavaScript)',
            '컴퓨터 그래픽스 운용기능사 (Adobe Photoshop & Illustrator)',
            '디자인툴 / AdobeXD Figma',
            '협업툴 / Git Zeplin',
            '언어 / HTML CSS SCSS JavaScript',
            '프레임워크 / React Vue',
            '라이브러리 / JQuery GSAP Framer-motion',
        ],
    },
];

export const projectData = [
    {
        bgcolor: "#212125",
        img: <img src={projectimg4} />,
        url: "https://platocoffee.netlify.app/",
        logo: <p>plato<br />coffee</p>,
        type: "Project 1 / React Pwa",
        title: "플라토 커피 주문 앱",
        info: [ "KaKao Auth 간편 로그인 기능",
        "Redux-toolkit 상품 상태 관리",
        "Geolocation API로 사용자 위치정보를",
        "얻어 가까운 매장 리스트 업 기능",
        "KaKao Auth로 얻은 Restful Api 표현"],
    },
    {
        bgcolor: "#5A5148",
        img: <img src={projectimg6} />,
        url: "https://heeweather.netlify.app/",
        logo: <p>My<br />Weather</p>,
        type: "Project 2 / Vue3 Sass",
        title: "Vue3 & Sass 날씨 앱",
        info: [ "Open Weather Api",
        "카카오 맵 Api 사용",
        "Composition api Optional api 리팩토링",
        "Vuex : 데이터 관리 가공 작업"],
    },
    {
        bgcolor: "#7f7f7f",
        img: <img src={projectimg2} />,
        url: "https://heeyonhh.github.io/Responsive_design/",
        logo: "NEXEN TIRE",
        type: "Project 3 / 반응형 웹사이트",
        title: "NEXENTIRE",
        info: [ '처음 코딩을 배우고 퍼블리싱 작업을 하였던',
        '넥센 타이어 리디자인 웹 표준 사이트',
        'CSS로 호버 이벤트, 내비 메뉴 이벤트',
        'JQuery 슬라이드 배너, 동영상 슬라이드, 탭메뉴 구현'],
    },
    {
        bgcolor: "#938787",
        img: <img src={projectimg3} />,
        url: "https://heeyonhh.github.io/jquery_design/",
        logo: "화성시 보건소",
        type: "Project 4 / 관공서 리디자인",
        title: "화성시 보건소",
        info: [ '기존 화성시 보건소 사이트의',
        '명료하게 정보를 전달해야하는 목적 잃지 않으면서도',
        '컬러와 동적 요소를 주어 리디자인',
        'Open Weather API를 끌어와 화성시 날씨를 구현',
        '총 5페이지 퍼블리싱']
    },
    {
        bgcolor: "#212125",
        img: <img src={projectimg1} />,
        url: "https://coskorea.netlify.app",
        logo: "COS",
        type: "Project 4 / 반응형 웹사이트",
        title: "COS Web Site",
        info: [ 'Geolocation API로 사용자 위치를 가져와',
        '배송국가 표시기능을 구현',
        '미디어쿼리로 꼼꼼하게 반응형으로 제작'],
    },
    {
        bgcolor: "#938787",
        img: <img src={projectimg5} />,
        url: "https://heefolio.netlify.app/",
        logo: "`HEEFOLIO`",
        type: "Project 5 / 반응형 리액트 포트폴리오",
        title: "`HEEFOLIO`",
        info: [ "lenis 라이브러리를 이용한 스코롤 스무스 초기 설정을 구현",
        "Scss mixin 사용으로 코드의 재사용을 높임",
        "GSAP, Framer-motion, React-scroll 라이브러리를",
        "사용하여 배경화면, 텍스트, 이미지 패럴랙스 효과를 구현"],
    },
];

export const contactData = [
    { icon: "🐙", label: "GitHub", detail: "github.com/heeyonhh", url: "https://github.com/heeyonhh/react_intro_project"},
    { icon: "✉️", label: "Email", detail: "lightram23@gmail.com", url: null },
    { icon: "📱", label: "Phone", detail: "010 7271 6432", url: null },
  ];
  
  const [github, email, instagram] = contactData;
  export const Tabs = [github, email, instagram];