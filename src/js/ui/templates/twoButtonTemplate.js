export const createEarlyTextTemplate=(earlytext)=> {
    return `
    <p class="early">
      ${earlytext}
    </p>
  `;
};

export const createMaintextemplate = (maintext) => {
    return `
    <h3 class="main_text">
      ${maintext}
    </h3>
  `;
};

export const createButtonTemplate=({ type, title })=> {
    switch (type) {
        case "button":
            return `
              <button class="main_botton_two">
                ${title}
              </button>
            `;

        default:
            return ``;
    }
};

export const twoButtonTemplate = ({
   earlytext,
   maintext,
   twoButton,
}) => {
    const textTemplate =  createEarlyTextTemplate(earlytext);
    const maintextTemplate = createMaintextemplate(maintext);
    const twoButtonTemplate = createButtonTemplate(twoButton);

    const resultTemplate = `
        <div class="botton_two_left">
          ${textTemplate}
          ${maintextTemplate}
        </div>
        <div class="botton_two_right">
          ${twoButtonTemplate}
        </div>
        `;
    return resultTemplate;
};