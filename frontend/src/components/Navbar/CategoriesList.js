const user = JSON.parse(localStorage.getItem("user"))

{
  user && user.token && onEdit && onDelete && (
    <EditButtons
      onEdit={() => {
        onEdit(category);
      }}
      onDelete={() => {
        onDelete(category);
      }}
    />
  );
}