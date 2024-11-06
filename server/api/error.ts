export default eventHandler(() => {
  throw createError({
    statusCode: 404,
    statusMessage: "Page Not Found",
  });
});
