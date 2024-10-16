import initHeader from "./../components/initHeader.js";
import initHero from "./../components/initHero.js";
import initBrands from "./../components/initBrands.js";
import initWhatIsGpt from "./../components/initWhatIsGpt.js";
import initFutureHere from "./../components/initFutureHere.js";
import initBurger from "./../components/initBurger.js";
import initexpectations from "../components/initexpectations.js";
import inittwoButton from "../components/inittwoButton.js";
import initfooter from "../components/initfooter.js";
import initblog from "./../components/initblog.js";

const createHomePageTemplate = (rootNode) => {
  // формируем шаблон базовых секций для дальнейшего монтирования в них
  // соответствующих разделов
  const template = `
    <section class="section header"></section>
    <section class="section hero_section"></section>
    <section class="section brands_section"></section>
    <section class="section what_is_chatgpt_section"></section>
    <section class="section future_here"></section>
    <section class="section expectations"></section>
    <section class="section botton_two"></section>
    <section class="section blog"></section>
    <section class="section footer"></section>
  `;

  rootNode.insertAdjacentHTML("beforeend", template); 
};

const homePage = () => {
  // инициализация элементов страницы
  const rootNode = document.querySelector("#root");
  createHomePageTemplate(rootNode);

  // инициализация шапки страницы с мок датой
  const headerNode = rootNode.querySelector(".header");
  initHeader(headerNode);

  // инициализация хиро раздела
  const heroNode = rootNode.querySelector(".hero_section");
  initHero(heroNode);

  // инициализация хиро раздела
  const brandsNode = rootNode.querySelector(".brands_section");
  initBrands(brandsNode);

  // инициализация хиро раздела
  const whatIsGptNode = rootNode.querySelector(".what_is_chatgpt_section");
  initWhatIsGpt(whatIsGptNode);

  // инициализация раздела "Будущее наступило" с мок датой
  const futureHereNode = rootNode.querySelector(".future_here");
  initFutureHere(futureHereNode);

  // инициализация раздела "Ожидания"
  const expectationsNode = rootNode.querySelector(".expectations");
  initexpectations(expectationsNode);

  // инициализация раздела "Вторая кнопка"
  const twoButtonNode = rootNode.querySelector(".botton_two");
  inittwoButton(twoButtonNode);

  // инициализация раздела "Блог"
  const blogNode = rootNode.querySelector(".blog");
  initblog(blogNode)

  // инициализация раздела "футер"
  const footerNode = rootNode.querySelector(".footer");
  initfooter(footerNode);


  // инициализация бургера для адаптивного меню
  initBurger(headerNode);
};

export default homePage;
