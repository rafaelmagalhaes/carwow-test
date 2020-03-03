import React, {useEffect} from 'react'
import {fetchSingleRepo} from "../redux/actions";
import {useDispatch, useSelector} from 'react-redux'
import Repos from "../components/Repos";
import Loader from '../components/Loader'

const RepoPage = props => {
    const {repo, isFetching} = props;
    return (
        <div>
            {
                isFetching || !repo ? (
                    <Loader/>
                ) : (
                    <div>
                        {
                            repo.id ? (
                                <Repos avatar={repo.owner.avatar_url} id={repo.id}
                                       full_name={repo.full_name}
                                       repo={repo}
                                       description={repo.description}/>
                            ) : ''

                        }

                    </div>
                )
            }
        </div>
    )
}

const ConnectedRepoPage = props => {
    const {match: {params: {owner, repo}}} = props;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchSingleRepo(owner, repo))
    }, [dispatch, owner, repo]);
    const current_repo = useSelector(state => state.repo);
    const isFetching = useSelector(state => state.isFetching);

    return <RepoPage repo={current_repo} isFetching={isFetching}/>
}
export default ConnectedRepoPage
