export const OrderNewsCard = ({ image, title, content, link }) => {
  return (
    <>
      <div className="burger1">
        <img
          src={image}
          alt=""
          width={"90%"}
          className="image order-image"
          style={{ marginTop: "0.5rem" }}
        />
        <a href={link}>
          <h2 className="title order-title">{title}</h2>
          <p className="content">{content}</p>
        </a>
      </div>
    </>
  );
};
