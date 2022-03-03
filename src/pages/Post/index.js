import React, { useMemo } from 'react';
import { useHistory } from 'react-router-dom';
import { useParams, useLocation } from 'react-router-dom';

export default function Post() {
    // const params = useParams();
    // const { search } = useLocation();
    // const queryParams = useMemo(() => new URLSearchParams(search), [search]);

    // console.debug(queryParams.get('MyQuery'));
    // console.debug(params);
    const history = useHistory();

    function handleNavigate() {
        history.push('/posts');
    }

    return (
        <>
            <button onClick={handleNavigate}>
                Voltar para a lista de posts
            </button>
            <h1>Post Page</h1>
        </>
    )
}