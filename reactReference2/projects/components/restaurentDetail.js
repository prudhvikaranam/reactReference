import { useParams, useSearchParams } from 'react-router-dom';

const RestaurentDetail = () => {

    const { resId } = useParams();
    const [searchParams, setSearchParams] = useSearchParams();
    console.log('[...searchParams]',[...searchParams]);

    console.log('Object.fromEntries([...searchParams])',Object.fromEntries([...searchParams]));

    // for (const entry of searchParams.entries()) {
    //     console.log(entry);
    // }

    return (

        <>

            <h1>Restaurent Details: with id {resId} and restaurent Name is {searchParams.get('restaurentName')} and Location is {searchParams.get('loc')}</h1>
            <button onClick={() => {
                setSearchParams(params => { //This is how we can set the search parameters
                    params.set("restaurentName","Karanam Restaurent"); 
                    return params;
                  });
            }}>Change Name</button>
        </>

    )
}

export default RestaurentDetail;