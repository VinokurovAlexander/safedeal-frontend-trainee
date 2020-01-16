export const createCommentsListTemplate = (comments) => {
  const commentItems = comments.map((comment) => {
    return (
      `<li class="comment-list__item">
          <p class="comment-list__date">${comment.date}</p>
          <p class="comment-list__text">${comment.text}</p>
       </li>`
    )
  });

  return (
    `<ul class="comment-list">
      ${commentItems}
    </ul>`
  )
};
