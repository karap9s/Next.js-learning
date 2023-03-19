import Heading from './Heading';

const PostInfo = ({ post }) => {
  const { id, title, body } = post || {};

  if (!post) {
    return <Heading tag="h3" text="Empty contact" />;
  }

  return (
    <>
      <Heading tag="h3" text={id} />
      <div>
        <strong>Title: </strong>
        {title}
      </div>
      <div>
        <strong>Text: </strong>
        {body}
      </div>
    </>
  );
};

export default PostInfo;
