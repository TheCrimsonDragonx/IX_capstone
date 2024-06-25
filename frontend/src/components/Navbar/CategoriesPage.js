const user = JSON.parse(localStorage.getItem("user"))

const AddButton = () => {
  if(!user?.token) return null;
  return (
    <button className="btn btn-outline-dark h-75" onClick={onCategoryAdd}>
      ADD CATEGORY
    </button>
  );
};