import moment from "moment";

export const createCommentsListTemplate = (comments) => {
  const commentItems = comments.map((comment) => {
    const date = moment(comment.date).format('DD.MM.YYYY');

    return (
      `<li class="comments-list__item">
          <p class="comments-list__date">${date}</p>
          <p class="comments-list__text">${comment.text}</p>
       </li>`
    )
  });

  return (
    `<ul class="comments-list">
      ${commentItems}
    </ul>`
  )
};
