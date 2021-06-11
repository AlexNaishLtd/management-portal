import { useSWRInfinite } from 'swr';

import DefaultLayout from '../layouts/default';

const PAGE_SIZE = 20;

const UsersPage = () => {
    const { data, error, size, setSize } = useSWRInfinite((pageIndex, previousPageData) => {
        if (pageIndex === 0) return `/api/users`;
        // add the cursor to the API endpoint
        const last = previousPageData[PAGE_SIZE - 1];
        return `/api/users?last=${last._id}`;
    });

    const users = data ? [].concat(...data) : [];
    const isLoadingInitialData = !data && !error;
    const isLoading =
        isLoadingInitialData || (size > 0 && data && typeof data[size - 1] === 'undefined');
    const isEmpty = data?.[0]?.length === 0;
    const isAtTheEnd = data && data[data.length - 1]?.length < PAGE_SIZE;

    return (
        <DefaultLayout title={`Users (${users.length})`}>
            {isEmpty && <p>No users found.</p>}
            {users.map((user) => {
                return (
                    <p key={user._id} style={{ margin: '2px 0' }}>
                        - {user.name}
                    </p>
                );
            })}
            <div>{isLoading && 'Loading...'}</div>
            {!isAtTheEnd && !isEmpty && (
                <button
                    className="p-2 my-2 bg-blue-500 text-white rounded-md focus:outline-none focus:ring-2 ring-blue-300 ring-offset-2"
                    onClick={() => setSize(size + 1)}>
                    Load More
                </button>
            )}
        </DefaultLayout>
    );
};

export default UsersPage;
