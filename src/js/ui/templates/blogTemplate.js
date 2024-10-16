export const createHeaderTemplate = (header) => {
  return `
  <h2 class="blog_header">
    ${header}
  </h2>
`;
};


export const createLargeBlogTemplate = ({ image:{src}, data, text }) => {
  return `
  <div class="block_1">
    <img src="${src}" class="block_1_image">
    <p class="data_1">
      ${data}
    </p>
    <p class="text_1">
     ${text}
    </p>
    <a href="#" class="link_its_future">
      Читать полную статью
    </a>
  </div>


`;
};


export const createlittleBlogsTemplate = ({ image:{src}, data, text }) => {
  return `
  <div class="block_3">
    <img src="${src}">
      <p class="data_2">
        ${data}
      </p>
      <p class="text_2">
        ${text}
      </p>
      <a href="#" class="link_its_future">
        Читать полную статью
      </a>
  </div>

`;
};


export const createFinalLittleBlogsTemplate = (blog_2) => {
  return blog_2
      .map((item) => createlittleBlogsTemplate(item))
      .join("");
};


export const blogTemplate = ({
header,
blog_1,
blog_2,
}) => {
  const headerTemplate = createHeaderTemplate(header);
  const blogLargeTemplate = createLargeBlogTemplate(blog_1);
  const blogsLittleTemplate = createFinalLittleBlogsTemplate(blog_2);

  const resultTemplate = `
      ${headerTemplate}
      <div class="text_and_img">
         ${blogLargeTemplate}
       <div class="block_2">
          ${blogsLittleTemplate}
       </div>
      </div>
  `;
  return resultTemplate;
};
