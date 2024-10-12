export const createHeaderTemplate = (header) => {
    return `
    <h1>
      ${header}
    </h1>
  `;
};

export const createButtonTemplate=({ type, title })=> {
    switch (type) {
        case "button":
            return `
              <button class="btn_last">
                ${title}
              </button>
            `;

        default:
            return ``;
    }
};

export const createlogoTemplate = ({ src, alt }) => {
    return `
    <img src="${src}" alt="${alt}" />
  `;
};

export const createGpt3Template = ({text}) => {
    return `
    <div class="text_2">
        ${text}
    </div>
    `;
};

export const createLinksTemplate=({href,title})=>{
    return `
    <div class="text_1">
        <a href="${href}">${title}</a>
    </div>
    `;
}

export const createCompanyTemplate=({href,title})=>{
    return `
    <div class="text_1">
        <a href="${href}">${title}</a>
    </div>
    `;
}

export const createContactsTemplate = ({text}) => {
    return `
    <div class="text_1">
        ${text}
    </div>
    `;
};

export const createFinalGpt3Template = (gpt3) => {
    return gpt3
        .map((item) => createGpt3Template(item))
        .join("");
};

export const createFinalLinksTemplate = (links) => {
    return links
        .map((item) => createLinksTemplate(item))
        .join("");
};

export const createFinalCompanyTemplate = (company) => {
    return company
        .map((item) => createCompanyTemplate(item))
        .join("");
};

export const createFinalContactsTemplate = (contacts) => {
    return contacts
        .map((item) => createContactsTemplate(item))
        .join("");
};

export const createCopyrightTemplate = (copyrightText) => {
    return `
    <div class="bottom_text">
        ${copyrightText}
    </div>
  `;
};

export const footerTemplate = ({
    header,
    Button,
    logo,
    gpt3,
    links,
    company,
    contacts,
    copyrightText,
}) => {
    const headerTemplate = createHeaderTemplate(header);
    const ButtonTemplate = createButtonTemplate(Button);
    const logoTemplate = createlogoTemplate(logo);
    const gpt3Template= createFinalGpt3Template(gpt3)
    const linksTemplate= createFinalLinksTemplate(links)
    const companyTemplate= createFinalCompanyTemplate(company)
    const contactsTemplate= createFinalContactsTemplate(contacts)
    const copyrightTemplate = createCopyrightTemplate(copyrightText);

   const resultTemplate = `
        <div class="footer_header">
          <div class="header_text">
            ${headerTemplate}
          </div>
          <div class="btn_box">
            ${ButtonTemplate}
          </div>
        </div>
        <div class="gpt_box">
          <div class="logo">
            <div class="gpt_icon">
              ${logoTemplate}
            </div>
            ${gpt3Template}
          </div>
          <div class="links">
            <div class="text_1">
              Ссылки
            </div>
            ${linksTemplate}
          </div>
          <div class="company">
            <div class="text_1">
              Компания
            </div>
            ${companyTemplate}
          </div>
          <div class="get_in_touch">
            <div class="text_1">
              Контакты
            </div>
            ${contactsTemplate}
          </div>
        </div>
        ${copyrightTemplate}
    `;
    return resultTemplate;
};