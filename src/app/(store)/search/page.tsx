async function SearchPage ({
    searchParams,
}: {
    searchParams:{
        query:string;
    };
}) {
    const { query } = await searchParams;
    return <div>SearchPage For {query}</div>
}
export default SearchPage