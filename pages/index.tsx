function Home() {
    return <div>Home Page</div>;
}

export const getServerSideProps = async () => {
    return {
        redirect: {
            permanent: false,
            destination: `/login`,
        },
    };
};

export default Home;
