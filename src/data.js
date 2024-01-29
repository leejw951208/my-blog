import calculator from "./assets/calculator.png";
import notesApp from "./assets/notes-app.png";

const CONTENT_DATAS = [
  {
    id: 1,
    thumbnail: calculator,
    title: "적금계산기",
    description:
      "1주간 리액트 학습 후 진행한 프로젝트 입니다. 리액트의 기본적인 동작 방식을 학습하였습니다. 상태관리 라이브러리를 사용하지 않았기 때문에 Prop drilling로 인한 단점을 명확하게 체감했고 왜 Redux와 같은 상태관리 라이브러리를 사용하는지 알게 되었습니다.",
    skills: ["React", "Styled-Component"],
    period: "2024. 01. 18 ~ 2024. 01. 20",
    url: "https://savings-calculator-rho.vercel.app",
    github: "https://github.com/leejw951208/savings-calculator",
  },
  {
    id: 2,
    thumbnail: notesApp,
    title: "Notes App",
    description: "",
    skills: ["React", "Redux", "Styled-Component"],
    period: "2024. 01. 22 ~ 2024. 01. 25",
    url: "https://study-app-eta.vercel.app",
    github: "https://github.com/leejw951208/notes-app",
  },
];

export default CONTENT_DATAS;
