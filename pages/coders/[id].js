export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  const paths = data.map((coder) => {
    return {
      params: { id: coder.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  }
};

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch("https://jsonplaceholder.typicode.com/users/"+id);
    const data = await res.json();

    return {
        props: { coder: data }
    }
}

const Detail = ({ coder }) => {
  return (
    <div>
      <h3>{coder.name}</h3>
      <p>{coder.email}</p>
      <p>{coder.website}</p>
      <p>{coder.address.street}</p>
      <p>{coder.phone}</p>
    </div>
  );
};

export default Detail;
