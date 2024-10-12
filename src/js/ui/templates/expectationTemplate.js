export const createExpectationsImageTemplate = ({ src }) => {
    return `
    <img src="${src}" />
  `;
};

export const createFirst_textTemplate=(text)=> {
    return `
    <p class="first_text">
      ${text}
    </p>
  `;
};

export const createExpectations_textTemplate = (header) => {
    return `
    <h2 class="expectations_text">
      ${header}
    </h2>
  `;
};

export const createMain_textTemplate=(maintext)=> {
    return `
    <p class="main_text">
      ${maintext}
    </p>
  `;
};



export const ExpectationsTemplate = ({
  expectationsImage,
  text,
  header,
  maintext,
}) => {
    const ExpectationsImageTemplate = createExpectationsImageTemplate(expectationsImage);
    const First_textTemplate = createFirst_textTemplate(text);
    const Expectations_textTemplate = createExpectations_textTemplate(header);
    const Main_textTemplate = createMain_textTemplate(maintext);

     const resultTemplate = `
        <div class="expectations_left">
            ${ExpectationsImageTemplate}
        </div>
        <div class="expectations_right">
          ${First_textTemplate}
          ${Expectations_textTemplate}
          ${Main_textTemplate}
          <a href="#" class="request_early_access">Запросить ранний доступ</a>
        </div>
        `;
        return resultTemplate;
    
};