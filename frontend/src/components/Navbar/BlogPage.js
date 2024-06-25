const user = JSON.parse(localStorage.getItem("user"))

const onBlogAdd = () => {
  setAddBlog({
    title: "",
    description: "",
    categories: [],
    authorId: user._id,
    content: [
      {
        sectionHeader: "",
        sectionText: "",
      },
    ],
  });
};


const AddButton = () => {
if(!user?.token) return null;
return (
  <button className="btn btn-outline-dark h-75" onClick={onBlogAdd}>
    ADD BLOG
  </button>
);
};