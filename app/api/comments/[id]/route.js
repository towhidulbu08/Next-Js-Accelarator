import comments from "@/app/data/comments";

comments;
export async function GET(req, { params }) {
  const commentId = params.id;
  const comment = comments.find(
    (comment) => comment.id === parseInt(commentId)
  );

  return Response.json(comment);
}

export async function PATCH(request, { params }) {
  const comment = await request.json();
  const commentId = params.id;
  const commentIndex = comments.findIndex(
    (comment) => comment.id === parseInt(commentId)
  );
  comments[commentIndex].text = comment.text;

  return Response.json(comments[commentIndex]);
}

export async function DELETE(request, { params }) {
  const commentId = params.id;
  const commentIndex = comments.findIndex(
    (comment) => comment.id === parseInt(commentId)
  );
  const commentToDelete = comments[commentIndex];
  comments.splice(commentIndex, 1);

  return Response.json(commentToDelete);
}
